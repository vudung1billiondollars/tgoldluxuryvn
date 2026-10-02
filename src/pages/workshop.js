// XƯỞNG T GOLD — câu chuyện xưởng, 6 công đoạn, ảnh / video quy trình
import { url, esc, media } from '../lib/core.js';
import C from '../i18n/common.js';
import { layout } from '../partials/layout.js';
import { pageHero, finalCta } from '../partials/blocks.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Xưởng chế tác riêng: từ bản 3D đến thành phẩm | T Gold – Luxury Jewelry',
    description: 'Thiết kế 3D, lựa chọn đá quý, đúc vàng, đính đá quý, hoàn thiện và QC — mọi công đoạn được thực hiện và kiểm soát trực tiếp tại xưởng T Gold.',
    kick: 'Xưởng T Gold',
    h1: 'Nơi giá trị <em>được chế tác.</em>',
    lead: 'Từ bản vẽ 3D đến thành phẩm, mọi công đoạn được thực hiện và kiểm soát trực tiếp tại xưởng T Gold.',
    video: ['Video quy trình tại xưởng', 'Cận cảnh đúc vàng, đính đá quý và đánh bóng — ánh sáng thật, không kỹ xảo'],
    introKick: 'Vì sao là xưởng riêng',
    introH: 'Kiểm soát từng chi tiết <em>để giá trị là thật.</em>',
    introP: [
      'Một món trang sức nổi bật chỉ thực sự có giá trị khi phía sau là chất liệu thật và tay nghề thật. Vì vậy T Gold chế tác tại xưởng riêng — nơi chúng mình kiểm soát tuổi vàng, lựa chọn đá quý và chất lượng hoàn thiện của từng món.',
      'Xưởng riêng cũng là lý do T Gold có thể Custom: điều chỉnh kích thước, màu vàng, tuổi vàng, loại đá quý — hoặc dựng mới hoàn toàn từ ý tưởng của bạn.',
    ],
    stagesKick: 'Sáu công đoạn', stagesH: 'Hành trình <em>của một món T Gold.</em>',
    stages: [
      ['Thiết kế 3D', 'Ý tưởng và thông số đã chốt được dựng thành bản 3D, để duyệt tỷ lệ, độ dày và vị trí đá quý trước khi chế tác.', 'Màn hình dựng 3D cạnh bản phác thảo'],
      ['Lựa chọn đá quý', 'Đá quý được chọn theo loại, kích thước và thông số đã thống nhất, đi kèm giấy kiểm định theo từng loại.', 'Khay đá quý dưới đèn soi, nhíp và kính lúp'],
      ['Đúc vàng', 'Vàng được đúc theo đúng tuổi vàng đã chọn, tạo nên phần khung chắc chắn cho món trang sức.', 'Khoảnh khắc rót vàng, ánh sáng ấm'],
      ['Đính đá quý', 'Thợ đính từng viên đá quý, kiểm tra chấu giữ để đá quý chắc chắn và bắt sáng tốt nhất.', 'Cận tay thợ đính đá quý dưới kính hiển vi'],
      ['Hoàn thiện', 'Mài, đánh bóng và làm sạch để bề mặt vàng đạt độ sáng đúng như thiết kế.', 'Đánh bóng trên máy, tia sáng phản chiếu'],
      ['Kiểm tra chất lượng', 'Kiểm tra từng chi tiết, cân trọng lượng vàng, đối chiếu thông số đá quý và giấy kiểm định trước khi bàn giao.', 'Cân điện tử hiển thị trọng lượng cạnh giấy kiểm định'],
    ],
    ph: 'Ảnh quy trình',
    quote: 'Một món trang sức nổi bật nhất khi nó thực sự mang dấu ấn của người sở hữu.',
    ctaH: 'Bắt đầu một món <em>chỉ dành cho bạn.</em>', ctaLead: 'Gửi ý tưởng — chúng mình dựng bản 3D và chế tác tại xưởng T Gold.', ctaB1: 'Gửi ý tưởng Custom',
  },
  en: {
    title: 'Our own workshop: from 3D model to finished piece | T Gold – Luxury Jewelry',
    description: '3D design, gemstone selection, gold casting, gemstone setting, finishing and QC — every stage is carried out and controlled directly in the T Gold workshop.',
    kick: 'The T Gold workshop',
    h1: 'Where worth <em>is crafted.</em>',
    lead: 'From 3D drawing to finished piece, every stage is carried out and controlled directly in the T Gold workshop.',
    video: ['Workshop process video', 'Close-ups of gold casting, gemstone setting and polishing — real light, no effects'],
    introKick: 'Why our own workshop',
    introH: 'Every detail controlled, <em>so the value is real.</em>',
    introP: [
      'A standout piece only holds real value when real materials and real craftsmanship stand behind it. That’s why T Gold crafts in its own workshop — where we control the gold karat, the choice of gemstones and the finish of every piece.',
      'Our own workshop is also what makes Custom possible: adjusting size, gold color, karat and gemstone — or building something entirely new from your idea.',
    ],
    stagesKick: 'Six stages', stagesH: 'The journey <em>of a T Gold piece.</em>',
    stages: [
      ['3D design', 'Your approved idea and specifications become a 3D model, so proportion, thickness and gemstone placement are reviewed before crafting.', '3D modelling screen beside the original sketch'],
      ['Gemstone selection', 'Gemstones are chosen by type, size and agreed specifications, with certificates according to type.', 'Gemstone tray under an inspection lamp, tweezers and loupe'],
      ['Gold casting', 'Gold is cast in the exact karat you chose, forming a solid frame for the piece.', 'The moment gold is poured, in warm light'],
      ['Gemstone setting', 'Each gemstone is set by hand and every prong checked, so stones sit securely and catch the light at their best.', 'Close-up of a setter’s hands under a microscope'],
      ['Finishing', 'Filing, polishing and cleaning bring the gold surface to exactly the brilliance intended.', 'Polishing wheel with reflected light'],
      ['Quality control', 'Every detail inspected, gold weight recorded, gemstone specifications and certificates verified before delivery.', 'Digital scale showing the weight beside the certificate'],
    ],
    ph: 'Process photo',
    quote: 'A piece shines brightest when it truly carries the mark of its owner.',
    ctaH: 'Begin a piece <em>made only for you.</em>', ctaLead: 'Send us your idea — we’ll build the 3D model and craft it in the T Gold workshop.', ctaB1: 'Send your Custom idea',
  },
};

registerPage('workshop', T, { images: ['video','stage-1','stage-2','stage-3','stage-4','stage-5','stage-6'] });

export function renderWorkshop(lang) {
  const t = pageT('workshop', lang);
  const alt = { vi: url('workshop', 'vi'), en: url('workshop', 'en') };
  // Khung đầu trang: có video → bố cục video + lời dẫn đặt cạnh nhau; chỉ có ảnh / chưa có gì → khung ngang như cũ
  const film = pageImg('workshop', 'video');
  const filmAlt = imgAlt(film, lang, t.video[0]);
  const body = `
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}
${film?.video ? `
<section class="ws-top wrap" aria-labelledby="ws-intro">
  <figure class="ws-film rv">
    <div class="ws-film-box" data-film>
      <img src="${esc(film.src)}"${film.srcset ? ` srcset="${esc(film.srcset)}" sizes="(min-width: 768px) 46vw, 100vw"` : ''} alt="${esc(filmAlt)}" fetchpriority="high" decoding="async"${film.focus && film.focus !== '50% 50%' ? ` style="object-position:${esc(film.focus)}"` : ''}>
      <video muted loop playsinline preload="none" disableremoteplayback aria-label="${esc(filmAlt)}"><source src="${esc(film.video)}" type="video/${film.video.endsWith('.webm') ? 'webm' : 'mp4'}"></video>
      <button type="button" class="ws-film-btn" data-film-toggle aria-label="${esc(C[lang].filmPlay)}" data-play="${esc(C[lang].filmPlay)}" data-pause="${esc(C[lang].filmPause)}">
        <svg class="ico i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg><svg class="ico i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l9 6-9 6z"/></svg>
      </button>
    </div>
    <figcaption>${esc(filmAlt)}</figcaption>
  </figure>
  <div class="ws-top-tx">
    <p class="kick">${t.introKick}</p>
    <h2 class="disp h2" id="ws-intro">${t.introH}</h2>
    <div class="ws-intro-p">${t.introP.map((p) => `<p class="lead">${p}</p>`).join('')}</div>
  </div>
</section>` : `
<section class="wrap ws-video rv" aria-label="${t.video[0]}">
  ${media({ src: film?.src, srcset: film?.srcset, sizes: '(min-width: 1200px) 1200px, 100vw', label: t.video[0], desc: t.video[1], icon: 'play', alt: filmAlt, cls: 'wide-media' })}
</section>

<section class="ws-intro wrap" aria-labelledby="ws-intro">
  <div><p class="kick">${t.introKick}</p><h2 class="disp h2" id="ws-intro">${t.introH}</h2></div>
  <div class="ws-intro-p">${t.introP.map((p) => `<p class="lead">${p}</p>`).join('')}</div>
</section>`}

<section class="stages wrap" aria-labelledby="stages-title">
  <div class="shead"><div><p class="kick">${t.stagesKick}</p><h2 class="disp h2" id="stages-title">${t.stagesH}</h2></div></div>
  <ol class="stage-list">
    ${t.stages.map(([h, p, ph], i) => `
    <li class="stage rv">
      ${(() => { const im = pageImg('workshop', `stage-${i + 1}`); return media({ src: im?.src, srcset: im?.srcset, sizes: '(min-width: 1024px) 40vw, 100vw', label: t.ph, desc: ph, icon: i === 0 ? 'pen' : i === 5 ? 'cert' : 'gem', alt: imgAlt(im, lang, ph) }); })()}
      <div class="stage-tx">
        <span class="n" aria-hidden="true">0${i + 1}</span>
        <h3 class="h3">${h}</h3>
        <p>${p}</p>
      </div>
    </li>`).join('')}
  </ol>
</section>

<section class="quote wrap-n" aria-label="Quote">
  <blockquote class="rv"><p class="disp">“${t.quote}”</p><footer class="latin">TRUE MATERIALS · TAILORED DESIGN · YOUR TRAIT</footer></blockquote>
</section>
${finalCta(lang, { h: t.ctaH, lead: t.ctaLead, b1: t.ctaB1, href1: `${url('custom', lang)}#gui-y-tuong` })}`;

  return layout({ lang, page: 'workshop', title: t.title, description: t.description, alt, body });
}
