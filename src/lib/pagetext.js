// Chữ & ảnh của các trang thông tin — sửa được trong /admin → Trang thông tin.
// Chữ mặc định nằm trong từng tệp src/pages/*.js (T = { vi, en }). CMS chỉ lưu phần đã sửa (content/pages.json),
// nên cập nhật code không ghi đè nội dung chủ website đã chỉnh; ô để trống = dùng chữ mặc định.
import { pages } from './content.js';
import { rich } from './core.js';

// [id, tên hiển thị trong CMS, id đường dẫn (ROUTES) hoặc null]
export const INFO_PAGES = [
  ['collection', 'Bộ sưu tập', 'collection'],
  ['category', 'Trang danh mục (dùng chung cho mọi danh mục)', null],
  ['custom', 'Custom', 'custom'],
  ['materials', 'Chất liệu & Kiểm định', 'materials'],
  ['workshop', 'Xưởng T Gold', 'workshop'],
  ['story', 'Câu chuyện', 'story'],
  ['contact', 'Liên hệ & đặt lịch', 'contact'],
  ['journal', 'Tạp chí (trang danh sách & khung bài viết)', 'journal'],
  ['order', 'Cách đặt hàng', 'order'],
  ['care', 'Bảo hành & chăm sóc', 'care'],
];

const REG = {};
// raw: đường dẫn các ô dùng làm chữ thô (được escape lại trong template) · images: các khung ảnh sửa được
export function registerPage(id, T, { raw = [], images = [] } = {}) {
  REG[id] = { T, raw: new Set(['title', 'description', ...raw]), images };
}
export const registeredPage = (id) => REG[id];

// Chữ HTML mặc định → dạng soạn thảo trong CMS (*nghiêng*, & thay cho &amp;)
export const toEditor = (s) => String(s)
  .replace(/<em>/g, '*').replace(/<\/em>/g, '*')
  .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

// Cây chữ mặc định ở dạng soạn thảo (bỏ hàm — không sửa được)
export function editorTree(v) {
  if (typeof v === 'string') return toEditor(v);
  if (Array.isArray(v)) return v.map(editorTree);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).filter(([, x]) => typeof x !== 'function').map(([k, x]) => [k, editorTree(x)]));
  return undefined;
}

function merge(base, ov, raw, path) {
  if (typeof base === 'string') {
    if (typeof ov !== 'string' || !ov.trim()) return base;
    return raw.has(path) ? ov.replace(/\s*\n\s*/g, ' ') : rich(ov); // tiêu đề trang / mô tả SEO: luôn một dòng
  }
  if (Array.isArray(base)) return base.map((b, i) => (ov && ov[i] != null ? merge(b, ov[i], raw, `${path}.${i}`) : b));
  if (base && typeof base === 'object') {
    const o = { ...base };
    if (ov && typeof ov === 'object') for (const k of Object.keys(base)) if (ov[k] != null) o[k] = merge(base[k], ov[k], raw, path ? `${path}.${k}` : k);
    return o;
  }
  return base;
}

// Chữ của một trang theo ngôn ngữ: mặc định + phần đã sửa trong CMS
export function pageT(id, lang) {
  const r = REG[id];
  const ov = pages.pages?.[id]?.[lang];
  return ov ? merge(r.T[lang], ov, r.raw, '') : r.T[lang];
}

// Ảnh của một khung ảnh trên trang (undefined nếu chưa tải)
export const pageImg = (id, slot) => {
  const im = pages.pages?.[id]?.images?.[slot];
  return im?.src ? im : undefined;
};
// media() tự escape alt → trả chữ thô
export const imgAlt = (im, lang, fallback) => im?.alt?.[lang] || im?.alt?.vi || fallback;
