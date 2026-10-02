// TẠP CHÍ — danh sách bài viết kiến thức + trang bài viết (nội dung quản lý trong /admin)
import { url, esc, nl, media, postPath, abs } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { pageHero, breadcrumb, breadcrumbLd } from '../partials/blocks.js';
import { visiblePosts } from '../lib/content.js';
import { markdown, readingTime } from '../lib/markdown.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Tạp chí T Gold: kiến thức vàng, đá quý & kiểm định',
    description: 'Kiến thức về tuổi vàng, Moissanite, Lab Diamond, kim cương thiên nhiên và giấy kiểm định — để bạn biết rõ mình đang đeo gì.',
    kick: 'Tạp chí', h1: 'Hiểu giá trị <em>trước khi chọn.</em>',
    lead: 'Kiến thức về vàng, đá quý và kiểm định — để khi có người hỏi “Cái này là gì?”, bạn trả lời bằng sự tự hào.',
    read: 'Đọc bài', min: 'phút đọc', empty: 'Bài viết mới đang được chuẩn bị.', more: 'Bài viết khác',
    ph: 'Ảnh bài viết',
  },
  en: {
    title: 'The T Gold Journal: gold, gemstones & certification',
    description: 'Guides to gold karats, Moissanite, Lab Diamond, natural diamonds and certificates — so you know exactly what you wear.',
    kick: 'Journal', h1: 'Understand the value <em>before you choose.</em>',
    lead: 'Knowledge of gold, gemstones and certification — so when someone asks “What is that?”, you answer with pride.',
    read: 'Read', min: 'min read', empty: 'New articles are on their way.', more: 'More articles',
    ph: 'Article image',
  },
};

registerPage('journal', T);

const fmtDate = (d, lang) => {
  const dt = new Date(`${d}T00:00:00`);
  return Number.isNaN(dt.getTime()) ? esc(d) : dt.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

function card(p, lang, big = false) {
  const t = pageT('journal', lang);
  return `
<li class="post ${big ? 'post-big' : ''} rv">
  <a href="${postPath(p.slug, lang)}">
    ${media({ src: p.cover?.src, alt: p.cover?.alt?.[lang] || p.title[lang], label: t.ph, desc: esc(p.cover?.alt?.[lang] || ''), icon: 'camera', cls: 'post-media' })}
    <p class="kick">${esc(p.category?.[lang] || '')} <span class="meta">· ${readingTime(p.body?.[lang])} ${t.min}</span></p>
    <h2>${esc(p.title[lang])}</h2>
    <p class="ex">${nl(p.excerpt?.[lang] || '')}</p>
    <span class="link">${t.read}</span>
  </a>
</li>`;
}

export function renderJournal(lang) {
  const t = pageT('journal', lang);
  const posts = visiblePosts();
  const alt = { vi: url('journal', 'vi'), en: url('journal', 'en') };
  const body = `
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}
<section class="journal wrap" aria-label="${t.kick}">
  ${posts.length ? `<ul class="posts posts-list">${posts.map((p, i) => card(p, lang, i === 0)).join('')}</ul>` : `<p class="empty center">${t.empty}</p>`}
</section>`;
  return layout({ lang, page: 'journal', title: t.title, description: t.description, alt, body });
}

// Tiêu đề mục trong bài: chữ chạy đầy dòng đầu rồi mới xuống dòng (CSS); hai chữ cuối dính nhau để dòng cuối không bị rớt lại một chữ;
// từ có gạch nối (iced-out…) không bị bẻ đôi ở dấu gạch
const noOrphan = (html) => html.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (m, tag, inner) => `<${tag}>${inner.replace(/\s+(?=[^\s<>]+\s*$)/, '&nbsp;').replace(/[^\s<>]*[^\s<>-]-[^\s<>-][^\s<>]*/g, '<span class="nw">$&</span>')}</${tag}>`);

export function renderPost(p, lang) {
  const t = pageT('journal', lang);
  const alt = { vi: postPath(p.slug, 'vi'), en: postPath(p.slug, 'en') };
  const others = visiblePosts().filter((x) => x.slug !== p.slug).slice(0, 3);
  const crumbs = [[t.kick, url('journal', lang)], [esc(p.title[lang])]];
  const body = `
${breadcrumb(crumbs, lang)}
<article class="article" aria-labelledby="art-title">
  <header class="art-head">
    <p class="kick">${esc(p.category?.[lang] || '')}</p>
    <h1 class="disp h1p" id="art-title">${esc(p.title[lang])}</h1>
    <p class="art-meta"><time datetime="${esc(p.date)}">${fmtDate(p.date, lang)}</time> · ${readingTime(p.body?.[lang])} ${t.min}</p>
    ${p.excerpt?.[lang] ? `<p class="lead">${nl(p.excerpt[lang])}</p>` : ''}
  </header>
  <div class="art-sheet">
  <div class="art-cover">${media({ src: p.cover?.src, alt: p.cover?.alt?.[lang] || p.title[lang], label: t.ph, desc: esc(p.cover?.alt?.[lang] || ''), icon: 'camera', eager: true })}</div>
  <div class="prose">${noOrphan(markdown(p.body?.[lang] || ''))}</div>
  </div>
</article>
${others.length ? `<section class="journal-strip wrap" aria-labelledby="more-title">
  <div class="shead"><div><h2 class="kick" id="more-title">${t.more}</h2></div><a class="link" href="${url('journal', lang)}">${t.kick}</a></div>
  <ul class="posts">${others.map((x) => card(x, lang)).join('')}</ul>
</section>` : ''}`;

  const ld = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: p.title[lang], description: p.excerpt?.[lang] || '', datePublished: p.date,
    inLanguage: lang, mainEntityOfPage: abs(postPath(p.slug, lang)),
    image: p.cover?.src ? abs(p.cover.src) : abs(`/assets/brand/og-${lang}.jpg`),
    author: { '@type': 'Organization', name: 'T Gold – Luxury Jewelry' },
    publisher: { '@type': 'Organization', name: 'T Gold – Luxury Jewelry', logo: { '@type': 'ImageObject', url: abs('/assets/brand/icon-512.png') } },
  };
  return layout({
    lang, page: 'journal', alt, body,
    title: `${p.title[lang]} | T Gold – Luxury Jewelry`,
    description: (p.excerpt?.[lang] || p.title[lang]).replace(/\s+/g, ' ').slice(0, 158),
    ogImage: p.cover?.src || undefined,
    jsonld: [ld, breadcrumbLd(crumbs, lang)],
  });
}
