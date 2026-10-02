// TRANG 3D /3d/[slug]/ · /en/3d/[slug]/ — mỗi mẫu 3D một trang đứng riêng (chủ website gửi link từng mẫu cho khách).
// Không liên kết sang mẫu 3D khác. Mẫu, màu vàng & loại đá quý hiển thị quản lý trong /admin → Sản phẩm 3D.
// Khung xem: public/3d/viewer3d.js (chép từ "Website/3D's Products" bằng npm run sync-3d). Trang để noindex: link dành để gửi trực tiếp.
import { url, esc, jsonScript, model3dPath, MODEL3D_METALS, MODEL3D_GEMS } from '../lib/core.js';
import { layout } from '../partials/layout.js';
import { zaloHref } from '../partials/blocks.js';
import { catalog } from '../lib/content.js';

// 4 loại đá màu chưa có trong catalog sản phẩm → nhãn & màu chấm đặt tại đây
const GEM_EXTRA = {
  sapphire: { vi: 'Sapphire xanh', en: 'Blue sapphire', swatch: '#2F4FA6' },
  ruby: { vi: 'Ruby', en: 'Ruby', swatch: '#B3203F' },
  emerald: { vi: 'Emerald', en: 'Emerald', swatch: '#1C8A55' },
  'yellow-sapphire': { vi: 'Sapphire vàng', en: 'Yellow sapphire', swatch: '#E8C530' },
};
export const gem3dLabel = (g, lang) => catalog.gemstones?.[g]?.[lang] || GEM_EXTRA[g]?.[lang] || g;
export const metal3dLabel = (m, lang) => catalog.goldColors?.[m]?.[lang] || m;
// nhãn khung xem 3D theo ngôn ngữ (null = mặc định tiếng Việt) — dùng chung cho trang sản phẩm có khung 3D
export const viewerLabels = (lang) => T[lang]?.labels || null;

const T = {
  vi: {
    kick: 'Xem 3D', code: 'Mã mẫu', color: 'Màu vàng', gem: 'Loại đá quý', choose: 'Chọn cấu hình', current: 'Cấu hình đang xem',
    consult: 'Tư vấn & đặt hàng', zalo: 'Nhắn Zalo',
    lead: 'Kéo để xoay, chụm hai ngón hoặc cuộn chuột để phóng to. Chọn màu vàng và loại đá quý để xem trước cấu hình bạn thích.',
    fine: 'Gửi cấu hình bạn thích cho T Gold — chuyên viên sẽ tư vấn size, trọng lượng vàng và báo giá chính xác theo cấu hình đó.',
    note: '<b>Hình 3D mô phỏng.</b> Màu vàng và độ lấp lánh của đá quý có thể khác chút ít so với sản phẩm thật. Màu của Sapphire, Ruby và Emerald cũng là mô phỏng; mỗi viên đá quý thật có sắc độ riêng.',
    desc: (n) => `Xem ${n} bằng mô hình 3D: xoay, phóng to, đổi màu vàng và loại đá quý, rồi gửi cấu hình bạn thích cho T Gold.`,
    labels: null, // khung xem mặc định tiếng Việt
  },
  en: {
    kick: '3D view', code: 'Design code', color: 'Gold color', gem: 'Gemstone', choose: 'Choose your configuration', current: 'Current configuration',
    consult: 'Inquire & order', zalo: 'Message on Zalo',
    lead: 'Drag to rotate, pinch or scroll to zoom. Choose the gold color and gemstone to preview the configuration you like.',
    fine: 'Send the configuration you like to T Gold — a specialist will advise on size and gold weight and quote precisely for it.',
    note: '<b>3D simulation.</b> Gold color and gemstone sparkle may differ slightly from the real piece. Sapphire, ruby and emerald colors are simulated too; every real gemstone has its own tone.',
    desc: (n) => `View ${n} in 3D: rotate, zoom, switch gold color and gemstone, then send the configuration you like to T Gold.`,
    labels: {
      play: 'Auto-rotate', pause: 'Pause rotation', reset: 'Reset view', zoomIn: 'Zoom in', zoomOut: 'Zoom out',
      tilt: 'Diagonal rotation (see the top of the stone)', tiltOff: 'Back to level rotation',
      full: 'Full screen', exitFull: 'Exit full screen', hint: 'Drag to rotate · Pinch or scroll to zoom',
      loading: 'Loading 3D model', error: 'The 3D model could not load. Please reload the page.', metal: 'Gold color', stage: '3D model — drag to rotate',
    },
  },
};

const radio = (name, items, checked) => items
  .map(([v, label, sw]) => `<label class="o"><input type="radio" name="${name}" value="${esc(v)}" data-label="${esc(label)}"${v === checked ? ' checked' : ''}><span>${sw ? `<i style="background:${esc(sw)}"></i>` : ''}${esc(label)}</span></label>`)
  .join('');

// ver: { viewer: mã phiên bản khung xem, model: mã phiên bản tệp .glb } — đổi khi tệp đổi để trình duyệt không dùng bản cũ
export function renderModel3d(m, lang, ver = {}) {
  const t = T[lang];
  const name = m.name?.[lang] || m.name?.vi || m.slug;
  const alt = { vi: model3dPath(m.slug, 'vi'), en: model3dPath(m.slug, 'en') };
  const metals = (m.metals || []).filter((x) => MODEL3D_METALS.includes(x));
  const gems = (m.gems || []).filter((x) => MODEL3D_GEMS.includes(x));
  const m0 = metals.includes(m.metal) ? m.metal : metals[0];
  const g0 = gems.includes(m.gem) ? m.gem : gems[0];
  const zalo = zaloHref();
  const piece = `${name}${m.code && m.code !== name ? ` · ${m.code}` : ''} (3D)`;
  const cfgText = (mt, g) => [metal3dLabel(mt, lang), g && gem3dLabel(g, lang)].filter(Boolean).join(' · ');
  const sendHref = (mt, g) => `${url('contact', lang)}?piece=${encodeURIComponent(piece)}&config=${encodeURIComponent(cfgText(mt, g))}#dat-lich`;
  const swatch = Object.fromEntries(metals.map((x) => [x, catalog.goldColors?.[x]?.swatch || '#ccc']));
  const client = {
    src: `${m.src}${ver.model ? `?v=${ver.model}` : ''}`, metal: m0, gem: g0, tilt: !!m.tilt, metals, swatches: swatch,
    metalNames: Object.fromEntries(metals.map((x) => [x, metal3dLabel(x, lang)])), labels: t.labels,
    names: { metal: Object.fromEntries(metals.map((x) => [x, metal3dLabel(x, lang)])), gem: Object.fromEntries(gems.map((x) => [x, gem3dLabel(x, lang)])) },
    contact: url('contact', lang), piece,
    // đôi nhẫn cưới nằm trên bàn: góc nhìn từ trên, khung rộng vừa đôi nhẫn; màu vàng thứ hai (hai màu vàng) & đá ẩn lòng nhẫn
    extra: m.view === 'pair' ? { view: [0.1, 0.45, 1], start: 1.04, fitWidth: true, metal2: m.metal2 || 'vang-hong', innerGem: m.innerGem || 'ruby' } : {},
  };
  const viewer = `/3d/viewer3d.js${ver.viewer ? `?v=${ver.viewer}` : ''}`;

  const body = `
<link rel="stylesheet" href="/3d/viewer3d.css${ver.viewer ? `?v=${ver.viewer}` : ''}">
<section class="pdp wrap m3d" aria-labelledby="m3d-title">
  <div class="pdp-gallery${m.view === 'pair' ? ' is-pair' : ''}"><div class="m3d-view" id="m3d-view"></div></div>
  <div class="pdp-info">
    <div class="pdp-top"><p class="kick">${t.kick}</p></div>
    <h1 class="disp pdp-title" id="m3d-title">${esc(name)}</h1>
    ${m.code && m.code !== name ? `<p class="pdp-cfg">${t.code}: ${esc(m.code)}</p>` : ''}
    <p class="lead pdp-desc">${esc(m.description?.[lang] || '') || t.lead}</p>
    <form class="pdp-conf" id="m3d-conf" aria-label="${t.choose}">
      ${metals.length ? `<fieldset class="og"><legend><span>${t.color}</span><b data-m3d-out="metal">${esc(metal3dLabel(m0, lang))}</b></legend><div class="opt">${radio('metal', metals.map((x) => [x, metal3dLabel(x, lang), catalog.goldColors?.[x]?.swatch]), m0)}</div></fieldset>` : ''}
      ${gems.length > 1 ? `<fieldset class="og"><legend><span>${t.gem}</span><b data-m3d-out="gem">${esc(gem3dLabel(g0, lang))}</b></legend><div class="opt">${radio('gem', gems.map((x) => [x, gem3dLabel(x, lang), GEM_EXTRA[x]?.swatch]), g0)}</div></fieldset>` : ''}
      <p class="sum" aria-live="polite">${t.current}: <b data-m3d-sum>${esc([name, cfgText(m0, g0)].join(' · '))}</b></p>
      <div class="btns">
        <a class="btn g" data-m3d-send href="${esc(sendHref(m0, g0))}">${t.consult}</a>
        <a class="btn l" href="${zalo || `${url('contact', lang)}#dat-lich`}"${zalo ? ' target="_blank" rel="noopener"' : ''}>${t.zalo}</a>
      </div>
      <p class="fine">${t.fine}</p>
    </form>
    <p class="note m3d-note">${t.note}</p>
  </div>
</section>
<script type="module">
import { createViewer } from '${viewer}';
const cfg = ${jsonScript(client)};
const el = document.getElementById('m3d-view'), form = document.getElementById('m3d-conf');
const v = createViewer(el, { src: cfg.src, metal: cfg.metal, gem: cfg.gem, tilt: cfg.tilt, metals: cfg.metals, swatches: cfg.swatches, metalNames: cfg.metalNames, labels: cfg.labels || undefined, ...cfg.extra });
const pick = (n) => form.querySelector('input[name="' + n + '"]:checked')?.value;
const sync = () => {
  const mt = pick('metal') || cfg.metal, g = pick('gem') || cfg.gem;
  const txt = [cfg.names.metal[mt], cfg.names.gem[g]].filter(Boolean).join(' · ');
  form.querySelectorAll('[data-m3d-out]').forEach((b) => { b.textContent = b.dataset.m3dOut === 'metal' ? cfg.names.metal[mt] : cfg.names.gem[g]; });
  form.querySelector('[data-m3d-sum]').textContent = [document.getElementById('m3d-title').textContent, txt].join(' · ');
  form.querySelector('[data-m3d-send]').href = cfg.contact + '?piece=' + encodeURIComponent(cfg.piece) + '&config=' + encodeURIComponent(txt) + '#dat-lich';
};
form.addEventListener('change', (e) => { if (e.target.name === 'metal') v.setMetal(e.target.value); else if (e.target.name === 'gem') v.setGem(e.target.value); sync(); });
el.addEventListener('tg3d:metal', (e) => { const i = form.querySelector('input[name="metal"][value="' + e.detail + '"]'); if (i) { i.checked = true; sync(); } });
</script>`;
  return layout({ lang, page: '', title: `${name} · ${t.kick} | T Gold – Luxury Jewelry`, description: t.desc(name), alt, body, noindex: true, bodyClass: 'is-3d', ogImage: m.poster || undefined });
}
