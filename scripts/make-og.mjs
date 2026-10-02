// Tạo ảnh Open Graph 1200×630 (nền tối + monogram + tiêu đề) cho VI và EN.
// Cần Google Chrome trên máy + devDependency puppeteer-core. Chạy: npm run og
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'public/assets/brand');
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const mono = (await readFile(path.join(OUT, 'tgold-monogram-480.png'))).toString('base64');

const TITLES = {
  vi: 'Đẳng cấp <em>được nhìn thấy.</em>',
  en: 'Prestige, <em>in plain sight.</em>',
};
const html = (title) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:ital,wght@0,700;1,600&display=block" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:radial-gradient(96% 70% at 50% 0%,#2B2010 0%,#15100A 30%,#080605 62%,#030303 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative}
.f{position:absolute;inset:26px;border:1px solid rgba(212,169,79,.36)}
.f::before,.f::after{content:"";position:absolute;left:50%;width:14px;height:14px;border:1px solid #D4A94F;background:#0b0806;transform:translate(-50%,-50%) rotate(45deg)}
.f::before{top:0}.f::after{top:100%}
img{width:104px;height:auto}
.k{font-family:Cinzel;font-weight:600;font-size:17px;letter-spacing:.42em;color:#D4A94F;margin-top:26px;padding-left:.42em}
h1{font-family:'Cormorant Garamond';font-weight:700;font-size:86px;line-height:1.02;color:#F5F0E6;margin-top:20px}
em{font-style:italic;font-weight:600;background:linear-gradient(120deg,#FBE8B4 0%,#E6C071 32%,#B8883A 62%,#F3D993 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.06em}
.s{font-family:Cinzel;font-weight:600;font-size:13px;letter-spacing:.36em;color:#9B907D;margin-top:30px;padding-left:.36em}
</style></head><body><div class="f"></div>
<img src="data:image/png;base64,${mono}" alt="">
<div class="k">T GOLD · LUXURY JEWELRY</div>
<h1>${title}</h1>
<div class="s">TRUE MATERIALS · TAILORED DESIGN · YOUR TRAIT</div>
</body></html>`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
for (const [lang, title] of Object.entries(TITLES)) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(html(title), { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(OUT, `og-${lang}.jpg`));
  console.log('✓', `og-${lang}.jpg`);
  await page.close();
}
await browser.close();
