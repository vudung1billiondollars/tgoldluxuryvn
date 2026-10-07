// LIÊN HỆ — showroom, kênh nhắn tin, mạng xã hội, bản đồ + bảng nhập tư vấn (#dat-lich): cùng form với trang Custom (ideaForm)
import { url, esc, icon, bigIcon, media, config, tbd, L } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';
import { ideaForm } from './custom.js'; // custom.js cũng nạp tệp này (nhãn chung) — vòng nạp vô hại: hai bên chỉ gọi nhau lúc dựng trang

const T = {
  vi: {
    title: 'Liên hệ & đặt lịch tư vấn | T Gold – Luxury Jewelry',
    description: 'Đặt lịch tư vấn riêng tại showroom T Gold hoặc nhắn tin qua Zalo, Messenger. Chuyên viên T Gold tư vấn cấu hình vàng và đá quý theo gu của bạn.',
    kick: 'Liên hệ',
    h1: 'Tư vấn riêng, <em>theo gu của bạn.</em>',
    lead: 'Đặt lịch tại showroom hoặc trò chuyện trực tuyến — chuyên viên T Gold sẽ cùng bạn chọn cấu hình xứng với cách bạn muốn xuất hiện.',
    showroom: 'Showroom', channels: 'Kênh nhắn tin &amp; mạng xã hội',
    addr: 'Địa chỉ', hotline: 'Hotline', hours: 'Giờ mở cửa', email: 'Email', directions: 'Chỉ đường',
    mapPh: ['Bản đồ showroom', 'Nhúng Google Maps khi có địa chỉ chính thức'],
    form: {
      kick: 'Đặt lịch tư vấn', h: 'Hẹn một buổi <em>chỉ dành cho bạn.</em>',
      name: 'Họ tên', phone: 'Số điện thoại / Zalo', phoneHint: 'Ví dụ: 0901 234 567',
      phoneErr: 'Số điện thoại chưa đúng định dạng. Ví dụ: 0901 234 567 hoặc +84 901 234 567.',
      nameErr: 'Bạn cho T Gold biết tên để tiện xưng hô nhé.',
      interest: 'Bạn quan tâm', interests: [['nhan-nam', 'Nhẫn nam'], ['day-chuyen', 'Dây chuyền'], ['mat-day', 'Mặt dây'], ['lac-tay', 'Lắc tay'], ['bong-tai', 'Bông tai'], ['custom', 'Custom'], ['nhan-cuoi', 'Nhẫn cưới']],
      when: 'Thời gian mong muốn', date: 'Ngày', slot: 'Buổi', slots: [['', 'Chọn buổi'], ['sang', 'Buổi sáng'], ['chieu', 'Buổi chiều'], ['toi', 'Buổi tối'], ['linh-hoat', 'Linh hoạt']],
      note: 'Ghi chú', notePh: 'Dịp bạn muốn đeo, mẫu bạn thích, cấu hình mong muốn…',
      upload: 'Ảnh ý tưởng', optional: 'tuỳ chọn', uploadCta: 'Chọn ảnh', uploadHint: 'Tối đa {n} ảnh',
      fileErr: 'Chỉ nhận tệp ảnh, tối đa {n} ảnh.',
      consent: 'Tôi đồng ý để T Gold xử lý thông tin cá nhân trên cho mục đích liên hệ và tư vấn.',
      consentErr: 'Bạn cần đồng ý để T Gold có thể liên hệ lại.',
      submit: 'Gửi yêu cầu đặt lịch', sending: 'Đang gửi…',
      okH: 'Đã nhận yêu cầu của bạn.', okP: 'Chuyên viên T Gold sẽ liên hệ qua số điện thoại / Zalo bạn để lại để xác nhận lịch hẹn.',
      okAgain: 'Gửi yêu cầu khác',
      err: 'Chưa gửi được yêu cầu. Bạn thử lại sau ít phút, hoặc nhắn Zalo trực tiếp cho T Gold.',
      required: 'bắt buộc', fromPiece: 'Món quan tâm', fromConfig: 'Cấu hình', fromSaved: 'Danh sách đã lưu',
    },
  },
  en: {
    title: 'Contact & book a consultation | T Gold – Luxury Jewelry',
    description: 'Book a private consultation at the T Gold showroom or message us on Zalo and Messenger. A T Gold specialist will tailor the gold and gemstone configuration to your taste.',
    kick: 'Contact',
    h1: 'A private consultation, <em>tailored to your taste.</em>',
    lead: 'Book a showroom visit or talk to us online — a T Gold specialist will help you choose the configuration that matches how you want to be seen.',
    showroom: 'Showroom', channels: 'Messaging &amp; social media',
    addr: 'Address', hotline: 'Hotline', hours: 'Opening hours', email: 'Email', directions: 'Get directions',
    mapPh: ['Showroom map', 'Google Maps embed once the official address is confirmed'],
    form: {
      kick: 'Book a consultation', h: 'A session <em>reserved for you.</em>',
      name: 'Full name', phone: 'Phone / Zalo', phoneHint: 'e.g. 0901 234 567',
      phoneErr: 'Please enter a valid phone number, e.g. 0901 234 567 or +84 901 234 567.',
      nameErr: 'Please tell us your name.',
      interest: 'Interested in', interests: [['nhan-nam', 'Men’s rings'], ['day-chuyen', 'Chains'], ['mat-day', 'Pendants'], ['lac-tay', 'Bracelets'], ['bong-tai', 'Earrings'], ['custom', 'Custom'], ['nhan-cuoi', 'Wedding rings']],
      when: 'Preferred time', date: 'Date', slot: 'Time of day', slots: [['', 'Select'], ['sang', 'Morning'], ['chieu', 'Afternoon'], ['toi', 'Evening'], ['linh-hoat', 'Flexible']],
      note: 'Notes', notePh: 'The occasion, designs you like, your preferred configuration…',
      upload: 'Idea images', optional: 'optional', uploadCta: 'Choose images', uploadHint: 'Up to {n} images',
      fileErr: 'Images only, up to {n}.',
      consent: 'I agree to T Gold processing the personal information above to contact me for a consultation.',
      consentErr: 'Please agree so that T Gold can get back to you.',
      submit: 'Request a booking', sending: 'Sending…',
      okH: 'Your request has been received.', okP: 'A T Gold specialist will contact you by phone / Zalo to confirm your appointment.',
      okAgain: 'Send another request',
      err: 'We couldn’t send your request. Please try again in a few minutes, or message T Gold on Zalo.',
      required: 'required', fromPiece: 'Piece of interest', fromConfig: 'Configuration', fromSaved: 'Saved list',
    },
  },
};

registerPage('contact', T, { raw: ['form.sending','form.err','form.fileErr','form.fromPiece','form.fromConfig','form.fromSaved'] });

export function renderContact(lang) {
  const t = pageT('contact', lang);
  const c = config.contact;
  const s = config.social;
  const alt = { vi: url('contact', 'vi'), en: url('contact', 'en') };
  const v = (val) => (val ? val : `<span class="tbd">${tbd(lang)}</span>`);
  const L2 = (o) => esc(L(o, lang));
  const zalo = c.zalo ? (c.zalo.startsWith('http') ? c.zalo : `https://zalo.me/${c.zalo.replace(/\D/g, '')}`) : '';
  const ch = [
    ['Zalo', zalo || s.zalo], ['Messenger', c.messenger], ['Instagram', s.instagram], ['Facebook', s.facebook], ['TikTok', s.tiktok],
  ].map(([n, href]) => `<li>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${n} ${icon('arrow')}</a>` : `<span>${n}</span><span class="tbd">${tbd(lang)}</span>`}</li>`).join('');

  const body = `
<section class="page-hero glow-top" aria-labelledby="ct-title">
  <p class="kick">${t.kick}</p>
  <h1 class="disp h1p" id="ct-title">${t.h1}</h1>
  <p class="lead">${t.lead}</p>
</section>

<section class="contact wrap">
  <div class="ct-info">
    <h2 class="kick">${t.showroom}</h2>
    <dl class="info">
      <div>${icon('pin')}<dt>${t.addr}</dt><dd>${v(esc(L(c.address, lang)))}</dd></div>
      <div>${icon('phone')}<dt>${t.hotline}</dt><dd>${c.hotline ? `<a href="tel:${c.hotline.replace(/[^\d+]/g, '')}">${esc(c.hotline)}</a>` : v('')}</dd></div>
      <div>${icon('clock')}<dt>${t.hours}</dt><dd>${esc(L(c.hours, lang))}${c.hoursVerified ? '' : ` <span class="tbd">${tbd(lang)}</span>`}</dd></div>
      <div>${icon('mail')}<dt>${t.email}</dt><dd>${c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : v('')}</dd></div>
    </dl>
    <div class="map">${c.mapEmbed
      ? `<iframe src="${esc(c.mapEmbed)}" title="${t.mapPh[0]}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`
      : media({ label: t.mapPh[0], desc: t.mapPh[1], icon: 'cert', alt: t.mapPh[0] })}</div>
    ${c.mapLink ? `<a class="link" href="${esc(c.mapLink)}" target="_blank" rel="noopener">${t.directions}</a>` : ''}
    <h2 class="kick ch-title">${t.channels}</h2>
    <ul class="channels">${ch}</ul>
  </div>
  <div class="ct-form frame-soft" id="dat-lich" tabindex="-1">
    <p class="kick">${t.form.kick}</p>
    <h2 class="disp h3">${t.form.h}</h2>
    ${ideaForm(lang, { preset: [] })}
  </div>
</section>`;

  return layout({ lang, page: 'contact', title: t.title, description: t.description, alt, body });
}
