// BẢO HÀNH & CHĂM SÓC — /bao-hanh/ · /en/warranty-care/
// Câu bảo hành và đổi mẫu lấy từ /admin → Thông tin website (mục cần xác minh), các dịch vụ chăm sóc giữ từ trang chủ cũ.
import { url, esc, bigIcon, config } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { breadcrumb, breadcrumbLd, pageHero, finalCta } from '../partials/blocks.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Bảo hành & chăm sóc trang sức | T Gold – Luxury Jewelry',
    description: 'Chính sách bảo hành và dịch vụ chăm sóc trang sức T Gold: làm mới, chỉnh size, sửa chữa và gắn lại đá quý.',
    kick: 'Bảo hành & chăm sóc', h1: 'Giá trị không dừng lại <em>sau ngày nhận hàng.</em>',
    lead: 'Một món trang sức có thể đi cùng bạn trong nhiều năm. T Gold đồng hành với sản phẩm bằng chính sách bảo hành và những dịch vụ chăm sóc dưới đây.',
    items: [['spark', 'Làm mới', 'Làm sạch, đánh bóng để món trang sức luôn sáng như ngày đầu.'], ['ring', 'Chỉnh size', 'Điều chỉnh để vừa vặn theo thời gian.'], ['gem', 'Gắn lại đá quý', 'Kiểm tra chấu giữ, gắn lại hoặc xử lý đá quý.']],
    exH: 'Khi gu thay đổi', exP: 'T Gold có những lựa chọn linh hoạt để món trang sức tiếp tục phù hợp với bạn.',
    ask: 'Chi tiết điều kiện áp dụng cho từng sản phẩm, chuyên viên T Gold sẽ giải thích rõ khi bàn giao.', askCta: 'Liên hệ chuyên viên',
  },
  en: {
    title: 'Warranty & jewelry care | T Gold – Luxury Jewelry',
    description: 'The T Gold warranty and jewelry care services: refreshing, resizing, repairs and gemstone resetting.',
    kick: 'Warranty & care', h1: 'Value that doesn’t end <em>on delivery day.</em>',
    lead: 'A piece of jewelry can stay with you for years. T Gold stands behind every piece with its warranty and the care services below.',
    items: [['spark', 'Refresh', 'Cleaning and polishing to keep your piece as brilliant as day one.'], ['ring', 'Resizing', 'Adjusted to keep the perfect fit over time.'], ['gem', 'Gemstone resetting', 'Prong checks, resetting or restoring gemstones.']],
    exH: 'When your taste evolves', exP: 'T Gold offers flexible options so your piece keeps suiting you.',
    ask: 'A T Gold specialist explains the exact terms for each piece at handover.', askCta: 'Contact a specialist',
  },
};

registerPage('care', T);

export function renderCare(lang) {
  const t = pageT('care', lang);
  const w = config.claims.warranty[lang];
  const alt = { vi: url('care', 'vi'), en: url('care', 'en') };
  const crumbs = [[t.kick]];
  const items = [['shield', esc(w.title), esc(w.text)], ...t.items];
  const body = `
${breadcrumb(crumbs, lang)}
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}
<section class="service wrap-n" aria-label="${t.kick}">
  <ul class="serv">${items.map(([ic, h, p]) => `<li class="rv">${bigIcon(ic)}<h3>${h}</h3><p>${p}</p></li>`).join('')}</ul>
</section>
<section class="band wrap" aria-labelledby="ex-title">
  <div class="band-in rv">
    <p class="kick">${esc(config.claims.exchange[lang])}</p>
    <h2 class="disp h2" id="ex-title">${t.exH}</h2>
    <p class="lead">${t.exP} ${t.ask}</p>
    <a class="btn l" href="${url('contact', lang)}#dat-lich">${t.askCta}</a>
  </div>
</section>
${finalCta(lang)}`;
  return layout({ lang, page: 'care', title: t.title, description: t.description, alt, body, jsonld: [breadcrumbLd(crumbs, lang)] });
}
