// Chuẩn hoá & kiểm tra dữ liệu gửi lên từ trang quản trị (không tin dữ liệu client)
export const str = (v, max = 500) => (typeof v === 'string' ? v : v == null ? '' : String(v)).replace(/\r\n?/g, '\n').trim().slice(0, max);
export const bi = (v, max = 500) => ({ vi: str(v?.vi, max), en: str(v?.en, max) });
export const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
export const mediaPath = (v) => {
  const s = str(v, 300);
  return !s || (/^\/(media|assets)\/[\w\-./]+$/.test(s) && !s.includes('..')) ? s : '';
};
export const httpUrl = (v) => {
  const s = str(v, 600);
  return !s || /^https?:\/\/[^\s"'<>`]+$/i.test(s) ? s : '';
};
const srcset = (v) => str(v, 1000).split(',').map((x) => x.trim()).filter((x) => { const [p, w] = x.split(/\s+/); return mediaPath(p) === p && p && /^\d+w$/.test(w || ''); }).join(', ');
const pick = (arr, allowed, max = 20) => [...new Set((Array.isArray(arr) ? arr : []).map((x) => str(x, 40)).filter((x) => allowed.includes(x)))].slice(0, max);

export function cleanProduct(p, catalog) {
  const errors = [];
  const slug = str(p?.slug, 80);
  if (!SLUG.test(slug)) errors.push('Đường dẫn (slug) chỉ gồm chữ thường không dấu, số và dấu gạch ngang.');
  const name = bi(p?.name, 120);
  if (!name.vi) errors.push('Cần nhập tên sản phẩm (tiếng Việt).');
  const catIds = (catalog.categories || []).map((c) => c.id);
  const category = str(p?.category, 40);
  if (!catIds.includes(category)) errors.push('Chọn danh mục sản phẩm.');
  const created = isDate(str(p?.created, 10)) ? str(p.created, 10) : new Date().toISOString().slice(0, 10);
  const opts = Array.isArray(p?.sizes?.options) ? p.sizes.options.map((x) => str(x, 20)).filter(Boolean).slice(0, 20) : [];
  const product = {
    slug,
    status: p?.status === 'hidden' ? 'hidden' : 'published',
    sample: !!p?.sample,
    featured: Math.max(0, Math.min(99, parseInt(p?.featured, 10) || 0)),
    created,
    category,
    badges: pick(p?.badges, Object.keys(catalog.badges || {}), 3),
    name,
    config: bi(p?.config, 160),
    description: bi(p?.description, 900),
    gold_karats: pick(p?.gold_karats, catalog.karats || ['10K', '14K', '18K']),
    gold_colors: pick(p?.gold_colors, Object.keys(catalog.goldColors || {})),
    gemstones: pick(p?.gemstones, Object.keys(catalog.gemstones || {})),
    customizable: !!p?.customizable,
    weight_note: bi(p?.weight_note, 200),
    gemstone_specs: bi(p?.gemstone_specs, 300),
    sizes: opts.length ? { label: bi(p?.sizes?.label, 40), options: opts, default: opts.includes(str(p?.sizes?.default, 20)) ? str(p.sizes.default, 20) : opts[0] } : null,
    certificates: pick(p?.certificates, catalog.certificates || ['GGJ', 'GRA', 'IGI', 'GIA']),
    images: (Array.isArray(p?.images) ? p.images : []).slice(0, 12).map((im) => ({ src: mediaPath(im?.src), srcset: srcset(im?.srcset), alt: bi(im?.alt, 200) })).filter((im) => im.src),
    video: mediaPath(p?.video),
    model3d: SLUG.test(str(p?.model3d, 80)) ? str(p.model3d, 80) : '', // mẫu 3D / công cụ tự thiết kế gắn vào sản phẩm (slug trong Sản phẩm 3D)
  };
  if (!product.gold_karats.length) errors.push('Chọn ít nhất một tuổi vàng.');
  return { product, errors };
}

export function cleanPost(p) {
  const errors = [];
  const slug = str(p?.slug, 100);
  if (!SLUG.test(slug)) errors.push('Đường dẫn (slug) chỉ gồm chữ thường không dấu, số và dấu gạch ngang.');
  const title = bi(p?.title, 200);
  if (!title.vi) errors.push('Cần nhập tiêu đề (tiếng Việt).');
  const post = {
    slug,
    status: ['published', 'draft', 'hidden'].includes(p?.status) ? p.status : 'draft',
    sample: !!p?.sample,
    date: isDate(str(p?.date, 10)) ? str(p.date, 10) : new Date().toISOString().slice(0, 10),
    category: bi(p?.category, 60),
    title,
    excerpt: bi(p?.excerpt, 400),
    cover: { src: mediaPath(p?.cover?.src), srcset: srcset(p?.cover?.srcset), alt: bi(p?.cover?.alt, 200) },
    body: bi(p?.body, 60000),
  };
  return { post, errors };
}

export function cleanSite(s, prev) {
  const errors = [];
  const c = s?.contact || {};
  const cl = s?.claims || {};
  let siteUrl = httpUrl(s?.siteUrl).replace(/\/+$/, '');
  if (!siteUrl) { siteUrl = prev.siteUrl; errors.push('Tên miền phải bắt đầu bằng https://'); }
  const embed = str(c.mapEmbed, 2000);
  const mapEmbed = !embed || /^https:\/\/(www\.)?google\.[a-z.]+\/maps\/embed\?[^\s"'<>]+$/i.test(embed) ? embed : '';
  if (embed && !mapEmbed) errors.push('Link bản đồ nhúng phải là link “Nhúng bản đồ” của Google Maps (https://www.google.com/maps/embed?…).');
  const site = {
    _note: prev._note,
    siteUrl,
    contact: {
      hotline: str(c.hotline, 30), zalo: str(c.zalo, 200), messenger: httpUrl(c.messenger), email: /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(str(c.email, 120)) ? str(c.email, 120) : '',
      address: bi(c.address, 300), hours: bi(c.hours, 120), hoursVerified: !!c.hoursVerified,
      mapEmbed, mapLink: httpUrl(c.mapLink),
    },
    social: Object.fromEntries(['instagram', 'facebook', 'tiktok', 'zalo'].map((k) => [k, httpUrl(s?.social?.[k])])),
    form: {
      endpoint: (() => { const e = str(s?.form?.endpoint, 400); return !e || e.startsWith('/') || /^https:\/\//.test(e) ? e : prev.form.endpoint; })(),
      maxFiles: Math.max(1, Math.min(5, parseInt(s?.form?.maxFiles, 10) || 3)),
      maxFileMB: Math.max(1, Math.min(10, parseInt(s?.form?.maxFileMB, 10) || 5)),
    },
    media: { heroVideo: mediaPath(s?.media?.heroVideo), heroVideoMobile: mediaPath(s?.media?.heroVideoMobile), heroPoster: mediaPath(s?.media?.heroPoster) },
    claims: {
      leadTime: { verified: !!cl.leadTime?.verified, vi: str(cl.leadTime?.vi, 300), en: str(cl.leadTime?.en, 300) },
      warranty: { verified: !!cl.warranty?.verified, vi: { title: str(cl.warranty?.vi?.title, 80), text: str(cl.warranty?.vi?.text, 300) }, en: { title: str(cl.warranty?.en?.title, 80), text: str(cl.warranty?.en?.text, 300) } },
      certificates: { verified: !!cl.certificates?.verified, list: (Array.isArray(cl.certificates?.list) ? cl.certificates.list : []).map((x) => str(x, 20)).filter(Boolean).slice(0, 8) },
      exchange: { verified: !!cl.exchange?.verified, vi: str(cl.exchange?.vi, 120), en: str(cl.exchange?.en, 120) },
    },
  };
  if (c.email && !site.contact.email) errors.push('Email chưa đúng định dạng.');
  for (const k of ['instagram', 'facebook', 'tiktok', 'zalo']) if (s?.social?.[k] && !site.social[k]) errors.push(`Link ${k} phải bắt đầu bằng https://`);
  if (!site.claims.warranty.vi.title) site.claims.warranty = prev.claims.warranty;
  if (!site.claims.certificates.list.length) site.claims.certificates.list = prev.claims.certificates.list;
  return { site, errors };
}

// ── Trang chủ (content/home.json) ──
export const HOME_ICONS = ['gem', 'workshop', 'pen', 'shield', 'cert', 'ring', 'spark', 'clock'];
export const HOME_PAGES = ['home', 'collection', 'custom', 'materials', 'workshop', 'story', 'contact', 'booking', 'journal', 'order', 'care'];
const FOCUS = /^\d{1,3}% \d{1,3}%$/;
const list = (a, n) => (Array.isArray(a) ? a : []).slice(0, n);
// Link tự nhập: đường dẫn trong website (/…) hoặc https://…
const linkUrl = (v) => { const s = str(v, 400); return /^\/(?!\/)[^\s"'<>`]*$/.test(s) || /^https?:\/\/[^\s"'<>`]+$/i.test(s) ? s : ''; };
function cleanLink(l, ctx) {
  const to = str(l?.to, 140);
  const i = to.indexOf(':');
  const kind = i < 0 ? to : to.slice(0, i), id = i < 0 ? '' : to.slice(i + 1);
  if (kind === 'page' && HOME_PAGES.includes(id)) return { to };
  if (kind === 'cat' && ctx.cats.includes(id)) return { to };
  if (kind === 'product' && ctx.products.includes(id)) return { to };
  if (kind === 'post' && ctx.posts.includes(id)) return { to };
  if (to === 'url') { const url = { vi: linkUrl(l?.url?.vi), en: linkUrl(l?.url?.en) }; if (url.vi || url.en) return { to: 'url', url }; }
  return { to: 'page:home' };
}
const cleanImage = (im) => {
  const o = { src: mediaPath(im?.src), srcset: srcset(im?.srcset), alt: bi(im?.alt, 200), focus: FOCUS.test(str(im?.focus, 12)) ? str(im.focus, 12) : '50% 50%' };
  const v = mediaPath(im?.video); // khung có video (trang Xưởng): ảnh = ảnh bìa hiện trước khi video chạy
  if (/\.(mp4|webm)$/.test(v)) o.video = v;
  return o;
};
const cleanCta = (c, ctx) => ({ label: bi(c?.label, 60), link: cleanLink(c?.link, ctx) });
const on = (v) => v !== false;

// ctx: { cats: [...id], products: [...slug], posts: [...slug] } — chỉ cho phép trỏ tới nội dung đang có
export function cleanHome(h, ctx) {
  const errors = [], warnings = [];
  const slides = list(h?.hero?.slides, 5).map((s) => ({
    nav: bi(s?.nav, 30), kicker: bi(s?.kicker, 90), title: bi(s?.title, 60), subtitle: bi(s?.subtitle, 90), text: bi(s?.text, 320),
    image: cleanImage(s?.image), ctas: list(s?.ctas, 2).map((c) => cleanCta(c, ctx)).filter((c) => c.label.vi),
  })).filter((s) => s.title.vi);
  if (!slides.length) errors.push('Cần ít nhất 1 slide hero có tiêu đề (tiếng Việt).');
  slides.forEach((s, i) => {
    if (!s.image.src) warnings.push(`Slide ${i + 1} chưa có ảnh.`);
    else if (!s.image.alt.vi) warnings.push(`Slide ${i + 1}: nên nhập mô tả ảnh (tốt cho SEO).`);
  });
  if (slides.length > 4) warnings.push('Nên giữ hero ở 3–4 slide để trang tải nhanh.');
  const sec = (s, extra) => ({ enabled: on(s?.enabled), kicker: bi(s?.kicker, 90), title: bi(s?.title, 160), ...extra });
  const home = {
    _note: 'Nội dung trang chủ. Sửa trong trang quản trị /admin → Trang chủ. Trong tiêu đề, đặt phần chữ vàng nghiêng giữa hai dấu *…*.',
    seo: { title: bi(h?.seo?.title, 90), description: bi(h?.seo?.description, 220) },
    hero: { interval: Math.max(4, Math.min(15, parseInt(h?.hero?.interval, 10) || 7)), tagline: str(h?.hero?.tagline, 80), h1: bi(h?.hero?.h1, 160), slides },
    trust: { enabled: on(h?.trust?.enabled), items: list(h?.trust?.items, 4).map((it) => ({ icon: HOME_ICONS.includes(it?.icon) ? it.icon : 'gem', title: bi(it?.title, 50), text: bi(it?.text, 70) })).filter((it) => it.title.vi) },
    categories: sec(h?.categories, {
      lead: bi(h?.categories?.lead, 260),
      link: cleanCta(h?.categories?.link, ctx),
      images: Object.fromEntries(ctx.cats.map((id) => [id, cleanImage(h?.categories?.images?.[id])])),
    }),
    featured: sec(h?.featured, {
      lead: bi(h?.featured?.lead, 260),
      products: [...new Set(list(h?.featured?.products, 12).map((x) => str(x, 80)).filter((x) => ctx.products.includes(x)))],
      limit: Math.max(2, Math.min(12, parseInt(h?.featured?.limit, 10) || 8)),
      priceNote: bi(h?.featured?.priceNote, 40),
      cta: cleanCta(h?.featured?.cta, ctx),
    }),
    order: sec(h?.order, {
      lead: bi(h?.order?.lead, 200), image: cleanImage(h?.order?.image),
      steps: list(h?.order?.steps, 6).map((st) => ({ title: bi(st?.title, 60), text: bi(st?.text, 220) })).filter((st) => st.title.vi),
      cta: cleanCta(h?.order?.cta, ctx),
    }),
    custom: sec(h?.custom, {
      lead: bi(h?.custom?.lead, 260),
      sendLabel: bi(h?.custom?.sendLabel, 40),
      sendItems: list(h?.custom?.sendItems, 5).map((x) => bi(x, 40)).filter((x) => x.vi),
      flow: list(h?.custom?.flow, 6).map((x) => bi(x, 30)).filter((x) => x.vi),
      image: cleanImage(h?.custom?.image), cta: cleanCta(h?.custom?.cta, ctx),
    }),
    why: sec(h?.why, {
      lead: bi(h?.why?.lead, 260),
      items: list(h?.why?.items, 4).map((it) => ({ title: bi(it?.title, 70), text: bi(it?.text, 260), image: cleanImage(it?.image), link: cleanCta(it?.link, ctx) })).filter((it) => it.title.vi),
      closing: bi(h?.why?.closing, 160), cta: cleanCta(h?.why?.cta, ctx),
    }),
    journal: sec(h?.journal, {
      lead: bi(h?.journal?.lead, 260),
      link: cleanCta(h?.journal?.link, ctx),
      posts: [...new Set(list(h?.journal?.posts, 3).map((x) => str(x, 100)).filter((x) => ctx.posts.includes(x)))],
      chips: list(h?.journal?.chips, 8).map((c) => cleanCta(c, ctx)).filter((c) => c.label.vi),
    }),
  };
  if (home.seo.title.vi.length > 65) warnings.push('Tiêu đề SEO (VI) dài hơn 65 ký tự — Google có thể cắt bớt.');
  return { home, errors, warnings };
}

// ── Trang thông tin (content/pages.json): chỉ nhận ô có trong chữ mặc định, khác mặc định, không phải mã nội bộ ──
// defaults: cây chữ mặc định dạng soạn thảo { vi, en } · slots: các khung ảnh của trang
const LOCKED = /^[a-z0-9-]*$/; // mã nội bộ (id, tên icon, anchor…) — không cho sửa
function diffTree(def, val) {
  if (typeof def === 'string') {
    if (LOCKED.test(def) || typeof val !== 'string') return undefined;
    const v = str(val, 3000);
    return v && v !== def ? v : undefined;
  }
  if (Array.isArray(def)) {
    const out = def.map((d, i) => diffTree(d, Array.isArray(val) ? val[i] : undefined));
    return out.some((x) => x !== undefined) ? out.map((x) => (x === undefined ? null : x)) : undefined;
  }
  if (def && typeof def === 'object') {
    const out = {};
    for (const k of Object.keys(def)) { const d = diffTree(def[k], val?.[k]); if (d !== undefined) out[k] = d; }
    return Object.keys(out).length ? out : undefined;
  }
  return undefined;
}
export function cleanPage(body, defaults, slots) {
  const page = {};
  for (const l of ['vi', 'en']) { const d = diffTree(defaults[l], body?.[l]); if (d) page[l] = d; }
  const images = {};
  for (const sl of slots) { const im = cleanImage(body?.images?.[sl]); if (im.src) images[sl] = im; }
  if (Object.keys(images).length) page.images = images;
  return page;
}

// ── Danh mục sản phẩm ──
export function cleanCategories(list, products) {
  const errors = [];
  const seen = new Set();
  const cats = (Array.isArray(list) ? list : []).slice(0, 30).map((c) => ({ id: str(c?.id, 40), vi: str(c?.vi, 60), en: str(c?.en, 60) }))
    .filter((c) => {
      if (!SLUG.test(c.id)) { errors.push(`Mã danh mục “${c.id || '(trống)'}” chỉ gồm chữ thường không dấu, số và dấu gạch ngang.`); return false; }
      if (seen.has(c.id)) { errors.push(`Mã danh mục “${c.id}” bị trùng.`); return false; }
      if (!c.vi) { errors.push(`Danh mục “${c.id}” cần tên tiếng Việt.`); return false; }
      seen.add(c.id); return true;
    });
  for (const id of new Set(products.map((p) => p.category))) if (!seen.has(id)) errors.push(`Không thể xoá danh mục “${id}” vì còn sản phẩm thuộc danh mục này — chuyển các sản phẩm sang danh mục khác trước.`);
  if (!cats.length) errors.push('Cần ít nhất 1 danh mục.');
  return { categories: cats, errors };
}

// Sản phẩm 3D (/admin → Sản phẩm 3D): mỗi mẫu / công cụ một trang /3d/<slug>/. kind 'model' = tệp .glb (public/3d/models/, có thể trong thư mục con vd. nhan-cuoi/, hoặc /media/3d/ tải lên từ CMS);
// kind 'app' = công cụ tự thiết kế (nhẫn cưới, nhẫn cầu hôn) chạy trọn trang.
export const GLB_SRC = /^\/(3d\/models|media\/3d)\/([a-z0-9-]+\/)?[a-z0-9][a-z0-9._-]*\.glb$/;
const POSTER = /^\/3d\/models\/([a-z0-9-]+\/)?[a-z0-9][a-z0-9._-]*\.(jpg|webp|png)$/;
const posterPath = (v) => { const s = str(v, 200); return !s || (POSTER.test(s) && !s.includes('..')) ? s : mediaPath(s); };
export function cleanModel3d(m, { metals: allMetals, gems: allGems, apps = [] }) {
  const errors = [];
  const slug = str(m?.slug, 80);
  if (!SLUG.test(slug)) errors.push('Đường dẫn chỉ gồm chữ thường không dấu, số và dấu gạch ngang.');
  const name = bi(m?.name, 120);
  if (!name.vi) errors.push('Cần nhập tên mẫu (tiếng Việt).');
  const kind = m?.kind === 'app' ? 'app' : 'model';
  const src = str(m?.src, 200);
  const srcOk = GLB_SRC.test(src) && !src.includes('..');
  const app = str(m?.app, 40);
  if (kind === 'model' && !srcOk) errors.push('Chọn tệp 3D (.glb) cho mẫu.');
  if (kind === 'app' && !apps.includes(app)) errors.push('Chọn công cụ tự thiết kế.');
  const metals = kind === 'model' ? pick(m?.metals, allMetals, 5) : [];
  if (kind === 'model' && !metals.length) errors.push('Chọn ít nhất một màu vàng.');
  const gems = kind === 'model' ? pick(m?.gems, allGems, 10) : []; // mẫu không có đá quý (vd. nhẫn trơn) để trống
  const model = {
    slug,
    status: m?.status === 'hidden' ? 'hidden' : 'published',
    kind,
    code: str(m?.code, 40),
    name,
    description: bi(m?.description, 400),
    src: kind === 'model' && srcOk ? src : '',
    app: kind === 'app' ? app : '',
    view: m?.view === 'pair' ? 'pair' : 'ring', // 'pair' = đôi nhẫn nằm trên bàn (nhẫn cưới), 'ring' = một món xoay quanh
    metals,
    gems,
    metal: metals.includes(m?.metal) ? m.metal : metals[0] || '',
    gem: gems.includes(m?.gem) ? m.gem : gems[0] || '',
    metal2: kind === 'model' && allMetals.includes(m?.metal2) ? m.metal2 : '', // màu vàng thứ hai (nhẫn hai màu vàng)
    innerGem: kind === 'model' && allGems.includes(m?.innerGem) ? m.innerGem : '', // đá ẩn lòng nhẫn
    tilt: !!m?.tilt,
    poster: posterPath(m?.poster), // ảnh đại diện (thẻ sản phẩm, đầu thư viện ảnh)
    family: SLUG.test(str(m?.family, 40)) ? str(m.family, 40) : '', // gợi ý danh mục khi tạo sản phẩm từ mẫu (vd. nhan-cuoi)
    note: str(m?.note, 600),
    created: isDate(str(m?.created, 10)) ? str(m.created, 10) : new Date().toISOString().slice(0, 10),
  };
  return { model, errors };
}
