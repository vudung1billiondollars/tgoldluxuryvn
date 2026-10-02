// CÁCH ĐẶT HÀNG — /cach-dat-hang/ · /en/how-to-order/
// Các bước lấy từ khối “Đã tìm thấy mẫu bạn thích?” của trang chủ (sửa trong /admin → Trang chủ) — hai nơi luôn khớp nhau.
import { url, esc, bigIcon, config } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { breadcrumb, breadcrumbLd, pageHero, finalCta, promises } from '../partials/blocks.js';
import { home } from '../lib/content.js';
import { orderSteps } from './home.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Cách đặt hàng tại T Gold | T Gold – Luxury Jewelry',
    description: 'Quy trình đặt trang sức tại T Gold: chọn mẫu có sẵn hoặc gửi ý tưởng Custom, tư vấn cấu hình, xác nhận và chế tác, nhận sản phẩm kèm giấy kiểm định.',
    kick: 'Cách đặt hàng', h1: 'Chỉ vài bước để sở hữu <em>một thiết kế T Gold.</em>',
    lead: 'Dù chọn mẫu có sẵn hay Custom theo ý tưởng, mọi thông tin đều được T Gold xác nhận rõ ràng trước khi bắt đầu.',
    stepsH: 'Quy trình', pathsH: 'Hai cách <em>bắt đầu.</em>',
    paths: [
      { h: 'Chọn từ mẫu có sẵn', p: 'Xem bộ sưu tập, lưu những món bạn thích và hẹn lịch đeo thử tại showroom.', cta: 'Xem bộ sưu tập', to: 'collection', img: 'order' },
      { h: 'Custom theo ý tưởng', p: 'Gửi hình ảnh, ý tưởng hoặc một chi tiết bạn thích — T Gold dựng bản 3D để bạn duyệt trước khi chế tác.', cta: 'Bắt đầu Custom', to: 'custom', img: 'custom' },
    ],
    promH: 'Đi kèm <em>mỗi đơn hàng.</em>',
  },
  en: {
    title: 'How to order | T Gold – Luxury Jewelry',
    description: 'How ordering works at T Gold: choose a ready design or send a Custom idea, configure it with a specialist, confirm and craft, then receive your piece with its certificate.',
    kick: 'How to order', h1: 'Just a few steps to own <em>a T Gold design.</em>',
    lead: 'Whether you choose a ready design or a Custom piece, T Gold confirms every detail clearly before work begins.',
    stepsH: 'The process', pathsH: 'Two ways <em>to begin.</em>',
    paths: [
      { h: 'Choose a ready design', p: 'Browse the collection, save the pieces you love and book a try-on at the showroom.', cta: 'View the collection', to: 'collection', img: 'order' },
      { h: 'Custom from your idea', p: 'Send a photo, an idea or a detail you love — T Gold builds a 3D model for you to approve before crafting.', cta: 'Start Custom', to: 'custom', img: 'custom' },
    ],
    promH: 'Included <em>with every order.</em>',
  },
};

registerPage('order', T);

export function renderOrder(lang) {
  const t = pageT('order', lang);
  const alt = { vi: url('order', 'vi'), en: url('order', 'en') };
  const crumbs = [[t.kick]];
  const pic = (k) => { const im = home[k]?.image; return im?.src ? `<div class="hm-photo">${`<img src="${esc(im.src)}"${im.srcset ? ` srcset="${esc(im.srcset)}" sizes="(min-width: 768px) 560px, 100vw"` : ''} alt="${esc(im.alt?.[lang] || '')}" loading="lazy" decoding="async">`}</div>` : ''; };
  const body = `
${breadcrumb(crumbs, lang)}
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}
<section class="wrap-n order-page" aria-label="${t.stepsH}">
  <h2 class="kick">${t.stepsH}</h2>
  ${orderSteps(home.order?.steps, lang, 'hm-steps hm-steps-lg')}
</section>
<section class="hm-sec wrap" aria-labelledby="paths-title">
  <div class="shead"><h2 class="disp h2" id="paths-title">${t.pathsH}</h2></div>
  <ul class="hm-paths">${t.paths.map((p) => `<li class="rv">${pic(p.img)}<div class="tx"><h3>${p.h}</h3><p>${p.p}</p><a class="btn l" href="${url(p.to, lang)}">${p.cta}</a></div></li>`).join('')}</ul>
</section>
<section class="service wrap-n" aria-labelledby="prom-title">
  <h2 class="disp h2 center" id="prom-title">${t.promH}</h2>
  <ul class="serv serv-3">${promises(lang).map(([ic, h, p]) => `<li class="rv">${bigIcon(ic)}<h3>${h}</h3><p>${p}</p></li>`).join('')}</ul>
  <p class="note center">${esc(config.claims.leadTime[lang])}</p>
</section>
${finalCta(lang)}`;
  return layout({ lang, page: 'order', title: t.title, description: t.description, alt, body, jsonld: [breadcrumbLd(crumbs, lang)] });
}
