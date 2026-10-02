// T GOLD — server Node.js (Hostinger Node.js Web App / VPS)
//  - Phục vụ website trong dist/ (URL gọn, 404 theo ngôn ngữ, cache, gzip)
//  - /media/*        ảnh & video tải lên từ trang quản trị (DATA_DIR/media)
//  - POST /api/booking  form Đặt lịch tư vấn → DATA_DIR/bookings (+ email SMTP / webhook nếu có)
//  - /admin          trang quản trị nội dung (CMS)
// Chạy: npm start   ·   Cấu hình: biến môi trường (xem .env.example)
import './src/lib/env.js';
import http from 'node:http';
import { createReadStream, existsSync, renameSync, mkdirSync, statSync } from 'node:fs';
import { stat, mkdir, appendFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { randomUUID } from 'node:crypto';
import { ROOT, DATA_DIR, MEDIA_DIR, BOOKINGS_DIR, seedLiveContent } from './src/lib/content.js';
import { DIST } from './src/build.js';
import { handleAdmin, rebuild } from './src/admin/api.js';

const PORT = Number(process.env.PORT) || 3000;
const MAX_BODY = 40 * 1024 * 1024; // ảnh thường đã được trình duyệt nén ≤ 5 MB/ảnh; chừa chỗ cho ảnh gốc khi trình duyệt không nén được

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.glb': 'model/gltf-binary',
};
const COMPRESSIBLE = /\.(html|css|js|json|webmanifest|xml|txt|svg)$/;
const SECURITY = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

async function resolveIn(base, urlPath) {
  const p = decodeURIComponent(urlPath);
  if (p.includes('\0')) return null;
  const full = path.join(base, path.normalize(p).replace(/^(\.\.[/\\])+/, ''));
  if (!full.startsWith(base)) return null;
  try {
    const s = await stat(full);
    if (s.isDirectory()) {
      if (!p.endsWith('/')) return { redirect: p + '/' };
      const idx = path.join(full, 'index.html');
      return { file: idx, size: (await stat(idx)).size };
    }
    return { file: full, size: s.size };
  } catch {
    try { await stat(path.join(full, 'index.html')); return { redirect: p + '/' }; } catch { return null; }
  }
}

function send(req, res, status, file, extra = {}) {
  const ext = path.extname(file).toLowerCase();
  const headers = { ...SECURITY, 'Content-Type': TYPES[ext] || 'application/octet-stream', ...extra };
  if (!headers['Cache-Control']) {
    headers['Cache-Control'] = ext === '.html' || ext === '.json' ? 'no-cache'
      : /[/\\](css|js)[/\\]/.test(file) ? 'public, max-age=31536000, immutable'
      : 'public, max-age=2592000';
  }
  const gz = COMPRESSIBLE.test(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gz) { headers['Content-Encoding'] = 'gzip'; headers.Vary = 'Accept-Encoding'; }
  if (!gz && status === 200) {
    // Tệp không nén (ảnh, video, 3D): báo dung lượng + hỗ trợ Range — Safari / iOS chỉ phát <video> khi máy chủ trả 206
    const size = statSync(file).size;
    headers['Accept-Ranges'] = 'bytes';
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (m && (m[1] || m[2])) {
      let start = m[1] ? Number(m[1]) : Math.max(0, size - Number(m[2]));
      let end = m[1] && m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
      if (start > end || start >= size) { res.writeHead(416, { ...SECURITY, 'Content-Range': `bytes */${size}` }); return res.end(); }
      res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
      if (req.method === 'HEAD') return res.end();
      const part = createReadStream(file, { start, end });
      part.on('error', () => res.destroy());
      return part.pipe(res);
    }
    headers['Content-Length'] = size;
  }
  res.writeHead(status, headers);
  if (req.method === 'HEAD') return res.end();
  const stream = createReadStream(file);
  stream.on('error', () => res.destroy());
  (gz ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
}

// ── Form Đặt lịch tư vấn ──
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 600000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}
const phoneOk = (v) => {
  const s = String(v || '').replace(/[\s.\-()]/g, '');
  return /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/.test(s) || /^(?:\+?84|0)2\d{9}$/.test(s) || /^\+(?!84)\d{8,15}$/.test(s);
};
const json = (res, status, obj) => { res.writeHead(status, { ...SECURITY, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); };

async function handleBooking(req, res) {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  if (rateLimited(ip)) return json(res, 429, { ok: false, error: 'rate_limited' });
  if (Number(req.headers['content-length'] || 0) > MAX_BODY) return json(res, 413, { ok: false, error: 'too_large' });
  let form;
  try {
    const chunks = []; let size = 0;
    for await (const c of req) { size += c.length; if (size > MAX_BODY) return json(res, 413, { ok: false, error: 'too_large' }); chunks.push(c); }
    form = await new Response(Buffer.concat(chunks), { headers: { 'content-type': req.headers['content-type'] || '' } }).formData();
  } catch { return json(res, 400, { ok: false, error: 'bad_request' }); }

  if (form.get('website')) return json(res, 200, { ok: true }); // bẫy spam
  // kind=idea: form “Gửi ý tưởng” (trang Custom) — không hỏi số điện thoại / ô đồng ý; khách nhắn Zalo T Gold kèm mã (code)
  const idea = form.get('kind') === 'idea';
  const id = randomUUID();
  const b = {
    id,
    code: `TG-${id.slice(0, 6).toUpperCase()}`,
    kind: idea ? 'idea' : 'booking',
    at: new Date().toISOString(),
    lang: String(form.get('lang') || 'vi').slice(0, 2),
    name: String(form.get('name') || '').trim().slice(0, 80),
    phone: String(form.get('phone') || '').trim().slice(0, 20),
    interest: form.getAll('interest').map(String).slice(0, 10),
    date: String(form.get('date') || '').slice(0, 10),
    slot: String(form.get('slot') || '').slice(0, 20),
    note: String(form.get('note') || '').slice(0, 1500),
    source: String(form.get('source') || '').slice(0, 200),
    consent: form.get('consent') === 'yes',
    files: [],
  };
  const files = form.getAll('files').filter((f) => f && typeof f === 'object' && f.size > 0).slice(0, 3);
  const hasImage = files.some((f) => /^image\//.test(f.type));
  // Đặt lịch: tên + số điện thoại hợp lệ + đồng ý. Ý tưởng: tên + ít nhất 1 ảnh mẫu hoặc vài dòng mô tả.
  const valid = b.name.length >= 2 && (idea ? (hasImage || b.note.trim().length >= 3) : (phoneOk(b.phone) && b.consent));
  if (!valid) return json(res, 422, { ok: false, error: 'invalid' });
  if (idea && !phoneOk(b.phone)) b.phone = '';

  const FILES_DIR = path.join(BOOKINGS_DIR, 'files');
  const attachments = [];
  await mkdir(FILES_DIR, { recursive: true });
  for (const f of files) {
    if (!/^image\//.test(f.type)) continue;
    let ext = (f.name.match(/\.(jpe?g|png|webp|heic|heif|gif)$/i)?.[0] || '.jpg').toLowerCase();
    let type = f.type;
    let buf = Buffer.from(await f.arrayBuffer());
    // Ảnh vẫn nặng hơn 5 MB (trình duyệt của khách không tự nén được): máy chủ thu nhỏ + nén lại, không báo lỗi cho khách.
    // Định dạng sharp không đọc được → giữ nguyên bản.
    if (buf.length > 5 * 1024 * 1024) {
      try {
        const { default: sharp } = await import('sharp');
        buf = await sharp(buf, { failOn: 'none' }).rotate().resize({ width: 2560, height: 2560, fit: 'inside', withoutEnlargement: true }).flatten({ background: '#fff' }).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
        ext = '.jpg';
        type = 'image/jpeg';
      } catch (err) {
        console.error('[booking] Không nén được ảnh, giữ nguyên bản:', err.message);
      }
    }
    const name = `${b.id.slice(0, 8)}-${b.files.length + 1}${ext}`;
    await writeFile(path.join(FILES_DIR, name), buf);
    b.files.push(name);
    attachments.push({ filename: name, content: buf, contentType: type });
  }
  await appendFile(path.join(BOOKINGS_DIR, 'bookings.jsonl'), JSON.stringify(b) + '\n');

  // Email thông báo (tuỳ chọn) — Hostinger Email: SMTP_HOST=smtp.hostinger.com, SMTP_PORT=465
  if (process.env.SMTP_HOST && process.env.BOOKING_TO) {
    try {
      const { default: nodemailer } = await import('nodemailer');
      const port = Number(process.env.SMTP_PORT || 465);
      const tx = nodemailer.createTransport({ host: process.env.SMTP_HOST, port, secure: port === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
      const rows = [['Mã', b.code], ['Loại', idea ? 'Ý tưởng Custom (khách sẽ nhắn Zalo kèm mã)' : 'Đặt lịch tư vấn'], ['Họ tên', b.name], ['Điện thoại / Zalo', b.phone], ['Quan tâm', b.interest.join(', ')], ['Ngày', b.date], ['Buổi', b.slot], ['Ghi chú', b.note], ['Ngôn ngữ', b.lang.toUpperCase()], ['Nguồn', b.source]];
      const escH = (v) => String(v || '—').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])).replace(/\n/g, '<br>');
      await tx.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.BOOKING_TO,
        subject: `[T Gold] ${idea ? 'Ý tưởng Custom' : 'Lịch tư vấn'} mới — ${b.name} · ${b.phone || b.code}`,
        text: rows.map(([k, v]) => `${k}: ${v || '—'}`).join('\n') + '\n\nXem & xử lý trong trang quản trị: /admin/#/bookings',
        html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows.map(([k, v]) => `<tr><td style="color:#777">${k}</td><td>${escH(v)}</td></tr>`).join('')}</table><p style="font-family:sans-serif;font-size:13px">Xem &amp; xử lý trong trang quản trị: /admin/#/bookings</p>`,
        attachments,
      });
    } catch (err) {
      console.error('[booking] Gửi email lỗi (đã lưu vào hộp thư quản trị):', err.message);
    }
  }
  if (process.env.BOOKING_WEBHOOK_URL) {
    fetch(process.env.BOOKING_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...b, files: b.files.length }) })
      .catch((err) => console.error('[booking] Webhook lỗi:', err.message));
  }
  console.log(`[booking] ${b.at} · ${b.code} · ${b.name}`);
  return json(res, 200, { ok: true, code: b.code });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://x');
    if (url.pathname === '/admin' || url.pathname.startsWith('/admin/')) { await handleAdmin(req, res, url); return; }
    if (url.pathname === '/api/booking') {
      if (req.method !== 'POST') return json(res, 405, { ok: false });
      return await handleBooking(req, res);
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
    if (url.pathname.startsWith('/api/')) return json(res, 404, { ok: false }); // không phục vụ tệp PHP dự phòng
    if (url.pathname.startsWith('/media/')) {
      const r = await resolveIn(MEDIA_DIR, url.pathname.slice('/media'.length));
      if (r?.file) return send(req, res, 200, r.file);
    }
    const r = await resolveIn(DIST, url.pathname);
    if (r?.redirect) { res.writeHead(301, { Location: r.redirect + url.search }); return res.end(); }
    if (r?.file) return send(req, res, 200, r.file);
    const nf = url.pathname.startsWith('/en/') ? path.join(DIST, 'en/404.html') : path.join(DIST, '404.html');
    return send(req, res, 404, nf, { 'Cache-Control': 'no-cache' });
  } catch (err) {
    console.error(err);
    if (!res.headersSent) { res.writeHead(500); res.end('Server error'); }
  }
});

// Khởi động: chuẩn bị DATA_DIR, chuyển dữ liệu lịch hẹn kiểu cũ (nếu có), build với nội dung mới nhất
mkdirSync(BOOKINGS_DIR, { recursive: true });
mkdirSync(MEDIA_DIR, { recursive: true });
if (existsSync(path.join(DATA_DIR, 'bookings.jsonl')) && !existsSync(path.join(BOOKINGS_DIR, 'bookings.jsonl'))) {
  renameSync(path.join(DATA_DIR, 'bookings.jsonl'), path.join(BOOKINGS_DIR, 'bookings.jsonl'));
}
seedLiveContent();
const b = await rebuild();
console.log(`✓ Build ${b.pages} trang (${b.ms} ms) · dữ liệu: ${path.relative(ROOT, DATA_DIR) || DATA_DIR}`);
if (!process.env.ADMIN_PASSWORD) console.warn('⚠ Chưa đặt ADMIN_PASSWORD — trang /admin sẽ không đăng nhập được.');
server.listen(PORT, () => console.log(`T Gold đang chạy tại http://localhost:${PORT}  ·  quản trị: http://localhost:${PORT}/admin/`));
