// Thẻ sản phẩm: ảnh · nhãn · tên · cấu hình · XEM CHI TIẾT · TƯ VẤN →   (không hiển thị giá)
import { url, esc, icon, media, productHref } from '../lib/core.js';
import C from '../i18n/common.js';
import { catalog as data, model3dOf, posterSrcset } from '../lib/content.js';

export function productCard(p, lang, { hidden = false, order = -1, headingLevel = 3, rank } = {}) {
  const t = C[lang];
  const name = p.name[lang];
  const href = productHref(p, lang);
  const img = p.images?.[0];
  const m3 = model3dOf(p.model3d); // sản phẩm gắn mẫu 3D: chưa có ảnh thật thì dùng ảnh 3D làm đại diện, luôn có nhãn 3D
  const poster = !img && m3?.poster ? m3.poster : '';
  const badge = p.badges?.[0] && data.badges[p.badges[0]] ? `<span class="badge">${esc(data.badges[p.badges[0]][lang])}</span>` : '';
  const ph = lang === 'vi' ? ['Ảnh sản phẩm', 'Nền đen, 1 nguồn sáng, bắt sáng đá quý'] : ['Product photo', 'Black backdrop, single key light, gemstones catching the light'];
  const h = `h${headingLevel}`;
  return `
<article class="prod" data-cat="${p.category}" data-k="${(p.gold_karats || []).join(' ')}" data-g="${(p.gemstones || []).join(' ')}" data-c="${(p.gold_colors || []).join(' ')}" data-custom="${p.customizable ? 1 : 0}" data-created="${esc(p.created || '')}"${(rank ?? p.featured) ? ` data-featured="${rank ?? p.featured}"` : ''}${order >= 0 ? ` style="order:${order}"` : ''}${hidden ? ' hidden' : ''}>
  <div class="prod-media">
    ${media({ src: img?.src || poster, srcset: img?.srcset || posterSrcset(poster), sizes: '(min-width: 1024px) 25vw, 50vw', alt: img?.alt?.[lang] || name, label: ph[0], desc: ph[1], cls: poster ? 'poster3d' : '' })}
    ${badge}${m3 ? '<span class="tag3d" title="3D">3D</span>' : ''}
    <button type="button" class="save" data-save="${p.slug}" data-name="${esc(name)}" data-cfg="${esc(p.config[lang])}" aria-pressed="false" aria-label="${t.saveThis}: ${esc(name)}">${icon('bookmark')}</button>
  </div>
  <${h} class="prod-name"><a href="${href}" class="stretch">${esc(name)}</a></${h}>
  <p class="cfg">${esc(p.config[lang])}</p>
  <div class="row"><span aria-hidden="true">${t.detail}</span><a class="consult" href="${url('contact', lang)}?piece=${p.slug}#dat-lich" aria-label="${t.consult}: ${esc(name)}">${t.consult} <span aria-hidden="true">→</span></a></div>
</article>`;
}
