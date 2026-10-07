// TRANG SẢN PHẨM /san-pham/[slug] — thư viện ảnh/video, mô tả, lựa chọn cấu hình, thông số, cam kết, sản phẩm liên quan
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { ROOT } from '../lib/env.js';
import { url, esc, nl, icon, bigIcon, media, mono, config, productPath, abs, categoryPath, model3dPath, jsonScript, MODEL3D_METALS, MODEL3D_APPS } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { productCard } from '../partials/product-card.js';
import { breadcrumb, breadcrumbLd, promises, zaloHref } from '../partials/blocks.js';
import { catalog, visibleProducts, visiblePosts, categoryOf, model3dOf, visibleModels3d, posterSrcset } from '../lib/content.js';
import { postCardMini } from './materials.js';
import { viewerLabels } from './model3d.js';
import C from '../i18n/common.js';

const T = {
  vi: {
    coll: 'Bộ sưu tập', choose: 'Chọn cấu hình', karat: 'Tuổi vàng', color: 'Màu vàng', gem: 'Loại đá quý',
    current: 'Cấu hình đang chọn', consult: 'Tư vấn cấu hình', zalo: 'Nhắn Zalo', save: 'Lưu món này', saved: 'Đã lưu',
    fixedTitle: 'Thông số mẫu có sẵn', consultPiece: 'Tư vấn mẫu này', gemShort: 'Đá quý', moreQ: 'Muốn {x} khác?', moreCta: 'Custom mẫu này', or: 'hoặc',
    words: { karat: 'tuổi vàng', color: 'màu vàng', gem: 'đá quý', size: 'size' },
    specs: 'Thông số', weight: 'Trọng lượng vàng', weightDefault: 'Cân & ghi rõ theo cấu hình đã chốt', gemSpecs: 'Thông số đá quý',
    certs: 'Giấy kiểm định', certsDefault: 'Theo loại đá quý đã chọn', customizable: 'Custom', yes: 'Có thể điều chỉnh theo yêu cầu', no: 'Theo mẫu có sẵn',
    noGem: 'Không đính đá quý', related: 'Có thể bạn <em>cũng thích</em>', gallery: 'Thư viện ảnh', view: 'Xem ảnh',
    galleryPrev: 'Xem ảnh trước', galleryNext: 'Xem ảnh tiếp theo', galleryCarousel: 'Thư viện dạng cuộn', gallerySlide: 'Mục',
    ph: ['Ảnh sản phẩm', 'Nền đen, 1 nguồn sáng, bắt sáng đá quý'], phAlt: ['Góc nghiêng', 'Đeo trên người', 'Cận cảnh đá quý'],
    fine: 'Giá được báo chính xác theo trọng lượng vàng và thông số đá quý thực tế của cấu hình bạn chọn.',
    journal: 'Đọc thêm trên Tạp chí', journalAll: 'Tạp chí',
    view3d: 'Xem 3D', loading3d: 'Đang tải 3D…', tag3d: '3D', edit3d: 'Tự tuỳ chỉnh lại', edit3dHint: 'Mở đúng mẫu này trong công cụ 3D: đổi kiểu dáng, đá quý, chữ khắc… rồi gửi thiết kế cho T Gold.', design3d: 'Tự thiết kế bản 3D của bạn', design3dHint: 'Chọn kiểu dáng, đá quý và chi tiết rồi gửi thiết kế cho T Gold.',
  },
  en: {
    coll: 'Collection', choose: 'Choose your configuration', karat: 'Gold karat', color: 'Gold color', gem: 'Gemstone',
    current: 'Current configuration', consult: 'Inquire about this configuration', zalo: 'Message on Zalo', save: 'Save this piece', saved: 'Saved',
    fixedTitle: 'Ready-made specifications', consultPiece: 'Inquire about this piece', gemShort: 'Gemstone', moreQ: 'Prefer a different {x}?', moreCta: 'Customize this piece', or: 'or',
    words: { karat: 'karat', color: 'gold color', gem: 'gemstone', size: 'size' },
    specs: 'Specifications', weight: 'Gold weight', weightDefault: 'Weighed & stated per final configuration', gemSpecs: 'Gemstone specs',
    certs: 'Certification', certsDefault: 'According to the chosen gemstone', customizable: 'Custom', yes: 'Can be tailored on request', no: 'As designed',
    noGem: 'No gemstones', related: 'You may <em>also like</em>', gallery: 'Gallery', view: 'View image',
    galleryPrev: 'View previous image', galleryNext: 'View next image', galleryCarousel: 'Carousel', gallerySlide: 'Slide',
    ph: ['Product photo', 'Black backdrop, single key light, gemstones catching the light'], phAlt: ['Side angle', 'On-body shot', 'Gemstone close-up'],
    fine: 'Pricing is quoted precisely from the actual gold weight and gemstone specifications of your configuration.',
    journal: 'More in the Journal', journalAll: 'Journal',
    view3d: 'View in 3D', loading3d: 'Loading 3D…', tag3d: '3D', edit3d: 'Customize this design', edit3dHint: 'Opens this exact design in our 3D tool (in Vietnamese) to change the style, gemstones and engraving, then send it to T Gold.', design3d: 'Design your own in 3D', design3dHint: 'Choose the style, gemstones and details, then send your design to T Gold.',
  },
};

const radio = (name, items, checked) => items
  .map(([v, label, sw]) => `<label class="o"><input type="radio" name="${name}" value="${esc(v)}" data-label="${esc(label)}"${v === checked ? ' checked' : ''}><span>${sw ? `<i style="background:${esc(sw)}"></i>` : ''}${esc(label)}</span></label>`)
  .join('');

// Mẫu tách từ công cụ tự thiết kế (vd. 14 mẫu nhẫn cưới): tệp <mã>.json cạnh <mã>.glb ghi "thietKe": "nhan-cuoi.html#mau=<mã>"
// → nút "Tự tuỳ chỉnh lại" mở trang công cụ đó (mục Công cụ tự thiết kế đang hiện trong CMS) với sẵn mẫu này. Không có công cụ đang hiện → không có nút.
function designLink(m) {
  if (!m?.src?.startsWith('/3d/models/') || m.src.includes('..')) return '';
  let meta; try { meta = JSON.parse(readFileSync(path.join(ROOT, 'public', m.src.replace(/\.glb$/i, '.json')), 'utf8')); } catch { return ''; }
  const [file, hash = ''] = String(meta?.thietKe || '').split('#');
  const id = Object.keys(MODEL3D_APPS).find((k) => `${MODEL3D_APPS[k].file}.html` === file);
  const app = id && existsSync(path.join(ROOT, '3d-app', file)) && visibleModels3d().find((x) => x.kind === 'app' && x.app === id);
  return app ? `${model3dPath(app.slug, 'vi')}${hash ? `#${hash}` : ''}` : '';
}
// thêm màu vàng / đá quý / tuổi vàng khách đang chọn vào link công cụ (công cụ tự bỏ giá trị không hợp lệ)
const withPick = (base, pick) => { const q = new URLSearchParams(Object.entries(pick).filter(([, v]) => v)).toString(); return q ? `${base}${base.includes('#') ? '&' : '#'}${q}` : base; };

// Khung xem 3D trong thư viện ảnh: chỉ tải khi khách bấm “Xem 3D” (hoặc ảnh thu nhỏ 3D); màu vàng / loại đá quý theo lựa chọn ở cột bên phải
function viewer3dScript(m, p, colors, lang, ver) {
  const metals = colors.filter((c) => MODEL3D_METALS.includes(c));
  const v = ver.models?.[m.slug];
  // đôi nhẫn: view + start 1.04 = đúng thông số chụp ảnh đại diện 4:5 ("3D's Products"/tools/chup-goi-y.mjs VIEW/START) → vào trang, khung 3D trùng khít ảnh; thanh công cụ nằm ngang góc trên (.is-pair) để không che nhẫn
  const cfg = {
    src: `${m.src}${v ? `?v=${v}` : ''}`, viewer: `/3d/viewer3d.js${ver.viewer ? `?v=${ver.viewer}` : ''}`, metal: metals.includes(m.metal) ? m.metal : metals[0] || 'vang-trang', gem: m.gem || undefined, tilt: !!m.tilt,
    metals, swatches: Object.fromEntries(metals.map((c) => [c, catalog.goldColors[c]?.swatch || '#ccc'])), metalNames: Object.fromEntries(metals.map((c) => [c, catalog.goldColors[c]?.[lang] || c])),
    labels: viewerLabels(lang), extra: m.view === 'pair' ? { view: [0.1, 0.45, 1], start: 1.04, fitWidth: true, metal2: m.metal2 || 'vang-hong', innerGem: m.innerGem || 'ruby' } : {},
  };
  return `<link rel="stylesheet" href="/3d/viewer3d.css${ver.viewer ? `?v=${ver.viewer}` : ''}">
<script type="module">
const cfg = ${jsonScript(cfg)};
const slide = document.querySelector('[data-m3d-slide]'), form = document.querySelector('[data-conf-form]');
const pick = (n) => form && form.querySelector('input[name="' + n + '"]:checked')?.value;
const edit = document.querySelector('[data-m3d-edit]');
const syncEdit = () => { if (!edit) return; const c = pick('color'); const q = new URLSearchParams(Object.entries({ metal: cfg.metals.includes(c) ? c : '', gem: pick('gem'), karat: pick('karat') }).filter(([, x]) => x)).toString(); const b = edit.dataset.base; edit.href = q ? b + (b.includes('#') ? '&' : '#') + q : b; };
if (form) form.addEventListener('change', syncEdit);
if (slide) {
  const host = slide.querySelector('.m3d-host'), go = slide.querySelector('[data-m3d-open]'); let v = null, busy = false;
  // vào trang là bật khung 3D (ảnh 3D hiện tới khi khung sẵn sàng); máy đang bật tiết kiệm dữ liệu thì chờ khách bấm "Xem 3D"
  const open = async () => {
    if (v || busy) return; busy = true; slide.classList.add('is-loading'); go.lastChild.textContent = ' ' + go.dataset.loading;
    try {
      const { createViewer } = await import(cfg.viewer);
      host.hidden = false; slide.classList.add('is-live');
      new MutationObserver((_, o) => { if (host.classList.contains('is-ready')) { slide.classList.add('is-ready'); slide.classList.remove('is-loading'); o.disconnect(); } }).observe(host, { attributes: true, attributeFilter: ['class'] });
      const c0 = pick('color'); const g0 = pick('gem');
      v = createViewer(host, { src: cfg.src, metal: cfg.metals.includes(c0) ? c0 : cfg.metal, gem: g0 || cfg.gem, tilt: cfg.tilt, metals: cfg.metals, swatches: cfg.swatches, metalNames: cfg.metalNames, labels: cfg.labels || undefined, ...cfg.extra });
    } catch (e) { busy = false; v = null; host.hidden = true; slide.classList.remove('is-loading', 'is-live'); go.lastChild.textContent = ' ' + go.dataset.label; }
  };
  go.addEventListener('click', open);
  document.querySelector('[data-thumb][data-is3d]')?.addEventListener('click', () => setTimeout(open, 0));
  slide.closest('[data-gallery]')?.addEventListener('tg:gallery-change', (e) => { if (String(e.detail?.index) === slide.closest('[data-slide]')?.dataset.slide) open(); });
  if (!navigator.connection?.saveData) open();
  if (form) form.addEventListener('change', (e) => { if (!v) return; if (e.target.name === 'color' && cfg.metals.includes(e.target.value)) v.setMetal(e.target.value); else if (e.target.name === 'gem') v.setGem(e.target.value); });
  host.addEventListener('tg3d:metal', (e) => { const i = form && form.querySelector('input[name="color"][value="' + e.detail + '"]'); if (i && !i.checked) { i.checked = true; i.dispatchEvent(new Event('change', { bubbles: true })); } });
}
</script>`;
}

// ver: { viewer, models } — mã phiên bản khung xem & tệp 3D (trang có khung 3D khi sản phẩm gắn mẫu 3D)
export function renderProduct(p, lang, ver = {}) {
  const t = T[lang];
  const name = p.name[lang];
  const cat = categoryOf(p.category);
  const alt = { vi: productPath(p.slug, 'vi'), en: productPath(p.slug, 'en') };
  const zalo = zaloHref();
  const karats = p.gold_karats || [];
  const colors = (p.gold_colors || []).filter((c) => catalog.goldColors[c]);
  const gems = (p.gemstones || []).filter((g) => catalog.gemstones[g]);
  const k0 = karats.includes('18K') ? '18K' : karats[karats.length - 1];
  // Mẫu 3D gắn vào sản phẩm (mục Sản phẩm 3D trong CMS): kind 'model' → khung xem 3D trong thư viện; kind 'app' → nút mở công cụ tự thiết kế
  const m3 = model3dOf(p.model3d);
  const m3d = m3 && m3.kind !== 'app' ? m3 : null;
  const m3app = m3?.kind === 'app' ? m3 : null;
  // có mẫu 3D: màu vàng & đá quý chọn sẵn theo mẫu (như ảnh đại diện 3D) nếu sản phẩm có lựa chọn đó; không thì lựa chọn đầu tiên
  const c0 = m3d && colors.includes(m3d.metal) ? m3d.metal : colors[0], g0 = m3d && gems.includes(m3d.gem) ? m3d.gem : gems[0], s0 = p.sizes?.default || p.sizes?.options?.[0];
  // Từ 2 màu vàng: “phối màu” (mẫu nhiều màu vàng — ghi liền “Vàng trắng & Vàng hồng”, khách không chọn) hay “khách chọn một màu”.
  // CMS: Sản phẩm → Chất liệu → “Khi có từ 2 màu vàng” (gold_colors_mode: '' tự nhận · 'mix' · 'choice').
  // Tự nhận: mẫu có sẵn — tuổi vàng, đá quý, size đều không có gì để chọn — thì coi là phối màu.
  const colorMix = colors.length > 1 && (p.gold_colors_mode === 'mix' || (p.gold_colors_mode !== 'choice' && karats.length <= 1 && gems.length <= 1 && (p.sizes?.options?.length || 0) <= 1));
  const colorNames = colors.map((c) => catalog.goldColors[c][lang]).join(' & ');
  const goldLabel = (c, k) => { const nm = colorMix ? colorNames : catalog.goldColors[c]?.[lang]; return lang === 'vi' ? `${nm || 'Vàng'} ${k}` : `${k} ${(nm || 'gold').toLowerCase()}`; };
  const summary = [name, goldLabel(c0, k0), g0 && catalog.gemstones[g0][lang], s0].filter(Boolean).join(' · ');

  // Khối cấu hình. Mục chỉ có một giá trị (mẫu có sẵn — không có gì để chọn) hiện trong “tem thông số”; mục có từ 2 lựa chọn là nút chọn.
  // Giá trị của mục cố định vẫn nằm trong form (radio ẩn, đã chọn) → dòng tóm tắt, link tư vấn, khung 3D và site.js đọc như cũ.
  const groups = [
    karats.length && { key: 'karat', label: t.karat, short: t.karat, out: k0, cur: k0, items: karats.map((k) => [k, k]) },
    // phối màu → một giá trị duy nhất (phần tử thứ 4: từng màu kèm chấm màu để hiện trong tem); giá trị form vẫn là màu mặc định c0
    colors.length && { key: 'color', label: t.color, short: t.color, out: esc(catalog.goldColors[c0][lang]), cur: c0, items: colorMix ? [[c0, colorNames, '', colors.map((c) => [catalog.goldColors[c][lang], catalog.goldColors[c].swatch])]] : colors.map((c) => [c, catalog.goldColors[c][lang], catalog.goldColors[c].swatch]) },
    gems.length && { key: 'gem', label: t.gem, short: t.gemShort, out: esc(catalog.gemstones[g0][lang]), cur: g0, items: gems.map((g) => [g, catalog.gemstones[g][lang]]) },
    p.sizes?.options?.length && { key: 'size', label: esc(p.sizes.label?.[lang] || 'Size'), short: esc(p.sizes.label?.[lang] || 'Size'), out: esc(s0), cur: s0, items: p.sizes.options.map((s) => [s, s]) },
  ].filter(Boolean);
  const fixed = groups.filter((g) => g.items.length === 1), hasChoice = groups.some((g) => g.items.length > 1);
  const pickGroup = (key) => { const g = groups.find((x) => x.key === key && x.items.length > 1); return g ? `<fieldset class="og"><legend><span>${g.label}</span><b data-out="${g.key}">${g.out}</b></legend><div class="opt">${radio(g.key, g.items, g.cur)}</div></fieldset>` : ''; };
  const confTitle = fixed.length && !hasChoice ? t.fixedTitle : t.choose;
  const fixedStrip = fixed.length ? `<dl class="pdp-fixed${fixed.some((g) => String(g.items[0][1]).length > 12) ? ' is-long' : ''}${fixed.some((g) => g.items[0][3]) ? ' has-mix' : ''}" data-n="${fixed.length}"${fixed.map((g) => (g.items[0][3] ? ` data-mix="${g.items[0][3].length}"` : '')).join('')}>${fixed.map((g) => { const [v, label, sw, parts] = g.items[0]; const dot = (s) => `<i style="background:${esc(s)}"></i>`; const shown = parts ? parts.map(([nm, s], i) => `<span>${dot(s)}${esc(nm)}${i < parts.length - 1 ? ' &amp;' : ''}</span>`).join(' ') : sw ? `<span>${dot(sw)}${esc(label)}</span>` : esc(label); return `<div${parts ? ' class="mix"' : ''}><dt>${g.short}</dt><dd>${shown}<input type="radio" name="${g.key}" value="${esc(v)}" data-label="${esc(label)}" checked hidden></dd></div>`; }).join('')}</dl>` : '';
  const orList = (xs) => (xs.length > 1 ? `${xs.slice(0, -1).join(', ')} ${t.or} ${xs.at(-1)}` : xs[0]);
  // Sản phẩm bật Custom trong CMS: gợi ý đổi các thông số đang cố định → form gửi ý tưởng ở trang Custom (kèm tên món + cấu hình)
  const fixedMore = fixed.length && p.customizable ? `<p class="pdp-more">${t.moreQ.replace('{x}', orList(fixed.map((g) => t.words[g.key])))} <a href="${url('custom', lang)}?piece=${p.slug}&amp;config=${encodeURIComponent(summary)}#gui-y-tuong">${t.moreCta} <span aria-hidden="true">→</span></a></p>` : '';

  // Thư viện: ảnh thật nếu có; không thì 4 khung placeholder
  const imgs = (p.images || []).filter((i) => i?.src);
  let slides = imgs.length
    ? imgs.map((im, i) => media({ src: im.src, srcset: im.srcset, sizes: '(min-width: 1024px) 50vw, 100vw', alt: im.alt?.[lang] || name, eager: i === 0 && !m3d }))
    : m3d ? [] : [media({ label: t.ph[0], desc: t.ph[1], alt: name, eager: true }), ...t.phAlt.map((l, i) => media({ label: l, icon: i === 1 ? 'camera' : 'gem', alt: `${name} — ${l}` }))];
  if (p.video) slides.push(`<div class="media"><video src="${esc(p.video)}" controls playsinline preload="none" aria-label="${esc(name)}"></video></div>`);
  // ảnh thu nhỏ song song với slides (mặc định: ảnh thật hoặc biểu tượng)
  const thumbs = slides.map((_, i) => (imgs[i] ? `<img src="${esc(imgs[i].src)}" alt="" loading="lazy">` : bigIcon(i === 2 ? 'camera' : 'gem')));
  let thumb3d = -1;
  const edit3d = m3d ? designLink(m3d) : '';
  if (m3d) {
    // khung 3D là khung đầu tiên của thư viện và tự bật khi vào trang (ảnh thật xếp sau)
    const ps = posterSrcset(m3d.poster);
    const slide3d = `<div class="media poster3d m3d-slide${m3d.view === 'pair' ? ' is-pair' : ''}" data-m3d-slide>${m3d.poster ? `<img src="${esc(m3d.poster)}"${ps ? ` srcset="${esc(ps)}" sizes="(min-width: 1024px) 50vw, 100vw"` : ''} alt="${esc(name)} — 3D" fetchpriority="high" decoding="async">` : ''}<button type="button" class="m3d-go" data-m3d-open data-label="${t.view3d}" data-loading="${t.loading3d}"><span aria-hidden="true">◈</span> ${t.view3d}</button><div class="m3d-host" hidden></div></div>`;
    const th = `${m3d.poster ? `<img src="${esc(ps ? ps.split(' ')[0] : m3d.poster)}" alt="" loading="lazy">` : ''}<b class="t3d">${t.tag3d}</b>`;
    slides = [slide3d, ...slides]; thumbs.unshift(th); thumb3d = 0;
  }

  const specs = [
    [t.karat, karats.join(' · ')],
    [t.color, colors.map((c) => catalog.goldColors[c][lang]).join(colorMix ? ' & ' : ' · ')],
    [t.weight, p.weight_note?.[lang] || t.weightDefault],
    [t.gem, gems.length ? gems.map((g) => catalog.gemstones[g][lang]).join(' · ') : t.noGem],
    [t.gemSpecs, p.gemstone_specs?.[lang] || (gems.length ? '' : t.noGem)],
    [t.certs, (p.certificates || []).join(' · ') || (gems.length ? t.certsDefault : '—')],
    [t.customizable, p.customizable ? t.yes : t.no],
  ].filter(([, v]) => v);

  const related = [
    ...visibleProducts().filter((x) => x.slug !== p.slug && x.category === p.category),
    ...visibleProducts().filter((x) => x.slug !== p.slug && x.category !== p.category).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
  ].slice(0, 4);

  // Gợi ý 3 bài Tạp chí: ưu tiên bài nhắc tới danh mục của sản phẩm (tên danh mục trong tiêu đề / đoạn dẫn / nội dung), còn lại lấy bài mới nhất
  const keys = String(cat?.vi || '').toLowerCase().split(/\s*&\s*/).filter((k) => k.length > 2);
  const hits = (s, k) => String(s || '').toLowerCase().split(k).length - 1;
  const score = (x) => keys.reduce((n, k) => n + 6 * hits(x.title?.vi, k) + 3 * hits(x.excerpt?.vi, k) + Math.min(4, hits(x.body?.vi, k)), 0);
  const posts = visiblePosts().map((x, i) => ({ x, i, s: score(x) })).sort((a, b) => b.s - a.s || a.i - b.i).slice(0, 3).map((o) => o.x);

  const crumbs = [[t.coll, url('collection', lang)], ...(cat ? [[esc(cat[lang]), categoryPath(cat.id, lang)]] : []), [esc(name)]];
  const badges = (p.badges || []).filter((b) => catalog.badges[b]).map((b) => `<span class="badge static">${esc(catalog.badges[b][lang])}</span>`).join('');

  const body = `
${breadcrumb(crumbs, lang)}
<section class="pdp wrap" aria-labelledby="pdp-title">
  <div class="pdp-gallery" data-gallery role="region" aria-label="${t.gallery}"${slides.length > 1 ? ` aria-roledescription="${t.galleryCarousel}"` : ''}>
    <div class="pdp-main"${slides.length > 1 ? ` tabindex="0" aria-label="${t.gallery}"` : ''}>${slides.map((s, i) => `<div class="slide" data-slide="${i}" role="group" aria-roledescription="${t.gallerySlide}" aria-label="${i + 1} / ${slides.length}"${i ? ' hidden' : ''}>${s}</div>`).join('')}${slides.length > 1 ? `
      <button type="button" class="pdp-gallery-nav is-prev" data-gallery-prev aria-label="${t.galleryPrev}">${icon('arrow', 'ico flip')}</button>
      <button type="button" class="pdp-gallery-nav is-next" data-gallery-next aria-label="${t.galleryNext}">${icon('arrow')}</button>
      <span class="pdp-gallery-count" data-gallery-count aria-live="polite" aria-atomic="true">1/${slides.length}</span>` : ''}</div>
    ${slides.length > 1 ? `<div class="pdp-thumbs" role="group" aria-label="${t.gallery}">${slides.map((_, i) => `<button type="button" class="thumb${i === thumb3d ? ' is-3d' : ''}" data-thumb="${i}"${i === thumb3d ? ' data-is3d' : ''} aria-pressed="${i === 0}" aria-label="${i === thumb3d ? t.view3d : `${t.view} ${i + 1}`}">${thumbs[i]}</button>`).join('')}<span class="thumbs-seal" aria-hidden="true">${mono('mono', '', 26)}<span class="latin">WORTH, MADE VISIBLE</span></span></div>` : ''}
  </div>

  <div class="pdp-info">
    <div class="pdp-top">${badges}<p class="kick">${cat ? esc(cat[lang]) : ''}</p></div>
    <h1 class="disp pdp-title" id="pdp-title">${esc(name)}</h1>
    <p class="pdp-cfg">${esc(p.config[lang])}</p>
    ${p.description?.[lang] ? `<p class="lead pdp-desc">${nl(p.description[lang])}</p>` : ''}

    <form class="pdp-conf" data-conf-form data-model="${esc(name)}" aria-label="${confTitle}">
      <p class="kick">${confTitle}</p>${fixedStrip}${fixedMore}
      ${pickGroup('karat')}
      ${pickGroup('color')}
      ${pickGroup('gem')}
      ${pickGroup('size')}
      <p class="sum" aria-live="polite"${hasChoice ? '' : ' hidden'}>${t.current}: <b data-conf-summary>${esc(summary)}</b></p>
      <div class="btns">
        <a class="btn g" data-conf-send data-base="${url('contact', lang)}?piece=${p.slug}" href="${url('contact', lang)}?piece=${p.slug}&amp;config=${encodeURIComponent(summary)}#dat-lich">${hasChoice ? t.consult : t.consultPiece}</a>
        <a class="btn l" href="${zalo || `${url('contact', lang)}#dat-lich`}"${zalo ? ' target="_blank" rel="noopener"' : ''}>${t.zalo}</a>
      </div>
      ${edit3d ? `<div class="m3d-edit"><a class="btn l" data-m3d-edit data-base="${esc(edit3d)}" href="${esc(withPick(edit3d, { metal: MODEL3D_METALS.includes(c0) ? c0 : '', gem: g0, karat: k0 }))}">${icon('pen')}${t.edit3d} <span aria-hidden="true">→</span></a><p class="fine">${t.edit3dHint}</p></div>` : ''}
      <button type="button" class="save-line" data-save="${p.slug}" data-name="${esc(name)}" data-cfg="${esc(p.config[lang])}" data-href="${productPath(p.slug, lang)}" aria-pressed="false" aria-label="${C[lang].saveThis}: ${esc(name)}">${icon('bookmark')}<span data-save-text data-on="${t.saved}" data-off="${t.save}">${t.save}</span></button>
      <p class="fine">${t.fine}</p>
    </form>
    ${m3app ? `<div class="m3d-app"><a class="btn l" href="${model3dPath(m3app.slug, 'vi')}">${t.design3d} <span aria-hidden="true">→</span></a><p class="fine">${t.design3dHint}</p></div>` : ''}

    <ul class="promise">
      ${promises(lang).map(([ic, h, d]) => `<li>${bigIcon(ic)}<div><b>${h}</b><span>${d}</span></div></li>`).join('')}
    </ul>
  </div>
</section>

<section class="pdp-spec wrap" aria-labelledby="spec-title">
  <h2 class="kick" id="spec-title">${t.specs}</h2>
  <dl class="spec">${specs.map(([k, v]) => `<div class="r"><dt>${k}</dt><dd>${nl(v)}</dd></div>`).join('')}</dl>
</section>

${related.length ? `<section class="related wrap" aria-labelledby="rel-title">
  <h2 class="disp h2" id="rel-title">${t.related}</h2>
  <div class="products grid-rel">${related.map((x) => productCard(x, lang)).join('')}</div>
</section>` : ''}
${posts.length ? `<section class="journal-strip wrap" aria-labelledby="read-title">
  <div class="shead"><div><h2 class="kick" id="read-title">${t.journal}</h2></div><a class="link" href="${url('journal', lang)}">${t.journalAll}</a></div>
  <ul class="posts">${posts.map((x) => postCardMini(x, lang)).join('')}</ul>
</section>` : ''}
${m3d ? viewer3dScript(m3d, p, colors, lang, ver) : ''}`;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: p.description?.[lang] || p.config[lang],
    brand: { '@type': 'Brand', name: 'T Gold' },
    category: cat?.[lang],
    url: abs(productPath(p.slug, lang)),
    image: imgs.length ? imgs.map((i) => abs(i.src)) : m3d?.poster ? [abs(m3d.poster)] : [abs(`/assets/brand/og-${lang}.jpg`)],
    material: [...karats.map((k) => (lang === 'vi' ? `Vàng ${k}` : `${k} gold`)), ...gems.map((g) => catalog.gemstones[g][lang])].join(', '),
    sku: p.slug,
  };
  const desc = `${name} — ${p.config[lang]}. ${p.description?.[lang] || ''}`.replace(/\s+/g, ' ').slice(0, 158);
  return layout({
    lang, page: 'collection', alt, body,
    title: `${name} · ${p.config[lang]} | T Gold – Luxury Jewelry`,
    description: desc,
    ogImage: imgs[0]?.src || m3d?.poster || undefined,
    jsonld: [ld, breadcrumbLd(crumbs.map(([n, h]) => [n, h]), lang)],
  });
}

// Sản phẩm gắn với công cụ tự thiết kế 3D: thẻ sản phẩm đã trỏ thẳng tới công cụ; địa chỉ /san-pham/<slug>/ (link cũ, link đã lưu) chỉ chuyển tiếp sang đó
export function renderProductRedirect(p, lang, app) {
  const to = model3dPath(app.slug, 'vi');
  const name = p.name[lang];
  const txt = lang === 'vi' ? `Đang mở công cụ tự thiết kế “${name}”…` : `Opening the 3D design tool “${name}”…`;
  const link = lang === 'vi' ? 'Bấm vào đây nếu trang không tự mở' : 'Tap here if the page does not open';
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(name)} | T Gold – Luxury Jewelry</title>
<meta name="robots" content="noindex,follow"><link rel="canonical" href="${abs(to)}">
<meta http-equiv="refresh" content="0;url=${to}"><script>location.replace(${jsonScript(to)});</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#E9E1D8;color:#2a2118;font:16px/1.6 system-ui,sans-serif;text-align:center;padding:24px}a{color:#8a6a2e}</style>
</head><body><p>${esc(txt)}<br><a href="${to}">${link}</a></p></body></html>
`;
}
