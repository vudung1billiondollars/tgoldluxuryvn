// BỘ SƯU TẬP — lưới sản phẩm + bộ lọc (loại món, tuổi vàng, loại đá quý, màu vàng, Custom được) + sắp xếp. Không lọc theo giá.
import { url, esc, icon, config, productHref, abs } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { productCard } from '../partials/product-card.js';
import { pageHero } from '../partials/blocks.js';
import { catalog, visibleProducts } from '../lib/content.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Bộ sưu tập trang sức vàng thật, đá quý thật | T Gold – Luxury Jewelry',
    description: 'Nhẫn nam, dây chuyền, mặt dây, lắc tay, bông tai và nhẫn cưới từ vàng 10K · 14K · 18K, đá quý Moissanite, Lab Diamond, kim cương thiên nhiên. Mẫu theo Trend và Custom tại xưởng T Gold.',
    kick: 'Bộ sưu tập',
    h1: 'Thiết kế xứng với <em>vị thế của bạn.</em>',
    lead: 'Khám phá những thiết kế T Gold được cập nhật theo Trend — từ những mẫu có sẵn đến các lựa chọn có thể Custom theo dấu ấn riêng.',
    all: 'Tất cả', catLabel: 'Loại trang sức',
    filters: 'Bộ lọc', filterLabel: 'Lọc sản phẩm', karat: 'Tuổi vàng', gem: 'Loại đá quý', color: 'Màu vàng',
    customOnly: 'Chỉ hiện mẫu Custom được', clear: 'Xoá bộ lọc', show: 'Xem {n} món', close: 'Đóng bộ lọc',
    count: 'món', sort: 'Sắp xếp', sortFeatured: 'Nổi bật', sortNew: 'Mới nhất',
    emptyH: 'Chưa có mẫu đúng cấu hình này.',
    emptyP: 'Chúng mình có thể Custom riêng theo đúng tuổi vàng, màu vàng và loại đá quý bạn muốn.',
    emptyCta: 'Gửi ý tưởng Custom',
    band: { kick: 'Chưa thấy đúng món?', h: 'Phiên bản cuối cùng <em>do bạn quyết định.</em>', p: 'Điều chỉnh size, màu vàng, tuổi vàng, loại đá quý — hoặc bắt đầu từ một ý tưởng riêng.', cta: 'Khám phá Custom' },
  },
  en: {
    title: 'Collection — real gold, real gemstones | T Gold – Luxury Jewelry',
    description: 'Men’s rings, chains, pendants, bracelets, earrings and wedding rings in 10K · 14K · 18K gold with Moissanite, Lab Diamond or natural diamond. Trend-led designs and Custom pieces from the T Gold workshop.',
    kick: 'Collection',
    h1: 'Designs worthy of <em>your standing.</em>',
    lead: 'Explore T Gold designs updated with the latest trends — from ready-made pieces to options that can be made Custom around your own signature.',
    all: 'All', catLabel: 'Jewelry type',
    filters: 'Filters', filterLabel: 'Filter pieces', karat: 'Gold karat', gem: 'Gemstone', color: 'Gold color',
    customOnly: 'Custom-ready pieces only', clear: 'Clear filters', show: 'Show {n} pieces', close: 'Close filters',
    count: 'pieces', sort: 'Sort', sortFeatured: 'Featured', sortNew: 'Newest',
    emptyH: 'No piece matches this configuration yet.',
    emptyP: 'We can make it Custom — in exactly the karat, gold color and gemstone you want.',
    emptyCta: 'Send your Custom idea',
    band: { kick: 'Not quite the one?', h: 'The final version <em>is yours to decide.</em>', p: 'Adjust the size, gold color, gold purity and gemstone — or begin with an idea of your own.', cta: 'Explore Custom' },
  },
};

registerPage('collection', T, { raw: ['show'] });

const box = (name, value, label, sw = '') =>
  `<label class="chk"><input type="checkbox" name="${name}" value="${esc(value)}"><span>${sw}${label}</span></label>`;

export function renderCollection(lang) {
  const t = pageT('collection', lang);
  const products = visibleProducts();
  const order = [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.featured || 99) - (b.featured || 99) || ((a.created || '') < (b.created || '') ? 1 : -1));
  const alt = { vi: url('collection', 'vi'), en: url('collection', 'en') };
  const cats = catalog.categories.filter((c) => products.some((p) => p.category === c.id));
  const karats = (catalog.karats || ['10K', '14K', '18K']).filter((k) => products.some((p) => p.gold_karats?.includes(k)));
  const gems = Object.entries(catalog.gemstones).filter(([id]) => products.some((p) => p.gemstones?.includes(id)));
  const colors = Object.entries(catalog.goldColors).filter(([id]) => products.some((p) => p.gold_colors?.includes(id)));

  const body = `
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}

<section class="catalog wrap" data-catalog aria-label="${t.kick}">
  <div class="cat-bar">
    <div class="tabs scroll-x" role="group" aria-label="${t.catLabel}">
      <button type="button" class="tab" data-cat-btn="" aria-pressed="true">${t.all}</button>
      ${cats.map((c) => `<button type="button" class="tab" data-cat-btn="${c.id}" aria-pressed="false">${esc(c[lang])}</button>`).join('')}
    </div>
  </div>
  <div class="cat-tools">
    <button type="button" class="btn l sm filters-open" data-filters-open aria-controls="filters" aria-expanded="false">${icon('menu')}<span>${t.filters}</span><span class="fcount" data-filter-count hidden></span></button>
    <p class="count" aria-live="polite"><b data-count>${products.length}</b> ${t.count}</p>
    <label class="sort"><span>${t.sort}</span>
      <select data-sort><option value="featured">${t.sortFeatured}</option><option value="new">${t.sortNew}</option></select>
    </label>
  </div>
  <div class="cat-body">
    <aside class="filters" id="filters" aria-label="${t.filterLabel}" data-filters>
      <div class="filters-head"><p class="kick">${t.filters}</p><button type="button" class="ibtn" data-filters-close aria-label="${t.close}">${icon('close')}</button></div>
      <form data-filter-form>
        <fieldset><legend>${t.karat}</legend><div class="chk-list">${karats.map((k) => box('k', k, k)).join('')}</div></fieldset>
        ${gems.length ? `<fieldset><legend>${t.gem}</legend><div class="chk-list">${gems.map(([id, g]) => box('g', id, esc(g[lang]))).join('')}</div></fieldset>` : ''}
        <fieldset><legend>${t.color}</legend><div class="chk-list">${colors.map(([id, c]) => box('c', id, esc(c[lang]), `<i class="sw" style="background:${esc(c.swatch)}"></i>`)).join('')}</div></fieldset>
        <fieldset><legend class="sr">Custom</legend><label class="switch"><input type="checkbox" name="custom" value="1"><span class="track" aria-hidden="true"></span><span>${t.customOnly}</span></label></fieldset>
        <button type="reset" class="link reset" data-filter-reset>${t.clear}</button>
      </form>
      <div class="filters-foot"><button type="button" class="btn g" data-filters-close data-show-label="${esc(t.show)}">${t.show.replace('{n}', products.length)}</button></div>
    </aside>
    <div class="cat-main">
      <div class="products products-all" data-products>
        ${order.map((p, i) => productCard(p, lang, { order: i, rank: i + 1, headingLevel: 2 })).join('')}
      </div>
      <div class="cat-empty" data-filter-empty hidden>
        <h2 class="disp h3">${t.emptyH}</h2>
        <p>${t.emptyP}</p>
        <div class="btns center"><a class="btn g" href="${url('custom', lang)}#gui-y-tuong">${t.emptyCta}</a><button type="button" class="btn l" data-filter-reset>${t.clear}</button></div>
      </div>
    </div>
  </div>
</section>

<section class="band wrap" aria-labelledby="band-title">
  <div class="band-in rv">
    <p class="kick">${t.band.kick}</p>
    <h2 class="disp h2" id="band-title">${t.band.h}</h2>
    <p class="lead">${t.band.p}</p>
    <a class="btn l" href="${url('custom', lang)}">${t.band.cta}</a>
  </div>
</section>`;

  const itemList = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: t.kick,
    itemListElement: order.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(productHref(p, lang)), name: p.name[lang] })),
  };
  return layout({ lang, page: 'collection', title: t.title, description: t.description, alt, body, jsonld: [itemList] });
}
