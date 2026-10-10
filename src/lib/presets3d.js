// MẪU DỰNG SẴN 3D THEO SẢN PHẨM — nút “Tinh chỉnh thiết kế riêng” trên trang sản phẩm.
// 3d-app/mau-san-pham.json (chép bằng npm run sync-3d từ "3D's Products"/src/mau-san-pham.json): { <slug sản phẩm>: { app: <tệp công cụ>, ten } }.
// Sản phẩm có slug trong danh sách → link mở công cụ 3D với đúng mẫu đó: /3d/<trang công cụ>/#mau=<slug sản phẩm>.
// Trang công cụ: ưu tiên mục “Công cụ tự thiết kế” đang hiện trong CMS (đường dẫn do chủ shop đặt). Công cụ chưa được thêm trong CMS thì website tự dựng
// một trang /3d/thiet-ke-<công cụ>/ (không hiện trong danh sách công cụ ở trang Custom) để nút luôn có đích.
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { ROOT } from './env.js';
import { MODEL3D_APPS, model3dPath } from './core.js';
import { models3d, visibleModels3d } from './content.js';

const FILE = path.join(ROOT, '3d-app', 'mau-san-pham.json');
let cache = { key: '', data: {} };
export function presets3d() {
  let key = '';
  try { const st = statSync(FILE); key = `${st.size}-${st.mtimeMs}`; } catch { return {}; }
  if (key !== cache.key) {
    try { const raw = JSON.parse(readFileSync(FILE, 'utf8')); cache = { key, data: raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {} }; } catch { cache = { key, data: {} }; }
  }
  return cache.data;
}
const appIdOfFile = (file) => Object.keys(MODEL3D_APPS).find((k) => MODEL3D_APPS[k].file === file);
const appReady = (id) => { const a = MODEL3D_APPS[id]; return !!a && existsSync(path.join(ROOT, '3d-app', `${a.file}.html`)) && existsSync(path.join(ROOT, 'public/3d/app', `${a.file}.js`)); };

// Trang của một công cụ: { slug, auto } — auto = website tự dựng vì CMS chưa có mục công cụ này đang hiện
export function appPage3d(id) {
  if (!appReady(id)) return null;
  const m = visibleModels3d().find((x) => x.kind === 'app' && x.app === id);
  if (m) return { slug: m.slug, auto: false };
  const used = new Set((models3d.models || []).map((x) => x.slug));
  let slug = `thiet-ke-${id}`;
  while (used.has(slug)) slug += '-3d';
  return { slug, auto: true };
}
// Các trang công cụ website phải tự dựng (công cụ có mẫu dựng sẵn nhưng chưa có trong CMS) — cùng dạng một mục “Công cụ tự thiết kế”
export function autoAppPages3d() {
  const ids = new Set(Object.values(presets3d()).map((x) => appIdOfFile(x?.app)).filter(Boolean));
  return [...ids].map((id) => ({ id, page: appPage3d(id) })).filter((x) => x.page?.auto)
    .map(({ id, page }) => ({ slug: page.slug, kind: 'app', app: id, status: 'published', name: { vi: MODEL3D_APPS[id].vi, en: MODEL3D_APPS[id].en } }));
}
// Link “Tinh chỉnh thiết kế riêng” của một sản phẩm ('' = sản phẩm chưa có mẫu dựng sẵn hoặc công cụ chưa được chép sang website)
export function presetLink3d(productSlug) {
  const pr = presets3d()[productSlug];
  const id = pr && appIdOfFile(pr.app);
  const page = id && appPage3d(id);
  return page ? `${model3dPath(page.slug, 'vi')}#mau=${encodeURIComponent(productSlug)}` : '';
}
