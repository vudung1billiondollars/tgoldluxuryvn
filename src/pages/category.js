// TRANG DANH MỤC — /bo-suu-tap/<danh-muc>/ · /en/collection/<category>/
// Mỗi danh mục một URL riêng để Google đi được Trang chủ → Danh mục → Sản phẩm bằng link thật.
import { url, esc, categoryPath, productHref, abs } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { productCard } from '../partials/product-card.js';
import { breadcrumb, breadcrumbLd, pageHero } from '../partials/blocks.js';
import { catalog, visibleProducts } from '../lib/content.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    coll: 'Bộ sưu tập',
    title: (n) => `${n} vàng thật, đá quý thật | T Gold – Luxury Jewelry`,
    description: (n) => `${n} từ vàng 10K · 14K · 18K cùng Moissanite, Lab Diamond hoặc kim cương thiên nhiên — mẫu theo Trend và Custom tại xưởng riêng T Gold, có giấy kiểm định.`,
    h1: (n) => `${n} <em>vàng thật, đá quý thật.</em>`,
    lead: 'Mỗi mẫu ghi rõ tuổi vàng, loại đá quý và giấy kiểm định. Chưa thấy đúng ý? Xưởng T Gold Custom theo size và ý tưởng của bạn.',
    nav: 'Danh mục', all: 'Tất cả', count: 'mẫu',
    emptyH: 'Mẫu mới trong danh mục này đang được cập nhật.',
    emptyP: 'Bạn có thể gửi ý tưởng để xưởng T Gold Custom riêng, hoặc xem các danh mục khác.',
    emptyCta: 'Gửi ý tưởng Custom',
  },
  en: {
    coll: 'Collection',
    title: (n) => `${n} in real gold & real gemstones | T Gold – Luxury Jewelry`,
    description: (n) => `${n} in 10K · 14K · 18K gold set with Moissanite, Lab Diamond or natural diamond — trend-led designs and Custom pieces from the T Gold workshop, with certification.`,
    h1: (n) => `${n} <em>in real gold &amp; real gemstones.</em>`,
    lead: 'Every design states its gold karat, gemstone and certification. Not quite the one? The T Gold workshop can make it Custom to your size and idea.',
    nav: 'Categories', all: 'All', count: 'designs',
    emptyH: 'New designs in this category are on their way.',
    emptyP: 'Send us your idea for a Custom piece, or explore the other categories.',
    emptyCta: 'Send your Custom idea',
  },
};

registerPage('category', T);

export function renderCategory(cat, lang) {
  const t = pageT('category', lang);
  const name = cat[lang];
  const products = visibleProducts().filter((p) => p.category === cat.id)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.featured || 99) - (b.featured || 99) || ((a.created || '') < (b.created || '') ? 1 : -1));
  const alt = { vi: categoryPath(cat.id, 'vi'), en: categoryPath(cat.id, 'en') };
  const crumbs = [[t.coll, url('collection', lang)], [esc(name)]];
  const tabs = [`<a class="tab" href="${url('collection', lang)}">${t.all}</a>`, ...catalog.categories.map((c) =>
    `<a class="tab" href="${categoryPath(c.id, lang)}"${c.id === cat.id ? ' aria-current="page"' : ''}>${esc(c[lang])}</a>`)].join('');

  const body = `
${breadcrumb(crumbs, lang)}
${pageHero({ kick: t.coll, h1: t.h1(esc(name)), lead: t.lead })}
<section class="catalog wrap" aria-labelledby="page-title">
  <nav class="cat-bar" aria-label="${t.nav}"><div class="tabs scroll-x cat-links">${tabs}</div></nav>
  ${products.length ? `
  <p class="count cat-count"><b>${products.length}</b> ${t.count}</p>
  <div class="products products-all cat-grid">${products.map((p) => productCard(p, lang, { headingLevel: 2 })).join('')}</div>` : `
  <div class="cat-empty">
    <h2 class="disp h3">${t.emptyH}</h2>
    <p>${t.emptyP}</p>
    <div class="btns center"><a class="btn g" href="${url('custom', lang)}#gui-y-tuong">${t.emptyCta}</a><a class="btn l" href="${url('collection', lang)}">${t.coll}</a></div>
  </div>`}
</section>`;

  const itemList = {
    '@context': 'https://schema.org', '@type': 'ItemList', name,
    itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(productHref(p, lang)), name: p.name[lang] })),
  };
  return layout({ lang, page: 'collection', title: t.title(name), description: t.description(name), alt, body, jsonld: [itemList, breadcrumbLd(crumbs, lang)] });
}
