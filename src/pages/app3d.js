// TRANG CÔNG CỤ TỰ THIẾT KẾ 3D /3d/<đường dẫn>/ (mục "Công cụ tự thiết kế" trong /admin → Sản phẩm 3D):
// dựng từ mẫu trang trong 3d-app/<công cụ>.html (chép từ "3D's Products" bằng npm run sync-3d) — công cụ chạy trọn trang, chỉ tiếng Việt.
// Khai báo window.TG3D_APP để bước tóm tắt có nút "Gửi thiết kế cho T Gold" (sang trang liên hệ, kèm cấu hình khách chọn).
// Thanh trên cùng của mẫu được thay bằng thanh menu chung của website (như trang sản phẩm) — CSS ở /css/head-3d.css.
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { ROOT } from '../lib/env.js';
import { MODEL3D_APPS, url, esc, jsonScript, model3dPath } from '../lib/core.js';
import { siteChrome } from '../partials/layout.js';
import { scopedCss } from '../lib/chrome-css.js';

// Phần đầu trang của công cụ: mục “Custom” trên menu sáng; bản tiếng Anh dẫn về trang Custom tiếng Anh (công cụ chỉ có tiếng Việt)
const chromeFor = (viPath) => siteChrome({ lang: 'vi', page: 'custom', alt: { vi: viPath, en: `${url('custom', 'en')}#tu-thiet-ke` }, langHint: false });

// Riêng trang công cụ: thanh menu nằm trong cột trang (không đè lên khung 3D, trang không cuộn).
// Xem 3D toàn màn hình trên iPhone (không có Fullscreen API, khung 3D phủ bằng position:fixed): ẩn thanh menu và bảng chọn để không nổi đè lên hình
const PAGE_CSS = '.tg3d-page .site-head{position:relative;flex:none;touch-action:none}html.tg3d-lock .site-head,html.tg3d-lock .tg3d-page .pane{visibility:hidden}';

// CSS thanh menu + các bảng (menu, tìm kiếm, món đã lưu, thông báo): trích từ site.css, gói trong vùng của chúng → không đụng CSS công cụ.
// siteCss: site.css đã rút gọn · siteJs: site.js (lấy thêm các class do JS gắn vào)
export function headCss3d(siteCss, siteJs) {
  const c = chromeFor('/');
  const markup = c.head + c.dialogs;
  const classes = new Set(['solid']);
  for (const m of markup.matchAll(/class="([^"]*)"/g)) m[1].split(/\s+/).forEach((x) => x && classes.add(x));
  for (const m of siteJs.matchAll(/classList\.(?:add|toggle|remove)\('([\w-]+)'|className = '([\w -]+)'|class="([\w -]+)"/g)) (m[1] || m[2] || m[3]).split(/\s+/).forEach((x) => x && classes.add(x));
  const ids = new Set([...markup.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
  const roots = ['.site-head', '.sheet', '.toast'];
  // Chữ mặc định của vùng (trang chính lấy từ <body>)
  const base = `:is(${roots.join(',')}){font-family:var(--tg-font-body);font-weight:300;font-size:14.5px;line-height:1.6;color:var(--tg-text);font-variant-numeric:lining-nums;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}`;
  return base + scopedCss(siteCss, { roots, classes, ids }) + PAGE_CSS;
}

// ver: { viewer, app, site } — mã phiên bản để trình duyệt không dùng bản cũ sau khi cập nhật
export function renderApp3d(m, ver = {}) {
  const app = MODEL3D_APPS[m.app];
  const file = app && path.join(ROOT, '3d-app', `${app.file}.html`);
  if (!app || !existsSync(file)) return null;
  const name = m.name?.vi || app.vi;
  const q = (u, v) => `${u}${v ? `?v=${v}` : ''}`;
  let html = readFileSync(file, 'utf8');
  const swap = (from, to) => { if (!html.includes(from)) throw new Error(`Mẫu trang ${app.file}.html thiếu: ${from}`); html = html.replace(from, () => to); };
  swap('href="viewer3d.css"', `href="${q('/3d/viewer3d.css', ver.viewer)}"`);
  swap('href="tu-thiet-ke.css"', `href="${q('/3d/app/tu-thiet-ke.css', ver.app)}"`);
  swap(`src="${app.file}.js"`, `src="${q(`/3d/app/${app.file}.js`, ver.app)}"`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(name)} | T Gold – Luxury Jewelry</title>`);
  html = html.replace('<link rel="icon" href="data:,">', '<link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon-32.png">\n<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png">');
  const c = chromeFor(model3dPath(m.slug, 'vi'));
  const head = c.head.trim().replace('class="site-head"', 'class="site-head solid"');
  if (/<header class="top">[\s\S]*?<\/header>/.test(html)) html = html.replace(/<header class="top">[\s\S]*?<\/header>/, () => head);
  else swap('<body>', `<body>\n${head}`);
  swap('<body>', '<body class="tg3d-page no-hero" data-page="custom">');
  swap(`href="${q('/3d/app/tu-thiet-ke.css', ver.app)}">`, `href="${q('/3d/app/tu-thiet-ke.css', ver.app)}">\n<link rel="stylesheet" href="${q('/css/head-3d.css', ver.site)}">`);
  swap('</body>', `${c.dialogs}\n${c.config}\n<script src="${q('/js/site.js', ver.site)}" defer></script>\n</body>`);
  const cfg = { contact: url('contact', 'vi'), piece: `${name} (3D)` };
  swap('<script type="module"', `<script>window.TG3D_APP=${jsonScript(cfg)};</script>\n<script type="module"`);
  return html;
}
