// Khối dùng chung cho các trang con: tiêu đề trang, breadcrumb, CTA cuối trang, câu cam kết
import { url, esc, icon, mono, config, abs } from '../lib/core.js';

export const zaloHref = () => {
  const z = config.contact?.zalo || config.social?.zalo || '';
  return z ? (z.startsWith('http') ? z : `https://zalo.me/${z.replace(/\D/g, '')}`) : '';
};

export function pageHero({ kick, h1, lead, id = 'page-title', cls = '' }) {
  return `
<section class="page-hero glow-top ${cls}" aria-labelledby="${id}">
  <p class="kick">${kick}</p>
  <h1 class="disp h1p" id="${id}">${h1}</h1>
  ${lead ? `<p class="lead">${lead}</p>` : ''}
</section>`;
}

// items: [[label, href], …, [label]] — mục cuối là trang hiện tại
export function breadcrumb(items, lang) {
  const home = lang === 'vi' ? 'Trang chủ' : 'Home';
  const all = [[home, url('home', lang)], ...items];
  return `<nav class="crumbs wrap" aria-label="${lang === 'vi' ? 'Đường dẫn' : 'Breadcrumb'}"><ol>${all
    .map(([l, h], i) => `<li>${h && i < all.length - 1 ? `<a href="${h}">${l}</a>` : `<span aria-current="page">${l}</span>`}</li>`)
    .join('')}</ol></nav>`;
}
export const breadcrumbLd = (items, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [[lang === 'vi' ? 'Trang chủ' : 'Home', url('home', lang)], ...items].map(([name, href], i) => ({
    '@type': 'ListItem', position: i + 1, name: String(name).replace(/<[^>]+>/g, ''), ...(href && { item: abs(href) }),
  })),
});

const CTA = {
  vi: { h: 'Bạn muốn mình xuất&nbsp;hiện <em>như thế nào?</em>', lead: 'Chia sẻ gu và dịp bạn muốn đeo — chuyên viên T Gold sẽ tư vấn cấu hình riêng cho bạn.', b1: 'Đặt lịch tư vấn riêng', b2: 'Nhắn tin Zalo' },
  en: { h: 'How do you want <em>to be seen?</em>', lead: 'Share your taste and the occasions you’ll wear it — a T Gold specialist will recommend a configuration made for you.', b1: 'Book a private consultation', b2: 'Message on Zalo' },
};
export function finalCta(lang, over = {}) {
  const t = { ...CTA[lang], ...over };
  const z = zaloHref();
  return `
<section class="final-wrap wrap" aria-labelledby="final-title">
  <div class="final frame rv">
    ${mono('mono mono-lg', '', 84)}
    <h2 class="disp" id="final-title">${t.h}</h2>
    <p class="lead">${t.lead}</p>
    <p class="sig latin">WORTH, MADE VISIBLE</p>
    <div class="btns center">
      <a class="btn g" href="${t.href1 || `${url('contact', lang)}#dat-lich`}">${t.b1}</a>
      <a class="btn l" href="${z || url('contact', lang)}"${z ? ' target="_blank" rel="noopener"' : ''}>${t.b2}</a>
    </div>
  </div>
</section>`;
}

// 3 dòng cam kết (trang sản phẩm)
export function promises(lang) {
  const w = config.claims.warranty[lang];
  const certs = esc(config.claims.certificates.list.join(' · '));
  const rows = lang === 'vi'
    ? [['gem', 'Vàng thật, đá quý thật', 'Vàng 10K · 14K · 18K; không dùng bạc, CZ hay vàng mạ.'], ['cert', 'Có giấy kiểm định', `Đá quý đi kèm giấy kiểm định (${certs}) theo từng loại.`], ['shield', esc(w.title), esc(w.text)]]
    : [['gem', 'Real gold, real gemstones', '10K · 14K · 18K gold; never silver, CZ or plated gold.'], ['cert', 'Certified', `Gemstones come with certificates (${certs}) by type.`], ['shield', esc(w.title), esc(w.text)]];
  return rows;
}

export const faqList = (items) => `<div class="faq">${items
  .map(([q, a]) => `<details class="rv"><summary><span>${q}</span>${icon('arrow', 'ico faq-ic')}</summary><div class="faq-a"><p>${a}</p></div></details>`)
  .join('')}</div>`;
