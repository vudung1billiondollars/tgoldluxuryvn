// API trang quản trị /admin — đăng nhập bằng ADMIN_PASSWORD, sửa nội dung, tải ảnh, hộp thư lịch hẹn, sao lưu.
import { createReadStream, existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, rename, copyFile, readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { randomBytes, createHash, timingSafeEqual } from 'node:crypto';
import { ROOT, DATA_DIR, LIVE_CONTENT, MEDIA_DIR, BOOKINGS_DIR, FILES, seedLiveContent } from '../lib/content.js';
import { buildSite } from '../build.js';
import { cleanProduct, cleanPost, cleanSite, cleanHome, cleanPage, cleanCategories, cleanModel3d, HOME_ICONS, HOME_PAGES, SLUG } from './validate.js';
import { INFO_PAGES, registeredPage, editorTree } from '../lib/pagetext.js';
import { ROUTES, MODEL3D_METALS, MODEL3D_GEMS, MODEL3D_APPS, model3dPath } from '../lib/core.js';
import { gem3dLabel, metal3dLabel } from '../pages/model3d.js';
import * as gh from './github.js';

const HISTORY = path.join(DATA_DIR, 'history');
const ADMIN_DIR = path.join(ROOT, 'admin');
const SESS = new Map();
const TTL = 12 * 3600 * 1000;
const STATUSES = ['new', 'contacted', 'scheduled', 'done', 'cancelled'];
let lastBuild = null;

export async function rebuild() { lastBuild = { ...(await buildSite()), at: new Date().toISOString() }; return lastBuild; }

// ── Tiện ích HTTP ──
const SEC = { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'same-origin', 'X-Frame-Options': 'DENY', 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };
const CSP = "default-src 'self'; img-src 'self' data: blob:; media-src 'self' blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'";
const json = (res, code, obj, extra = {}) => { res.writeHead(code, { ...SEC, 'Content-Type': 'application/json; charset=utf-8', ...extra }); res.end(JSON.stringify(obj)); };
async function body(req, limit) {
  const chunks = []; let size = 0;
  for await (const c of req) { size += c.length; if (size > limit) throw Object.assign(new Error('too_large'), { code: 413 }); chunks.push(c); }
  return Buffer.concat(chunks);
}
const readJson = async (req, limit = 3 * 1024 * 1024) => JSON.parse((await body(req, limit)).toString('utf8') || '{}');
const readRaw = async (file) => { seedLiveContent(); return JSON.parse(await readFile(path.join(LIVE_CONTENT, file), 'utf8')); };
const ipOf = (req) => (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
const https = (req) => req.headers['x-forwarded-proto'] === 'https' || !!req.socket.encrypted;

// ── Đăng nhập ──
const sha = (s) => createHash('sha256').update(String(s)).digest();
const configured = () => (process.env.ADMIN_PASSWORD || '').length >= 8;
const attempts = new Map();
function session(req) {
  const m = (req.headers.cookie || '').match(/(?:^|;\s*)tg_admin=([a-f0-9]{64})/);
  const s = m && SESS.get(m[1]);
  if (!s || s.exp < Date.now()) { if (m) SESS.delete(m[1]); return null; }
  s.exp = Date.now() + TTL; // gia hạn khi đang dùng
  return { token: m[1], ...s };
}
async function login(req, res) {
  if (!configured()) return json(res, 503, { ok: false, error: 'Chưa cấu hình mật khẩu quản trị (biến môi trường ADMIN_PASSWORD, tối thiểu 8 ký tự).' });
  const ip = ipOf(req);
  const list = (attempts.get(ip) || []).filter((t) => Date.now() - t < 15 * 60000);
  if (list.length >= 8) return json(res, 429, { ok: false, error: 'Đăng nhập sai quá nhiều lần. Thử lại sau 15 phút.' });
  const { password } = await readJson(req, 10000);
  if (!timingSafeEqual(sha(password || ''), sha(process.env.ADMIN_PASSWORD))) {
    list.push(Date.now()); attempts.set(ip, list);
    await new Promise((r) => setTimeout(r, 600));
    return json(res, 401, { ok: false, error: 'Mật khẩu chưa đúng.' });
  }
  attempts.delete(ip);
  const token = randomBytes(32).toString('hex');
  SESS.set(token, { exp: Date.now() + TTL, at: Date.now() });
  json(res, 200, { ok: true }, { 'Set-Cookie': `tg_admin=${token}; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=${TTL / 1000}${https(req) ? '; Secure' : ''}` });
}

// ── Ghi nội dung: lưu phiên bản cũ → ghi an toàn → build lại → xếp hàng đồng bộ GitHub ──
const stamp = () => new Date().toISOString().replace(/[:.]/g, '-');
async function writeContent(file, data) {
  seedLiveContent();
  const p = path.join(LIVE_CONTENT, file);
  const hdir = path.join(HISTORY, file.replace(/\.json$/, ''));
  await mkdir(hdir, { recursive: true });
  if (existsSync(p)) await copyFile(p, path.join(hdir, `${stamp()}.json`));
  const versions = (await readdir(hdir)).sort();
  for (const old of versions.slice(0, Math.max(0, versions.length - 40))) await unlink(path.join(hdir, old)).catch(() => {});
  await writeFile(`${p}.tmp`, JSON.stringify(data, null, 2) + '\n');
  await rename(`${p}.tmp`, p);
  gh.queue(`content/${file}`, p);
  return rebuild();
}

// ── Tải ảnh / video ──
const slugify = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'file';
async function upload(req, res) {
  const buf = await body(req, 90 * 1024 * 1024);
  const form = await new Response(buf, { headers: { 'content-type': req.headers['content-type'] || '' } }).formData();
  const file = form.get('file');
  if (!file || typeof file !== 'object' || !file.size) return json(res, 400, { ok: false, error: 'Chưa chọn tệp.' });
  const month = new Date().toISOString().slice(0, 7);
  const dir = path.join(MEDIA_DIR, month);
  await mkdir(dir, { recursive: true });
  const base = `${slugify(file.name.replace(/\.[^.]+$/, ''))}-${randomBytes(3).toString('hex')}`;
  const data = Buffer.from(await file.arrayBuffer());
  const rel = (f) => `${month}/${f}`;

  if (/^video\/(mp4|webm)$/.test(file.type)) {
    if (file.size > 80 * 1024 * 1024) return json(res, 413, { ok: false, error: 'Video tối đa 80 MB (khuyến nghị ≤ 6 MB cho video hero).' });
    const name = `${base}.${file.type === 'video/webm' ? 'webm' : 'mp4'}`;
    await writeFile(path.join(dir, name), data);
    gh.queue(`public/media/${rel(name)}`, path.join(dir, name));
    return json(res, 200, { ok: true, kind: 'video', src: `/media/${rel(name)}`, size: file.size });
  }
  if (!/^image\//.test(file.type)) return json(res, 415, { ok: false, error: 'Chỉ nhận ảnh (JPG, PNG, WebP, AVIF) hoặc video MP4 / WebM.' });
  if (file.size > 25 * 1024 * 1024) return json(res, 413, { ok: false, error: 'Ảnh tối đa 25 MB.' });
  let sharp;
  try { ({ default: sharp } = await import('sharp')); } catch { return json(res, 500, { ok: false, error: 'Máy chủ thiếu thư viện xử lý ảnh (sharp).' }); }
  try {
    const meta = await sharp(data, { failOn: 'none' }).rotate().metadata();
    const swap = (meta.orientation || 1) >= 5; // ảnh chụp dọc từ điện thoại
    const W = swap ? meta.height : meta.width;
    const H = swap ? meta.width : meta.height;
    const out = [];
    for (const w of [400, 800, 1600]) { // 400: ô nhỏ trên điện thoại · 800 / 1600: khung lớn
      const tw = Math.min(w, W);
      if (out.some((o) => o.w === tw)) continue;
      const name = `${base}-${tw}.webp`;
      await sharp(data, { failOn: 'none' }).rotate().resize({ width: tw, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(dir, name));
      gh.queue(`public/media/${rel(name)}`, path.join(dir, name));
      out.push({ w: tw, src: `/media/${rel(name)}` });
    }
    const big = out[out.length - 1];
    return json(res, 200, { ok: true, kind: 'image', src: big.src, srcset: out.map((o) => `${o.src} ${o.w}w`).join(', '), width: W, height: H });
  } catch {
    return json(res, 415, { ok: false, error: 'Không đọc được ảnh này (HEIC chưa được hỗ trợ — hãy xuất sang JPG).' });
  }
}
async function listMedia() {
  const items = [];
  const walk = async (d, prefix) => {
    for (const e of await readdir(d, { withFileTypes: true }).catch(() => [])) {
      if (e.isDirectory()) await walk(path.join(d, e.name), `${prefix}${e.name}/`);
      else { const s = await stat(path.join(d, e.name)); items.push({ src: `/media/${prefix}${e.name}`, size: s.size, at: s.mtime.toISOString() }); }
    }
  };
  await walk(MEDIA_DIR, '');
  return items.sort((a, b) => (a.at < b.at ? 1 : -1)).slice(0, 300);
}

// ── Sản phẩm 3D: tệp .glb có sẵn (public/3d/models, chép bằng npm run sync-3d) + tải lên từ CMS (DATA_DIR/media/3d) ──
const GLB_DIRS = [['/3d/models/', () => path.join(ROOT, 'public/3d/models'), 'Có sẵn trong website'], ['/media/3d/', () => path.join(MEDIA_DIR, '3d'), 'Tải lên từ CMS']];
const glbFile = (src) => { const d = GLB_DIRS.find(([pre]) => src.startsWith(pre)); if (!d) return null; const rest = src.slice(d[0].length); return rest.includes('..') ? null : path.join(d[1](), rest); };
// Mỗi tệp .glb có thể kèm <tên>.json (tên, mô tả, màu vàng, đá quý… do công cụ xuất mẫu tạo) và <tên>.jpg (ảnh đại diện) → CMS điền sẵn khi chọn tệp
async function listGlb() {
  const out = [];
  for (const [pre, dir, from] of GLB_DIRS) {
    const walk = async (rel, depth) => {
      const here = path.join(dir(), rel); const names = await readdir(here, { withFileTypes: true }).catch(() => []);
      for (const e of names.sort((a, b) => a.name.localeCompare(b.name))) {
        if (e.isDirectory() && depth < 1 && /^[a-z0-9-]+$/.test(e.name)) { await walk(`${rel}${e.name}/`, depth + 1); continue; }
        if (!e.isFile() || !/\.glb$/i.test(e.name)) continue;
        const base = e.name.replace(/\.glb$/i, ''); const s = await stat(path.join(here, e.name));
        let meta = null; try { meta = JSON.parse(await readFile(path.join(here, `${base}.json`), 'utf8')); } catch { /* không có */ }
        let poster = ''; for (const x of ['jpg', 'webp', 'png']) if (existsSync(path.join(here, `${base}.${x}`))) { poster = `${pre}${rel}${base}.${x}`; break; }
        out.push({ src: `${pre}${rel}${e.name}`, size: s.size, from, at: s.mtime.toISOString(), poster, meta: meta && { id: meta.id, ten: meta.ten, moTa: meta.moTa, view: meta.view, metal: meta.metal, metal2: meta.metal2, gem: meta.gem, innerGem: meta.innerGem, coDa: meta.coDa, family: meta.family } });
      }
    };
    await walk('', 0);
  }
  return out;
}
async function upload3d(req, res) {
  const buf = await body(req, 40 * 1024 * 1024);
  const form = await new Response(buf, { headers: { 'content-type': req.headers['content-type'] || '' } }).formData();
  const file = form.get('file');
  if (!file || typeof file !== 'object' || !file.size) return json(res, 400, { ok: false, error: 'Chưa chọn tệp.' });
  if (!/\.glb$/i.test(file.name || '')) return json(res, 415, { ok: false, error: 'Chỉ nhận tệp 3D dạng .glb (chuyển từ .3dm bằng công cụ trong thư mục “3D’s Products”).' });
  if (file.size > 30 * 1024 * 1024) return json(res, 413, { ok: false, error: 'Tệp 3D tối đa 30 MB (nên dưới 1,5 MB để trang tải nhanh).' });
  const data = Buffer.from(await file.arrayBuffer());
  if (data.subarray(0, 4).toString('latin1') !== 'glTF') return json(res, 415, { ok: false, error: 'Tệp này không phải tệp 3D .glb hợp lệ.' });
  const dir = path.join(MEDIA_DIR, '3d');
  await mkdir(dir, { recursive: true });
  const name = `${slugify(file.name.replace(/\.glb$/i, ''))}-${randomBytes(3).toString('hex')}.glb`;
  await writeFile(path.join(dir, name), data);
  gh.queue(`public/media/3d/${name}`, path.join(dir, name));
  return json(res, 200, { ok: true, src: `/media/3d/${name}`, size: data.length });
}
// Mẫu / công cụ có sẵn trong website mà CMS chưa thêm: tệp .glb kèm thông tin (mẫu tách từ nhẫn cưới) và các công cụ tự thiết kế đã chép
function pending3d(models, files) {
  const usedSrc = new Set(models.filter((m) => m.kind !== 'app').map((m) => m.src)), usedApp = new Set(models.filter((m) => m.kind === 'app').map((m) => m.app)), slugs = new Set(models.map((m) => m.slug));
  const out = [];
  for (const [id, a] of Object.entries(MODEL3D_APPS)) if (!usedApp.has(id) && existsSync(path.join(ROOT, '3d-app', `${a.file}.html`)) && existsSync(path.join(ROOT, 'public/3d/app', `${a.file}.js`))) out.push({ kind: 'app', slug: `thiet-ke-${id}`, name: a.vi, app: id });
  for (const f of files) if (f.meta?.id && f.meta.ten && !usedSrc.has(f.src)) out.push({ kind: 'model', slug: f.meta.id, name: f.meta.ten, src: f.src, file: f });
  return out.filter((x) => !slugs.has(x.slug));
}
function modelFromPending(x) {
  if (x.kind === 'app') return cleanModel3d({ slug: x.slug, kind: 'app', app: x.app, status: 'published', name: { vi: x.name, en: '' } }, { metals: MODEL3D_METALS, gems: MODEL3D_GEMS, apps: Object.keys(MODEL3D_APPS) });
  const me = x.file.meta;
  return cleanModel3d({ slug: x.slug, kind: 'model', status: 'published', name: { vi: me.ten, en: '' }, description: { vi: me.moTa || '', en: '' }, src: x.src, view: me.view, metals: MODEL3D_METALS, gems: me.coDa === false ? [] : MODEL3D_GEMS, metal: me.metal, gem: me.gem, metal2: me.metal2, innerGem: me.innerGem, poster: x.file.poster, family: me.family, note: me.nguon || '' }, { metals: MODEL3D_METALS, gems: MODEL3D_GEMS, apps: Object.keys(MODEL3D_APPS) });
}
const model3dOptions = () => ({
  metals: MODEL3D_METALS.map((k) => ({ id: k, name: metal3dLabel(k, 'vi') })),
  gems: MODEL3D_GEMS.map((k) => ({ id: k, name: gem3dLabel(k, 'vi') })),
});

// ── Lịch hẹn ──
const BK = () => path.join(BOOKINGS_DIR, 'bookings.jsonl');
const BK_STATUS = () => path.join(BOOKINGS_DIR, 'status.json');
async function readBookings() {
  const raw = await readFile(BK(), 'utf8').catch(() => '');
  const st = JSON.parse(await readFile(BK_STATUS(), 'utf8').catch(() => '{}'));
  return raw.split('\n').filter(Boolean).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean)
    .map((b) => ({ code: `TG-${String(b.id).slice(0, 6).toUpperCase()}`, kind: 'booking', ...b, status: st[b.id]?.status || 'new', adminNote: st[b.id]?.note || '', updated: st[b.id]?.updated || null }))
    .sort((a, b) => (a.at < b.at ? 1 : -1));
}
const csvCell = (v) => { let s = Array.isArray(v) ? v.join(', ') : String(v ?? ''); if (/^[=+\-@]/.test(s)) s = `'${s}`; return `"${s.replace(/"/g, '""')}"`; };

// ── Trang chủ: danh mục / sản phẩm / bài viết hiện có (để chọn link, sản phẩm nổi bật, bài Tạp chí) ──
async function homeCtx() {
  const [cat, jr] = await Promise.all([readRaw('products.json'), readRaw('journal.json')]);
  const visible = cat.products.filter((p) => p.status !== 'hidden');
  const published = jr.posts.filter((p) => p.status === 'published');
  return {
    ctx: { cats: cat.categories.map((c) => c.id), products: visible.map((p) => p.slug), posts: published.map((p) => p.slug) },
    options: {
      categories: cat.categories.map((c) => ({ id: c.id, name: c.vi })),
      products: visible.map((p) => ({ slug: p.slug, name: p.name.vi, category: p.category, img: p.images?.[0]?.src || '', featured: p.featured || 0 })),
      posts: published.map((p) => ({ slug: p.slug, title: p.title.vi, img: p.cover?.src || '' })),
      icons: HOME_ICONS, pages: HOME_PAGES,
    },
  };
}

// ── Tổng quan: việc cần làm ──
async function overview() {
  const [site, cat, jr, bookings, hm] = await Promise.all([readRaw('site.json'), readRaw('products.json'), readRaw('journal.json'), readBookings(), readRaw('home.json')]);
  const c = site.contact;
  const todo = [];
  const miss = (cond, label, to) => cond && todo.push({ label, to });
  miss(!c.hotline, 'Chưa có hotline', 'settings');
  miss(!c.zalo, 'Chưa có số / link Zalo', 'settings');
  miss(!c.address?.vi, 'Chưa có địa chỉ showroom', 'settings');
  miss(!c.email, 'Chưa có email liên hệ', 'settings');
  miss(!c.hoursVerified, 'Giờ mở cửa chưa được xác nhận', 'settings');
  miss(!c.mapEmbed, 'Chưa nhúng bản đồ showroom', 'settings');
  miss(!Object.values(site.social).some(Boolean), 'Chưa có link mạng xã hội', 'settings');
  (hm.hero?.slides || []).forEach((sl, i) => { miss(!sl.image?.src, `Slide hero ${i + 1} chưa có ảnh`, 'homepage'); miss(sl.image?.src && !sl.image?.alt?.vi, `Slide hero ${i + 1} chưa có mô tả ảnh (SEO)`, 'homepage'); });
  for (const c of cat.categories) miss(hm.categories?.enabled !== false && !hm.categories?.images?.[c.id]?.src, `Danh mục “${c.vi}” chưa có ảnh trên trang chủ`, 'homepage');
  for (const [k, label] of [['leadTime', 'Thời gian hoàn thiện 5–7 ngày'], ['warranty', 'Bảo hành trọn đời'], ['certificates', 'Danh sách đơn vị kiểm định'], ['exchange', 'Chính sách đổi mẫu']]) miss(!site.claims[k]?.verified, `Cần xác minh: ${label}`, 'settings');
  const samples = cat.products.filter((p) => p.sample).length;
  miss(samples > 0, `${samples} sản phẩm là dữ liệu minh hoạ — cần thay bằng sản phẩm thật`, 'products');
  const noImg = cat.products.filter((p) => p.status !== 'hidden' && !p.images?.length).length;
  miss(noImg > 0, `${noImg} sản phẩm đang hiển thị chưa có ảnh`, 'products');
  const sPosts = jr.posts.filter((p) => p.sample).length;
  miss(sPosts > 0, `${sPosts} bài Tạp chí mẫu cần được duyệt nội dung`, 'journal');
  return {
    ok: true,
    counts: {
      products: cat.products.length, productsVisible: cat.products.filter((p) => p.status !== 'hidden').length,
      posts: jr.posts.length, postsPublished: jr.posts.filter((p) => p.status === 'published').length,
      bookings: bookings.length, bookingsNew: bookings.filter((b) => b.status === 'new').length,
    },
    recent: bookings.slice(0, 5).map(({ id, code, at, name, phone, interest, status }) => ({ id, code, at, name, phone, interest, status })),
    todo,
    build: lastBuild,
    dataDir: path.relative(ROOT, DATA_DIR) || DATA_DIR,
    github: gh.refreshStatus(),
    siteUrl: site.siteUrl,
  };
}

// ── Định tuyến ──
export async function handleAdmin(req, res, url) {
  const p = url.pathname;
  if (!p.startsWith('/admin')) return false;

  // Giao diện quản trị (tệp tĩnh)
  if (!p.startsWith('/admin/api/')) {
    if (p === '/admin') { res.writeHead(301, { Location: '/admin/' }); res.end(); return true; }
    const files = { '/admin/': ['index.html', 'text/html; charset=utf-8'], '/admin/admin.css': ['admin.css', 'text/css; charset=utf-8'], '/admin/admin.js': ['admin.js', 'text/javascript; charset=utf-8'] };
    if (p === '/admin/md.js') {
      res.writeHead(200, { ...SEC, 'Content-Type': 'text/javascript; charset=utf-8' });
      createReadStream(path.join(ROOT, 'src/lib/markdown.js')).pipe(res); return true;
    }
    const f = files[p];
    if (!f) { json(res, 404, { ok: false }); return true; }
    res.writeHead(200, { ...SEC, 'Content-Type': f[1], 'Content-Security-Policy': CSP });
    createReadStream(path.join(ADMIN_DIR, f[0])).pipe(res);
    return true;
  }

  const route = p.slice('/admin/api/'.length);
  const m = req.method;
  try {
    if (route === 'session' && m === 'GET') { json(res, 200, { ok: true, authenticated: !!session(req), configured: configured() }); return true; }
    if (route === 'login' && m === 'POST') { await login(req, res); return true; }

    const s = session(req);
    if (!s) { json(res, 401, { ok: false, error: 'Phiên đăng nhập đã hết hạn.' }); return true; }
    // Chống CSRF: mọi yêu cầu thay đổi dữ liệu phải có header riêng (form từ trang khác không gửi được)
    if (m !== 'GET' && req.headers['x-tg-admin'] !== '1') { json(res, 403, { ok: false, error: 'forbidden' }); return true; }

    if (route === 'logout' && m === 'POST') { SESS.delete(s.token); json(res, 200, { ok: true }, { 'Set-Cookie': 'tg_admin=; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=0' }); return true; }
    if (route === 'overview' && m === 'GET') { json(res, 200, await overview()); return true; }

    // Thông tin website
    if (route === 'site') {
      if (m === 'GET') { json(res, 200, { ok: true, site: await readRaw('site.json') }); return true; }
      if (m === 'PUT') {
        const { site, errors } = cleanSite(await readJson(req), await readRaw('site.json'));
        const build = await writeContent('site.json', site);
        json(res, 200, { ok: true, site, warnings: errors, build }); return true;
      }
    }

    // Trang chủ
    if (route === 'home') {
      const { ctx, options } = await homeCtx();
      if (m === 'GET') { json(res, 200, { ok: true, home: await readRaw('home.json'), options }); return true; }
      if (m === 'PUT') {
        const { home, errors, warnings } = cleanHome(await readJson(req), ctx);
        if (errors.length) { json(res, 422, { ok: false, error: errors.join(' ') }); return true; }
        const build = await writeContent('home.json', home);
        json(res, 200, { ok: true, home, warnings, build }); return true;
      }
    }

    let mm;
    // Trang thông tin
    if (route === 'pages' && m === 'GET') {
      const saved = await readRaw('pages.json');
      json(res, 200, { ok: true, pages: INFO_PAGES.map(([id, name, r]) => ({ id, name, url: r ? ROUTES[r].vi : null, slots: registeredPage(id).images, defaults: { vi: editorTree(registeredPage(id).T.vi), en: editorTree(registeredPage(id).T.en) }, saved: saved.pages?.[id] || {} })) });
      return true;
    }
    if ((mm = route.match(/^pages\/([a-z]+)$/)) && m === 'PUT') {
      const reg = INFO_PAGES.some(([id]) => id === mm[1]) && registeredPage(mm[1]);
      if (!reg) { json(res, 404, { ok: false, error: 'Không tìm thấy trang.' }); return true; }
      const page = cleanPage(await readJson(req), { vi: editorTree(reg.T.vi), en: editorTree(reg.T.en) }, reg.images);
      const all = await readRaw('pages.json');
      all.pages = { ...(all.pages || {}) };
      if (Object.keys(page).length) all.pages[mm[1]] = page; else delete all.pages[mm[1]];
      const build = await writeContent('pages.json', all);
      json(res, 200, { ok: true, page, build }); return true;
    }

    // Danh mục sản phẩm
    if (route === 'categories' && m === 'PUT') {
      const cat = await readRaw('products.json');
      const body = await readJson(req);
      // Xoá danh mục còn sản phẩm: chuyển sản phẩm sang danh mục đã chọn (moves: mã cũ → mã mới, cho phép nối tiếp)
      const ids = new Set((Array.isArray(body.categories) ? body.categories : []).map((c) => String(c?.id || '')));
      const moves = body.moves && typeof body.moves === 'object' ? body.moves : {};
      let moved = 0;
      for (const p of cat.products) {
        let to = p.category, n = 0;
        while (!ids.has(to) && typeof moves[to] === 'string' && n++ < 30) to = moves[to];
        if (to !== p.category && ids.has(to)) { p.category = to; moved++; }
      }
      const { categories, errors } = cleanCategories(body.categories, cat.products);
      if (errors.length) { json(res, 422, { ok: false, error: errors.join(' ') }); return true; }
      cat.categories = categories;
      const build = await writeContent('products.json', cat);
      json(res, 200, { ok: true, categories, moved, build }); return true;
    }

    // Sản phẩm
    if (route === 'catalog' && m === 'GET') { json(res, 200, { ok: true, catalog: await readRaw('products.json') }); return true; }
    // Tạo nhiều sản phẩm một lượt (CMS → Sản phẩm → Tải theo thư mục): kiểm tra từng sản phẩm, slug trùng thì tự thêm số, ghi + dựng lại website đúng 1 lần
    if (route === 'products-import' && m === 'POST') {
      const cat = await readRaw('products.json');
      const list = (await readJson(req)).products;
      if (!Array.isArray(list) || !list.length || list.length > 200) { json(res, 400, { ok: false, error: 'Danh sách sản phẩm trống hoặc quá 200 sản phẩm một lượt.' }); return true; }
      const taken = new Set([...cat.products.map((x) => x.slug), 'new', 'import']); // 'new' / 'import' là đường dẫn riêng của trang quản trị
      const created = [], failed = [];
      for (const raw of list) {
        const label = String(raw?.name?.vi || raw?.slug || '(không tên)').slice(0, 120);
        const base = String(raw?.slug || '').slice(0, 72);
        if (!SLUG.test(base)) { failed.push({ name: label, error: 'Tên thư mục không tạo được đường dẫn (cần có chữ hoặc số).' }); continue; }
        let slug = base;
        for (let n = 2; taken.has(slug); n += 1) slug = `${base}-${n}`;
        const { product, errors } = cleanProduct({ ...raw, slug, model3d: '' }, cat);
        if (!product.images.length) errors.push('Sản phẩm chưa có ảnh.');
        if (errors.length) { failed.push({ name: label, error: errors.join(' ') }); continue; }
        taken.add(slug);
        created.push(product);
      }
      let build = null;
      if (created.length) { cat.products.unshift(...created); build = await writeContent('products.json', cat); }
      json(res, 200, { ok: true, created: created.map((x) => ({ slug: x.slug, name: x.name.vi })), failed, build }); return true;
    }
    if ((mm = route.match(/^products\/([a-z0-9-]+)$/))) {
      const cat = await readRaw('products.json');
      const idx = cat.products.findIndex((x) => x.slug === mm[1]);
      if (m === 'PUT') {
        const { product, errors } = cleanProduct((await readJson(req)).product, cat);
        if (product.model3d && !((await readRaw('models3d.json')).models || []).some((x) => x.slug === product.model3d)) errors.push('Mẫu 3D gắn vào sản phẩm không còn tồn tại — chọn lại hoặc bỏ trống.');
        if (errors.length) { json(res, 422, { ok: false, error: errors.join(' ') }); return true; }
        if (product.slug !== mm[1] && cat.products.some((x) => x.slug === product.slug)) { json(res, 409, { ok: false, error: 'Đường dẫn (slug) này đã được dùng cho sản phẩm khác.' }); return true; }
        if (idx >= 0) cat.products[idx] = product; else cat.products.unshift(product);
        const build = await writeContent('products.json', cat);
        json(res, 200, { ok: true, product, build }); return true;
      }
      if (m === 'DELETE') {
        if (idx < 0) { json(res, 404, { ok: false, error: 'Không tìm thấy sản phẩm.' }); return true; }
        cat.products.splice(idx, 1);
        const build = await writeContent('products.json', cat);
        json(res, 200, { ok: true, build }); return true;
      }
    }

    // Tạp chí
    if (route === 'journal' && m === 'GET') { json(res, 200, { ok: true, journal: await readRaw('journal.json') }); return true; }
    if ((mm = route.match(/^posts\/([a-z0-9-]+)$/))) {
      const jr = await readRaw('journal.json');
      const idx = jr.posts.findIndex((x) => x.slug === mm[1]);
      if (m === 'PUT') {
        const { post, errors } = cleanPost((await readJson(req)).post);
        if (errors.length) { json(res, 422, { ok: false, error: errors.join(' ') }); return true; }
        if (post.slug !== mm[1] && jr.posts.some((x) => x.slug === post.slug)) { json(res, 409, { ok: false, error: 'Đường dẫn (slug) này đã được dùng cho bài khác.' }); return true; }
        if (idx >= 0) jr.posts[idx] = post; else jr.posts.unshift(post);
        const build = await writeContent('journal.json', jr);
        json(res, 200, { ok: true, post, build }); return true;
      }
      if (m === 'DELETE') {
        if (idx < 0) { json(res, 404, { ok: false, error: 'Không tìm thấy bài viết.' }); return true; }
        jr.posts.splice(idx, 1);
        const build = await writeContent('journal.json', jr);
        json(res, 200, { ok: true, build }); return true;
      }
    }

    // Sản phẩm 3D
    if (route === 'models3d' && m === 'GET') {
      const site = await readRaw('site.json');
      const usage = {}; for (const p of (await readRaw('products.json')).products || []) if (p.model3d) (usage[p.model3d] ||= []).push({ slug: p.slug, name: p.name?.vi || p.slug });
      const apps = Object.entries(MODEL3D_APPS).map(([id, a]) => ({ id, name: a.vi, ready: existsSync(path.join(ROOT, '3d-app', `${a.file}.html`)) && existsSync(path.join(ROOT, 'public/3d/app', `${a.file}.js`)) }));
      const models = (await readRaw('models3d.json')).models || [], files = await listGlb();
      json(res, 200, { ok: true, models, files, pending: pending3d(models, files).map(({ file, ...x }) => x), options: { ...model3dOptions(), apps }, usage, siteUrl: site.siteUrl, paths: { vi: model3dPath(':slug', 'vi'), en: model3dPath(':slug', 'en') } });
      return true;
    }
    if ((mm = route.match(/^models3d\/([a-z0-9-]+)$/))) {
      const all = await readRaw('models3d.json');
      all.models = all.models || [];
      const idx = all.models.findIndex((x) => x.slug === mm[1]);
      if (m === 'PUT') {
        const reqBody = await readJson(req);
        const { model, errors } = cleanModel3d(reqBody.model, { metals: MODEL3D_METALS, gems: MODEL3D_GEMS, apps: Object.keys(MODEL3D_APPS) });
        if (model.src && !(glbFile(model.src) && existsSync(glbFile(model.src)))) errors.push('Không tìm thấy tệp 3D đã chọn.');
        if (model.app) { const a = MODEL3D_APPS[model.app]; if (!existsSync(path.join(ROOT, '3d-app', `${a.file}.html`)) || !existsSync(path.join(ROOT, 'public/3d/app', `${a.file}.js`))) errors.push('Công cụ này chưa được chép vào website — chạy npm run sync-3d rồi thử lại.'); }
        if (errors.length) { json(res, 422, { ok: false, error: errors.join(' ') }); return true; }
        // Link đã gửi cho khách không được hỏng: mẫu đã tạo thì không đổi đường dẫn
        if (idx >= 0 && model.slug !== mm[1]) { json(res, 409, { ok: false, error: 'Không đổi được đường dẫn của mẫu đã tạo (link đã gửi cho khách sẽ hỏng). Hãy tạo mẫu mới nếu cần.' }); return true; }
        if ((idx < 0 || reqBody.isNew) && all.models.some((x) => x.slug === model.slug)) { json(res, 409, { ok: false, error: 'Đường dẫn này đã được dùng cho mẫu 3D khác.' }); return true; }
        if (idx >= 0) all.models[idx] = { ...model, created: all.models[idx].created || model.created }; else all.models.unshift(model);
        const build = await writeContent('models3d.json', all);
        json(res, 200, { ok: true, model, build }); return true;
      }
      if (m === 'DELETE') {
        if (idx < 0) { json(res, 404, { ok: false, error: 'Không tìm thấy mẫu 3D.' }); return true; }
        const used = ((await readRaw('products.json')).products || []).filter((p) => p.model3d === mm[1]);
        if (used.length) { json(res, 409, { ok: false, error: `Mẫu 3D này đang gắn với sản phẩm: ${used.map((p) => p.name?.vi || p.slug).join(', ')}. Gỡ khỏi sản phẩm trước khi xoá.` }); return true; }
        all.models.splice(idx, 1);
        const build = await writeContent('models3d.json', all);
        json(res, 200, { ok: true, build }); return true;
      }
    }
    if (route === 'models3d-import' && m === 'POST') { // thêm một lượt mọi mẫu / công cụ có sẵn chưa có trong CMS
      const all = await readRaw('models3d.json'); all.models = all.models || [];
      const todo = pending3d(all.models, await listGlb()); const added = [];
      for (const x of todo) { const { model, errors } = modelFromPending(x); if (!errors.length && !all.models.some((y) => y.slug === model.slug)) { all.models.unshift(model); added.push(model.slug); } }
      if (!added.length) { json(res, 200, { ok: true, added, build: null }); return true; }
      const build = await writeContent('models3d.json', all);
      json(res, 200, { ok: true, added, build }); return true;
    }
    if (route === 'upload3d' && m === 'POST') { await upload3d(req, res); return true; }

    // Ảnh & video
    if (route === 'upload' && m === 'POST') { await upload(req, res); return true; }
    if (route === 'media' && m === 'GET') { json(res, 200, { ok: true, media: await listMedia() }); return true; }

    // Lịch hẹn
    if (route === 'bookings' && m === 'GET') { json(res, 200, { ok: true, bookings: await readBookings(), statuses: STATUSES }); return true; }
    if (route === 'bookings.csv' && m === 'GET') {
      const rows = await readBookings();
      const head = ['Mã', 'Loại', 'Thời gian gửi', 'Họ tên', 'Điện thoại / Zalo', 'Quan tâm', 'Ngày mong muốn', 'Buổi', 'Ghi chú', 'Trạng thái', 'Ghi chú nội bộ', 'Nguồn', 'Ngôn ngữ', 'Ảnh'];
      const lines = rows.map((b) => [b.code, b.kind === 'idea' ? 'Ý tưởng Custom' : 'Đặt lịch', b.at, b.name, b.phone, b.interest, b.date, b.slot, b.note, b.status, b.adminNote, b.source, b.lang, b.files].map(csvCell).join(','));
      res.writeHead(200, { ...SEC, 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="tgold-lich-hen-${new Date().toISOString().slice(0, 10)}.csv"` });
      res.end('﻿' + [head.map(csvCell).join(','), ...lines].join('\r\n'));
      return true;
    }
    if ((mm = route.match(/^bookings\/([a-f0-9-]{8,40})$/))) {
      const st = JSON.parse(await readFile(BK_STATUS(), 'utf8').catch(() => '{}'));
      if (m === 'PATCH') {
        const b = await readJson(req, 20000);
        st[mm[1]] = { status: STATUSES.includes(b.status) ? b.status : st[mm[1]]?.status || 'new', note: String(b.note ?? st[mm[1]]?.note ?? '').slice(0, 2000), updated: new Date().toISOString() };
        await mkdir(BOOKINGS_DIR, { recursive: true });
        await writeFile(BK_STATUS(), JSON.stringify(st, null, 2));
        json(res, 200, { ok: true }); return true;
      }
      if (m === 'DELETE') {
        const all = await readBookings();
        const gone = all.find((x) => x.id === mm[1]);
        const raw = (await readFile(BK(), 'utf8').catch(() => '')).split('\n').filter((l) => l && !l.includes(`"id":"${mm[1]}"`));
        await writeFile(BK(), raw.length ? raw.join('\n') + '\n' : '');
        for (const f of gone?.files || []) await unlink(path.join(BOOKINGS_DIR, 'files', path.basename(f))).catch(() => {});
        delete st[mm[1]];
        await writeFile(BK_STATUS(), JSON.stringify(st, null, 2));
        json(res, 200, { ok: true }); return true;
      }
    }
    if ((mm = route.match(/^booking-file\/([\w.-]+)$/)) && m === 'GET') {
      const f = path.join(BOOKINGS_DIR, 'files', path.basename(mm[1]));
      if (!existsSync(f)) { json(res, 404, { ok: false }); return true; }
      const ext = path.extname(f).toLowerCase();
      res.writeHead(200, { ...SEC, 'Content-Type': { '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif' }[ext] || 'image/jpeg', 'Content-Security-Policy': "default-src 'none'" });
      createReadStream(f).pipe(res); return true;
    }

    // Lịch sử phiên bản
    if (route === 'history' && m === 'GET') {
      const out = {};
      for (const f of FILES) {
        const d = path.join(HISTORY, f.replace(/\.json$/, ''));
        out[f] = (await readdir(d).catch(() => [])).sort().reverse().slice(0, 40);
      }
      json(res, 200, { ok: true, history: out }); return true;
    }
    if (route === 'history/restore' && m === 'POST') {
      const { file, version } = await readJson(req, 5000);
      if (!FILES.includes(file) || !/^[\w-]+\.json$/.test(version || '')) { json(res, 400, { ok: false, error: 'Phiên bản không hợp lệ.' }); return true; }
      const data = JSON.parse(await readFile(path.join(HISTORY, file.replace(/\.json$/, ''), version), 'utf8'));
      const build = await writeContent(file, data);
      json(res, 200, { ok: true, build }); return true;
    }

    // Sao lưu / khôi phục toàn bộ nội dung
    if (route === 'backup' && m === 'GET') {
      const pack = { app: 'tgold-cms', version: 1, at: new Date().toISOString() };
      for (const f of FILES) pack[f] = await readRaw(f);
      pack['bookings-status.json'] = JSON.parse(await readFile(BK_STATUS(), 'utf8').catch(() => '{}'));
      res.writeHead(200, { ...SEC, 'Content-Type': 'application/json; charset=utf-8', 'Content-Disposition': `attachment; filename="tgold-sao-luu-${new Date().toISOString().slice(0, 10)}.json"` });
      res.end(JSON.stringify(pack, null, 2)); return true;
    }
    if (route === 'restore' && m === 'POST') {
      const pack = await readJson(req, 20 * 1024 * 1024);
      if (pack.app !== 'tgold-cms') { json(res, 400, { ok: false, error: 'Tệp sao lưu không hợp lệ.' }); return true; }
      const cur = { site: await readRaw('site.json'), cat: await readRaw('products.json') };
      const site = cleanSite(pack['site.json'], cur.site).site;
      const cat = pack['products.json'];
      if (!Array.isArray(cat?.products) || !Array.isArray(pack['journal.json']?.posts)) { json(res, 400, { ok: false, error: 'Tệp sao lưu thiếu dữ liệu.' }); return true; }
      cat.products = cat.products.map((x) => cleanProduct(x, cat).product).filter((x) => SLUG.test(x.slug));
      const jr = { ...pack['journal.json'], posts: pack['journal.json'].posts.map((x) => cleanPost(x).post).filter((x) => SLUG.test(x.slug)) };
      await writeContent('site.json', site);
      await writeContent('products.json', { ...cur.cat, ...cat, products: cat.products });
      let build = await writeContent('journal.json', jr);
      if (pack['home.json']?.hero) build = await writeContent('home.json', cleanHome(pack['home.json'], (await homeCtx()).ctx).home);
      if (pack['pages.json']?.pages) {
        const pg = {};
        for (const [id] of INFO_PAGES) { const reg = registeredPage(id); const p = pack['pages.json'].pages[id] && cleanPage(pack['pages.json'].pages[id], { vi: editorTree(reg.T.vi), en: editorTree(reg.T.en) }, reg.images); if (p && Object.keys(p).length) pg[id] = p; }
        build = await writeContent('pages.json', { _note: pack['pages.json']._note || '', pages: pg });
      }
      if (Array.isArray(pack['models3d.json']?.models)) {
        const models = pack['models3d.json'].models.map((x) => cleanModel3d(x, { metals: MODEL3D_METALS, gems: MODEL3D_GEMS, apps: Object.keys(MODEL3D_APPS) })).filter((r) => !r.errors.length).map((r) => r.model);
        build = await writeContent('models3d.json', { _note: pack['models3d.json']._note || '', models });
      }
      json(res, 200, { ok: true, build }); return true;
    }

    if (route === 'rebuild' && m === 'POST') { json(res, 200, { ok: true, build: await rebuild() }); return true; }
    if (route === 'sync' && m === 'POST') {
      gh.refreshStatus();
      if (!gh.status.enabled) { json(res, 400, { ok: false, error: 'Chưa cấu hình GITHUB_TOKEN và GITHUB_REPO trên máy chủ.' }); return true; }
      for (const f of FILES) gh.queue(`content/${f}`, path.join(LIVE_CONTENT, f));
      json(res, 200, { ok: true, github: await gh.syncNow('CMS: đồng bộ nội dung') }); return true;
    }

    json(res, 404, { ok: false, error: 'Không tìm thấy.' });
  } catch (err) {
    if (err.code === 413) json(res, 413, { ok: false, error: 'Dữ liệu gửi lên quá lớn.' });
    else if (err instanceof SyntaxError) json(res, 400, { ok: false, error: 'Dữ liệu không hợp lệ.' });
    else { console.error('[admin]', err); json(res, 500, { ok: false, error: 'Lỗi máy chủ. Vui lòng thử lại.' }); }
  }
  return true;
}

// Dọn phiên hết hạn
setInterval(() => { const now = Date.now(); for (const [k, v] of SESS) if (v.exp < now) SESS.delete(k); }, 3600000).unref();
