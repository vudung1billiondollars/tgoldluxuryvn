// Tạo ảnh cho khối “Từ bản 3D đến thành phẩm” (trang Custom) từ ảnh chủ website gửi.
const sharp = require('sharp'); const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'public/assets/photos') + '/';
// Ảnh nguồn: đặt TG_PHOTO_SRC trỏ tới thư mục chứa hai thư mục “Nhẫn” và “Mặt dây” (mặc định ~/Downloads)
const DL = process.env.TG_PHOTO_SRC || path.join(require('os').homedir(), 'Downloads');
const SRC = { ring3d: path.join(DL, 'Nhẫn/IMG_0580.JPG'), ring: path.join(DL, 'Nhẫn/IMG_0579.jpg'), pend3d: path.join(DL, 'Mặt dây/IMG_0576.JPG'), pend: path.join(DL, 'Mặt dây/IMG_0227.jpg') };
// Ảnh 3D: cắt đúng khung nhìn (bỏ bảng trọng lượng / đếm đá quý, nhãn phần mềm, chữ “Activate Windows”), phóng 2× và làm mờ dần 4 mép về đen để hoà vào nền ô
async function cad(src, box, name, fade) {
  const W = box.width * 2, H = box.height * 2;
  const base = await sharp(src).extract(box).resize(W, H, { kernel: 'lanczos3' }).sharpen({ sigma: 0.6 }).toBuffer();
  const g = (id, x1, y1, x2, y2) => `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="#000" stop-opacity="1"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>`;
  const f = typeof fade === 'number' ? { l: fade, r: fade, t: fade, b: fade } : fade;
  const fl = Math.round(W * f.l), fr = Math.round(W * f.r), ft = Math.round(H * f.t), fb = Math.round(H * f.b);
  const veil = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs>${g('l', 0, 0, 1, 0)}${g('r', 1, 0, 0, 0)}${g('t', 0, 0, 0, 1)}${g('b', 0, 1, 0, 0)}</defs>
    <rect x="0" y="0" width="${fl}" height="${H}" fill="url(#l)"/><rect x="${W - fr}" y="0" width="${fr}" height="${H}" fill="url(#r)"/>
    <rect x="0" y="0" width="${W}" height="${ft}" fill="url(#t)"/><rect x="0" y="${H - fb}" width="${W}" height="${fb}" fill="url(#b)"/></svg>`);
  const full = await sharp(base).composite([{ input: veil }]).toBuffer();
  const out = [];
  for (const w of [box.width, W]) { const f = `${name}-${w}.webp`; await sharp(full).resize(w).webp({ quality: 88 }).toFile(OUT + f); out.push([f, w, fs.statSync(OUT + f).size]); }
  return { out, w: W, h: H };
}
async function photo(src, name, box) {
  const out = [];
  for (const w of [480, 800, box.width]) { const f = `${name}-${w}.webp`; await sharp(src).rotate().extract(box).resize(w).webp({ quality: 84 }).toFile(OUT + f); out.push([f, w, fs.statSync(OUT + f).size]); }
  return { out, w: box.width, h: box.height };
}
(async () => {
  const r = {
    'custom-pendant-3d': await cad(SRC.pend3d, { left: 230, top: 20, width: 330, height: 356 }, 'custom-pendant-3d', 0.06),
    'custom-pendant': await photo(SRC.pend, 'custom-pendant', { left: 380, top: 800, width: 1160, height: 1450 }),
    'custom-ring-3d': await cad(SRC.ring3d, { left: 987, top: 14, width: 370, height: 364 }, 'custom-ring-3d', { l: 0.1, r: 0.05, t: 0.08, b: 0.1 }),
    'custom-ring': await photo(SRC.ring, 'custom-ring', { left: 300, top: 400, width: 1000, height: 1250 }),
  };
  for (const [k, v] of Object.entries(r)) console.log(k.padEnd(18), v.out.map(([f, w, s]) => `${w}w ${(s / 1024).toFixed(0)}KB`).join(' · '));
})();
