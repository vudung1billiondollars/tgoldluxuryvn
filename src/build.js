// Build tĩnh: nội dung (content/) + template (src/) + public/ → dist/  ·  VI ở gốc, EN ở /en/
// Dùng chung cho `npm run build` và cho CMS (build lại ngay sau mỗi lần lưu).
import { mkdir, rm, cp, writeFile, readFile, rename, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { ROOT, MEDIA_DIR, loadContent, site, catalog, visibleProducts, visiblePosts, visibleModels3d, appOf } from './lib/content.js';
import { LANGS, ROUTES, MODEL3D_APPS, productPath, productHref, postPath, categoryPath, model3dPath, abs } from './lib/core.js';
import { layout } from './partials/layout.js';
import { renderHome } from './pages/home.js';
import { renderContact } from './pages/contact.js';
import { renderNotFound } from './pages/notfound.js';
import { renderCollection } from './pages/collection.js';
import { renderProduct, renderProductRedirect } from './pages/product.js';
import { renderCustom } from './pages/custom.js';
import { renderMaterials } from './pages/materials.js';
import { renderWorkshop } from './pages/workshop.js';
import { renderStory } from './pages/story.js';
import { renderJournal, renderPost } from './pages/journal.js';
import { renderCategory } from './pages/category.js';
import { renderOrder } from './pages/order.js';
import { renderCare } from './pages/care.js';
import { renderModel3d } from './pages/model3d.js';
import { renderApp3d, headCss3d } from './pages/app3d.js';

export const DIST = path.join(ROOT, 'dist');

const STATIC_PAGES = [
  ['home', renderHome], ['collection', renderCollection], ['custom', renderCustom], ['materials', renderMaterials],
  ['workshop', renderWorkshop], ['story', renderStory], ['journal', renderJournal], ['contact', renderContact],
  ['order', renderOrder], ['care', renderCare],
];

let running = null;
// Chỉ chạy một bản build tại một thời điểm; lần gọi trùng sẽ chờ rồi build lại một lần nữa
export async function buildSite() {
  while (running) await running.catch(() => {});
  running = doBuild();
  try { return await running; } finally { running = null; }
}

async function doBuild() {
  const t0 = Date.now();
  const from = loadContent();
  const OUT = `${DIST}.tmp-${process.pid}-${t0}`;
  await rm(OUT, { recursive: true, force: true });
  await cp(path.join(ROOT, 'public'), OUT, { recursive: true });

  const [css, js] = await Promise.all([readFile(path.join(ROOT, 'public/css/site.css'), 'utf8'), readFile(path.join(ROOT, 'public/js/site.js'), 'utf8')]);
  layout.version = createHash('md5').update(css + js).digest('hex').slice(0, 8);
  const minCss = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};,>])\s*/g, '$1').replace(/;}/g, '}').trim();
  await writeFile(path.join(OUT, 'css/site.css'), minCss);
  await writeFile(path.join(OUT, 'css/head-3d.css'), headCss3d(minCss, js)); // thanh menu cho trang công cụ tự thiết kế 3D

  const write = async (p, html) => {
    const file = p.endsWith('.html') ? path.join(OUT, p) : path.join(OUT, p, 'index.html');
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
  };
  const urls = []; // [{vi, en}] cho sitemap
  for (const [id, render] of STATIC_PAGES) {
    for (const lang of LANGS) await write(ROUTES[id][lang], render(lang));
    urls.push({ vi: ROUTES[id].vi, en: ROUTES[id].en });
  }
  for (const cat of catalog.categories || []) {
    for (const lang of LANGS) await write(categoryPath(cat.id, lang), renderCategory(cat, lang));
    urls.push({ vi: categoryPath(cat.id, 'vi'), en: categoryPath(cat.id, 'en') });
  }
  const md5 = (bufs) => createHash('md5').update(Buffer.concat(bufs.map((x) => Buffer.from(x)))).digest('hex').slice(0, 8);
  const viewerVer = md5(await Promise.all(['viewer3d.js', 'viewer3d.css'].map((f) => readFile(path.join(ROOT, 'public/3d', f)).catch(() => ''))));
  const glbOf = (m) => (m.src.startsWith('/media/') ? path.join(MEDIA_DIR, m.src.slice('/media/'.length)) : path.join(ROOT, 'public', m.src));
  const modelVer = {};
  for (const m of visibleModels3d()) if (m.kind !== 'app') { const st = await stat(glbOf(m)).catch(() => null); modelVer[m.slug] = st ? md5([`${st.size}-${st.mtimeMs}`]) : ''; }
  for (const p of visibleProducts()) {
    const app = appOf(p); // sản phẩm gắn công cụ tự thiết kế 3D: bấm vào là mở thẳng công cụ → địa chỉ chi tiết chỉ chuyển tiếp, không vào sitemap
    for (const lang of LANGS) await write(productPath(p.slug, lang), app ? renderProductRedirect(p, lang, app) : renderProduct(p, lang, { viewer: viewerVer, models: modelVer }));
    if (!app) urls.push({ vi: productPath(p.slug, 'vi'), en: productPath(p.slug, 'en') });
  }
  for (const post of visiblePosts()) {
    for (const lang of LANGS) await write(postPath(post.slug, lang), renderPost(post, lang));
    urls.push({ vi: postPath(post.slug, 'vi'), en: postPath(post.slug, 'en') });
  }
  // Sản phẩm 3D: trang riêng từng mẫu (noindex, không vào sitemap — link gửi trực tiếp cho khách)
  let pages3d = 0;
  for (const m of visibleModels3d()) {
    if (m.kind === 'app') { // công cụ tự thiết kế: một trang trọn màn hình, chỉ tiếng Việt
      try {
        const a = MODEL3D_APPS[m.app];
        const html = a && renderApp3d(m, { viewer: viewerVer, app: md5(await Promise.all([`${a.file}.js`, 'tu-thiet-ke.css'].map((f) => readFile(path.join(ROOT, 'public/3d/app', f)).catch(() => '')))), site: layout.version });
        if (html) { await write(model3dPath(m.slug, 'vi'), html); pages3d += 1; } else console.warn(`! Công cụ tự thiết kế “${m.slug}” chưa có mẫu trang — chạy npm run sync-3d.`);
      } catch (e) { console.warn(`! Không dựng được trang “${m.slug}”: ${e.message}`); }
      continue;
    }
    const model = modelVer[m.slug] || '';
    for (const lang of LANGS) await write(model3dPath(m.slug, lang), renderModel3d(m, lang, { viewer: viewerVer, model }));
    pages3d += LANGS.length;
  }
  for (const lang of LANGS) await write(ROUTES.notFound[lang], renderNotFound(lang));

  // Dữ liệu tìm kiếm (tải khi mở ô tìm kiếm / danh sách món đã lưu)
  await mkdir(path.join(OUT, 'data'), { recursive: true });
  const PAGE_LABELS = {
    vi: { home: 'Trang chủ', collection: 'Bộ sưu tập', custom: 'Custom — thiết kế theo ý tưởng', materials: 'Chất liệu & Kiểm định', workshop: 'Xưởng T Gold', story: 'Câu chuyện thương hiệu', contact: 'Liên hệ & đặt lịch tư vấn', journal: 'Tạp chí', order: 'Cách đặt hàng', care: 'Bảo hành & chăm sóc' },
    en: { home: 'Home', collection: 'Collection', custom: 'Custom design', materials: 'Materials & Certification', workshop: 'The T Gold workshop', story: 'Our story', contact: 'Contact & booking', journal: 'Journal', order: 'How to order', care: 'Warranty & care' },
  };
  for (const lang of LANGS) {
    const cat = Object.fromEntries(catalog.categories.map((c) => [c.id, c[lang]]));
    const search = {
      products: visibleProducts().map((p) => ({
        id: p.slug, t: p.name[lang], s: p.config[lang], u: productHref(p, lang),
        k: [cat[p.category], ...(p.gold_karats || []), ...(p.gemstones || []).map((g) => catalog.gemstones[g]?.[lang] || g), p.customizable ? 'custom' : ''].join(' '),
      })),
      pages: [
        ...Object.entries(PAGE_LABELS[lang]).map(([id, t]) => ({ t, u: ROUTES[id][lang], s: '' })),
        ...catalog.categories.map((c) => ({ t: c[lang], u: categoryPath(c.id, lang), s: PAGE_LABELS[lang].collection })),
        ...visiblePosts().map((x) => ({ t: x.title[lang], u: postPath(x.slug, lang), s: x.category?.[lang] || '' })),
      ],
    };
    await writeFile(path.join(OUT, `data/search-${lang}.json`), JSON.stringify(search));
  }

  const alt = (u) => LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(u[l])}"/>`).join('\n') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(u.vi)}"/>`;
  await writeFile(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.flatMap((u) => LANGS.map((l) => `  <url>\n    <loc>${abs(u[l])}</loc>\n${alt(u)}\n  </url>`)).join('\n')}
</urlset>
`);
  await writeFile(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\n\nSitemap: ${abs('/sitemap.xml')}\n`);
  await writeFile(path.join(OUT, 'site.webmanifest'), JSON.stringify({
    name: 'T Gold – Luxury Jewelry', short_name: 'T Gold', start_url: '/', display: 'standalone',
    background_color: '#080605', theme_color: '#080605',
    icons: [{ src: '/assets/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/brand/icon-512.png', sizes: '512x512', type: 'image/png' }],
  }, null, 2));
  await writeFile(path.join(OUT, '.htaccess'), HTACCESS);

  // Tráo thư mục: khách đang xem không bao giờ gặp bản build dở dang
  const OLD = `${DIST}.old-${process.pid}-${t0}`;
  if (existsSync(DIST)) await rename(DIST, OLD);
  await rename(OUT, DIST);
  await rm(OLD, { recursive: true, force: true });

  const pages = urls.length * LANGS.length + LANGS.length + pages3d;
  return { pages, ms: Date.now() - t0, version: layout.version, from: path.relative(ROOT, from) || '.', endpoint: site.form?.endpoint };
}

const HTACCESS = `# T Gold — cấu hình cho hosting tĩnh (Apache / LiteSpeed)
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  # Form Đặt lịch → PHP (khi không chạy server Node)
  RewriteRule ^api/booking/?$ /api/booking.php [L]
  # 404 riêng cho bản tiếng Anh
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^en/ /en/404.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml application/xml text/plain
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 30 days"
  ExpiresByType image/avif "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType video/mp4 "access plus 30 days"
  ExpiresByType model/gltf-binary "access plus 30 days"
</IfModule>

AddType model/gltf-binary .glb

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>
`;
