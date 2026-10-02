// CÂU CHUYỆN / VỀ T GOLD — 01 đầu trang (T Gold là gì) · 02 T Gold bán gì · 03 vì sao T Gold tồn tại · 04 tuyên ngôn
// · 05 một chữ T, bốn tầng ý nghĩa (True · Tailored · Trait · Timē) · 06 dành cho ai · 07 điều T Gold muốn đồng hành · 08 CTA
// Bố cục “trang tạp chí”: ảnh thật trong khung vàng lệch đi cùng các khối 01, 02, 06 + dải ảnh ngang trước khối 03 (ảnh đổi được trong CMS).
// Mỗi khối chỉ làm một việc. Không có chuyện người sáng lập, mốc thời gian, số năm hay quy mô — chỉ dùng nội dung thương hiệu đã được cung cấp.
import { url, esc, mono } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { finalCta } from '../partials/blocks.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Câu chuyện T Gold: Worth, made visible | T Gold – Luxury Jewelry',
    description: 'T Gold – Luxury Jewelry: trang sức Luxury Việt Nam với hình ảnh quốc tế. True Materials · Tailored Design · Your Trait — giá trị được hữu hình hoá.',
    kick: 'Câu chuyện T Gold',
    h1Full: 'T Gold – Thương hiệu trang sức Luxury | Giá trị được hữu hình hoá',
    h1: 'Giá trị, <em>được hữu hình hoá.</em>',
    lead: [
      'T Gold là thương hiệu trang sức Luxury từ vàng thật và đá quý thật, với những thiết kế nổi bật, có thể Custom theo dấu ấn riêng.',
      'Chúng mình tin rằng những gì một người mang trên mình có thể trở thành cách hữu hình để thể hiện giá trị, cá tính và những gì họ đã đạt được.',
    ],
    whatKick: 'T Gold là gì?',
    whatH: 'Trang sức nổi bật. <em>Giá trị thật phía sau.</em>',
    whatP: [
      'T Gold tạo ra những thiết kế từ vàng 10K · 14K · 18K, kết hợp cùng Moissanite · kim cương Lab · kim cương thiên nhiên.',
      'Từ nhẫn, mặt dây, dây chuyền, lắc tay, bông tai đến các thiết kế Couple/Wedding — bạn có thể lựa chọn từ những mẫu được cập nhật theo Trend hoặc Custom lại từ đầu theo ý tưởng riêng.',
      'Từ bản vẽ 3D đến chế tác và QC, quá trình được kiểm soát tại xưởng T Gold.',
    ],
    whatLinks: [['collection', 'Khám phá bộ sưu tập'], ['custom', 'Custom'], ['workshop', 'Xưởng T Gold']],
    whyKick: 'Vì sao T Gold tồn tại?',
    whyH: 'Có những thành quả <em>xứng đáng có một dấu ấn.</em>',
    whyP: [
      'Một người có thể chọn trang sức vì vẻ đẹp.',
      'Nhưng đôi khi, một chiếc nhẫn, một sợi dây hay một mặt dây còn mang một ý nghĩa khác:',
    ],
    whyKey: 'nó đánh dấu một điều đã đạt được.',
    whyMarks: [
      'Một bước tiến trong công việc.',
      'Một cột mốc tài chính.',
      'Một giai đoạn mới.',
      'Hay đơn giản là thời điểm một người cảm thấy mình đã trở thành phiên bản khác của chính mình.',
    ],
    whyP2: [
      'T Gold không tạo ra giá trị cho người đeo.',
      'Giá trị ấy đã thuộc về họ trước khi món trang sức xuất hiện.',
      'Điều chúng mình muốn làm là biến một phần của giá trị đó thành thứ có thể nhìn thấy, chạm vào và mang theo bên mình.',
    ],
    whyClose: 'TIMĒ — WORTH, MADE VISIBLE.',
    maniKick: 'Tuyên ngôn',
    // mỗi câu là hai dòng (máy tính xuống dòng đúng chỗ; điện thoại tự dàn)
    maniH: [
      ['Có những món trang sức', 'chỉ để hoàn thiện vẻ ngoài.'],
      ['Và có những món khiến', 'sự hiện diện <em>trở nên khó bỏ qua.</em>'],
    ],
    maniP: [
      'T Gold không mặc định kín đáo là sang, nổi bật là phô trương.',
      'Sang trọng không bắt buộc phải kín đáo — nổi bật hết mình, miễn phía sau là giá trị thật.',
    ],
    maniHi: 'Vàng thật. Đá quý thật. Thông số rõ ràng.',
    maniClose: 'Một thiết kế xứng với vị thế của bạn — để những thành quả xứng đáng được nhìn thấy.',
    tKick: 'Một chữ T · Bốn tầng ý nghĩa',
    tH: 'Điều tạo nên <em>T Gold.</em>',
    // [chữ lớn, dòng phụ, các đoạn, câu ký (tuỳ chọn)] — thẻ thứ tư (Timē) là tầng tư tưởng phía sau ba thẻ đầu
    ts: [
      ['True', 'Giá trị thật', ['Vàng 10K · 14K · 18K cùng Moissanite, kim cương Lab hoặc kim cương thiên nhiên.', 'Không bạc, không CZ, không vàng mạ trong dòng sản phẩm chính.']],
      ['Tailored', 'Thiết kế theo lựa chọn', ['Size, màu vàng, tuổi vàng, loại đá quý — hoặc một thiết kế hoàn toàn mới từ ý tưởng riêng.']],
      ['Trait', 'Dấu ấn người sở hữu', ['Một món trang sức phải nói lên gu, cá tính và vị thế của người đeo — không chỉ đẹp khi đứng một mình.']],
      ['Timē', 'Giá trị được hữu hình hoá', ['Timē trong tiếng Hy Lạp gắn với giá trị, danh dự và phẩm giá.', 'Đây là tầng tư tưởng sâu nhất của T Gold:'], 'Worth, made visible.'],
    ],
    whoKick: 'Dành cho ai?',
    whoH: 'Cho những người <em>biết giá trị mình đang có.</em>',
    // mỗi đoạn là một nhóm dòng (xuống dòng giữa các dòng)
    whoP: [
      ['Phần lớn khách hàng T Gold là những người đang tự xây dựng con đường của mình — có những bước tiến trong công việc, thu nhập, phong cách sống và cách họ nhìn nhận bản thân.'],
      ['Họ không ngại nổi bật.', 'Nhưng thứ được mang trên người phải có giá trị thật phía sau.'],
    ],
    pillarsKick: 'Chữ ký thương hiệu',
    values: [['Powerful', 'Có sức nặng'], ['Luxury', 'Sang trọng'], ['Exclusive', 'Khác biệt'], ['Confident', 'Tự tin'], ['Bold', 'Táo bạo']],
    links: [['collection', 'Xem bộ sưu tập'], ['workshop', 'Xưởng T Gold'], ['materials', 'Chất liệu &amp; chất lượng']],
    misKick: 'Điều T Gold muốn đồng hành',
    misH: 'Không chỉ <em>cho hôm nay.</em>',
    misP: [
      ['T Gold muốn trang sức trở thành một dấu mốc hữu hình của hành trình mỗi người.'],
      ['Một món hôm nay có thể đánh dấu thành tựu đầu tiên.', 'Một món khác vài năm sau có thể đại diện cho một phiên bản lớn hơn của chính mình.'],
      ['Qua từng dấu mốc ấy, chúng mình muốn điều khách hàng mang theo không chỉ là vàng hay đá quý —', 'mà còn là sự tự hào về điều mình đã đạt được, sự tự tin vào giá trị của bản thân và niềm tin để tiếp tục bước tới.'],
    ],
    misClose: 'T Gold muốn lớn cùng hành trình của người sở hữu.',
    ctaH: 'Bạn muốn mình xuất&nbsp;hiện <em>như thế nào?</em>',
    ctaLead: 'Chia sẻ gu, điều bạn muốn thể hiện hoặc một thiết kế bạn đang nghĩ tới — T Gold sẽ cùng bạn tìm ra phiên bản phù hợp.',
  },
  en: {
    title: 'The T Gold story: Worth, made visible | T Gold – Luxury Jewelry',
    description: 'T Gold – Luxury Jewelry: Vietnamese luxury jewelry with an international image. True Materials · Tailored Design · Your Trait — worth, made visible.',
    kick: 'The T Gold story',
    h1Full: 'T Gold – Luxury Jewelry Brand | Worth, Made Visible',
    h1: 'Worth, <em>made visible.</em>',
    lead: [
      'T Gold is a Luxury jewelry brand built around real gold, real gemstones and bold designs that can be customized around each owner’s signature.',
      'We believe what a person wears can become a visible expression of their value, individuality and what they have achieved.',
    ],
    whatKick: 'What is T Gold?',
    whatH: 'Bold jewelry. <em>Real value behind it.</em>',
    whatP: [
      'T Gold creates jewelry in 10K · 14K · 18K gold, paired with Moissanite · Lab Diamonds · Natural Diamonds.',
      'From rings, pendants, chains, bracelets and earrings to Couple/Wedding pieces, you can choose from designs updated with current trends or create a Custom piece from your own idea.',
      'From 3D design to crafting and QC, the process is controlled at the T Gold workshop.',
    ],
    whatLinks: [['collection', 'Explore collections'], ['custom', 'Custom'], ['workshop', 'T Gold workshop']],
    whyKick: 'Why T Gold exists',
    whyH: 'Some achievements <em>deserve a visible mark.</em>',
    whyP: [
      'A person may choose jewelry simply because it is beautiful.',
      'But sometimes, a ring, a chain or a pendant can mean something more:',
    ],
    whyKey: 'it can mark something that has been achieved.',
    whyMarks: [
      'A step forward in work.',
      'A financial milestone.',
      'A new chapter.',
      'Or simply the moment someone realizes they have become a different version of themselves.',
    ],
    whyP2: [
      'T Gold does not create a person’s worth.',
      'That worth exists before the jewelry does.',
      'What we want to do is turn part of that value into something you can see, touch and carry with you.',
    ],
    whyClose: 'TIMĒ — WORTH, MADE VISIBLE.',
    maniKick: 'Manifesto',
    maniH: [
      ['Some jewelry simply', 'completes the way you look.'],
      ['Some pieces make', 'your presence <em>hard to ignore.</em>'],
    ],
    maniP: [
      'T Gold does not believe that understated automatically means refined, or that being noticed means being excessive.',
      'Luxury does not have to be quiet — stand out fully, as long as real value stands behind it.',
    ],
    maniHi: 'Real Gold. Real Gemstones. Clear Specifications.',
    maniClose: 'A design worthy of your position — so meaningful achievements can be seen.',
    tKick: 'One T · Four layers of meaning',
    tH: 'What makes <em>T Gold.</em>',
    ts: [
      ['True', 'Real value', ['10K · 14K · 18K gold paired with Moissanite, Lab Diamonds or Natural Diamonds.', 'No silver, CZ or gold plating in the core product line.']],
      ['Tailored', 'Designed around your choices', ['Size, gold color, gold purity, gemstone — or an entirely new design built from your own idea.']],
      ['Trait', 'The owner’s signature', ['A piece should express the wearer’s taste, individuality and status — not simply look good on its own.']],
      ['Timē', 'Worth, made visible', ['Timē is a Greek concept associated with worth, honor and dignity.', 'It represents the deeper philosophy behind T Gold:'], 'Worth, made visible.'],
    ],
    whoKick: 'Who is T Gold for?',
    whoH: 'For those who <em>know the value they carry.</em>',
    whoP: [
      ['Many T Gold clients are people building their own path — progressing in work, income, lifestyle and the way they see themselves.'],
      ['They are not afraid to stand out.', 'But what they wear should have real value behind it.'],
    ],
    pillarsKick: 'Brand signature',
    values: [['Powerful', ''], ['Luxury', ''], ['Exclusive', ''], ['Confident', ''], ['Bold', '']],
    links: [['collection', 'Explore collections'], ['workshop', 'T Gold workshop'], ['materials', 'Materials &amp; quality']],
    misKick: 'What T Gold wants to be part of',
    misH: 'Not only <em>for today.</em>',
    misP: [
      ['T Gold wants jewelry to become a visible marker of each person’s journey.'],
      ['One piece today may mark a first achievement.', 'Another years later may represent a greater version of who they have become.'],
      ['Through those milestones, we want what our clients carry to be more than gold or gemstones —', 'but also pride in what they have achieved, confidence in their own value and belief in the path ahead.'],
    ],
    misClose: 'T Gold wants to grow alongside the journey of every owner.',
    ctaH: 'How do you want <em>to show up?</em>',
    ctaLead: 'Share your taste, what you want to express or a design you already have in mind — T Gold will help you find the right version.',
  },
};

// Ảnh của trang (đổi được trong /admin → Trang thông tin → Câu chuyện): ảnh đầu trang, 2 ảnh khối “T Gold là gì”, dải ảnh ngang, ảnh khối “Dành cho ai”
registerPage('story', T, { raw: ['h1Full'], images: ['st-hero', 'st-what-1', 'st-what-2', 'st-strip', 'st-who'] });

const lines = (group) => group.join('<br>');
const btns = (list, lang) => `<div class="btns">${list.map(([id, l], i) => `<a class="btn ${i ? 'l' : 'g'}" href="${url(id, lang)}">${l}</a>`).join('')}</div>`;
// Thẻ <img> của một khung ảnh ('' nếu khung chưa có ảnh → khối tự dàn lại một cột)
function pic(slot, lang, sizes, eager = false) {
  const im = pageImg('story', slot);
  if (!im) return '';
  const pos = im.focus && im.focus !== '50% 50%' ? ` style="object-position:${esc(im.focus)}"` : '';
  return `<img src="${esc(im.src)}"${im.srcset ? ` srcset="${esc(im.srcset)}" sizes="${sizes}"` : ''} alt="${esc(imgAlt(im, lang, ''))}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${pos}>`;
}

export function renderStory(lang) {
  const t = pageT('story', lang);
  const alt = { vi: url('story', 'vi'), en: url('story', 'en') };
  const hero = pic('st-hero', lang, '(min-width: 900px) 520px, 92vw', true);
  const what1 = pic('st-what-1', lang, '(min-width: 900px) 380px, 68vw');
  const what2 = pic('st-what-2', lang, '(min-width: 900px) 240px, 42vw');
  const strip = pic('st-strip', lang, '100vw');
  const who = pic('st-who', lang, '(min-width: 900px) 440px, 92vw');
  const body = `
<section class="st-top wrap${hero ? '' : ' solo'}" aria-labelledby="page-title">
  <div>
    <p class="kick">${t.kick}</p>
    <h1 class="disp st-h1 st-2l" id="page-title"><span class="sr">${esc(t.h1Full)}</span><span aria-hidden="true">${t.h1}</span></h1>
    ${t.lead.map((p) => `<p class="lead">${p}</p>`).join('')}
  </div>${hero ? `
  <figure class="st-frame rv"><div class="in">${hero}</div></figure>` : ''}
</section>

<section class="st-sec wrap${what1 || what2 ? '' : ' solo'}" aria-labelledby="what-title">${what1 || what2 ? `
  <figure class="st-pair rv${what1 && what2 ? '' : ' one'}">${what1 ? `<div class="a">${what1}</div>` : ''}${what2 ? `<div class="b">${what2}</div>` : ''}</figure>` : ''}
  <div>
    <p class="kick">${t.whatKick}</p><h2 class="disp h2 st-2l" id="what-title">${t.whatH}</h2>
    ${t.whatP.map((p) => `<p class="lead">${p}</p>`).join('')}
    ${btns(t.whatLinks, lang)}
  </div>
</section>
${strip ? `
<figure class="st-strip">${strip}</figure>` : ''}
<section class="st-why${strip ? '' : ' no-strip'}" aria-labelledby="why-title">
  <div class="wrap st-why-in">
    <div class="st-why-l">
      <p class="kick">${t.whyKick}</p>
      <h2 class="disp h2 st-2l" id="why-title">${t.whyH}</h2>
      <p class="disp st-key">${t.whyKey}</p>
    </div>
    <div>
      ${t.whyP.map((p) => `<p class="lead">${p}</p>`).join('')}
      <ul class="st-marks">${t.whyMarks.map((m) => `<li><span>${m}</span></li>`).join('')}</ul>
      ${t.whyP2.map((p) => `<p class="lead">${p}</p>`).join('')}
      <p class="sig latin">${t.whyClose}</p>
    </div>
  </div>
</section>

<section class="mani-full wrap" aria-labelledby="mani-title">
  <div class="frame manifesto rv">
    ${mono('mono mono-md', '', 54)}
    <p class="kick">${t.maniKick}</p>
    <h2 class="mani-h" id="mani-title">${t.maniH.map((g) => `<span class="disp m-big">${g.map((l) => `<span class="ln">${l}</span>`).join(' ')}</span>`).join(' ')}</h2>
    ${t.maniP.map((p) => `<p class="m-p">${p}</p>`).join('')}
    <p class="disp m-mid">${t.maniHi.split(/(?<=\.)\s+/).map((x) => `<span>${x}</span>`).join(' ')}</p>
    <p class="m-p">${t.maniClose}</p>
    <p class="sig latin">WORTH, MADE VISIBLE</p>
  </div>
</section>

<section class="four wrap" aria-labelledby="four-title">
  <div class="mat-head center"><p class="kick">${t.tKick}</p><h2 class="disp h2" id="four-title">${t.tH}</h2></div>
  <ol class="ts">
    ${t.ts.map(([w, sig, ps, sign], i) => `
    <li class="tcard rv${sign ? ' tcard-key' : ''}" style="--d:${i}">
      <span class="t-letter" aria-hidden="true">T</span>
      <h3><span class="t-word">${w}</span><span class="t-sig">${sig}</span></h3>
      ${ps.map((p) => `<p>${p}</p>`).join('')}${sign ? `
      <p class="t-sign">${sign}</p>` : ''}
    </li>`).join('')}
  </ol>
</section>

<section class="st-sec st-who wrap${who ? '' : ' solo'}" aria-labelledby="who-title">
  <div>
    <p class="kick">${t.whoKick}</p><h2 class="disp h2 st-2l" id="who-title">${t.whoH}</h2>
    ${t.whoP.map((g) => `<p class="lead">${lines(g)}</p>`).join('')}
    <ul class="values" aria-label="${t.pillarsKick}">${t.values.map(([en, vi]) => `<li><span class="latin">${en.toUpperCase()}</span>${vi ? `<small>${vi}</small>` : ''}</li>`).join('')}</ul>
    ${btns(t.links, lang)}
  </div>${who ? `
  <figure class="st-frame l rv"><div class="in">${who}</div></figure>` : ''}
</section>

<section class="band wrap st-mis" aria-labelledby="mis-title">
  <div class="band-in rv">
    <p class="kick">${t.misKick}</p>
    <h2 class="disp h2" id="mis-title">${t.misH}</h2>
    ${t.misP.map((g, i) => (i === 1 && g.length === 2
      ? `<div class="st-two"><p>${g[0]}</p><span class="dv" aria-hidden="true"></span><p>${g[1]}</p></div>` // hai dấu mốc đặt đối xứng hai bên hình thoi vàng
      : `<p class="lead">${g.join(' ')}</p>`)).join('')}
    <p class="disp st-close">${t.misClose}</p>
  </div>
</section>
${finalCta(lang, { h: t.ctaH, lead: t.ctaLead })}`;

  return layout({ lang, page: 'story', title: t.title, description: t.description, alt, body });
}
