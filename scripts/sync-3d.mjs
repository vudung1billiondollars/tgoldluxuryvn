// Chép khung xem 3D, các mẫu 3D (.glb) và công cụ tự thiết kế từ thư mục làm việc "Website/3D's Products" sang website.
// Chạy: npm run sync-3d   — mỗi khi có mẫu 3D mới, khung xem hoặc công cụ tự thiết kế được cập nhật. File .3dm gốc KHÔNG bao giờ được chép.
//  - public/3d/viewer3d.js|css              khung xem
//  - public/3d/models/*.glb                 mẫu 3D; thư mục con (vd. models/nhan-cuoi/) gồm <mã>.glb + <mã>.json (thông tin) + <mã>.jpg (ảnh đại diện);
//                                           models/cong-cu/*.jpg = ảnh đại diện mặc định của hai công cụ tự thiết kế (dùng khi chưa chọn ảnh khác trong CMS)
//  - public/3d/app/*                        mã chạy công cụ tự thiết kế (nhan-cuoi.js, tuy-chinh.js, nhan-nam.js, mat-day.js, tu-thiet-ke.css)
//  - 3d-app/*.html                          mẫu trang của công cụ (website dựng trang /3d/<đường dẫn>/ từ mẫu này) — không công khai
import { cp, mkdir, readdir, stat, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = process.env.TG3D_SRC || path.join(ROOT, '..', "3D's Products");
const OUT = path.join(ROOT, 'public', '3d');

if (!existsSync(path.join(SRC, 'viewer3d.js'))) {
  console.error(`Không thấy khung xem 3D tại: ${SRC}\nĐặt biến TG3D_SRC trỏ tới thư mục "3D's Products" nếu nó nằm chỗ khác.`);
  process.exit(1);
}
const kb = async (f) => Math.round((await stat(f)).size / 1024);
await mkdir(path.join(OUT, 'models'), { recursive: true });
for (const f of ['viewer3d.js', 'viewer3d.css']) await cp(path.join(SRC, f), path.join(OUT, f));
console.log(`✓ Khung xem 3D: ${await kb(path.join(OUT, 'viewer3d.js'))} KB`);

// mẫu 3D: .glb ở thư mục models/ và một cấp thư mục con
let nGlb = 0;
const copyModels = async (rel) => {
  const dir = path.join(SRC, 'models', rel);
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory() && !rel && /^[a-z0-9-]+$/.test(e.name)) { await mkdir(path.join(OUT, 'models', e.name), { recursive: true }); await copyModels(`${e.name}/`); continue; }
    if (!e.isFile()) continue;
    const ok = /^[a-z0-9-]+\.glb$/.test(e.name) || (rel && /^[a-z0-9-]+\.(json|jpg|webp|png)$/.test(e.name));
    if (!ok) continue;
    await cp(path.join(dir, e.name), path.join(OUT, 'models', rel, e.name));
    if (e.name.endsWith('.glb')) { nGlb++; console.log(`✓ ${rel}${e.name}: ${await kb(path.join(OUT, 'models', rel, e.name))} KB`); }
  }
};
await copyModels('');

// công cụ tự thiết kế
const APPS = ['nhan-cuoi', 'tuy-chinh', 'nhan-nam', 'mat-day'];
if (APPS.every((a) => existsSync(path.join(SRC, `${a}.js`)) && existsSync(path.join(SRC, `${a}.html`)))) {
  await mkdir(path.join(OUT, 'app'), { recursive: true }); await mkdir(path.join(ROOT, '3d-app'), { recursive: true });
  for (const a of APPS) { await cp(path.join(SRC, `${a}.js`), path.join(OUT, 'app', `${a}.js`)); await cp(path.join(SRC, `${a}.html`), path.join(ROOT, '3d-app', `${a}.html`)); }
  await cp(path.join(SRC, 'tu-thiet-ke.css'), path.join(OUT, 'app', 'tu-thiet-ke.css'));
  await rm(path.join(OUT, 'app', 'goi-y'), { recursive: true, force: true }); // bước "Mẫu gợi ý" đã bỏ khỏi công cụ nhẫn cưới
  console.log(`✓ Công cụ tự thiết kế: ${APPS.join(', ')}`);
} else console.warn('! Chưa thấy công cụ tự thiết kế (nhan-cuoi.js / tuy-chinh.js / nhan-nam.js / mat-day.js) trong thư mục 3D\'s Products — chạy node tools/build3d.mjs trước.');
console.log(`Xong (${nGlb} tệp .glb). Mẫu mới cần thêm trong /admin → Sản phẩm 3D để có trang và link riêng; nhớ khởi động lại máy chủ (npm run dev) nếu vừa cập nhật mã.`);
