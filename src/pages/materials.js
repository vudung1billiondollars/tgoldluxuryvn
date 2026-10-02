// CHẤT LIỆU & KIỂM ĐỊNH — kiến thức: tuổi vàng, 3 loại đá quý, cách đọc giấy kiểm định, vì sao không dùng bạc / CZ / vàng mạ
import { url, esc, nl, icon, bigIcon, media, config, postPath } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { pageHero, finalCta } from '../partials/blocks.js';
import { catalog, visiblePosts } from '../lib/content.js';
import { registerPage, pageT, pageImg, imgAlt } from '../lib/pagetext.js';

const T = {
  vi: {
    title: 'Chất liệu & kiểm định: vàng 10K · 14K · 18K, Moissanite, Lab Diamond | T Gold',
    description: 'Tuổi vàng 10K, 14K, 18K khác nhau thế nào; Moissanite, Lab Diamond và kim cương thiên nhiên; cách đọc giấy kiểm định; vì sao T Gold không dùng bạc, CZ hay vàng mạ.',
    kick: 'Chất liệu &amp; Kiểm định',
    h1: 'Giá trị thật <em>nằm ở chi tiết.</em>',
    lead: 'Tuổi vàng, loại đá quý, thông số và giấy kiểm định — những điều nên biết trước khi chọn một món trang sức giá trị.',
    toc: [['tuoi-vang', 'Tuổi vàng'], ['da-quy', 'Đá quý'], ['giay-kiem-dinh', 'Giấy kiểm định'], ['khong-dung', 'Không dùng']],
    tocLabel: 'Trên trang này',
    gold: {
      kick: 'T · True Materials', h: '10K, 14K hay 18K — <em>khác nhau thế nào?</em>',
      lead: 'Tuổi vàng cho biết hàm lượng vàng nguyên chất trong hợp kim. Vàng 24K quá mềm để giữ đá quý chắc chắn, nên trang sức cao cấp dùng 10K, 14K hoặc 18K.',
      cols: [
        { k: '10K', pct: '41,7%', rows: [['Màu sắc', 'Sắc vàng nhạt hơn'], ['Độ bền', 'Cứng nhất, chịu va chạm tốt'], ['Hợp với', 'Món đeo hằng ngày, form lớn']] },
        { k: '14K', pct: '58,5%', rows: [['Màu sắc', 'Cân bằng, ấm vừa phải'], ['Độ bền', 'Bền, giữ chấu đá quý tốt'], ['Hợp với', 'Thiết kế đính nhiều đá quý']] },
        { k: '18K', pct: '75%', rows: [['Màu sắc', 'Vàng đậm, ấm nhất'], ['Độ bền', 'Mềm hơn, cần chăm sóc kỹ hơn'], ['Hợp với', 'Món muốn thể hiện rõ chất liệu']] },
      ],
      pctLabel: 'vàng nguyên chất',
      colorsH: 'Ba màu vàng',
      colors: [['vang', 'Sắc vàng truyền thống, ấm và rực nhất khi bắt sáng.'], ['vang-trang', 'Hợp kim vàng với kim loại màu trắng — làm nổi bật độ trắng của đá quý.'], ['vang-hong', 'Hợp kim vàng với đồng, cho sắc hồng ấm và mềm mại.']],
    },
    gem: {
      kick: 'Đá quý', h: 'Moissanite, Lab Diamond <em>hay kim cương thiên nhiên?</em>',
      lead: 'Cả ba đều lấp lánh mạnh, nhưng khác nhau về bản chất, cảm giác ánh sáng và giấy kiểm định đi kèm.',
      heads: ['Moissanite', 'Lab Diamond', 'Kim cương thiên nhiên'],
      rows: [
        ['Bản chất', ['Tinh thể silicon carbide', 'Kim cương thật, tạo trong phòng thí nghiệm', 'Kim cương hình thành tự nhiên']],
        ['Độ cứng (Mohs)', ['9,25', '10', '10']],
        ['Ánh sáng', ['Tán sắc cao, nhiều tia sáng màu', 'Ánh trắng sáng, cân bằng', 'Ánh trắng sáng, cân bằng']],
        ['Giấy kiểm định thường gặp', ['GRA', 'IGI · GIA', 'GIA · IGI']],
        ['Phù hợp khi', ['Muốn mật độ đá quý dày, lấp lánh mạnh', 'Muốn kim cương thật, thông số rõ ràng', 'Muốn sự hiếm có của tự nhiên']],
      ],
    },
    cert: {
      kick: 'Giấy kiểm định', h: 'Đọc giấy kiểm định <em>trong 5 bước.</em>',
      lead: 'Giấy kiểm định là hồ sơ của viên đá quý, do đơn vị kiểm định độc lập cấp. Mỗi món T Gold đi kèm giấy kiểm định theo loại đá quý: __certs.',
      steps: [
        ['Mã số báo cáo', 'Tra mã trên website của đơn vị cấp để đối chiếu. Nhiều viên đá quý còn có mã khắc laser trên gờ đá.'],
        ['Loại đá quý', 'Kim cương thiên nhiên, kim cương nuôi cấy (lab-grown) hay Moissanite — được ghi rõ.'],
        ['Trọng lượng carat', '1 carat = 0,2 gram.'],
        ['Màu · độ tinh khiết · giác cắt', 'Với kim cương: màu từ D (không màu) trở xuống, độ tinh khiết từ FL đến I, giác cắt đánh giá khả năng bắt sáng.'],
        ['Kích thước &amp; hình dạng', 'Số đo thực tế bằng milimét và kiểu giác cắt, ví dụ giác tròn.'],
      ],
      ph: ['Ảnh thật — bắt buộc', 'Giấy kiểm định đặt cạnh món trang sức, chú thích các mục'],
      more: 'Đọc bài hướng dẫn chi tiết',
    },
    no: {
      kick: 'Nguyên tắc', h: 'Vì sao T Gold <em>không dùng</em>',
      items: [
        ['Bạc', 'Dễ xỉn màu theo thời gian và không giữ giá trị như vàng.'],
        ['CZ (cubic zirconia)', 'Đá tổng hợp giá trị thấp, nhanh mờ và trầy xước khi đeo lâu.'],
        ['Vàng mạ', 'Chỉ là lớp phủ mỏng bên ngoài kim loại khác, sẽ bong theo thời gian.'],
      ],
      close: 'T Gold chỉ dùng vàng 10K · 14K · 18K và đá quý có thể kiểm định — để sự lấp lánh hôm nay vẫn còn giá trị sau nhiều năm.',
    },
    each: { h: 'Mỗi món T Gold <em>đi kèm</em>', rows: [['Tuổi vàng', '10K · 14K · 18K'], ['Trọng lượng vàng', 'Cân &amp; ghi rõ trên từng sản phẩm'], ['Loại đá quý', 'Moissanite · Lab Diamond · Kim cương thiên nhiên'], ['Thông số đá quý', 'Kích thước · số lượng · thông số kỹ thuật'], ['Giấy kiểm định', '__certs']], cta: 'Xem bộ sưu tập' },
    read: 'Đọc thêm trên Tạp chí',
  },
  en: {
    title: 'Materials & certification: 10K · 14K · 18K gold, Moissanite, Lab Diamond | T Gold',
    description: 'How 10K, 14K and 18K gold differ; Moissanite, Lab Diamond and natural diamond; how to read a certificate; and why T Gold never uses silver, CZ or plated gold.',
    kick: 'Materials &amp; Certification',
    h1: 'Real worth <em>lives in the details.</em>',
    lead: 'Karat, gemstone type, specifications and certification — what’s worth knowing before choosing a piece of lasting value.',
    toc: [['tuoi-vang', 'Gold karat'], ['da-quy', 'Gemstones'], ['giay-kiem-dinh', 'Certificates'], ['khong-dung', 'Never used']],
    tocLabel: 'On this page',
    gold: {
      kick: 'T · True Materials', h: '10K, 14K or 18K — <em>what’s the difference?</em>',
      lead: 'Karat tells you the pure gold content of an alloy. 24K is too soft to hold gemstones securely, so fine jewelry uses 10K, 14K or 18K.',
      cols: [
        { k: '10K', pct: '41.7%', rows: [['Color', 'A lighter shade of gold'], ['Durability', 'Hardest, resists knocks well'], ['Best for', 'Everyday pieces, bold forms']] },
        { k: '14K', pct: '58.5%', rows: [['Color', 'Balanced, moderately warm'], ['Durability', 'Durable, holds settings well'], ['Best for', 'Heavily set designs']] },
        { k: '18K', pct: '75%', rows: [['Color', 'The richest, warmest gold'], ['Durability', 'Softer, needs more care'], ['Best for', 'Pieces where the material should speak']] },
      ],
      pctLabel: 'pure gold',
      colorsH: 'Three gold colors',
      colors: [['vang', 'The classic shade — warm and at its most vivid under light.'], ['vang-trang', 'Gold alloyed with white metals — it sets off the whiteness of gemstones.'], ['vang-hong', 'Gold alloyed with copper for a soft, warm rosy tone.']],
    },
    gem: {
      kick: 'Gemstones', h: 'Moissanite, Lab Diamond <em>or natural diamond?</em>',
      lead: 'All three shine brilliantly, but they differ in nature, in how they play with light, and in the certificates they come with.',
      heads: ['Moissanite', 'Lab Diamond', 'Natural diamond'],
      rows: [
        ['Nature', ['Crystalline silicon carbide', 'A real diamond grown in a laboratory', 'A diamond formed in nature']],
        ['Hardness (Mohs)', ['9.25', '10', '10']],
        ['Light', ['High dispersion, vivid color flashes', 'Bright white, balanced', 'Bright white, balanced']],
        ['Typical certificate', ['GRA', 'IGI · GIA', 'GIA · IGI']],
        ['Choose it when', ['You want dense settings and intense sparkle', 'You want a real diamond with clear specs', 'You want the rarity of nature']],
      ],
    },
    cert: {
      kick: 'Certificates', h: 'Read a certificate <em>in 5 steps.</em>',
      lead: 'A certificate is the record of a gemstone, issued by an independent laboratory. Every T Gold piece comes with a certificate according to its gemstone: __certs.',
      steps: [
        ['Report number', 'Look it up on the issuing laboratory’s website. Many stones also carry a laser-inscribed number on the girdle.'],
        ['Gemstone type', 'Natural diamond, laboratory-grown diamond or Moissanite — clearly stated.'],
        ['Carat weight', '1 carat = 0.2 grams.'],
        ['Color · clarity · cut', 'For diamonds: color from D (colorless) downwards, clarity from FL to I, cut assesses how well the stone returns light.'],
        ['Measurements &amp; shape', 'Actual dimensions in millimeters and the cutting style, such as round brilliant.'],
      ],
      ph: ['Real photo — required', 'A certificate beside the piece, with each section annotated'],
      more: 'Read the detailed guide',
    },
    no: {
      kick: 'Our principle', h: 'Why T Gold <em>never uses</em>',
      items: [
        ['Silver', 'It tarnishes over time and doesn’t hold value the way gold does.'],
        ['CZ (cubic zirconia)', 'A low-value synthetic stone that clouds and scratches with wear.'],
        ['Plated gold', 'Only a thin coating over another metal, which wears away over time.'],
      ],
      close: 'T Gold works only with 10K · 14K · 18K gold and gemstones that can be certified — so today’s brilliance still holds its value years from now.',
    },
    each: { h: 'Every T Gold piece <em>comes with</em>', rows: [['Gold karat', '10K · 14K · 18K'], ['Gold weight', 'Weighed &amp; stated for every piece'], ['Gemstone type', 'Moissanite · Lab Diamond · Natural diamond'], ['Gemstone specs', 'Size · count · technical grading'], ['Certification', '__certs']], cta: 'View the collection' },
    read: 'More in the Journal',
  },
};

registerPage('materials', T, { images: ['cert'] });

export function renderMaterials(lang) {
  const t = pageT('materials', lang);
  const certs = esc(config.claims.certificates.list.join(' · '));
  const alt = { vi: url('materials', 'vi'), en: url('materials', 'en') };
  // Ưu tiên bài đúng chủ đề của trang (chất liệu, đá quý, kiểm định), thiếu thì lấy thêm bài mới nhất
  const onTopic = (p) => ['Chất liệu', 'Đá quý', 'Kiểm định'].includes(p.category?.vi);
  const posts = [...visiblePosts().filter(onTopic), ...visiblePosts().filter((p) => !onTopic(p))].slice(0, 3);
  const certPost = visiblePosts().find((p) => /kiem-dinh/.test(p.slug));

  const body = `
${pageHero({ kick: t.kick, h1: t.h1, lead: t.lead })}
<nav class="toc wrap" aria-label="${t.tocLabel}"><ul class="tabs scroll-x">${t.toc.map(([id, l]) => `<li><a class="tab" href="#${id}">${l}</a></li>`).join('')}</ul></nav>

<section class="mat wrap" id="tuoi-vang" aria-labelledby="gold-title">
  <div class="mat-head"><p class="kick">${t.gold.kick}</p><h2 class="disp h2" id="gold-title">${t.gold.h}</h2><p class="lead">${t.gold.lead}</p></div>
  <div class="karats">
    ${t.gold.cols.map((c) => `
    <article class="karat rv">
      <h3 class="karat-k">${c.k}</h3>
      <p class="karat-pct"><b>${c.pct}</b> ${t.gold.pctLabel}</p>
      <dl>${c.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    </article>`).join('')}
  </div>
  <h3 class="kick sub-kick">${t.gold.colorsH}</h3>
  <ul class="gold-colors">
    ${t.gold.colors.map(([id, d]) => `<li class="rv"><i style="background:${esc(catalog.goldColors[id]?.swatch || '#D4A94F')}" aria-hidden="true"></i><div><b>${esc(catalog.goldColors[id]?.[lang] || id)}</b><span>${d}</span></div></li>`).join('')}
  </ul>
</section>

<section class="mat mat-dark" id="da-quy" aria-labelledby="gem-title">
  <div class="wrap">
    <div class="mat-head"><p class="kick">${t.gem.kick}</p><h2 class="disp h2" id="gem-title">${t.gem.h}</h2><p class="lead">${t.gem.lead}</p></div>
    <div class="cmp-wrap rv">
      <table class="cmp">
        <thead><tr><td></td>${t.gem.heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
        <tbody>${t.gem.rows.map(([k, vals]) => `<tr><th scope="row">${k}</th>${vals.map((v, i) => `<td data-h="${t.gem.heads[i]}">${v}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="mat wrap cert-sec" id="giay-kiem-dinh" aria-labelledby="cert-title">
  <div class="cert-grid">
    <div>
      <p class="kick">${t.cert.kick}</p>
      <h2 class="disp h2" id="cert-title">${t.cert.h}</h2>
      <p class="lead">${t.cert.lead.replace('__certs', certs)}</p>
      <ol class="num-list">${t.cert.steps.map(([h, p], i) => `<li class="rv"><span class="n" aria-hidden="true">0${i + 1}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol>
      ${certPost ? `<a class="link" href="${postPath(certPost.slug, lang)}">${t.cert.more}</a>` : ''}
    </div>
    ${(() => { const im = pageImg('materials', 'cert'); return media({ src: im?.src, srcset: im?.srcset, sizes: '(min-width: 1024px) 50vw, 100vw', label: t.cert.ph[0], desc: t.cert.ph[1], icon: 'cert', alt: imgAlt(im, lang, t.cert.ph[1]), cls: 'cert-media rv' }); })()}
  </div>
</section>

<section class="mat wrap" id="khong-dung" aria-labelledby="no-title">
  <div class="mat-head center"><p class="kick">${t.no.kick}</p><h2 class="disp h2" id="no-title">${t.no.h}</h2></div>
  <ul class="nos">${t.no.items.map(([h, p]) => `<li class="rv">${icon('close', 'ico no-ic')}<h3>${h}</h3><p>${p}</p></li>`).join('')}</ul>
  <p class="lead center no-close">${t.no.close}</p>
</section>

<section class="mat wrap each" aria-labelledby="each-title">
  <div class="each-in frame-soft rv">
    <h2 class="disp h3" id="each-title">${t.each.h}</h2>
    <dl class="spec">${t.each.rows.map(([k, v]) => `<div class="r"><dt>${k}</dt><dd>${v === '__certs' ? certs : v}</dd></div>`).join('')}</dl>
    <a class="btn l" href="${url('collection', lang)}">${t.each.cta}</a>
  </div>
</section>

${posts.length ? `<section class="journal-strip wrap" aria-labelledby="read-title">
  <div class="shead"><div><h2 class="kick" id="read-title">${t.read}</h2></div><a class="link" href="${url('journal', lang)}">${lang === 'vi' ? 'Tạp chí' : 'Journal'}</a></div>
  <ul class="posts">${posts.map((p) => postCardMini(p, lang)).join('')}</ul>
</section>` : ''}
${finalCta(lang)}`;

  return layout({ lang, page: 'materials', title: t.title, description: t.description, alt, body });
}

export function postCardMini(p, lang) {
  return `<li class="post rv"><a href="${postPath(p.slug, lang)}">
    ${media({ src: p.cover?.src, alt: p.cover?.alt?.[lang] || p.title[lang], label: lang === 'vi' ? 'Ảnh bài viết' : 'Article image', icon: 'camera', cls: 'post-media' })}
    <p class="kick">${esc(p.category?.[lang] || '')}</p>
    <h3>${esc(p.title[lang])}</h3>
    <p class="ex">${nl(p.excerpt?.[lang] || '')}</p>
  </a></li>`;
}
