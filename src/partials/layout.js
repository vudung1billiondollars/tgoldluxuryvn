// Khung trang dùng chung: <head>, header, footer, menu mobile, tìm kiếm, món đã lưu, chat nổi.
import { ROUTES, url, abs, esc, typo, icon, mono, tbd, config, L, jsonScript, categoryPath, linkHref } from '../lib/core.js';
import C, { FOOT_CAT_ORDER } from '../i18n/common.js';
import { catalog as data } from '../lib/content.js';

const FONTS = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Be+Vietnam+Pro:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap';

const other = (lang) => (lang === 'vi' ? 'en' : 'vi');

// Nút chuyển ngôn ngữ: VI ◇ EN — chữ Latin không dấu nên dùng Cinzel
export function langSwitch({ lang, alt, cls = '' }) {
  const a = (l) =>
    `<a href="${alt[l]}" hreflang="${l}" lang="${l}" data-lang-link="${l}" ${l === lang ? 'aria-current="true" class="on"' : ''} title="${C[l].langName}">${l.toUpperCase()}<span class="sr"> · ${C[l].langName}</span></a>`;
  return `<nav class="lang ${cls}" aria-label="${C[lang].langLabel} / ${C[other(lang)].langLabel}">${a('vi')}<span class="lang-sep" aria-hidden="true"></span>${a('en')}</nav>`;
}

function header({ lang, page, alt }) {
  const t = C[lang];
  const nav = t.nav
    .map(([id, label]) => `<a href="${url(id, lang)}"${page === id ? ' aria-current="page" class="on"' : ''}>${label}</a>`)
    .join('');
  return `
<header class="site-head" data-head>
  <span class="head-bg" aria-hidden="true"></span>
  <a class="lock" href="${url('home', lang)}" aria-label="${t.homeLabel}">${mono('mono')}<span class="w gold">T GOLD</span></a>
  <nav class="nav" aria-label="${t.navLabel}">${nav}</nav>
  <div class="head-r">
    <button class="ibtn" type="button" data-open="search" aria-label="${t.search}" aria-haspopup="dialog">${icon('search')}</button>
    ${langSwitch({ lang, alt, cls: 'lang-head' })}
    <button class="ibtn bag" type="button" data-open="saved" aria-label="${t.saved}" aria-haspopup="dialog">${icon('bag')}<span class="count" data-saved-count hidden>0</span></button>
    <a class="btn g sm head-cta" href="${url('contact', lang)}#dat-lich">${t.book}</a>
    <button class="ibtn burger" type="button" data-open="menu" aria-label="${t.menu}" aria-haspopup="dialog" aria-expanded="false">${icon('menu')}</button>
  </div>
</header>`;
}

function menuDialog({ lang, page, alt }) {
  const t = C[lang];
  const links = t.nav
    .map(([id, label], i) => `<a href="${url(id, lang)}" style="--i:${i}"${page === id ? ' aria-current="page"' : ''}><span class="n">0${i + 1}</span>${label}</a>`)
    .join('');
  return `
<dialog class="sheet menu" id="dlg-menu" aria-label="Menu">
  <div class="sheet-top">
    <a class="lock" href="${url('home', lang)}" aria-label="${t.homeLabel}">${mono('mono')}<span class="w gold">T GOLD</span></a>
    <button class="ibtn" type="button" data-close aria-label="${t.closeMenu}">${icon('close')}</button>
  </div>
  <nav class="menu-links" aria-label="${t.navLabel}">${links}<a href="${url('contact', lang)}" style="--i:5"${page === 'contact' ? ' aria-current="page"' : ''}><span class="n">06</span>${lang === 'vi' ? 'Liên Hệ' : 'Contact'}</a></nav>
  <div class="menu-foot">
    <a class="btn g" href="${url('contact', lang)}#dat-lich">${t.book}</a>
    <div class="menu-lang">
      <span class="kick">${t.langLabel}</span>
      <div class="menu-lang-opts">
        <a href="${alt.vi}" hreflang="vi" lang="vi" data-lang-link="vi"${lang === 'vi' ? ' aria-current="true"' : ''}>Tiếng Việt</a>
        <a href="${alt.en}" hreflang="en" lang="en" data-lang-link="en"${lang === 'en' ? ' aria-current="true"' : ''}>English</a>
      </div>
    </div>
  </div>
</dialog>`;
}

function searchDialog({ lang }) {
  const t = C[lang];
  const sugg = data.categories.slice(0, 5).map((c) => `<button type="button" class="tab" data-q="${esc(c[lang])}">${c[lang]}</button>`).join('');
  return `
<dialog class="sheet search" id="dlg-search" aria-labelledby="search-title">
  <div class="sheet-top">
    <h2 class="kick" id="search-title">${t.searchTitle}</h2>
    <button class="ibtn" type="button" data-close aria-label="${t.close}">${icon('close')}</button>
  </div>
  <form class="search-box" role="search" data-search-form>
    ${icon('search')}
    <label class="sr" for="q">${t.search}</label>
    <input id="q" name="q" type="search" autocomplete="off" placeholder="${t.searchPh}" data-search-input>
  </form>
  <div class="search-sugg"><span class="kick">${t.searchHint}</span><div class="tabs">${sugg}</div></div>
  <div class="search-res" data-search-results aria-live="polite"></div>
  <template id="tpl-search-empty"><p class="empty">${t.searchEmpty} <a class="link" href="${url('contact', lang)}#dat-lich">${t.book}</a></p></template>
</dialog>`;
}

function savedDialog({ lang }) {
  const t = C[lang];
  return `
<dialog class="sheet drawer" id="dlg-saved" aria-labelledby="saved-title">
  <div class="sheet-top">
    <h2 class="kick" id="saved-title">${t.savedTitle}</h2>
    <button class="ibtn" type="button" data-close aria-label="${t.close}">${icon('close')}</button>
  </div>
  <ul class="saved-list" data-saved-list></ul>
  <p class="empty" data-saved-empty>${t.savedEmpty}</p>
  <div class="drawer-foot" data-saved-foot hidden>
    <a class="btn g" href="${url('contact', lang)}#dat-lich" data-saved-send>${t.savedSend}</a>
    <p class="fine">${t.savedNote}</p>
  </div>
</dialog>`;
}

function chat({ lang }) {
  const t = C[lang];
  const c = config.contact;
  const zalo = c.zalo ? (c.zalo.startsWith('http') ? c.zalo : `https://zalo.me/${c.zalo.replace(/\D/g, '')}`) : '';
  const items = [
    zalo && `<a href="${esc(zalo)}" target="_blank" rel="noopener">${icon('chat')}${t.chatZalo}</a>`,
    c.messenger && `<a href="${esc(c.messenger)}" target="_blank" rel="noopener">${icon('chat')}${t.chatMessenger}</a>`,
    c.hotline && `<a href="tel:${c.hotline.replace(/[^\d+]/g, '')}">${icon('phone')}${t.chatCall}</a>`,
    `<a href="${url('contact', lang)}#dat-lich">${icon('clock')}${t.chatBook}</a>`,
  ].filter(Boolean).join('');
  return `
<div class="chat" data-chat>
  <div class="chat-panel" id="chat-panel" hidden>
    <p class="chat-title">${t.chatTitle}</p>
    ${items}
  </div>
  <button class="chat-btn" type="button" aria-expanded="false" aria-controls="chat-panel" aria-label="${t.chatOpen}" data-chat-btn>${icon('chat')}${icon('close', 'ico x')}</button>
</div>`;
}

// Icon mạng xã hội dạng hình (Simple Icons, CC0; Zalo vẽ lại thành bong bóng chat có chữ Z). Màu lấy theo chữ của link → vàng ngà như các icon khác của footer.
const SOC_ICON = {
  instagram: '<path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>',
  facebook: '<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>',
  tiktok: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>',
  zalo: '<path fill-rule="evenodd" transform="translate(-1.6 -1.6) scale(1.13)" d="M12 2.5C6.75 2.5 2.5 6.3 2.5 11c0 2.6 1.3 4.9 3.4 6.5-.1 1.3-.6 2.6-1.6 3.7 2-.1 3.7-.8 4.9-1.8.9.2 1.8.3 2.8.3 5.25 0 9.5-3.8 9.5-8.5S17.25 2.5 12 2.5ZM8 8h8v1.4l-5.4 3.2H16V14H8v-1.4l5.4-3.2H8Z"/>',
};
const socIcon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SOC_ICON[k]}</svg>`;

function footer({ lang, alt }) {
  const t = C[lang];
  const c = config.contact;
  const s = config.social;
  // Kiến trúc link nội bộ: Sản phẩm → trang danh mục · T Gold → trang thương hiệu · Hỗ trợ → đặt hàng / bảo hành / liên hệ
  // Tiếng Anh: viết hoa chữ đầu mỗi từ cho đồng bộ với các cột khác (“Men’s Rings”); tên gốc trong CMS giữ nguyên ở nơi khác
  const foot = (cat) => (lang === 'en' ? cat.en.replace(/(^|[\s(])([a-z])/g, (m, a, b) => a + b.toUpperCase()) : cat.vi);
  const known = FOOT_CAT_ORDER.map((id) => data.categories.find((c) => c.id === id)).filter(Boolean);
  const cats = [...known, ...data.categories.filter((c) => !FOOT_CAT_ORDER.includes(c.id))].map((cat) => `<a href="${categoryPath(cat.id, lang)}">${esc(foot(cat))}</a>`).join('') + `<a href="${url('collection', lang)}">${t.footAll}</a>`;
  const serv = t.footService.map(([id, label]) => `<a href="${linkHref({ to: `page:${id}` }, lang)}">${label}</a>`).join('');
  const brand = t.footBrand.map(([id, label]) => `<a href="${url(id, lang)}">${label}</a>`).join('');
  const soc = [['instagram', 'Instagram', s.instagram], ['facebook', 'Facebook', s.facebook], ['tiktok', 'TikTok', s.tiktok], ['zalo', 'Zalo', s.zalo]]
    .map(([key, name, href]) =>
      href
        ? `<a href="${esc(href)}" target="_blank" rel="noopener" title="${name}" aria-label="${name}">${socIcon(key)}</a>`
        : `<a href="${url('contact', lang)}" title="${name} ${tbd(lang)}" aria-label="${name} ${tbd(lang)}">${socIcon(key)}</a>`)
    .join('');
  const v = (val) => (val ? esc(val) : `<span class="tbd">${tbd(lang)}</span>`);
  return `
<footer class="site-foot">
  <div class="fcols">
    <div class="fbrand">
      <a class="lock" href="${url('home', lang)}" aria-label="${t.homeLabel}">${mono('mono')}<span class="w gold">T GOLD</span></a>
      <p class="blurb">${t.footBlurb}</p>
      <p class="trio"><span>TRUE MATERIALS</span> · <span>TAILORED DESIGN</span> · <span>YOUR TRAIT</span></p>
      <nav class="soc" aria-label="${t.social}">${soc}</nav>
    </div>
    <nav aria-labelledby="f-col"><h2 id="f-col">${t.footCols.collection}</h2>${cats}</nav>
    <nav aria-labelledby="f-brand"><h2 id="f-brand">${t.footCols.brand}</h2>${brand}</nav>
    <nav aria-labelledby="f-serv"><h2 id="f-serv">${t.footCols.service}</h2>${serv}</nav>
    <div class="fshow">
      <h2>${t.footCols.showroom}</h2>
      <p><span class="lbl">${t.addr}</span>${v(L(c.address, lang))}</p>
      <p><span class="lbl">${t.hotline}</span>${c.hotline ? `<a href="tel:${c.hotline.replace(/[^\d+]/g, '')}">${esc(c.hotline)}</a>` : `<span class="tbd">${tbd(lang)}</span>`}</p>
      <p><span class="lbl">${t.hours}</span>${esc(L(c.hours, lang))}${config.contact.hoursVerified ? '' : ` <span class="tbd">${tbd(lang)}</span>`}</p>
      <a class="link" href="${url('contact', lang)}#dat-lich">${t.bookLink}</a>
    </div>
  </div>
  <div class="fbot">
    <span class="rights">${t.rights.replace('{year}', new Date().getFullYear())}</span>
    ${langSwitch({ lang, alt, cls: 'lang-foot' })}
    <span class="legal">${t.footLegal.map(([id, label]) => (id && ROUTES[id] ? `<a href="${url(id, lang)}">${label}</a>` : `<span>${label}</span>`)).join('')}</span>
  </div>
</footer>`;
}

// ── Trang hoàn chỉnh ──
// alt: { vi: '/…', en: '/en/…' } đường dẫn tương ứng ở ngôn ngữ kia
export function layout({ lang, page, title, description, alt, body, heroHeader = false, jsonld = [], ogImage, noindex = false, bodyClass = '', preload = null }) {
  const t = C[lang];
  const path = alt[lang];
  const og = abs(ogImage || `/assets/brand/og-${lang}.jpg`);
  const clientCfg = {
    lang,
    endpoint: config.form.endpoint,
    maxFiles: config.form.maxFiles,
    maxFileMB: config.form.maxFileMB,
    i18n: {
      savedToast: t.savedToast, unsavedToast: t.unsavedToast, saveThis: t.saveThis, unsaveThis: t.unsaveThis,
      remove: t.savedRemove, configItem: t.configItem, searchPages: t.searchPages, searchProducts: t.searchProducts,
      otherToast: C[other(lang)].langToast, otherGo: C[other(lang)].langToastGo, close: t.close,
    },
    other: { lang: other(lang), href: alt[other(lang)] },
  };
  const ld = jsonld.map((o) => `<script type="application/ld+json">${jsonScript(o)}</script>`).join('\n');

  const inner = typo(`
<a class="skip" href="#main">${t.skip}</a>
${header({ lang, page, alt })}
<div class="sb-tint" aria-hidden="true"></div>
<main id="main" tabindex="-1">
${body}
</main>
${footer({ lang, alt })}
${chat({ lang })}
${menuDialog({ lang, page, alt })}
${searchDialog({ lang })}
${savedDialog({ lang })}
<div class="toast" data-toast role="status" aria-live="polite"></div>`);

  return `<!DOCTYPE html>
<html lang="${lang}" class="no-js">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${abs(path)}">`}
<link rel="alternate" hreflang="vi" href="${abs(alt.vi)}">
<link rel="alternate" hreflang="en" href="${abs(alt.en)}">
<link rel="alternate" hreflang="x-default" href="${abs(alt.vi)}">
<meta name="theme-color" content="#080605">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:site_name" content="T Gold – Luxury Jewelry">
<meta property="og:locale" content="${lang === 'vi' ? 'vi_VN' : 'en_US'}">
<meta property="og:locale:alternate" content="${lang === 'vi' ? 'en_US' : 'vi_VN'}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="${FONTS}"></noscript>
${preload ? `<link rel="preload" as="image" href="${esc(preload.href)}"${preload.srcset ? ` imagesrcset="${esc(preload.srcset)}" imagesizes="${esc(preload.sizes)}"` : ''} fetchpriority="high">\n` : ''}<link rel="stylesheet" href="/css/site.css?v=${layout.version}">
<script>document.documentElement.className='js'</script>
<script type="application/json" id="tg-config">${jsonScript(clientCfg)}</script>
${ld}
</head>
<body class="${heroHeader ? 'has-hero' : 'no-hero'} ${bodyClass}" data-page="${page}">
${inner}
<script src="/js/site.js?v=${layout.version}" defer></script>
</body>
</html>
`;
}
layout.version = '1';
