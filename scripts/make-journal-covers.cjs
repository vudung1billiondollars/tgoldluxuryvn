// Ảnh bìa Tạp chí: ảnh gốc ở ../anh-tap-chi-goc (nguồn ghi trong NGUON-ANH.md) → public/assets/photos/journal-<tên>-<mã>-<rộng>.webp
// Chạy: node scripts/make-journal-covers.cjs   (sau đó: npm run build)
// crop: [left, top, width, height] theo điểm ảnh của ảnh gốc — dùng cho ảnh dọc, vì khung bìa trên web luôn nằm ngang (3:2 và 16:9)
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const SRC = path.join(__dirname, '..', '..', 'anh-tap-chi-goc');
const OUT = path.join(__dirname, '..', 'public', 'assets', 'photos');
const COVERS = [
  { name: 'karat', file: 'karat-pexels-4573790.jpg', sizes: [400, 800, 1600] },
  { name: 'gemstones', file: 'gemstones-pexels-5442447.jpg', sizes: [400, 800, 1600] },
  { name: 'certificate', file: 'certificate-pexels-6263113.jpg', sizes: [400, 800, 1600] },
  { name: 'size', file: 'size-pexels-6263073.jpg', sizes: [400, 800, 1600] },
  { name: 'care', file: 'care-pexels-28900498.jpg', sizes: [400, 800, 1600], crop: [0, 1050, 2000, 1333] },
  { name: 'setting', file: 'setting-tgold-cc6.jpg', sizes: [400, 736], crop: [0, 330, 736, 491] },
  { name: 'engagement', file: 'engagement-pexels-15111007.jpg', sizes: [400, 800, 1600] },
  { name: 'wedding', file: 'wedding-pexels-11309258.jpg', sizes: [400, 800, 1600] },
  { name: 'icedout', file: 'icedout-pexels-5190957.jpg', sizes: [400, 800, 1600], crop: [110, 150, 1775, 1183] }, // cắt bỏ phần miệng ở mép trên
  { name: 'gift', file: 'gift-pexels-5469695.jpg', sizes: [400, 800, 1600], crop: [250, 110, 1750, 1167] }, // cắt bỏ mép trái (khuôn mặt)
  { name: 'online', file: 'online-pexels-230544.jpg', sizes: [400, 800, 1600], crop: [0, 160, 1760, 1173] }, // cắt bỏ logo trên thẻ và tên hãng điện thoại
  { name: 'whitemetal', file: 'whitemetal-pexels-7700270.jpg', sizes: [400, 800, 1600] },
  { name: 'restyle', file: 'restyle-pexels-8576000.jpg', sizes: [400, 800, 1600] },
  { name: 'carat', file: 'carat-pexels-5362404.jpg', sizes: [400, 800, 1600] },
  { name: 'goldtest', file: 'goldtest-pexels-7251792.png', sizes: [400, 800, 1600] },
  { name: 'ringtypes', file: 'ringtypes-pexels-3091637.jpg', sizes: [400, 800, 1600] },
  { name: 'earrings', file: 'earrings-pexels-8398842.jpg', sizes: [400, 800, 1600] },
  { name: 'trends', file: 'trends-pexels-10163183.jpg', sizes: [400, 800, 1600] },
];

// Tên tệp có mã theo nội dung ảnh gốc (journal-<tên>-<mã>-<rộng>.webp): đổi ảnh là đổi đường dẫn,
// nên trình duyệt không giữ ảnh cũ (máy chủ cho phép nhớ ảnh 30 ngày theo đường dẫn).
const ROOT = path.join(__dirname, '..');
const JOURNALS = ['content/journal.json', 'storage/content/journal.json'].map((f) => path.join(ROOT, f)).filter((f) => fs.existsSync(f));

(async () => {
  const current = {}; // tên → { src, srcset }
  for (const c of COVERS) {
    const tag = crypto.createHash('md5').update(fs.readFileSync(path.join(SRC, c.file))).update(JSON.stringify(c.crop || null)).digest('hex').slice(0, 6);
    const made = [];
    for (const w of c.sizes) {
      let im = sharp(path.join(SRC, c.file)).rotate();
      if (c.crop) im = im.extract({ left: c.crop[0], top: c.crop[1], width: c.crop[2], height: c.crop[3] });
      const file = `journal-${c.name}-${tag}-${w}.webp`;
      const info = await im.resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(OUT, file));
      made.push(file);
      console.log(file, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
    }
    current[c.name] = { src: `/assets/photos/${made.at(-1)}`, srcset: made.map((f, i) => `/assets/photos/${f} ${c.sizes[i]}w`).join(', ') };
    // dọn các bản cũ của cùng ảnh bìa (kể cả tên kiểu cũ không có mã)
    for (const f of fs.readdirSync(OUT)) if (new RegExp(`^journal-${c.name}-(?:[0-9a-f]{6}-)?\\d+\\.webp$`).test(f) && !made.includes(f)) fs.unlinkSync(path.join(OUT, f));
  }
  // trỏ ảnh bìa của các bài sang tệp mới (bản gốc trong repo + bản CMS đang chạy)
  for (const jf of JOURNALS) {
    const raw = fs.readFileSync(jf, 'utf8'), j = JSON.parse(raw);
    let n = 0;
    for (const p of j.posts || []) {
      const m = /^\/assets\/photos\/journal-([a-z]+)-/.exec(p.cover?.src || '');
      if (m && current[m[1]] && p.cover.src !== current[m[1]].src) { p.cover = { ...p.cover, ...current[m[1]] }; n++; }
    }
    if (!n) continue;
    if (jf.includes(`${path.sep}storage${path.sep}`)) {
      const hdir = path.join(ROOT, 'storage', 'history', 'journal');
      fs.mkdirSync(hdir, { recursive: true });
      fs.writeFileSync(path.join(hdir, `${new Date().toISOString().replace(/[:.]/g, '-')}.json`), raw);
    }
    fs.writeFileSync(jf, `${JSON.stringify(j, null, 2)}\n`);
    console.log(`${path.relative(ROOT, jf)}: đổi đường dẫn ảnh bìa của ${n} bài`);
  }
})();
