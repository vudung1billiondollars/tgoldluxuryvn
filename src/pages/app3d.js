// TRANG CÔNG CỤ TỰ THIẾT KẾ 3D /3d/<đường dẫn>/ (mục "Công cụ tự thiết kế" trong /admin → Sản phẩm 3D):
// dựng từ mẫu trang trong 3d-app/<công cụ>.html (chép từ "3D's Products" bằng npm run sync-3d) — công cụ chạy trọn trang, chỉ tiếng Việt.
// Khai báo window.TG3D_APP để bước tóm tắt có nút "Gửi thiết kế cho T Gold" (sang trang liên hệ, kèm cấu hình khách chọn).
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { ROOT } from '../lib/env.js';
import { MODEL3D_APPS, url, esc, jsonScript } from '../lib/core.js';

// ver: { viewer, app } — mã phiên bản để trình duyệt không dùng bản cũ sau khi cập nhật
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
  html = html.replace('<span class="logo">T GOLD</span>', '<a class="logo" href="/" aria-label="T Gold – về trang chủ">T GOLD</a>');
  const cfg = { contact: url('contact', 'vi'), piece: `${name} (3D)` };
  swap('<script type="module"', `<script>window.TG3D_APP=${jsonScript(cfg)};</script>\n<script type="module"`);
  return html;
}
