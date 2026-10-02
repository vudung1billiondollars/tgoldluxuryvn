// TRANG CHỦ — theo PA7 v3 (đã duyệt 2026-09-26). Toàn bộ chữ, ảnh, link lấy từ content/home.json → sửa trong /admin → Trang chủ.
// Thứ tự: Hero 4 slide (1 H1) → Trust strip → Danh mục → Sản phẩm nổi bật → Cách đặt hàng → Custom → Vì sao là T Gold → Tạp chí
import { url, esc, nl, rich, linkAttrs, categoryPath, productHref, postPath, abs, L, mono, icon, media, config } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import C from '../i18n/common.js';
import { catalog, home, visibleProducts, visiblePosts, model3dOf, posterSrcset } from '../lib/content.js';
import { readingTime } from '../lib/markdown.js';

const T = {
  vi: {
    carousel: 'Giới thiệu T Gold', prev: 'Slide trước', next: 'Slide sau', catPrev: 'Danh mục trước', catNext: 'Danh mục tiếp theo', pause: 'Tạm dừng tự lướt', play: 'Tiếp tục tự lướt', of: 'trên',
    trust: 'Cam kết của T Gold', cats: 'Danh mục sản phẩm', count: (n) => `${n} mẫu`, soon: 'Mẫu mới đang cập nhật', photoSoon: 'Ảnh thật đang cập nhật',
    view: 'Chi tiết', read: 'Đọc bài', min: 'phút đọc', journalCats: 'Chuyên mục Tạp chí',
    phProd: ['Ảnh sản phẩm', 'Tải ảnh thật trong /admin → Sản phẩm'], phPost: 'Ảnh bài viết',
  },
  en: {
    carousel: 'Introducing T Gold', prev: 'Previous slide', next: 'Next slide', catPrev: 'Previous categories', catNext: 'Next categories', pause: 'Pause autoplay', play: 'Resume autoplay', of: 'of',
    trust: 'T Gold commitments', cats: 'Product categories', count: (n) => `${n} ${n === 1 ? 'design' : 'designs'}`, soon: 'New designs coming soon', photoSoon: 'Photos coming soon',
    view: 'Details', read: 'Read', min: 'min read', journalCats: 'Journal topics',
    phProd: ['Product photo', 'Upload real photos in /admin → Products'], phPost: 'Article image',
  },
};

// Icon nét mảnh cho trust strip (chọn trong CMS)
export const TRUST_ICONS = {
  gem: '<path d="M9 5h14l5 7-12 15L4 12z"/><path d="M4 12h24M12 5l-2 7 6 15 6-15-2-7"/>',
  workshop: '<path d="M5 13h16l-3 5H9z"/><path d="M21 13h6M14 18v6M9 27h11"/><path d="M8 13V8h8v5"/>',
  pen: '<path d="M20 5l7 7-14 14H6v-7z"/><path d="M17 8l7 7"/>',
  shield: '<path d="M16 4l10 4v7c0 7-4.5 11-10 13-5.5-2-10-6-10-13V8z"/><path d="M11.5 16l3 3 6-6"/>',
  cert: '<rect x="6" y="5" width="20" height="22" rx="2"/><path d="M10 11h12M10 15h12M10 19h6"/><circle cx="22" cy="22" r="3"/>',
  ring: '<circle cx="16" cy="19" r="8"/><path d="M12 7h8l3 4-7 4-7-4z"/>',
  spark: '<path d="M16 4c.7 5.5 2.8 7.6 8.3 8.3-5.5.7-7.6 2.8-8.3 8.3-.7-5.5-2.8-7.6-8.3-8.3C13.2 11.6 15.3 9.5 16 4z"/><path d="M25 21c.3 2 1.1 2.8 3.1 3.1-2 .3-2.8 1.1-3.1 3.1-.3-2-1.1-2.8-3.1-3.1 2-.3 2.8-1.1 3.1-3.1z"/>',
  clock: '<circle cx="16" cy="16" r="11"/><path d="M16 10v6l4 2.5"/>',
};

const L2 = (o, lang) => (o && typeof o === 'object' ? o[lang] || o.vi || '' : o || '');
const focus = (im) => (/^\d{1,3}% \d{1,3}%$/.test(im?.focus || '') ? ` style="object-position:${im.focus}"` : '');

// Ảnh sửa trong CMS: { src, srcset, alt:{vi,en}, focus:'50% 50%' }
function img(im, lang, { sizes = '100vw', eager = false, deferred = false, alt, cls = '', noFocus = false } = {}) {
  if (!im?.src) return '';
  const a = esc(alt ?? L2(im.alt, lang));
  const ss = im.srcset ? ` ${deferred ? 'data-srcset' : 'srcset'}="${esc(im.srcset)}" sizes="${esc(sizes)}"` : '';
  const c = cls ? ` class="${cls}"` : '', fp = noFocus ? '' : focus(im);
  if (deferred) return `<img${c} data-src="${esc(im.src)}"${ss} alt="${a}" decoding="async"${fp}>`;
  return `<img${c} src="${esc(im.src)}"${ss} alt="${a}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${fp}>`;
}
const cta = (c, lang, cls) => (c && L2(c.label, lang) ? `<a class="${cls}" ${linkAttrs(c.link, lang)}>${esc(L2(c.label, lang))}</a>` : '');
// Đoạn mô tả cạnh tiêu đề: trên máy tính xuống dòng tại dấu “—” đầu tiên, dấu “—” mở đầu dòng 2 (theo yêu cầu chủ dự án 2026-09-26)
const leadP = (text) => `<p class="lead">${text.includes('\n') ? nl(text) : esc(text).replace(' — ', '&nbsp;<br class="br-d">—&nbsp;')}</p>`;
// Cột phải là đoạn mô tả → bố cục 2 cột cân đối (shead-lead); là link → giữ kiểu cũ
const shead = (s, lang, id, right = '') => `
  <div class="shead${right.startsWith('<p class="lead"') ? ' shead-lead' : ''} rv">
    <div>${L2(s.kicker, lang) ? `<p class="kick">${esc(L2(s.kicker, lang))}</p>` : ''}<h2 class="disp h2" id="${id}">${rich(L2(s.title, lang))}</h2></div>
    ${right}
  </div>`;

/* ── 01 · Hero ── */
function hero(h, lang) {
  const t = T[lang];
  const slides = (h.slides || []).filter((s) => L2(s.title, lang)).slice(0, 5);
  if (!slides.length) return '';
  const SIZES = '(min-width: 1024px) 64vw, 100vw';
  const photos = slides.map((s, i) => `<div class="hm-p${i ? '' : ' on'}">${img(s.image, lang, { sizes: SIZES, eager: i === 0, deferred: i > 0, alt: '' })}</div>`).join('')
    + '<span class="hm-flash" aria-hidden="true"><svg class="f-pause" viewBox="0 0 24 24"><rect x="7" y="5.5" width="3.4" height="13" rx=".8"/><rect x="13.6" y="5.5" width="3.4" height="13" rx=".8"/></svg><svg class="f-play" viewBox="0 0 24 24"><path d="M8.5 5.8v12.4a.8.8 0 001.2.7l9.8-6.2a.8.8 0 000-1.4L9.7 5.1a.8.8 0 00-1.2.7z"/></svg></span>';
  const body = slides.map((s, i) => {
    const pair = `<span class="l1">${esc(L2(s.title, lang))}</span> <span class="l2">${esc(L2(s.subtitle, lang))}</span>`;
    const head = i === 0
      ? (() => {
        const vis = `${L2(s.kicker, lang) ? `<span class="hk">${esc(L2(s.kicker, lang))}</span> ` : ''}${pair}`;
        // Có tiêu đề H1 đầy đủ (CMS) → trình đọc màn hình đọc câu đầy đủ, mắt vẫn thấy chữ như cũ
        return L2(h.h1, lang) ? `<h1 class="pair"><span class="sr">${esc(L2(h.h1, lang))}</span><span aria-hidden="true">${vis}</span></h1>` : `<h1 class="pair">${vis}</h1>`;
      })()
      : `${L2(s.kicker, lang) ? `<p class="kick">${esc(L2(s.kicker, lang))}</p>` : ''}<h2 class="pair">${pair}</h2>`;
    const ctas = (s.ctas || []).slice(0, 2);
    const acts = ctas.map((c) => cta(c, lang, 'link')).join(' ');
    return `
      <article class="hm-sl${i ? '' : ' on'}" role="group" aria-roledescription="slide" aria-label="${i + 1} ${t.of} ${slides.length}: ${esc(L2(s.nav, lang) || L2(s.title, lang))}"${i ? ' inert' : ''}>
        ${head}
        ${L2(s.text, lang) ? `<p class="lead just">${nl(L2(s.text, lang))}</p>` : ''}
        ${i === 0 && h.tagline ? `<p class="trio latin">${esc(h.tagline)}</p>` : ''}
        ${acts}
      </article>`;
  }).join('');
  const tabs = slides.map((s, i) => `<button type="button" class="hm-tab${i ? '' : ' on'}" data-go="${i}"${i ? '' : ' aria-current="true"'}><span class="n">${String(i + 1).padStart(2, '0')}</span><span class="t">${esc(L2(s.nav, lang) || L2(s.title, lang))}</span><i class="bar"><b></b></i></button>`).join('');
  const dur = Math.max(4, Math.min(15, +h.interval || 7)) * 1000;
  return `
<section class="hero hm-hero" data-slider aria-roledescription="carousel" aria-label="${t.carousel}" style="--dur:${dur}ms">
  <div class="hm-ph" aria-hidden="true">${photos}</div>
  <div class="hm-tx">
    <div class="hm-slides" data-slides aria-live="off">${body}</div>
    ${slides.length > 1 ? `<div class="hm-nav">
      <div class="hm-tabs">${tabs}</div>
      <div class="hm-ctl">
        <button type="button" data-prev aria-label="${t.prev}">${icon('arrow', 'ico flip')}</button>
        <button type="button" data-pause aria-pressed="false" aria-label="${t.pause}" data-l-pause="${t.pause}" data-l-play="${t.play}"><svg class="ico i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg><svg class="ico i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></button>
        <button type="button" data-next aria-label="${t.next}">${icon('arrow')}</button>
      </div>
    </div>` : ''}
  </div>
</section>`;
}

/* ── 02 · Trust strip ── */
const trust = (s, lang) => (s.enabled === false || !s.items?.length ? '' : `
<section class="hm-trust" aria-label="${T[lang].trust}">
  <ul class="wrap">${s.items.slice(0, 4).map((it) => `<li><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">${TRUST_ICONS[it.icon] || TRUST_ICONS.gem}</svg><div><b>${esc(L2(it.title, lang))}</b>${L2(it.text, lang) ? `<span>${nl(L2(it.text, lang))}</span>` : ''}</div></li>`).join('')}</ul>
</section>`);

/* ── 03 · Danh mục (link thật tới trang danh mục) ── */
function categories(s, lang) {
  if (s.enabled === false) return '';
  const t = T[lang];
  const items = (catalog.categories || []).map((c) => {
    const im = s.images?.[c.id];
    const pic = im?.src ? img(im, lang, { sizes: '(min-width: 1024px) 190px, 33vw', alt: '' }) : mono('mono', '', 96);
    return `<li><a class="hm-ct${im?.src ? '' : ' empty'}" href="${categoryPath(c.id, lang)}">${pic}<span class="tx"><b>${esc(c[lang])}</b></span></a></li>`;
  }).join('');
  const arrow = (dir, label) => `<button type="button" class="hm-rail-btn ${dir}" data-rail-${dir} aria-label="${label}" aria-controls="hm-cats">${icon('arrow', dir === 'prev' ? 'ico flip' : 'ico')}</button>`;
  return `
<section class="hm-sec wrap" id="danh-muc" aria-labelledby="hm-cat-t">
  ${shead(s, lang, 'hm-cat-t', L2(s.lead, lang) ? leadP(L2(s.lead, lang)) : cta(s.link, lang, 'link'))}
  <div class="hm-rail rv" data-rail>
    ${arrow('prev', t.catPrev)}
    <ul class="hm-cats" id="hm-cats">${items}</ul>
    ${arrow('next', t.catNext)}
  </div>
</section>`;
}

/* ── 04 · Sản phẩm nổi bật ── */
function featured(s, lang) {
  if (s.enabled === false) return '';
  const t = T[lang];
  const c = C[lang];
  const all = visibleProducts();
  const limit = Math.max(2, Math.min(12, +s.limit || 8));
  let list = (s.products || []).map((slug) => all.find((p) => p.slug === slug)).filter(Boolean);
  if (!list.length) {
    list = [...all].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.featured || 99) - (b.featured || 99) || (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0) || ((a.created || '') < (b.created || '') ? 1 : -1));
  }
  list = list.slice(0, limit);
  if (!list.length) return '';
  const cards = list.map((p) => {
    const im = p.images?.[0];
    const m3 = model3dOf(p.model3d);
    const poster = !im && m3?.poster ? m3.poster : '';
    const href = productHref(p, lang);
    const name = p.name[lang];
    const badge = p.badges?.[0] && catalog.badges?.[p.badges[0]] ? `<span class="badge">${esc(catalog.badges[p.badges[0]][lang])}</span>` : '';
    return `
    <li class="hm-card">
      <div class="hm-card-media">
        ${media({ src: im?.src || poster, srcset: im?.srcset || posterSrcset(poster), sizes: '(min-width: 1024px) 280px, 50vw', alt: im?.alt?.[lang] || name, label: t.phProd[0], desc: t.phProd[1], cls: poster ? 'poster3d' : '' })}
        ${badge}${m3 ? '<span class="tag3d" title="3D">3D</span>' : ''}
        <button type="button" class="save" data-save="${p.slug}" data-name="${esc(name)}" data-cfg="${esc(p.config[lang])}" data-href="${href}" aria-pressed="false" aria-label="${c.saveThis}: ${esc(name)}">${icon('bookmark')}</button>
      </div>
      <div class="tx">
        <h3><a class="stretch" href="${href}">${esc(name)}</a></h3>
        <p class="cfg">${esc(p.config[lang])}</p>
        <p class="foot">${L2(s.priceNote, lang) ? `<span class="pr">${esc(L2(s.priceNote, lang))}</span>` : ''}<span class="go" aria-hidden="true"><span class="t">${t.view}</span>${icon('arrow')}</span></p>
      </div>
    </li>`;
  }).join('');
  return `
<section class="hm-sec wrap" id="noi-bat" aria-labelledby="hm-feat-t">
  ${shead(s, lang, 'hm-feat-t', L2(s.lead, lang) ? leadP(L2(s.lead, lang)) : '')}
  <div class="hm-velvet rv"><ul class="hm-grid">${cards}</ul></div>
  ${s.cta ? `<div class="center mt-l">${cta(s.cta, lang, 'btn l')}</div>` : ''}
</section>`;
}

/* ── 05 · Đã tìm thấy mẫu bạn thích? (Cách đặt hàng) ── */
export function orderSteps(steps, lang, cls = 'hm-steps') {
  return `<ol class="${cls}">${(steps || []).map((st, i) => `<li><span class="n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(L2(st.title, lang))}</h3>${L2(st.text, lang) ? `<p>${nl(L2(st.text, lang))}</p>` : ''}</div></li>`).join('')}</ol>`;
}
function order(s, lang) {
  if (s.enabled === false) return '';
  return `
<section class="hm-sec wrap" id="dat-hang" aria-labelledby="hm-order-t">
  <div class="hm-see">
    ${s.image?.src ? `<div class="hm-photo rv">${img(s.image, lang, { sizes: '(min-width: 1024px) 560px, 100vw' })}</div>` : ''}
    <div class="rv">
      ${L2(s.kicker, lang) ? `<p class="kick">${esc(L2(s.kicker, lang))}</p>` : ''}
      <h2 class="disp h2" id="hm-order-t">${rich(L2(s.title, lang))}</h2>
      ${L2(s.lead, lang) ? `<p class="lead">${nl(L2(s.lead, lang))}</p>` : ''}
      ${orderSteps(s.steps, lang)}
      ${s.cta ? `<div class="btns">${cta(s.cta, lang, 'btn l')}</div>` : ''}
    </div>
  </div>
</section>`;
}

/* ── 06 · Custom ── */
function custom(s, lang) {
  if (s.enabled === false) return '';
  const send = (s.sendItems || []).map((x) => L2(x, lang)).filter(Boolean);
  const flow = (s.flow || []).map((x) => L2(x, lang)).filter(Boolean);
  return `
<section class="hm-sec wrap" id="custom-home" aria-labelledby="hm-custom-t">
  <div class="hm-promo rv">
    ${s.image?.src ? `<div class="hm-photo">${img(s.image, lang, { sizes: '(min-width: 900px) 600px, 100vw' })}</div>` : ''}
    <div class="tx">
      ${L2(s.kicker, lang) ? `<p class="kick">${esc(L2(s.kicker, lang))}</p>` : ''}
      <h2 class="disp" id="hm-custom-t">${rich(L2(s.title, lang))}</h2>
      ${L2(s.lead, lang) ? `<p class="lead">${nl(L2(s.lead, lang))}</p>` : ''}
      ${L2(s.sendLabel, lang) ? `<p class="d">${esc(L2(s.sendLabel, lang))}</p>` : ''}
      ${send.length ? `<ul class="hm-send">${send.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      ${flow.length ? `<p class="hm-flow">${flow.map((x) => `<span>${esc(x)}</span>`).join('<i aria-hidden="true">→</i>')}</p>` : ''}
      ${s.cta ? `<div class="btns">${cta(s.cta, lang, 'btn g')}</div>` : ''}
    </div>
  </div>
</section>`;
}

/* ── 07 · Vì sao là T Gold? ── */
function why(s, lang) {
  if (s.enabled === false) return '';
  const items = (s.items || []).slice(0, 4).map((it, i) => `
    <li class="hm-wc rv" style="--d:${i}">
      ${it.image?.src ? `<div class="hm-photo">${img(it.image, lang, { sizes: '(min-width: 1024px) 280px, 112px' })}</div>` : ''}
      <div><span class="n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3>${esc(L2(it.title, lang))}</h3>${L2(it.text, lang) ? `<p>${nl(L2(it.text, lang))}</p>` : ''}${cta(it.link, lang, 'link')}</div>
    </li>`).join('');
  return `
<section class="hm-sec wrap" id="vi-sao" aria-labelledby="hm-why-t">
  ${shead(s, lang, 'hm-why-t', L2(s.lead, lang) ? leadP(L2(s.lead, lang)) : '')}
  <ul class="hm-why">${items}</ul>
  ${L2(s.closing, lang) || s.cta ? `<div class="hm-why-cta rv">${L2(s.closing, lang) ? `<p>${esc(L2(s.closing, lang))}</p>` : '<span></span>'}${cta(s.cta, lang, 'btn g')}</div>` : ''}
</section>`;
}

/* ── 08 · Tạp chí ── */
function journalSec(s, lang) {
  if (s.enabled === false) return '';
  const t = T[lang];
  const pub = visiblePosts();
  let posts = (s.posts || []).map((slug) => pub.find((p) => p.slug === slug)).filter(Boolean);
  if (!posts.length) posts = pub;
  posts = posts.slice(0, 3);
  if (!posts.length) return '';
  const chips = (s.chips || []).filter((c) => L2(c.label, lang));
  const cards = posts.map((p, k) => `
    <li class="hm-jc${k === 0 ? ' big' : ''}"><a href="${postPath(p.slug, lang)}">
      ${media({ src: p.cover?.src, srcset: p.cover?.srcset, sizes: k === 0 ? '(min-width: 1024px) 640px, 100vw' : '(min-width: 1024px) 180px, 104px', alt: '', label: t.phPost, icon: 'camera' })}
      <div><p class="cat">${esc(p.category?.[lang] || '')}<span class="meta"> · ${readingTime(p.body?.[lang])} ${t.min}</span></p><h3>${esc(p.title[lang])}</h3><p class="ex">${nl(p.excerpt?.[lang] || '')}</p><span class="rd">${t.read}</span></div>
    </a></li>`).join('');
  return `
<section class="hm-sec hm-last wrap" id="tap-chi" aria-labelledby="hm-jr-t">
  ${shead(s, lang, 'hm-jr-t', L2(s.lead, lang) ? leadP(L2(s.lead, lang)) : cta(s.link, lang, 'link'))}
  ${chips.length ? `<nav class="hm-chips" aria-label="${t.journalCats}">${chips.map((c) => `<a ${linkAttrs(c.link, lang)}>${esc(L2(c.label, lang))}</a>`).join('')}</nav>` : ''}
  <ul class="hm-jgrid rv">${cards}</ul>
  ${L2(s.lead, lang) && s.link ? `<div class="center mt-l">${cta(s.link, lang, 'link')}</div>` : ''}
</section>`;
}

export function renderHome(lang) {
  const h = home;
  const c = config.contact;
  const alt = { vi: '/', en: '/en/' };
  const title = L2(h.seo?.title, lang) || 'T Gold – Luxury Jewelry';
  const description = L2(h.seo?.description, lang);
  const first = (h.hero?.slides || []).find((s) => L2(s.title, lang))?.image;

  const body = [
    hero(h.hero || {}, lang),
    trust(h.trust || {}, lang),
    categories(h.categories || {}, lang),
    featured(h.featured || {}, lang),
    order(h.order || {}, lang),
    custom(h.custom || {}, lang),
    why(h.why || {}, lang),
    journalSec(h.journal || {}, lang),
  ].join('\n');

  const store = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: 'T Gold – Luxury Jewelry',
    url: abs(alt[lang]),
    logo: abs('/assets/brand/icon-512.png'),
    image: abs(`/assets/brand/og-${lang}.jpg`),
    description,
    slogan: 'Worth, made visible',
    ...(c.hotline && { telephone: c.hotline }),
    ...(c.email && { email: c.email }),
    ...(L(c.address, lang) && { address: { '@type': 'PostalAddress', streetAddress: L(c.address, lang), addressCountry: 'VN' } }),
    ...(Object.values(config.social).some(Boolean) && { sameAs: Object.values(config.social).filter(Boolean) }),
  };
  const preload = first?.src ? { href: first.src, srcset: first.srcset, sizes: '(min-width: 1024px) 64vw, 100vw' } : null;

  return layout({ lang, page: 'home', title, description, alt, body, heroHeader: true, jsonld: [store], preload });
}
