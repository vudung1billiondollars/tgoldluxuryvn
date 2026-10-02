// Kho nội dung: content/ trong repo là bản gốc (seed); DATA_DIR/content là bản đang chạy do CMS chỉnh sửa.
// Các template đọc trực tiếp từ các object bên dưới, nên chỉ cần loadContent() lại là build ra nội dung mới.
import { ROOT } from './env.js';
import { readFileSync, existsSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

export { ROOT };
export const REPO_CONTENT = path.join(ROOT, 'content');
export const DATA_DIR = path.resolve(ROOT, process.env.DATA_DIR || process.env.BOOKING_STORAGE_DIR || 'storage');
export const LIVE_CONTENT = path.join(DATA_DIR, 'content');
export const MEDIA_DIR = path.join(DATA_DIR, 'media');          // ảnh/video tải lên từ CMS → công khai tại /media/
export const BOOKINGS_DIR = path.join(DATA_DIR, 'bookings');     // lịch hẹn + ảnh khách gửi → KHÔNG công khai
export const FILES = ['site.json', 'products.json', 'journal.json', 'home.json', 'pages.json', 'models3d.json'];

export const site = {};
export const catalog = {};
export const journal = {};
export const home = {};
export const pages = {};
export const models3d = {};     // sản phẩm 3D: mỗi mẫu một trang /3d/<slug>/

const replace = (target, src) => { for (const k of Object.keys(target)) delete target[k]; Object.assign(target, src); };

// Thư mục nội dung đang dùng: bản CMS nếu đã có, không thì bản gốc trong repo
export const contentDir = () => (existsSync(path.join(LIVE_CONTENT, 'site.json')) ? LIVE_CONTENT : REPO_CONTENT);

// Trường song ngữ để trống bản EN → dùng tạm bản VI (chỉ trong bộ nhớ, không sửa tệp)
const fill = (o) => { if (o && typeof o === 'object' && 'vi' in o && !o.en) o.en = o.vi; return o; };
function normalize() {
  for (const p of catalog.products || []) {
    ['name', 'config', 'description', 'weight_note', 'gemstone_specs'].forEach((k) => fill(p[k]));
    fill(p.sizes?.label);
    (p.images || []).forEach((im) => fill(im.alt));
  }
  for (const p of journal.posts || []) {
    ['title', 'excerpt', 'body', 'category'].forEach((k) => fill(p[k]));
    fill(p.cover?.alt);
  }
  const c = site.claims || {};
  if (c.leadTime && !c.leadTime.en) c.leadTime.en = c.leadTime.vi;
  if (c.exchange && !c.exchange.en) c.exchange.en = c.exchange.vi;
  if (c.warranty?.en && !c.warranty.en.title) c.warranty.en = { ...c.warranty.vi };
  fill(site.contact?.address); fill(site.contact?.hours);
  fillDeep(home);
}
// Mọi cặp {vi, en} trong nội dung trang chủ: bản EN trống → dùng tạm bản VI
function fillDeep(o) {
  if (Array.isArray(o)) return o.forEach(fillDeep);
  if (!o || typeof o !== 'object') return;
  if (typeof o.vi === 'string' && Object.keys(o).every((k) => k === 'vi' || k === 'en')) { if (!o.en) o.en = o.vi; return; }
  Object.values(o).forEach(fillDeep);
}

export function loadContent(dir = contentDir()) {
  // Tệp mới (vd. home.json) chưa có trong dữ liệu CMS → đọc bản gốc trong repo
  const read = (f) => JSON.parse(readFileSync(existsSync(path.join(dir, f)) ? path.join(dir, f) : path.join(REPO_CONTENT, f), 'utf8'));
  replace(site, read('site.json'));
  replace(catalog, read('products.json'));
  replace(journal, read('journal.json'));
  replace(home, read('home.json'));
  replace(pages, read('pages.json'));
  replace(models3d, read('models3d.json'));
  normalize();
  return dir;
}

// Lần chạy đầu: chép nội dung gốc sang DATA_DIR để CMS chỉnh sửa
export function seedLiveContent() {
  mkdirSync(LIVE_CONTENT, { recursive: true });
  for (const f of FILES) {
    const dst = path.join(LIVE_CONTENT, f);
    if (!existsSync(dst)) copyFileSync(path.join(REPO_CONTENT, f), dst);
  }
}

export const visibleProducts = () => (catalog.products || []).filter((p) => p.status !== 'hidden');
export const visiblePosts = () =>
  (journal.posts || []).filter((p) => p.status !== 'hidden' && p.status !== 'draft').sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)); // cùng ngày: giữ thứ tự trong danh sách (bài thêm sau đứng trước)
export const visibleModels3d = () => (models3d.models || []).filter((m) => m.status !== 'hidden');
// Mẫu 3D / công cụ tự thiết kế đang hiện theo slug (gắn vào sản phẩm)
// Công cụ tự thiết kế chưa có ảnh đại diện riêng → dùng ảnh mặc định public/3d/models/cong-cu/<công cụ>.jpg (do "3D's Products" chụp, chép bằng npm run sync-3d)
export const appPoster = (m) => {
  if (!m || m.kind !== 'app' || m.poster || !m.app) return m?.poster || '';
  const f = `/3d/models/cong-cu/${m.app}.jpg`;
  return existsSync(path.join(ROOT, 'public', f)) ? f : '';
};
// Tệp trong public/3d/ (ảnh đại diện 3D…): thêm ?v=<mã theo kích thước + lúc sửa> → chụp lại ảnh (cùng tên tệp) thì trình duyệt tải bản mới ngay (ảnh được lưu đệm 30 ngày)
export const withVer = (src) => {
  if (!/^\/3d\//.test(src || '') || src.includes('?')) return src || '';
  try { const st = statSync(path.join(ROOT, 'public', src)); return `${src}?v=${createHash('md5').update(`${st.size}-${st.mtimeMs}`).digest('hex').slice(0, 8)}`; } catch { return src; }
};
const withPoster = (m) => { if (!m) return m; const poster = m.poster || appPoster(m); return poster ? { ...m, poster: withVer(poster) } : m; };
export const model3dOf = (slug) => (slug ? withPoster(visibleModels3d().find((m) => m.slug === slug) || null) : null);
// Ảnh đại diện 3D do "3D's Products" chụp: <tên>.jpg (1600 × 2000, khổ 4:5 như ảnh sản phẩm) + <tên>-800.jpg → srcset để thẻ sản phẩm tải bản nhẹ
export const posterSrcset = (src) => {
  const raw = String(src || '').split('?')[0];
  if (!/^\/3d\/models\/[a-z0-9/-]+\.jpg$/.test(raw)) return '';
  const small = raw.replace(/\.jpg$/, '-800.jpg');
  return existsSync(path.join(ROOT, 'public', small)) ? `${withVer(small)} 800w, ${withVer(raw)} 1600w` : '';
};
// Sản phẩm gắn với công cụ tự thiết kế 3D: bấm vào thẻ sản phẩm là mở thẳng công cụ (không qua trang chi tiết)
export const appOf = (p) => { const m = model3dOf(p?.model3d); return m && m.kind === 'app' ? m : null; };
export const categoryOf = (id) => (catalog.categories || []).find((c) => c.id === id);

loadContent();
