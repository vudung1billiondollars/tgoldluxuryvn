// 404 — đúng phong cách thương hiệu, có nút về trang chủ
import { url } from '../lib/core.js';
import { layout } from '../partials/layout.js';

const T = {
  vi: {
    title: 'Không tìm thấy trang | T Gold – Luxury Jewelry',
    description: 'Trang bạn tìm không tồn tại hoặc đã được chuyển.',
    kick: 'Không tìm thấy trang',
    h1: 'Trang này <em>chưa được chế tác.</em>',
    lead: 'Đường dẫn có thể đã thay đổi. Những món đáng xem vẫn đang chờ bạn.',
    home: 'Về trang chủ', coll: 'Xem bộ sưu tập',
  },
  en: {
    title: 'Page not found | T Gold – Luxury Jewelry',
    description: 'The page you are looking for does not exist or has moved.',
    kick: 'Page not found',
    h1: 'This page <em>hasn’t been crafted yet.</em>',
    lead: 'The link may have changed. The pieces worth seeing are still waiting for you.',
    home: 'Back to home', coll: 'View the collection',
  },
};

export function renderNotFound(lang) {
  const t = T[lang];
  const body = `
<section class="nf glow-top" aria-labelledby="nf-title">
  <p class="nf-code" aria-hidden="true">404</p>
  <p class="kick">${t.kick}</p>
  <h1 class="disp h1p" id="nf-title">${t.h1}</h1>
  <p class="lead">${t.lead}</p>
  <div class="btns center"><a class="btn g" href="${url('home', lang)}">${t.home}</a><a class="btn l" href="${url('collection', lang)}">${t.coll}</a></div>
</section>`;
  return layout({ lang, page: '404', title: t.title, description: t.description, alt: { vi: url('home', 'vi'), en: url('home', 'en') }, body, noindex: true });
}
