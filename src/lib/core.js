// Tiện ích dùng chung cho template: routes, escape, typographic, icon, media, monogram
import { site as config, catalog, journal, appOf } from './content.js';

export const LANGS = ['vi', 'en'];

// Mỗi trang có đường dẫn riêng cho từng ngôn ngữ; nút chuyển ngôn ngữ trỏ tới trang tương ứng.
export const ROUTES = {
  home:       { vi: '/',                    en: '/en/' },
  collection: { vi: '/bo-suu-tap/',         en: '/en/collection/' },
  custom:     { vi: '/custom/',             en: '/en/custom/' },
  materials:  { vi: '/chat-lieu-kiem-dinh/', en: '/en/materials-certification/' },
  workshop:   { vi: '/xuong/',              en: '/en/workshop/' },
  story:      { vi: '/cau-chuyen/',         en: '/en/story/' },
  contact:    { vi: '/lien-he/',            en: '/en/contact/' },
  journal:    { vi: '/tap-chi/',            en: '/en/journal/' },
  order:      { vi: '/cach-dat-hang/',      en: '/en/how-to-order/' },
  care:       { vi: '/bao-hanh/',           en: '/en/warranty-care/' },
  notFound:   { vi: '/404.html',            en: '/en/404.html' },
};
export const productPath = (slug, lang) => (lang === 'en' ? `/en/product/${slug}/` : `/san-pham/${slug}/`);
export const postPath = (slug, lang) => (lang === 'en' ? `/en/journal/${slug}/` : `/tap-chi/${slug}/`);
export const url = (id, lang) => ROUTES[id][lang];
export const model3dPath = (slug, lang) => (lang === 'en' ? `/en/3d/${slug}/` : `/3d/${slug}/`);
// Link tới một sản phẩm: sản phẩm gắn công cụ tự thiết kế 3D mở thẳng công cụ (công cụ chỉ có tiếng Việt), còn lại là trang chi tiết
export const productHref = (p, lang) => { const a = appOf(p); return a ? model3dPath(a.slug, 'vi') : productPath(p.slug, lang); };
// Sản phẩm 3D: màu vàng & loại đá quý khung xem 3D hỗ trợ (mã trùng catalog; 4 loại đá màu chưa có trong catalog sản phẩm)
export const MODEL3D_METALS = ['vang', 'vang-trang', 'vang-hong'];
export const MODEL3D_GEMS = ['moissanite', 'lab-diamond', 'natural-diamond', 'sapphire', 'ruby', 'emerald', 'yellow-sapphire'];
// Công cụ tự thiết kế 3D (mục "Công cụ tự thiết kế" trong Sản phẩm 3D): file = tên tệp trong 3d-app/ (mẫu trang) và public/3d/app/ (mã chạy) — chép bằng npm run sync-3d
export const MODEL3D_APPS = {
  'nhan-cuoi': { file: 'nhan-cuoi', vi: 'Tự thiết kế nhẫn cưới', en: 'Design your wedding rings', title: 'Tự thiết kế nhẫn cưới' },
  'nhan-cau-hon': { file: 'tuy-chinh', vi: 'Tự thiết kế nhẫn cầu hôn', en: 'Design your engagement ring', title: 'Tự thiết kế nhẫn cầu hôn' },
  'nhan-nam': { file: 'nhan-nam', vi: 'Tự thiết kế nhẫn nam', en: 'Design your men’s ring', title: 'Tự thiết kế nhẫn nam' },
  'mat-day': { file: 'mat-day', vi: 'Tự thiết kế mặt dây chuyền', en: 'Design your pendant', title: 'Tự thiết kế mặt dây chuyền' },
  'bong-tai': { file: 'bong-tai', vi: 'Tự thiết kế bông tai', en: 'Design your earrings', title: 'Tự thiết kế bông tai' },
};
export const categoryPath = (id, lang) => (lang === 'en' ? `/en/collection/${id}/` : `/bo-suu-tap/${id}/`);

// Đích của link sửa được trong CMS: { to: 'page:story' | 'cat:nhan-nam' | 'product:slug' | 'post:slug' | 'url', url: {vi, en} }
// Trang / danh mục / bài bị xoá → quay về trang cha gần nhất, không bao giờ ra link hỏng.
export const LINK_PAGES = ['home', 'collection', 'custom', 'materials', 'workshop', 'story', 'contact', 'booking', 'journal', 'order', 'care'];
export function linkHref(link, lang) {
  const to = String(link?.to || '');
  const [kind, id] = [to.slice(0, to.indexOf(':') < 0 ? to.length : to.indexOf(':')), to.slice(to.indexOf(':') + 1)];
  if (kind === 'page') return id === 'booking' ? `${ROUTES.contact[lang]}#dat-lich` : (ROUTES[id] && id !== 'notFound' ? ROUTES[id][lang] : ROUTES.home[lang]);
  if (kind === 'cat') return (catalog.categories || []).some((c) => c.id === id) ? categoryPath(id, lang) : ROUTES.collection[lang];
  if (kind === 'product') { const p = (catalog.products || []).find((x) => x.slug === id && x.status !== 'hidden'); return p ? productHref(p, lang) : ROUTES.collection[lang]; }
  if (kind === 'post') return (journal.posts || []).some((p) => p.slug === id && p.status === 'published') ? postPath(id, lang) : ROUTES.journal[lang];
  if (kind === 'url') return link.url?.[lang] || link.url?.vi || ROUTES.home[lang];
  return ROUTES.home[lang];
}
// <a> cho link CMS; link ngoài (https://) mở tab mới
export const linkAttrs = (link, lang) => {
  const href = linkHref(link, lang);
  return `href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''}`;
};
// Tiêu đề sửa trong CMS: *chữ* → chữ vàng nghiêng (<em>)
export const rich = (s = '') => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');
// Chữ nhiều dòng từ CMS: giữ đúng chỗ xuống dòng (Enter) người sửa đã gõ
export const nl = (s = '') => esc(s).replace(/\n/g, '<br>');
export const abs = (p) => config.siteUrl.replace(/\/$/, '') + p;

// JSON an toàn khi đặt trong thẻ <script> (không thể đóng thẻ sớm bằng </script>)
export const jsonScript = (o) => JSON.stringify(o).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Quy tắc sắp chữ (Visual Guidelines §4.3): không tách “T Gold”, “đá quý”, không để “—” đứng đầu dòng.
export function typo(htmlStr) {
  // Không động vào nội dung trong <script> (dữ liệu JSON)
  return htmlStr.split(/(<script[\s\S]*?<\/script>)/).map((part, i) => (i % 2 ? part : typoText(part))).join('');
}
function typoText(htmlStr) {
  return htmlStr
    .replace(/\bT (Gold|GOLD)\b/g, 'T&nbsp;$1')
    .replace(/ — /g, '&nbsp;— ')
    .replace(/ – /g, '&nbsp;– ')
    .replace(/ · /g, '&nbsp;· ')
    .replace(/đá quý/g, 'đá&nbsp;quý')
    .replace(/kiểm định/g, 'kiểm&nbsp;định')
    .replace(/chi tiết/g, 'chi&nbsp;tiết')
    .replace(/Đá quý/g, 'Đá&nbsp;quý');
}

// Chọn giá trị theo ngôn ngữ: L({vi, en}, lang)
export const L = (obj, lang) => (obj && typeof obj === 'object' && lang in obj ? obj[lang] : obj);

// “(cập nhật)” khi thông tin chưa có
export const tbd = (lang) => (lang === 'en' ? '(to be updated)' : '(cập nhật)');

// ── Icon nét mảnh 1.4–1.5px, màu vàng (currentColor) ──
const I = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
  menu: '<path d="M3 7h18M3 12h18M3 17h12"/>',
  close: '<path d="M5 5l14 14M19 5L5 19"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  bookmark: '<path d="M6 3h12v18l-6-4.5L6 21z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a2 2 0 01-2 2A17 17 0 014 5a2 2 0 012-2z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v4h16v-4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  diamond: '<path d="M7 4h10l4 5-9 11L3 9z"/><path d="M3 9h18M9.5 4L12 9l2.5-5M12 9l0 11"/>',
  pen: '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 00-3-3L5 17z"/><path d="M14.5 7.5l3 3"/>',
};
export const icon = (name, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${I[name]}</svg>`;

// Icon lớn cho khung ảnh / dịch vụ (viewBox 48×40, theo mockup)
const BIG = {
  gem: '<path d="M12 2h24l10 12L24 38 2 14zM2 14h44M12 2l6 12 6-12 6 12 6-12M18 14l6 24 6-24"/>',
  pen: '<path d="M6 34l6-2 22-22-4-4L8 28zM28 8l4 4"/><path d="M30 30h12"/>',
  cert: '<rect x="6" y="4" width="36" height="32" rx="2"/><path d="M12 12h24M12 18h24M12 24h14"/><circle cx="34" cy="28" r="4"/>',
  shield: '<path d="M24 3l15 5v11c0 9-6.5 15-15 18C15.5 34 9 28 9 19V8z"/><path d="M17 20l5 5 9-10"/>',
  spark: '<path d="M24 4c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12zM38 26c.5 3.5 2 5 5.5 5.5-3.5.5-5 2-5.5 5.5-.5-3.5-2-5-5.5-5.5 3.5-.5 5-2 5.5-5.5z"/>',
  ring: '<circle cx="24" cy="25" r="12"/><path d="M18 9h12l4 5-10 6-10-6z"/>',
  play: '<rect x="4" y="6" width="40" height="28" rx="2"/><path d="M20 14l10 6-10 6z"/>',
  camera: '<path d="M6 12h8l3-5h14l3 5h8v22H6z"/><circle cx="24" cy="22" r="7"/>',
};
export const bigIcon = (name, cls = 'ic') =>
  `<svg class="${cls}" viewBox="0 0 48 40" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">${BIG[name]}</svg>`;

// ── Ảnh / placeholder ──
// Có src → <img> (object-fit: cover). Không có src → khung placeholder theo mockup.
// Thay ảnh thật: chỉ cần điền src (và srcset nếu có) trong dữ liệu.
export function media({ src = '', srcset = '', sizes = '100vw', alt = '', label = '', desc = '', icon: ic = 'gem', eager = false, cls = '' } = {}) {
  if (src) {
    return `<div class="media ${cls}"><img src="${esc(src)}"${srcset ? ` srcset="${esc(srcset)}" sizes="${esc(sizes)}"` : ''} alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>`;
  }
  return `<div class="media ph ${cls}" role="img" aria-label="${esc(alt || label)}">${bigIcon(ic)}${label ? `<span class="t">${label}</span>` : ''}${desc ? `<span class="d">${desc}</span>` : ''}</div>`;
}

// ── Monogram TG (PNG/WebP nền trong suốt — không lộ ô đen trong mọi stacking context) ──
export const mono = (cls = 'mono', alt = '', px = 30) =>
  `<picture class="${cls}"><source type="image/webp" srcset="/assets/brand/tgold-monogram-96.webp 96w, /assets/brand/tgold-monogram-240.webp 240w, /assets/brand/tgold-monogram-480.webp 480w" sizes="${px}px"><img src="/assets/brand/tgold-monogram-${px > 40 ? 240 : 96}.png" width="${px > 40 ? 240 : 96}" height="${px > 40 ? 305 : 122}" alt="${esc(alt)}" decoding="async"></picture>`;

export { config };
