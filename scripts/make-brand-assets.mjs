// Tạo bộ nhận diện cho web từ logo JPG nền đen:
//  - monogram TG nền trong suốt (color-to-alpha = đảo ngược chế độ Screen trên nền đen)
//  - bản WebP, favicon 32 / 180 / 512
// Chạy: npm run brand   (cần devDependency "sharp")
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'scripts/tgold-logo-source.jpg');
const OUT = path.join(root, 'public/assets/brand');
await mkdir(OUT, { recursive: true });

const meta = await sharp(SRC).metadata();
const W = meta.width, H = meta.height;
// Vùng monogram (chỉ phần TG + viên kim cương, bỏ wordmark "T-GOLD LUXE")
const box = {
  left: Math.round(W * 0.375), top: Math.round(H * 0.265),
  width: Math.round(W * 0.615) - Math.round(W * 0.375),
  height: Math.round(H * 0.570) - Math.round(H * 0.265),
};

const { data, info } = await sharp(SRC).extract(box).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(info.width * info.height * 4);
const FLOOR = 6; // bỏ nhiễu JPEG gần đen để không tạo quầng mờ
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const m = Math.max(r, g, b);
  if (m <= FLOOR) { out[j + 3] = 0; continue; }
  const a = Math.round(((m - FLOOR) * 255) / (255 - FLOOR));
  out[j] = Math.min(255, Math.round((r * 255) / m));
  out[j + 1] = Math.min(255, Math.round((g * 255) / m));
  out[j + 2] = Math.min(255, Math.round((b * 255) / m));
  out[j + 3] = a;
}
const mono = sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
const master = await mono.png().toBuffer();

// Bản dùng trên web: 240px (đủ nét cho monogram hiển thị ≤ 120px @2x) và 480px (OG, bản lớn)
for (const w of [96, 240, 480]) {
  await sharp(master).resize({ width: w }).png({ compressionLevel: 9, palette: false }).toFile(path.join(OUT, `tgold-monogram-${w}.png`));
  await sharp(master).resize({ width: w }).webp({ quality: 88, alphaQuality: 100 }).toFile(path.join(OUT, `tgold-monogram-${w}.webp`));
}
await sharp(master).png({ compressionLevel: 9 }).toFile(path.join(root, 'scripts/tgold-monogram-master.png'));

// Favicon: 32px nền trong suốt; 180 / 512 nền tối có quầng sáng (iOS / Android không hỗ trợ nền trong suốt tốt)
const glowSvg = (s) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}">
  <defs><radialGradient id="g" cx="50%" cy="8%" r="90%"><stop offset="0" stop-color="#2B2010"/><stop offset=".45" stop-color="#15100A"/><stop offset=".8" stop-color="#080605"/><stop offset="1" stop-color="#030303"/></radialGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/></svg>`);

async function iconOn(size, { bg }) {
  const pad = bg ? 0.2 : 0.04;              // chừa ≥ 20% lề cho khung bo tròn
  const h = Math.round(size * (1 - pad * 2));
  const m = await sharp(master).resize({ height: h }).png().toBuffer();
  const mm = await sharp(m).metadata();
  const base = bg ? sharp(glowSvg(size)) : sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } });
  return base.composite([{ input: m, left: Math.round((size - mm.width) / 2), top: Math.round((size - mm.height) / 2) }]).png().toBuffer();
}
await sharp(await iconOn(32, { bg: false })).toFile(path.join(OUT, 'favicon-32.png'));
await sharp(await iconOn(180, { bg: true })).toFile(path.join(OUT, 'apple-touch-icon.png'));
await sharp(await iconOn(512, { bg: true })).toFile(path.join(OUT, 'icon-512.png'));
await sharp(await iconOn(192, { bg: true })).toFile(path.join(OUT, 'icon-192.png'));

console.log('✓ Brand assets →', path.relative(root, OUT), `(monogram ${info.width}×${info.height})`);
