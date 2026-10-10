// CUSTOM — hero → 2 lựa chọn → quy trình 4 bước → trước/sau (3D ↔ thành phẩm)
// → khối A: công cụ tự thiết kế 3D → khối B: form gửi ý tưởng (ảnh mẫu + mô tả → Zalo) → câu hỏi thường gặp → khối kết
import { url, esc, icon, bigIcon, media, config, model3dPath, MODEL3D_APPS } from '../lib/core.js';
import { visibleModels3d, model3dOf, posterSrcset } from '../lib/content.js';
import { layout } from '../partials/layout.js';
import { pageHero, faqList, zaloHref } from '../partials/blocks.js';
import './contact.js'; // form ý tưởng dùng chung vài nhãn với form đặt lịch (pageT('contact'))
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Custom trang sức theo ý tưởng tại xưởng riêng | T Gold – Luxury Jewelry',
    description: 'Tuỳ chỉnh size, màu vàng, tuổi vàng, loại đá quý hoặc làm mới hoàn toàn từ ý tưởng của bạn. Duyệt bản 3D trước khi chế tác tại xưởng T Gold, bàn giao kèm giấy kiểm định.',
    kick: 'T · Tailored Design — Custom',
    h1: 'Từ một ý tưởng đến <em>món của riêng bạn.</em>',
    lead: 'Một thiết kế có sẵn chỉ là điểm bắt đầu. T Gold có thể tuỳ chỉnh từng chi tiết — hoặc dựng lại hoàn toàn từ ý tưởng và hình ảnh bạn gửi.',
    cta: 'Gửi ý tưởng Custom', ctaA: 'Tự thiết kế 3D', ctaB: 'Gửi ý tưởng',
    paths: [
      { n: 'A', h: 'Tự thiết kế bằng 3D', p: 'Chọn một dòng trang sức rồi tự chỉnh từng chi tiết ngay trên mô hình 3D.', items: ['Nhẫn nam, mặt dây chuyền, nhẫn cưới, nhẫn cầu hôn', 'Chọn kiểu dáng, bề mặt và cách đính đá quý', 'Xoay, phóng to để xem từ mọi góc', 'Tóm tắt cấu hình để gửi T Gold tư vấn'], link: 'Mở công cụ 3D', to: '#tu-thiet-ke' },
      { n: 'B', h: 'Làm mới từ ý tưởng', p: 'Gửi ảnh tham khảo, bản phác thảo hoặc chỉ một ý tưởng — chúng mình dựng thành bản 3D.', items: ['Chữ cái, biểu tượng, con số mang dấu ấn riêng', 'Form và độ dày theo ý bạn', 'Phối nhiều loại đá quý', 'Duyệt 3D trước khi chế tác'], link: 'Gửi ý tưởng ngay', to: '#gui-y-tuong' },
    ],
    procKick: 'Quy trình', procH: 'Bốn bước, <em>một phiên bản duy nhất.</em>',
    steps: [
      ['Tư vấn gu &amp; cấu hình', 'Chuyên viên T Gold tìm hiểu cách bạn muốn xuất hiện, dịp bạn sẽ đeo và thói quen sử dụng, rồi đề xuất tuổi vàng, loại đá quý và kích thước.', 'Bạn nhận: đề xuất cấu hình rõ ràng'],
      ['Dựng bản 3D', 'Ý tưởng được dựng thành bản 3D để bạn duyệt tỷ lệ, độ dày, vị trí và mật độ đá quý. Có thể chỉnh sửa trước khi chốt.', 'Bạn nhận: bản 3D để duyệt từng chi tiết'],
      ['Chế tác tại xưởng riêng', 'Đúc vàng theo tuổi vàng đã chọn, lựa chọn và đính đá quý trực tiếp tại xưởng T Gold.', ''],
      ['Hoàn thiện &amp; QC', 'Kiểm tra từng chi tiết, cân trọng lượng vàng, đối chiếu thông số đá quý và bàn giao kèm giấy kiểm định.', 'Bạn nhận: món trang sức + thông số + giấy kiểm định'],
    ],
    baKick: 'Trước &amp; sau', baH: 'Từ bản 3D <em>đến thành phẩm.</em>',
    pairs: [
      ['Mặt dây chữ cái', 'Bản dựng 3D mặt dây chữ cái đính đá quý', 'Thành phẩm mặt dây chữ cái đính đá quý, đeo cùng dây chuyền vàng'],
      ['Nhẫn nam chữ cái', 'Bản dựng 3D nhẫn nam chữ cái đính đá quý', 'Thành phẩm nhẫn nam chữ cái đính đá quý, đeo trên tay'],
    ],
    r3d: 'Bản dựng 3D', rDone: 'Thành phẩm',
    toolsKick: 'Lựa chọn A · Tự thiết kế 3D', toolsH: 'Tự tay chỉnh <em>trên mô hình 3D.</em>',
    toolsLead: 'Chọn một dòng trang sức để mở công cụ. Bạn chỉnh đến khi ưng ý, rồi gửi cấu hình cho T Gold để được tư vấn.',
    tools: {
      'nhan-nam': ['Nhẫn nam', 'Kiểu dáng · Mặt nhẫn · Hàng đá quý · Hoàn thiện'],
      'mat-day': ['Mặt dây chuyền', 'Kiểu dáng · Mặt trước · Hoạ tiết · Hoàn thiện'],
      'nhan-cuoi': ['Nhẫn cưới', 'Kiểu dáng · Bề mặt · Đá quý · Lòng nhẫn'],
      'nhan-cau-hon': ['Nhẫn cầu hôn', 'Viên chủ · Ôm đá · Đá bên · Thân nhẫn'],
      'bong-tai': ['Bông tai', 'Kiểu dáng · Viên chủ · Đá viền · Màu vàng'],
    },
    toolTag: 'Công cụ 3D', toolOpen: 'Mở công cụ 3D', toolsNote: '',
    collP: 'Thích một mẫu có sẵn hơn? Chọn trong bộ sưu tập — T Gold điều chỉnh size, màu vàng, tuổi vàng và loại đá quý theo ý bạn.', collLink: 'Xem bộ sưu tập',
    formKick: 'Lựa chọn B · Gửi ý tưởng', formH: 'Kể cho chúng mình <em>về món bạn muốn.</em>',
    formLead: 'Càng nhiều chi tiết, bản 3D đầu tiên càng gần với điều bạn hình dung.',
    tips: ['Ảnh tham khảo hoặc bản phác thảo (tối đa 3 ảnh)', 'Dịp bạn muốn đeo và phong cách thường ngày', 'Kích thước tay / cổ nếu đã biết', 'Tuổi vàng, màu vàng, loại đá quý bạn đang cân nhắc'],
    idea: {
      photos: 'Ảnh mẫu bạn muốn làm', photosCta: 'Chọn ảnh mẫu', photosHint: 'Ảnh tham khảo, bản phác thảo hoặc ảnh chụp màn hình — tối đa {n} ảnh',
      desc: 'Mô tả ý tưởng', descPh: 'Loại trang sức, kiểu dáng, kích thước tay / cổ, tuổi vàng, màu vàng, loại đá quý, dịp bạn muốn đeo…',
      needOne: 'Bạn gửi giúp chúng mình ít nhất một ảnh mẫu hoặc vài dòng mô tả nhé.',
      name: 'Tên của bạn', remove: 'Bỏ ảnh',
      submit: 'Gửi ý tưởng qua Zalo',
      fine: 'Ảnh và thông tin bạn gửi chỉ được T Gold dùng để tư vấn món Custom này.',
      okH: 'Đã lưu ý tưởng của bạn.', code: 'Mã ý tưởng',
      okZalo: 'Bước cuối: mở Zalo T Gold và dán tin nhắn bên dưới. Ảnh và mô tả đã được lưu theo mã này — chúng mình sẽ tư vấn ngay trong cuộc trò chuyện.',
      okPlain: 'T Gold đã nhận ảnh và mô tả. Bạn giữ lại mã này và nhắc khi liên hệ để chúng mình tìm đúng ý tưởng của bạn.',
      openZalo: 'Mở Zalo T Gold', copy: 'Sao chép tin nhắn',
      copied: 'Đã sao chép tin nhắn — dán vào ô chat Zalo.', copyFail: 'Chưa tự sao chép được — bạn nhấn giữ đoạn tin nhắn phía trên để sao chép.',
      again: 'Gửi ý tưởng khác',
      msgHead: 'Ý tưởng Custom gửi T Gold', msgName: 'Tên', msgKind: 'Quan tâm', msgDesc: 'Mô tả', msgPhotos: 'Ảnh mẫu: {n} ảnh đã gửi trên website',
    },
    faqKick: 'Câu hỏi thường gặp', faqH: 'Trước khi <em>bắt đầu.</em>',
    endKick: 'Bắt đầu', endH: 'Chọn cách <em>bắt đầu của bạn.</em>', endLead: 'Tự thiết kế trên mô hình 3D, hoặc gửi ý tưởng để chúng mình dựng bản 3D cho bạn.',
  },
  en: {
    title: 'Custom jewelry made in our own workshop | T Gold – Luxury Jewelry',
    description: 'Adjust the size, gold color, karat and gemstone — or start fresh from your own idea. Approve a 3D model before crafting in the T Gold workshop, delivered with certification.',
    kick: 'T · Tailored Design — Custom',
    h1: 'From an idea to <em>a&nbsp;piece that’s yours alone.</em>',
    lead: 'A finished design is only a starting point. T Gold can tailor every detail — or build it entirely from the ideas and images you send.',
    cta: 'Send your Custom idea', ctaA: 'Design in 3D', ctaB: 'Send your idea',
    paths: [
      { n: 'A', h: 'Design it in 3D', p: 'Pick a type of piece and adjust every detail yourself on a 3D model.', items: ['Men’s rings, pendants, wedding rings, engagement rings', 'Choose the style, surface and gemstone setting', 'Rotate and zoom to see it from every angle', 'A configuration summary to send to T Gold'], link: 'Open the 3D tools', to: '#tu-thiet-ke' },
      { n: 'B', h: 'Start from your idea', p: 'Send a reference photo, a sketch or just an idea — we turn it into a 3D model.', items: ['Initials, emblems or numbers that are yours', 'Form and thickness as you wish', 'Mixed gemstone types', 'Approve the 3D model before crafting'], link: 'Send your idea now', to: '#gui-y-tuong' },
    ],
    procKick: 'The process', procH: 'Four steps, <em>one of a kind.</em>',
    steps: [
      ['Style &amp; configuration', 'A T Gold specialist learns how you want to show up, the occasions you’ll wear it and your habits, then recommends the karat, gemstone and dimensions.', 'You receive: a clear configuration proposal'],
      ['3D model', 'Your idea becomes a 3D model so you can review proportion, thickness, gemstone placement and density — and refine it before sign-off.', 'You receive: a 3D model to review in detail'],
      ['Made in our workshop', 'Gold is cast in your chosen karat; gemstones are selected and set directly in the T Gold workshop.', ''],
      ['Finishing &amp; QC', 'Every detail inspected, gold weight recorded, gemstone specifications verified — delivered with its certificate.', 'You receive: the piece + specifications + certificate'],
    ],
    baKick: 'Before &amp; after', baH: 'From 3D model <em>to finished piece.</em>',
    pairs: [
      ['Initial pendant', '3D model of an initial pendant set with gemstones', 'Finished initial pendant set with gemstones, worn on a gold chain'],
      ['Men’s initial ring', '3D model of a men’s initial ring set with gemstones', 'Finished men’s initial ring set with gemstones, worn on the hand'],
    ],
    r3d: '3D model', rDone: 'Finished piece',
    toolsKick: 'Option A · Design in 3D', toolsH: 'Shape it yourself <em>on a 3D model.</em>',
    toolsLead: 'Pick a type of piece to open its tool. Adjust it until it feels right, then send the configuration to T Gold for advice.',
    tools: {
      'nhan-nam': ['Men’s ring', 'Style · Ring face · Gemstone rows · Finish'],
      'mat-day': ['Pendant', 'Style · Front face · Motif · Finish'],
      'nhan-cuoi': ['Wedding rings', 'Profile · Surface · Gemstones · Inner band'],
      'nhan-cau-hon': ['Engagement ring', 'Center stone · Setting · Side stones · Band'],
      'bong-tai': ['Earrings', 'Style · Center stone · Halo · Gold color'],
    },
    toolTag: '3D tool', toolOpen: 'Open the 3D tool', toolsNote: 'The 3D tools are currently available in Vietnamese only.',
    collP: 'Prefer an existing design? Pick one from the collection — T Gold adjusts the size, gold color, karat and gemstone to your taste.', collLink: 'Browse the collection',
    formKick: 'Option B · Send your idea', formH: 'Tell us <em>about the piece you want.</em>',
    formLead: 'The more detail you share, the closer the first 3D model will be to what you imagine.',
    tips: ['Reference photos or a sketch (up to 3 images)', 'The occasion and your everyday style', 'Hand / neck size if you know it', 'The karat, gold color and gemstone you’re considering'],
    idea: {
      photos: 'Photos of the piece you want', photosCta: 'Choose reference photos', photosHint: 'Reference photos, sketches or screenshots — up to {n} images',
      desc: 'Describe your idea', descPh: 'Type of piece, style, hand / neck size, karat, gold color, gemstone, the occasion…',
      needOne: 'Please add at least one reference photo or a few lines of description.',
      name: 'Your name', remove: 'Remove photo',
      submit: 'Send your idea via Zalo',
      fine: 'T Gold uses the photos and details you send only to advise you on this Custom piece.',
      okH: 'Your idea has been saved.', code: 'Idea code',
      okZalo: 'Last step: open T Gold on Zalo and paste the message below. Your photos and description are saved under this code, so we can advise you right in the chat.',
      okPlain: 'T Gold has received your photos and description. Keep this code and mention it when you contact us so we can find your idea.',
      openZalo: 'Open T Gold on Zalo', copy: 'Copy message',
      copied: 'Message copied — paste it into the Zalo chat.', copyFail: 'Couldn’t copy automatically — press and hold the message above to copy it.',
      again: 'Send another idea',
      msgHead: 'Custom idea for T Gold', msgName: 'Name', msgKind: 'Interested in', msgDesc: 'Description', msgPhotos: 'Reference photos: {n} sent on the website',
    },
    faqKick: 'Frequently asked', faqH: 'Before <em>we begin.</em>',
    endKick: 'Get started', endH: 'Choose <em>how you begin.</em>', endLead: 'Design it yourself on a 3D model, or send your idea and we’ll build the 3D model for you.',
  },
};

registerPage('custom', T, {
  raw: ['idea.descPh', 'idea.remove', 'idea.code', 'idea.copied', 'idea.copyFail', 'idea.msgHead', 'idea.msgName', 'idea.msgKind', 'idea.msgDesc', 'idea.msgPhotos'],
  images: ['pair-1-3d','pair-1-done','pair-2-3d','pair-2-done'],
});
// Ô ảnh của khối “Từ bản 3D đến thành phẩm”: máy tính 4 ô / hàng, nhỏ hơn 1024px 2 ô / hàng
// Thứ tự thẻ công cụ 3D ở khối A (công cụ mới thêm xếp sau)
const TOOL_ORDER = ['nhan-nam', 'mat-day', 'nhan-cuoi', 'nhan-cau-hon'];
const BA_SIZES = '(min-width: 1024px) 300px, 48vw';

function faqs(lang) {
  const c = config.claims;
  const certs = esc(c.certificates.list.join(' · '));
  const w = c.warranty[lang];
  return lang === 'vi'
    ? [
        ['Custom mất bao lâu?', `Tuỳ độ phức tạp của thiết kế. ${esc(c.leadTime.vi)} Chuyên viên sẽ báo lịch cụ thể sau khi chốt bản 3D.`],
        ['Cần chuẩn bị gì trước khi tư vấn?', 'Ảnh tham khảo hoặc bản phác thảo, dịp bạn muốn đeo, kích thước tay hoặc cổ nếu đã biết. Chưa có đủ cũng không sao — chuyên viên sẽ cùng bạn làm rõ từng điểm.'],
        ['Có được xem trước thiết kế không?', 'Có. Bạn duyệt từng chi tiết trên bản 3D và có thể yêu cầu chỉnh sửa trước khi bắt đầu chế tác.'],
        ['Giá Custom được tính như thế nào?', 'Theo trọng lượng vàng và thông số đá quý thực tế của cấu hình. Chuyên viên sẽ báo chi tiết khi tư vấn, trước khi bạn quyết định.'],
        ['Món Custom có giấy kiểm định không?', `Đá quý đi kèm giấy kiểm định theo từng loại (${certs}). Trọng lượng vàng được cân và ghi rõ khi bàn giao.`],
        ['Món Custom được bảo hành thế nào?', `${esc(w.title)} — ${esc(w.text)} Bao gồm làm mới, chỉnh size và gắn lại đá quý.`],
      ]
    : [
        ['How long does Custom take?', `It depends on the complexity of the design. ${esc(c.leadTime.en)} A specialist confirms the exact timeline once the 3D model is approved.`],
        ['What should I prepare before the consultation?', 'Reference photos or a sketch, the occasion, and your hand or neck size if you know it. Not everything is needed — a specialist will clarify each point with you.'],
        ['Can I preview the design?', 'Yes. You review every detail on the 3D model and can request changes before crafting begins.'],
        ['How is a Custom piece priced?', 'By the actual gold weight and gemstone specifications of the configuration. A specialist shares the details during the consultation, before you decide.'],
        ['Does a Custom piece come with certification?', `Gemstones come with certificates by type (${certs}). Gold weight is recorded and stated at delivery.`],
        ['How is a Custom piece covered?', `${esc(w.title)} — ${esc(w.text)} Including refreshing, resizing and gemstone resetting.`],
      ];
}

// Form gửi ý tưởng: ảnh mẫu trước, mô tả sau; không hỏi số điện thoại / ngày hẹn / ô đồng ý.
// Gửi xong: ảnh + mô tả được lưu vào /admin → Lịch hẹn theo “mã ý tưởng”; khách mở Zalo T Gold và dán tin nhắn soạn sẵn
// (link zalo.me không nhận sẵn nội dung hay tệp đính kèm). Chưa cấu hình Zalo → chỉ hiện mã ý tưởng.
// Dùng chung cho trang Custom và trang Liên hệ (#dat-lich). preset: các mục “Bạn quan tâm” tích sẵn.
export function ideaForm(lang, { preset = ['custom'] } = {}) {
  const i = pageT('custom', lang).idea;
  const f = pageT('contact', lang).form;
  const zalo = zaloHref();
  const { maxFiles: n, maxFileMB: mb } = config.form;
  const fill = (s) => s.replace('{n}', n).replace('{mb}', mb);
  const req = `<span class="req" aria-hidden="true">*</span><span class="sr"> (${f.required})</span>`;
  const msg = { head: i.msgHead, code: i.code, name: i.msgName, kind: i.msgKind, desc: i.msgDesc, photos: i.msgPhotos, copied: i.copied, copyFail: i.copyFail };
  return `
<form class="book idea" id="booking-form" novalidate data-booking data-kind="idea"
  data-msg-sending="${esc(f.sending)}" data-msg-err="${esc(f.err)}" data-msg-file="${esc(fill(f.fileErr))}" data-msg-remove="${esc(i.remove)}"
  data-lbl-piece="${esc(f.fromPiece)}" data-lbl-config="${esc(f.fromConfig)}" data-lbl-saved="${esc(f.fromSaved)}">
  <input type="hidden" name="lang" value="${lang}">
  <input type="hidden" name="kind" value="idea">
  <input type="hidden" name="source" value="">
  <div class="hp" aria-hidden="true"><label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>

  <div class="fld">
    <span class="lbl" id="bf-files-lbl">${i.photos}</span>
    <label class="drop" for="bf-files">${icon('upload')}<span><b>${i.photosCta}</b><small>${fill(i.photosHint)}</small></span></label>
    <input class="sr" id="bf-files" name="files" type="file" accept="image/*" multiple aria-labelledby="bf-files-lbl" aria-describedby="bf-files-err">
    <ul class="files thumbs" data-file-list></ul>
    <p class="err" id="bf-files-err" hidden></p>
  </div>
  <div class="fld">
    <label for="bf-note">${i.desc}</label>
    <textarea id="bf-note" name="note" rows="6" maxlength="1500" placeholder="${esc(i.descPh)}" aria-describedby="bf-note-err"></textarea>
    <p class="err" id="bf-note-err" hidden>${i.needOne}</p>
  </div>
  <fieldset class="fld">
    <legend>${f.interest}</legend>
    <div class="chips">${f.interests.map(([v, l]) => `<label class="o"><input type="checkbox" name="interest" value="${v}" data-label="${esc(l)}"${preset.includes(v) ? ' checked' : ''}><span>${l}</span></label>`).join('')}</div>
  </fieldset>
  <div class="fld">
    <label for="bf-name">${i.name}${req}</label>
    <input id="bf-name" name="name" type="text" autocomplete="name" required maxlength="80" aria-describedby="bf-name-err">
    <p class="err" id="bf-name-err" hidden>${f.nameErr}</p>
  </div>
  <p class="err form-err" data-form-err role="alert" hidden></p>
  <button class="btn g wide-btn" type="submit" data-submit>${zalo ? i.submit : pageT('custom', lang).cta}</button>
  <p class="fine">${i.fine}</p>
</form>
<div class="book-ok idea-ok" data-booking-ok data-idea="${esc(JSON.stringify(msg))}" hidden tabindex="-1">
  ${icon('check', 'ico ok-ic')}
  <h3 class="disp">${i.okH}</h3>
  <p class="idea-code" data-idea-code-row>${esc(i.code)}<b data-idea-code></b></p>
  <p>${zalo ? i.okZalo : i.okPlain}</p>${zalo ? `
  <pre class="idea-msg" data-idea-msg tabindex="0"></pre>
  <a class="btn g" href="${esc(zalo)}" target="_blank" rel="noopener" data-idea-zalo>${i.openZalo}</a>
  <p class="idea-status" data-idea-status role="status"></p>
  <button type="button" class="link" data-idea-copy>${i.copy}</button>` : ''}
  <button type="button" class="link idea-again" data-booking-again>${i.again}</button>
</div>`;
}

export function renderCustom(lang) {
  const t = pageT('custom', lang);
  const alt = { vi: url('custom', 'vi'), en: url('custom', 'en') };
  // Khối A: các công cụ tự thiết kế 3D đang hiện (quản lý trong /admin → Sản phẩm 3D). Công cụ chỉ có bản tiếng Việt → cả hai ngôn ngữ cùng mở /3d/<slug>/.
  const rank = (m) => { const i = TOOL_ORDER.indexOf(m.app); return i < 0 ? TOOL_ORDER.length : i; };
  const tools = visibleModels3d().filter((m) => m.kind === 'app' && MODEL3D_APPS[m.app]).sort((a, b) => rank(a) - rank(b)).map((m) => model3dOf(m.slug));
  const toA = tools.length ? '#tu-thiet-ke' : url('collection', lang); // chưa có công cụ nào → lựa chọn A dẫn sang bộ sưu tập
  const body = `
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}

<section class="paths wrap" aria-label="Custom">
  ${t.paths.map((x) => `
  <article class="path rv">
    <span class="path-n" aria-hidden="true">${x.n}</span>
    <h2 class="h3">${x.h}</h2>
    <p>${x.p}</p>
    <ul class="ticks">${x.items.map((i) => `<li>${icon('check')}${i}</li>`).join('')}</ul>
    <a class="link" href="${x.to === '#tu-thiet-ke' ? toA : x.to.startsWith('#') ? x.to : url(x.to, lang)}">${x.link}</a>
  </article>`).join('')}
</section>

<section class="custom glow-band" aria-labelledby="proc-title">
  <div class="wrap-n">
    <p class="kick">${t.procKick}</p>
    <h2 class="disp h2" id="proc-title">${t.procH}</h2>
    <ol class="steps steps-detail">
      ${t.steps.map(([h, p, get], i) => `<li class="step rv" style="--d:${i}"><span class="n" aria-hidden="true">0${i + 1}</span><h3>${h}</h3><p>${p}</p>${get ? `<p class="get">${get}</p>` : ''}</li>`).join('')}
    </ol>
    <p class="note">${esc(config.claims.leadTime[lang])}</p>
  </div>
</section>

<section class="ba wrap" aria-labelledby="ba-title">
  <div class="shead"><div><p class="kick">${t.baKick}</p><h2 class="disp h2" id="ba-title">${t.baH}</h2></div></div>
  <div class="ba-grid">${t.pairs.map(([name, a, b], k) => {
    const tile = (slot, cls, label, desc, ic) => {
      const im = pageImg('custom', `pair-${k + 1}-${slot}`);
      const pos = im?.focus && im.focus !== '50% 50%' ? ` style="object-position:${esc(im.focus)}"` : '';
      return `<div class="ba-tile ${cls}">${im
        ? `<span class="ba-tag">${label}</span><img src="${esc(im.src)}"${im.srcset ? ` srcset="${esc(im.srcset)}" sizes="${BA_SIZES}"` : ''} alt="${esc(imgAlt(im, lang, desc))}" loading="lazy" decoding="async"${pos}>`
        : media({ label, desc, icon: ic, alt: desc })}</div>`;
    };
    return `
    <figure class="ba-card rv">
      <div class="ba-duo">${tile('3d', 'ba-3d', t.r3d, a, 'pen')}<span class="ba-arrow" aria-hidden="true">${icon('arrow')}</span>${tile('done', 'ba-done', t.rDone, b, 'gem')}</div>
      <figcaption class="ba-cap"><span class="n" aria-hidden="true">${String(k + 1).padStart(2, '0')}.</span><b>${name}</b></figcaption>
    </figure>`; }).join('')}
  </div>
</section>

${tools.length ? `<section class="tools wrap" id="tu-thiet-ke" tabindex="-1" aria-labelledby="tools-title">
  <div class="shead"><div><p class="kick">${t.toolsKick}</p><h2 class="disp h2" id="tools-title">${t.toolsH}</h2><p class="lead">${t.toolsLead}</p></div></div>
  <ul class="tool-grid">${tools.map((m) => {
    const [name, desc] = t.tools?.[m.app] || [MODEL3D_APPS[m.app][lang], ''];
    const set = posterSrcset(m.poster);
    return `
    <li class="rv"><a class="tool" href="${model3dPath(m.slug, 'vi')}"${lang === 'en' ? ' hreflang="vi"' : ''}>
      <span class="media poster3d tool-media">${m.poster ? `<img src="${esc(m.poster)}"${set ? ` srcset="${esc(set)}" sizes="(min-width: 900px) 280px, 46vw"` : ''} alt="" loading="lazy" decoding="async">` : ''}<span class="ba-tag">${t.toolTag}</span></span>
      <span class="tool-tx"><b>${name}</b>${desc ? `<small>${desc}</small>` : ''}<span class="link">${t.toolOpen}</span></span>
    </a></li>`; }).join('')}
  </ul>${t.toolsNote ? `
  <p class="tool-note">${t.toolsNote}</p>` : ''}
  <p class="tool-alt"><span>${t.collP}</span><a class="link" href="${url('collection', lang)}">${t.collLink}</a></p>
</section>` : ''}

<section class="send wrap" id="gui-y-tuong" tabindex="-1" aria-labelledby="send-title">
  <div class="send-intro">
    <p class="kick">${t.formKick}</p>
    <h2 class="disp h2" id="send-title">${t.formH}</h2>
    <p class="lead">${t.formLead}</p>
    <ul class="ticks">${t.tips.map((i) => `<li>${icon('check')}${i}</li>`).join('')}</ul>
  </div>
  <div class="frame-soft">${ideaForm(lang)}</div>
</section>

<section class="faq-wrap wrap" aria-labelledby="faq-title">
  <div class="shead"><div><p class="kick">${t.faqKick}</p><h2 class="disp h2" id="faq-title">${t.faqH}</h2></div></div>
  ${faqList(faqs(lang))}
</section>

<section class="band wrap" aria-labelledby="end-title">
  <div class="band-in rv">
    <p class="kick">${t.endKick}</p>
    <h2 class="disp h2" id="end-title">${t.endH}</h2>
    <p class="lead">${t.endLead}</p>
    <div class="btns center"><a class="btn g" href="${toA}">${t.ctaA}</a><a class="btn l" href="#gui-y-tuong">${t.ctaB}</a></div>
  </div>
</section>`;

  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs(lang).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
  };
  return layout({ lang, page: 'custom', title: t.title, description: t.description, alt, body, jsonld: [faqLd] });
}
