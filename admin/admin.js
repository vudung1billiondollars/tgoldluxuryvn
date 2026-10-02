// T GOLD · Trang quản trị (không phụ thuộc thư viện). Mọi dữ liệu hiển thị bằng textContent để tránh chèn mã.
import { markdown } from './md.js';

/* ───────── Tiện ích ───────── */
const $ = (s, r = document) => r.querySelector(s);
const root = $('#root');
function h(tag, props = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'text') el.textContent = v;
    else if (k === 'on') for (const [e, fn] of Object.entries(v)) el.addEventListener(e, fn);
    else if (k === 'style') el.style.cssText = v;
    else if (k === 'value') el.value = v;
    else if (k in el && typeof v !== 'string') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return el;
}
const ICONS = {
  home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>', inbox: '<path d="M4 5h16v14H4z"/><path d="M4 13h5l1.5 2h3l1.5-2h5"/>',
  gem: '<path d="M7 4h10l4 5-9 11L3 9z"/><path d="M3 9h18"/>', book: '<path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17a3 3 0 013-3h10"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  save: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>', ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
  out: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>', plus: '<path d="M12 5v14M5 12h14"/>', back: '<path d="M15 6l-6 6 6 6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>', down: '<path d="M12 5v14M6 13l6 6 6-6"/>', img: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
  phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a2 2 0 01-2 2A17 17 0 014 5a2 2 0 012-2z"/>', dl: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/>', file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>', copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
};
const icon = (n) => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('class', 'ico'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = ICONS[n] || ''; return s; };
const getP = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const setP = (o, p, v) => { const ks = p.split('.'); let t = o; ks.slice(0, -1).forEach((k) => { if (t[k] == null || typeof t[k] !== 'object') t[k] = {}; t = t[k]; }); t[ks.at(-1)] = v; };
const slugify = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
const fmtTime = (iso) => { if (!iso) return '—'; const d = new Date(iso); return Number.isNaN(d) ? iso : d.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }); };
const clone = (o) => JSON.parse(JSON.stringify(o));

let toastT;
function toast(msg, bad = false) {
  const t = $('#toast'); t.textContent = msg; t.className = `toast show${bad ? ' bad' : ''}`;
  clearTimeout(toastT); toastT = setTimeout(() => { t.className = 'toast'; }, bad ? 5200 : 2800);
}
function confirmBox(msg, okLabel = 'Đồng ý') {
  const d = $('#confirm'); $('#confirm-msg').textContent = msg; $('#confirm-ok').textContent = okLabel;
  d.showModal();
  return new Promise((r) => d.addEventListener('close', () => r(d.returnValue === 'ok'), { once: true }));
}

// Hộp thoại có ô chọn (vd. chuyển sản phẩm sang danh mục khác trước khi xoá) → trả về giá trị đã chọn, hoặc null nếu huỷ
function selectBox(msg, options, okLabel = 'Đồng ý') {
  const sel = h('select', { class: 'c-sel', 'aria-label': msg }, options.map(([v, l]) => h('option', { value: v, text: l })));
  const d = h('dialog', { class: 'confirm' }, h('form', { method: 'dialog' }, h('p', { class: 'c-msg', text: msg }), sel,
    h('div', { class: 'c-act' }, h('button', { value: 'cancel', class: 'btn ghost', text: 'Huỷ' }), h('button', { value: 'ok', class: 'btn danger', text: okLabel }))));
  document.body.append(d); d.showModal();
  return new Promise((r) => d.addEventListener('close', () => { r(d.returnValue === 'ok' ? sel.value : null); d.remove(); }, { once: true }));
}

async function api(path, { method = 'GET', body, form } = {}) {
  const opts = { method, headers: {} };
  if (method !== 'GET') opts.headers['x-tg-admin'] = '1';
  if (body !== undefined) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  if (form) opts.body = form;
  let r;
  try { r = await fetch(`/admin/api/${path}`, opts); } catch { throw new Error('Mất kết nối tới máy chủ.'); }
  if (r.status === 401 && path !== 'login') { renderLogin(); throw new Error('Phiên đăng nhập đã hết hạn.'); }
  const d = await r.json().catch(() => ({ ok: false, error: 'Phản hồi không hợp lệ từ máy chủ.' }));
  if (!r.ok || !d.ok) throw new Error(d.error || 'Có lỗi xảy ra.');
  return d;
}
const buildMsg = (b) => (b ? `Đã lưu · website đã cập nhật (${b.ms} ms)` : 'Đã lưu');

/* ───────── Nhãn hiển thị ───────── */
const STATUS = { new: ['Mới', 'gold'], contacted: ['Đã liên hệ', 'warn'], scheduled: ['Đã hẹn', 'ok'], done: ['Hoàn tất', 'mute'], cancelled: ['Huỷ', 'bad'] };
const INTEREST = { 'nhan-nam': 'Nhẫn nam', 'day-chuyen': 'Dây chuyền', 'mat-day': 'Mặt dây', 'lac-tay': 'Lắc tay', 'bong-tai': 'Bông tai', custom: 'Custom', 'nhan-cuoi': 'Nhẫn cưới' };
const SLOT = { sang: 'Buổi sáng', chieu: 'Buổi chiều', toi: 'Buổi tối', 'linh-hoat': 'Linh hoạt' };

/* ───────── Thành phần form ───────── */
let dirty = false;
const markDirty = () => { dirty = true; const s = $('.savebar .state'); if (s) { s.textContent = 'Có thay đổi chưa lưu'; s.classList.add('dirty'); } };
const clearDirty = () => { dirty = false; const s = $('.savebar .state'); if (s) { s.textContent = 'Đã lưu mọi thay đổi'; s.classList.remove('dirty'); } };
addEventListener('beforeunload', (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });

function field(label, control, hint) {
  const id = control.id || `f${Math.random().toString(36).slice(2, 8)}`;
  if (control.matches?.('input,select,textarea')) control.id = id;
  return h('div', { class: 'f' }, control.matches?.('input,select,textarea') ? h('label', { for: id, text: label }) : h('span', { class: 'lbl', text: label }), control, hint && h('p', { class: 'hint', text: hint }));
}
function input(obj, path, { type = 'text', placeholder = '', max, onInput } = {}) {
  return h('input', { type, value: getP(obj, path) ?? '', placeholder, maxLength: max || 500, on: { input: (e) => { setP(obj, path, type === 'number' ? Number(e.target.value) : e.target.value); markDirty(); onInput?.(e.target.value); } } });
}
function area(obj, path, { rows = 3, max = 2000, cls = '' } = {}) {
  return h('textarea', { rows, maxLength: max, class: cls, value: getP(obj, path) ?? '', on: { input: (e) => { setP(obj, path, e.target.value); markDirty(); } } });
}
// Trường song ngữ VI / EN
function bi(label, obj, path, { textarea = false, rows = 3, max = 500, hint } = {}) {
  if (!getP(obj, path)) setP(obj, path, { vi: '', en: '' });
  const mk = (l) => h('div', { class: 'l', 'data-lang': l.toUpperCase() }, textarea ? area(obj, `${path}.${l}`, { rows, max }) : input(obj, `${path}.${l}`, { max }));
  const vi = mk('vi'), en = mk('en');
  $('input,textarea', vi).setAttribute('aria-label', `${label} (tiếng Việt)`);
  $('input,textarea', en).setAttribute('aria-label', `${label} (English)`);
  return h('div', { class: 'f' }, h('span', { class: 'lbl', text: label }), h('div', { class: 'bi' }, vi, en), hint && h('p', { class: 'hint', text: hint }));
}
function toggle(label, obj, path, onChange) {
  return h('label', { class: 'switch' }, h('input', { type: 'checkbox', checked: !!getP(obj, path), on: { change: (e) => { setP(obj, path, e.target.checked); markDirty(); onChange?.(e.target.checked); } } }), h('span', { class: 'tr', 'aria-hidden': 'true' }), h('span', { text: label }));
}
function chips(obj, path, options, { swatch } = {}) {
  const cur = new Set(getP(obj, path) || []);
  return h('div', { class: 'chips', role: 'group' }, options.map(([v, l, sw]) => h('label', { class: 'chip' },
    h('input', { type: 'checkbox', checked: cur.has(v), on: { change: (e) => { e.target.checked ? cur.add(v) : cur.delete(v); setP(obj, path, options.map((o) => o[0]).filter((x) => cur.has(x))); markDirty(); } } }),
    h('span', {}, swatch && sw ? h('i', { style: `background:${sw}` }) : null, l))));
}
function select(obj, path, options) {
  return h('select', { on: { change: (e) => { setP(obj, path, e.target.value); markDirty(); } } }, options.map(([v, l]) => h('option', { value: v, selected: getP(obj, path) === v, text: l })));
}
async function uploadFile(file, name) { // name: tên tệp muốn lưu (mặc định theo tên tệp gốc)
  const fd = new FormData(); fd.append('file', file, name || file.name);
  return api('upload', { method: 'POST', form: fd });
}
function pickFiles({ accept = 'image/*', multiple = false, onFiles }) {
  const inp = h('input', { type: 'file', accept, multiple, class: 'sr', on: { change: () => { if (inp.files.length) onFiles([...inp.files]); inp.value = ''; } } });
  document.body.append(inp); inp.click(); setTimeout(() => inp.remove(), 60000);
}
function dropzone(label, sub, { accept, multiple, onFiles }) {
  const z = h('button', { type: 'button', class: 'drop', on: {
    click: () => pickFiles({ accept, multiple, onFiles }),
    dragover: (e) => { e.preventDefault(); z.classList.add('over'); },
    dragleave: () => z.classList.remove('over'),
    drop: (e) => { e.preventDefault(); z.classList.remove('over'); const f = [...e.dataTransfer.files]; if (f.length) onFiles(multiple ? f : [f[0]]); },
  } }, icon('img'), h('b', { text: label }), h('small', { text: sub }));
  return z;
}
// Một ảnh / video duy nhất (ảnh bìa, video hero…)
function mediaOne(obj, path, { kind = 'image', label = 'Chọn tệp' } = {}) {
  const wrap = h('div', { class: 'media-one' });
  const draw = () => {
    const src = getP(obj, path);
    const pv = h('div', { class: 'pv' }, src ? (kind === 'video' ? h('video', { src, muted: true, playsInline: true }) : h('img', { src, alt: '' })) : 'Chưa có');
    const inp = h('input', { type: 'text', value: src || '', placeholder: '/media/…', on: { input: (e) => { setP(obj, path, e.target.value.trim()); markDirty(); } } });
    const btns = h('div', { class: 'chips' },
      h('button', { type: 'button', class: 'btn ghost sm', on: { click: () => pickFiles({ accept: kind === 'video' ? 'video/mp4,video/webm' : 'image/*', onFiles: async ([f]) => {
        toast('Đang tải lên…');
        try { const r = await uploadFile(f); setP(obj, path, r.src); markDirty(); draw(); toast('Đã tải lên. Nhớ bấm Lưu.'); } catch (e) { toast(e.message, true); }
      } }) } }, label),
      src && h('button', { type: 'button', class: 'btn danger sm', on: { click: () => { setP(obj, path, ''); markDirty(); draw(); } } }, 'Bỏ'));
    wrap.replaceChildren(pv, h('div', { class: 'grow' }, inp, btns));
  };
  draw();
  return wrap;
}
function savebar(onSave, extra = []) {
  const btn = h('button', { type: 'submit', class: 'btn primary' }, icon('save'), 'Lưu');
  const bar = h('div', { class: 'savebar' }, h('span', { class: 'state', text: 'Chưa có thay đổi' }), ...extra, btn);
  bar.save = async () => {
    btn.disabled = true;
    try { await onSave(); clearDirty(); } catch (e) { toast(e.message, true); } finally { btn.disabled = false; }
  };
  return bar;
}
function page(kick, title, acts = [], ...body) {
  return h('div', { class: 'inner' }, h('div', { class: 'head' }, h('div', {}, h('p', { class: 'kick', text: kick }), h('h1', { text: title })), h('div', { class: 'acts' }, acts)), ...body);
}
const card = (title, desc, ...kids) => h('section', { class: 'card' }, title && h('h2', { text: title }), desc && h('p', { class: 'desc', text: desc }), h('div', { class: 'body' }, kids));

/* ───────── Đăng nhập ───────── */
async function renderLogin() {
  let configured = true;
  try { configured = (await (await fetch('/admin/api/session')).json()).configured; } catch { /* bỏ qua */ }
  const pw = h('input', { type: 'password', autocomplete: 'current-password', required: true, minLength: 8, placeholder: 'Mật khẩu quản trị' });
  const err = h('p', { class: 'err', role: 'alert' });
  const btn = h('button', { class: 'btn primary', type: 'submit', text: 'Đăng nhập' });
  const form = h('form', { on: { submit: async (e) => {
    e.preventDefault(); err.textContent = ''; btn.disabled = true;
    try { await api('login', { method: 'POST', body: { password: pw.value } }); boot(); } catch (x) { err.textContent = x.message; pw.select(); } finally { btn.disabled = false; }
  } } }, field('Mật khẩu', pw), err, btn);
  root.replaceChildren(h('main', { class: 'login' }, h('div', { class: 'login-card' },
    h('img', { src: '/assets/brand/tgold-monogram-240.png', alt: '' }),
    h('h1', { class: 'gold', text: 'T GOLD' }), h('p', { class: 'sub', text: 'Quản trị nội dung' }),
    configured ? form : null,
    !configured && h('p', { class: 'hint' }, 'Máy chủ chưa có mật khẩu quản trị. Đặt biến môi trường ', h('code', { text: 'ADMIN_PASSWORD' }), ' (tối thiểu 8 ký tự) trong hPanel → Node.js → Environment variables, hoặc trong tệp .env, rồi khởi động lại ứng dụng.'))));
  pw.focus?.();
}

/* ───────── Khung ứng dụng ───────── */
const NAV = [['', 'Tổng quan', 'home'], ['bookings', 'Lịch hẹn', 'inbox'], ['homepage', 'Trang chủ', 'layout'], ['products', 'Sản phẩm', 'gem'], ['categories', 'Danh mục', 'tag'], ['models3d', 'Sản phẩm 3D', 'cube'], ['journal', 'Tạp chí', 'book'], ['pages', 'Trang thông tin', 'file'], ['settings', 'Thông tin website', 'cog'], ['backup', 'Sao lưu', 'save']];
let newCount = 0;
function shell(view, active) {
  const nav = h('nav', { class: 'nav', 'aria-label': 'Quản trị' }, NAV.map(([r, l, ic]) => h('a', { href: `#/${r}`, class: r === active ? 'on' : '', 'aria-current': r === active ? 'page' : null }, icon(ic), l, r === 'bookings' && newCount ? h('span', { class: 'badge', text: String(newCount) }) : null)));
  const out = h('button', { type: 'button', on: { click: async () => { if (dirty && !(await confirmBox('Có thay đổi chưa lưu. Vẫn đăng xuất?'))) return; dirty = false; await api('logout', { method: 'POST' }).catch(() => {}); renderLogin(); } } }, icon('out'), h('span', { text: 'Đăng xuất' }));
  root.replaceChildren(h('div', { class: 'shell' },
    h('aside', { class: 'side' }, h('a', { class: 'brand', href: '#/' }, h('img', { src: '/assets/brand/tgold-monogram-96.png', alt: '' }), h('span', {}, h('b', { class: 'gold', text: 'T GOLD' }), h('small', { text: 'Quản trị' }))), nav,
      h('div', { class: 'side-foot' }, h('a', { href: '/', target: '_blank', rel: 'noopener' }, icon('ext'), h('span', { text: 'Xem website' })), out)),
    h('main', { class: 'main', id: 'main', tabindex: '-1' }, view)));
}

/* ───────── Tổng quan ───────── */
async function viewOverview() {
  const d = await api('overview');
  newCount = d.counts.bookingsNew;
  const stat = (n, l, x, href) => h('div', { class: 'stat' }, h('a', { href }, h('div', { class: 'n', text: String(n) }), h('div', { class: 'l', text: l }), x && h('div', { class: 'x', text: x })));
  const rebuildBtn = h('button', { class: 'btn ghost sm', on: { click: async () => { try { const r = await api('rebuild', { method: 'POST' }); toast(`Đã build lại ${r.build.pages} trang (${r.build.ms} ms)`); route(); } catch (e) { toast(e.message, true); } } } }, 'Build lại website');
  const gh = d.github;
  return page('Tổng quan', 'Xin chào', [h('a', { class: 'btn ghost', href: '/', target: '_blank', rel: 'noopener' }, icon('ext'), 'Xem website')],
    h('div', { class: 'grid-stats' },
      stat(d.counts.bookingsNew, 'Lịch hẹn mới', `${d.counts.bookings} yêu cầu tất cả`, '#/bookings'),
      stat(d.counts.productsVisible, 'Sản phẩm đang hiện', `${d.counts.products} sản phẩm tất cả`, '#/products'),
      stat(d.counts.postsPublished, 'Bài Tạp chí đã đăng', `${d.counts.posts} bài tất cả`, '#/journal')),
    h('div', { class: 'cols' },
      card('Việc cần làm', 'Những mục website đang hiển thị “(cập nhật)” hoặc cần xác minh trước khi ra mắt.',
        h('ul', { class: 'todo' }, d.todo.length ? d.todo.map((t) => h('li', {}, h('span', { text: t.label }), h('a', { href: `#/${t.to}`, text: 'Sửa →' }))) : h('li', { class: 'none', text: 'Không còn mục nào. Website đã sẵn sàng.' }))),
      h('div', {},
        card('Lịch hẹn gần đây', null, d.recent.length ? h('ul', { class: 'todo' }, d.recent.map((b) => h('li', {}, h('span', {}, h('b', { text: b.name }), ` · ${b.phone || b.code}`), h('span', { class: `pill ${STATUS[b.status]?.[1] || ''}`, text: STATUS[b.status]?.[0] || b.status }), h('a', { href: `#/bookings/${b.id}`, text: 'Xem →' })))) : h('p', { class: 'hint', text: 'Chưa có yêu cầu nào.' })),
        card('Hệ thống', null, h('dl', { class: 'kv' },
          h('dt', { text: 'Website cập nhật' }), h('dd', { text: d.build ? `${fmtTime(d.build.at)} · ${d.build.pages} trang` : '—' }),
          h('dt', { text: 'Tên miền' }), h('dd', { text: d.siteUrl }),
          h('dt', { text: 'Thư mục dữ liệu' }), h('dd', { text: d.dataDir }),
          h('dt', { text: 'Sao lưu GitHub' }), h('dd', { text: gh.enabled ? `${gh.repo} (${gh.branch}) · ${gh.lastSync ? `lần cuối ${fmtTime(gh.lastSync)}` : 'chưa đồng bộ'}${gh.pending ? ` · ${gh.pending} tệp đang chờ` : ''}${gh.lastError ? ` · lỗi: ${gh.lastError}` : ''}` : 'Chưa bật (tuỳ chọn)' })),
        rebuildBtn))));
}

/* ───────── Lịch hẹn ───────── */
let bkFilter = 'all', bkQuery = '';
async function viewBookings(id) {
  const d = await api('bookings');
  const all = d.bookings;
  newCount = all.filter((b) => b.status === 'new').length;
  const counts = Object.fromEntries(Object.keys(STATUS).map((s) => [s, all.filter((b) => b.status === s).length]));
  const listEl = h('div', { class: 'list' });
  const detail = h('div', { class: 'detail' });
  const q = h('input', { type: 'search', class: 'grow', placeholder: 'Tìm theo tên, số điện thoại, mã ý tưởng, ghi chú…', value: bkQuery, on: { input: (e) => { bkQuery = e.target.value; drawList(); } } });
  const filters = h('div', { class: 'chips' }, [['all', `Tất cả (${all.length})`], ...Object.entries(STATUS).map(([k, [l]]) => [k, `${l} (${counts[k]})`])].map(([k, l]) => h('label', { class: 'chip' }, h('input', { type: 'radio', name: 'bkf', checked: bkFilter === k, on: { change: () => { bkFilter = k; drawList(); } } }), h('span', { text: l }))));
  function drawList() {
    const needle = bkQuery.trim().toLowerCase();
    const rows = all.filter((b) => (bkFilter === 'all' || b.status === bkFilter) && (!needle || `${b.name} ${b.phone} ${b.code} ${b.note} ${b.adminNote}`.toLowerCase().includes(needle)));
    listEl.replaceChildren(...(rows.length ? rows.map((b) => h('div', { class: `row bk-row${b.id === id ? ' sel' : ''}`, tabindex: '0', role: 'button', on: { click: () => { location.hash = `#/bookings/${b.id}`; }, keydown: (e) => { if (e.key === 'Enter') location.hash = `#/bookings/${b.id}`; } } },
      h('div', {}, h('div', { class: 't', text: `${b.name} · ${b.phone || b.code}` }), h('div', { class: 's', text: [fmtTime(b.at), b.kind === 'idea' && 'Ý tưởng Custom', b.interest.map((x) => INTEREST[x] || x).join(', '), b.date && `hẹn ${b.date}${b.slot ? ` (${SLOT[b.slot] || b.slot})` : ''}`].filter(Boolean).join(' · ') })),
      h('div', { class: 'r' }, b.files?.length ? h('span', { class: 'pill mute', text: `${b.files.length} ảnh` }) : null, h('span', { class: `pill ${STATUS[b.status]?.[1]}`, text: STATUS[b.status]?.[0] })))) : [h('p', { class: 'empty', text: all.length ? 'Không có yêu cầu phù hợp.' : 'Chưa có yêu cầu đặt lịch nào. Khi khách gửi form trên website, yêu cầu sẽ hiện ở đây.' })]));
  }
  function drawDetail() {
    const b = all.find((x) => x.id === id);
    if (!b) { detail.replaceChildren(card(null, null, h('p', { class: 'hint', text: 'Chọn một yêu cầu để xem chi tiết.' }))); return; }
    const st = { status: b.status, note: b.adminNote };
    const digits = (b.phone || '').replace(/[^\d+]/g, '');
    const zalo = `https://zalo.me/${digits.replace(/^\+?84/, '0')}`;
    const statusSel = h('select', { on: { change: (e) => { st.status = e.target.value; } } }, Object.entries(STATUS).map(([k, [l]]) => h('option', { value: k, selected: b.status === k, text: l })));
    const note = h('textarea', { rows: 4, maxLength: 2000, value: b.adminNote, placeholder: 'Ghi chú nội bộ (khách không thấy)', on: { input: (e) => { st.note = e.target.value; } } });
    detail.replaceChildren(h('section', { class: 'card' },
      h('p', { class: 'hint', text: `Gửi lúc ${fmtTime(b.at)} · ${b.lang === 'en' ? 'bản tiếng Anh' : 'bản tiếng Việt'}` }),
      h('h2', { text: b.name }),
      b.phone
        ? h('div', { class: 'quick' }, h('a', { class: 'btn primary sm', href: `tel:${digits}` }, icon('phone'), b.phone), h('a', { class: 'btn ghost sm', href: zalo, target: '_blank', rel: 'noopener' }, 'Mở Zalo'))
        : h('p', { class: 'hint', text: `Khách gửi từ form ý tưởng trang Custom — không để lại số điện thoại. Khi khách nhắn Zalo kèm mã ${b.code}, tìm mã này ở ô tìm kiếm để xem đúng ảnh và mô tả.` }),
      h('dl', { class: 'kv' },
        h('dt', { text: 'Mã' }), h('dd', { text: b.code }),
        h('dt', { text: 'Quan tâm' }), h('dd', { text: b.interest.map((x) => INTEREST[x] || x).join(', ') || '—' }),
        h('dt', { text: 'Thời gian' }), h('dd', { text: [b.date, SLOT[b.slot] || b.slot].filter(Boolean).join(' · ') || '—' }),
        h('dt', { text: 'Nguồn' }), h('dd', { text: b.source || '—' })),
      b.note && h('div', { style: 'margin-top:14px' }, h('p', { class: 'hint', text: 'Ghi chú của khách' }), h('div', { class: 'note', text: b.note })),
      b.files?.length && h('div', { style: 'margin-top:14px' }, h('p', { class: 'hint', text: 'Ảnh ý tưởng' }), h('div', { class: 'bk-files' }, b.files.map((f) => h('a', { href: `/admin/api/booking-file/${encodeURIComponent(f)}`, target: '_blank', rel: 'noopener' }, h('img', { src: `/admin/api/booking-file/${encodeURIComponent(f)}`, alt: 'Ảnh khách gửi', loading: 'lazy' }))))),
      h('div', { class: 'body' }, field('Trạng thái', statusSel), field('Ghi chú nội bộ', note),
        h('div', { class: 'chips' },
          h('button', { class: 'btn primary sm', on: { click: async () => { try { await api(`bookings/${b.id}`, { method: 'PATCH', body: st }); toast('Đã cập nhật'); route(); } catch (e) { toast(e.message, true); } } } }, 'Lưu'),
          h('button', { class: 'btn danger sm', on: { click: async () => { if (!(await confirmBox('Xoá vĩnh viễn yêu cầu này và ảnh đính kèm? (Dùng khi khách yêu cầu xoá dữ liệu cá nhân.)', 'Xoá'))) return; try { await api(`bookings/${b.id}`, { method: 'DELETE' }); toast('Đã xoá'); location.hash = '#/bookings'; } catch (e) { toast(e.message, true); } } } }, 'Xoá')))));
  }
  drawList(); drawDetail();
  return page('Hộp thư', 'Lịch hẹn tư vấn', [h('a', { class: 'btn ghost', href: '/admin/api/bookings.csv' }, icon('dl'), 'Xuất Excel (CSV)')],
    h('div', { class: 'toolbar' }, q), h('div', { class: 'toolbar' }, filters),
    h('div', { class: 'split' }, listEl, detail));
}

/* ───────── Sản phẩm ───────── */
let catalogCache = null;
let pFilter = { q: '', cat: '', status: '' };
async function viewProducts() {
  const { catalog } = await api('catalog'); catalogCache = catalog;
  const catName = Object.fromEntries(catalog.categories.map((c) => [c.id, c.vi]));
  const listEl = h('div', { class: 'list' });
  const draw = () => {
    const n = pFilter.q.toLowerCase();
    const rows = catalog.products.filter((p) => (!pFilter.cat || p.category === pFilter.cat) && (!pFilter.status || p.status === pFilter.status) && (!n || `${p.name.vi} ${p.name.en} ${p.slug}`.toLowerCase().includes(n)));
    listEl.replaceChildren(...(rows.length ? rows.map((p) => h('div', { class: 'row', tabindex: '0', role: 'button', on: { click: () => { location.hash = `#/products/${p.slug}`; }, keydown: (e) => { if (e.key === 'Enter') location.hash = `#/products/${p.slug}`; } } },
      h('div', { class: 'thumb' }, p.images?.[0]?.src ? h('img', { src: p.images[0].src, alt: '' }) : icon('gem')),
      h('div', {}, h('div', { class: 't', text: p.name.vi }), h('div', { class: 's', text: `${catName[p.category] || p.category} · ${p.config?.vi || ''}` })),
      h('div', { class: 'r' }, p.model3d ? h('span', { class: 'pill gold', text: '3D' }) : null, p.sample ? h('span', { class: 'pill warn', text: 'Mẫu minh hoạ' }) : null, p.featured ? h('span', { class: 'pill gold', text: `Nổi bật #${p.featured}` }) : null, h('span', { class: `pill ${p.status === 'hidden' ? 'mute' : 'ok'}`, text: p.status === 'hidden' ? 'Đang ẩn' : 'Đang hiện' })))) : [h('p', { class: 'empty', text: 'Không có sản phẩm phù hợp.' })]));
  };
  draw();
  return page('Nội dung', 'Sản phẩm', [h('a', { class: 'btn ghost', href: '#/categories' }, 'Quản lý danh mục'), h('a', { class: 'btn ghost', href: '#/products/import' }, icon('img'), 'Tải theo thư mục'), h('a', { class: 'btn primary', href: '#/products/new' }, icon('plus'), 'Thêm sản phẩm')],
    h('div', { class: 'toolbar' },
      h('input', { type: 'search', class: 'grow', placeholder: 'Tìm sản phẩm…', value: pFilter.q, on: { input: (e) => { pFilter.q = e.target.value; draw(); } } }),
      h('select', { 'aria-label': 'Danh mục', on: { change: (e) => { pFilter.cat = e.target.value; draw(); } } }, h('option', { value: '', text: 'Mọi danh mục' }), catalog.categories.map((c) => h('option', { value: c.id, selected: pFilter.cat === c.id, text: c.vi }))),
      h('select', { 'aria-label': 'Trạng thái', on: { change: (e) => { pFilter.status = e.target.value; draw(); } } }, [['', 'Mọi trạng thái'], ['published', 'Đang hiện'], ['hidden', 'Đang ẩn']].map(([v, l]) => h('option', { value: v, selected: pFilter.status === v, text: l })))),
    listEl);
}

/* ───────── Sản phẩm: tải một loạt theo thư mục ───────── */
// Mỗi thư mục có ảnh = 1 sản phẩm (tên thư mục = tên sản phẩm). Kéo thả nhiều thư mục hoặc một thư mục mẹ, hoặc bấm chọn 1 thư mục.
// Ảnh tải lần lượt qua /upload như ô ảnh thường; cuối cùng gọi products-import MỘT lần → website chỉ dựng lại 1 lần.
const IMPORT_IMG = /\.(jpe?g|png|webp|avif)$/i;
const IMPORT_VIDEO = /\.(mp4|webm)$/i;
const IMPORT_MAX = 200; // số sản phẩm tối đa mỗi lượt
async function readDropEntry(entry, base = '') { // đọc đệ quy một mục được kéo thả (tệp hoặc thư mục)
  if (entry.isFile) { const f = await new Promise((res, rej) => entry.file(res, rej)); return [{ file: f, path: base + entry.name }]; }
  const reader = entry.createReader(); const out = [];
  for (;;) { // readEntries trả từng đợt (tối đa 100 mục) — đọc tới khi hết
    const batch = await new Promise((res, rej) => reader.readEntries(res, rej));
    if (!batch.length) break;
    for (const e of batch) out.push(...await readDropEntry(e, `${base}${entry.name}/`));
  }
  return out;
}
async function viewProductImport() {
  const { catalog } = await api('catalog'); catalogCache = catalog;
  const cats = catalog.categories;
  const existing = new Set(catalog.products.map((p) => p.slug));
  const opts = { category: cats[0].id, status: 'published', gold_karats: ['14K', '18K'].filter((k) => (catalog.karats || []).includes(k)), gold_colors: Object.keys(catalog.goldColors).slice(0, 1), gemstones: [] };
  let groups = []; let busy = false; let result = null;
  const collate = new Intl.Collator('vi', { numeric: true, sensitivity: 'base' });
  // thư mục cha trùng tên danh mục (vd. “Nhẫn nam/NN Q640/…”) → tự xếp danh mục
  const catOf = (parts) => { for (const part of [...parts].reverse()) { const s = slugify(part); const c = cats.find((x) => x.id === s || slugify(x.vi) === s || (x.en && slugify(x.en) === s)); if (c) return c.id; } return ''; };

  function addFiles(items) {
    const map = new Map(groups.map((g) => [g.dir, g]));
    const before = new Set(map.keys());
    for (const { file, path } of items) {
      const parts = path.split('/').filter(Boolean); const fname = parts.pop();
      if (!parts.length || !fname || fname.startsWith('.')) continue; // tệp lẻ không nằm trong thư mục · tệp ẩn của máy
      const dir = parts.join('/');
      if (before.has(dir)) continue; // thư mục đã có trong danh sách
      let g = map.get(dir);
      if (!g) {
        const auto = catOf(parts.slice(0, -1));
        g = { dir, name: parts.at(-1).normalize('NFC').trim().slice(0, 120), on: true, category: auto || opts.category, catSrc: auto ? 'auto' : 'default', images: [], video: null, skipped: 0, note: '', tone: '' };
        map.set(dir, g);
      }
      if (IMPORT_IMG.test(fname)) g.images.push(file);
      else if (IMPORT_VIDEO.test(fname)) g.video ||= file;
      else g.skipped += 1;
    }
    const all = [...map.values()];
    const empty = all.filter((g) => !g.images.length).length;
    groups = all.filter((g) => g.images.length).sort((a, b) => collate.compare(a.dir, b.dir));
    for (const g of groups) {
      if (before.has(g.dir)) continue;
      g.images.sort((a, b) => collate.compare(a.name, b.name));
      g.exists = existing.has(slugify(g.name));
      if (g.exists) g.on = false;
      g.thumb = URL.createObjectURL(g.images[0]);
    }
    const fresh = groups.filter((g) => !before.has(g.dir)).length;
    if (groups.length > IMPORT_MAX) { groups = groups.slice(0, IMPORT_MAX); toast(`Mỗi lượt tối đa ${IMPORT_MAX} sản phẩm — đã giữ ${IMPORT_MAX} thư mục đầu.`, true); }
    else toast(fresh ? `Đã nhận ${fresh} thư mục sản phẩm${empty ? ` · bỏ qua ${empty} thư mục không có ảnh` : ''}.` : 'Không tìm thấy thư mục nào có ảnh (JPG, PNG, WebP).', !fresh);
    dirty = groups.length > 0;
    draw();
  }

  const folderInp = h('input', { type: 'file', class: 'sr', webkitdirectory: true, multiple: true, 'aria-label': 'Chọn thư mục', on: { change: () => {
    if (busy) { folderInp.value = ''; return; }
    addFiles([...folderInp.files].map((f) => ({ file: f, path: f.webkitRelativePath || f.name })));
    folderInp.value = '';
  } } });
  const zone = h('div', { class: 'drop imp-drop', role: 'group', 'aria-label': 'Kéo thả thư mục sản phẩm', on: {
    dragover: (e) => { e.preventDefault(); zone.classList.add('over'); },
    dragleave: () => zone.classList.remove('over'),
    drop: async (e) => {
      e.preventDefault(); zone.classList.remove('over');
      if (busy) return;
      const entries = [...(e.dataTransfer.items || [])].map((it) => it.webkitGetAsEntry?.()).filter(Boolean); // phải lấy ngay trong lúc thả
      if (!entries.length) return;
      toast('Đang đọc thư mục…');
      try { addFiles((await Promise.all(entries.map((en) => readDropEntry(en)))).flat()); } catch { toast('Không đọc được thư mục vừa thả.', true); }
    },
  } }, icon('img'), h('b', { text: 'Kéo thả thư mục sản phẩm vào đây' }),
    h('small', { text: 'Thả một hoặc nhiều thư mục sản phẩm, hoặc cả thư mục mẹ chứa các thư mục sản phẩm. Mỗi thư mục có ảnh = 1 sản phẩm, tên thư mục = tên sản phẩm.' }),
    h('button', { type: 'button', class: 'btn ghost sm', on: { click: () => folderInp.click() } }, 'Hoặc bấm để chọn 1 thư mục'), folderInp);

  const catOptions = () => cats.map((c) => [c.id, c.vi]);
  const defCat = h('select', { on: { change: (e) => { opts.category = e.target.value; groups.forEach((g) => { if (g.catSrc === 'default') g.category = opts.category; }); draw(); } } }, catOptions().map(([v, l]) => h('option', { value: v, selected: opts.category === v, text: l })));
  const defStatus = h('select', { on: { change: (e) => { opts.status = e.target.value; } } }, [['published', 'Đang hiện — lên website ngay'], ['hidden', 'Đang ẩn — xem lại rồi mới bật hiện']].map(([v, l]) => h('option', { value: v, selected: opts.status === v, text: l })));

  const listEl = h('div', { class: 'list imp-list' });
  const stateEl = h('span', { class: 'state' });
  const goBtn = h('button', { type: 'button', class: 'btn primary', on: { click: () => run() } }, icon('plus'), 'Tạo sản phẩm');
  const clearBtn = h('button', { type: 'button', class: 'btn ghost', on: { click: () => { groups.forEach((g) => URL.revokeObjectURL(g.thumb)); groups = []; dirty = false; draw(); } } }, 'Xoá danh sách');
  const resultEl = h('div', {});
  const setNote = (g, text, tone = '') => { g.note = text; g.tone = tone; if (g.noteEl) { g.noteEl.textContent = text; g.noteEl.className = `pill ${tone}`; g.noteEl.hidden = !text; } };

  function draw() {
    const chosen = groups.filter((g) => g.on).length;
    stateEl.textContent = groups.length ? `${groups.length} thư mục · đang chọn ${chosen} sản phẩm · ${groups.filter((g) => g.on).reduce((n, g) => n + Math.min(12, g.images.length), 0)} ảnh` : 'Chưa có thư mục nào.';
    goBtn.lastChild.textContent = chosen ? `Tạo ${chosen} sản phẩm` : 'Tạo sản phẩm';
    goBtn.disabled = busy || !chosen; clearBtn.disabled = busy || !groups.length;
    listEl.hidden = !groups.length;
    listEl.replaceChildren(...groups.map((g) => {
      g.noteEl = h('span', { class: `pill ${g.tone}`, text: g.note, hidden: !g.note });
      return h('div', { class: `imp-row${g.on ? '' : ' off'}` },
        h('input', { type: 'checkbox', checked: g.on, disabled: busy, 'aria-label': `Tạo sản phẩm ${g.name}`, on: { change: (e) => { g.on = e.target.checked; draw(); } } }),
        h('div', { class: 'thumb' }, h('img', { src: g.thumb, alt: '' })),
        h('div', { class: 'imp-name' },
          h('input', { type: 'text', class: 'inp', value: g.name, maxLength: 120, disabled: busy, 'aria-label': 'Tên sản phẩm', on: { input: (e) => { g.name = e.target.value; } } }),
          h('div', { class: 's', text: g.dir })),
        h('div', { class: 'f' }, h('select', { disabled: busy, 'aria-label': 'Danh mục', on: { change: (e) => { g.category = e.target.value; g.catSrc = 'manual'; } } }, catOptions().map(([v, l]) => h('option', { value: v, selected: g.category === v, text: l })))),
        h('div', { class: 'r' },
          h('span', { class: 'pill mute', text: `${g.images.length} ảnh${g.video ? ' · 1 video' : ''}` }),
          g.images.length > 12 ? h('span', { class: 'pill warn', text: 'chỉ lấy 12 ảnh đầu' }) : null,
          g.skipped ? h('span', { class: 'pill warn', title: 'Chỉ nhận JPG, PNG, WebP, AVIF và video MP4 / WebM. Ảnh HEIC, video MOV cần đổi định dạng trước.', text: `bỏ qua ${g.skipped} tệp` }) : null,
          g.catSrc === 'auto' ? h('span', { class: 'pill gold', text: 'tự xếp danh mục' }) : null,
          g.exists ? h('span', { class: 'pill warn', text: 'đã có sản phẩm cùng tên' }) : null,
          g.noteEl));
    }));
  }

  async function run() {
    const todo = groups.filter((g) => g.on);
    if (!todo.length || busy) return;
    const noName = todo.find((g) => !g.name.trim());
    if (noName) { toast('Có sản phẩm chưa có tên.', true); return; }
    if (!opts.gold_karats.length) { toast('Chọn ít nhất một tuổi vàng ở phần thiết lập chung.', true); return; }
    busy = true; draw();
    const ready = []; const problems = []; const today = new Date().toISOString().slice(0, 10);
    const totalImgs = todo.reduce((n, g) => n + Math.min(12, g.images.length), 0); let doneImgs = 0;
    try {
      for (const [i, g] of todo.entries()) {
        const files = g.images.slice(0, 12); const got = new Array(files.length); let next = 0; let done = 0;
        setNote(g, `đang tải 0/${files.length}`, 'gold');
        g.noteEl?.scrollIntoView({ block: 'nearest' });
        await Promise.all([0, 1, 2].map(async () => { // 3 ảnh cùng lúc
          for (;;) {
            const k = next++; if (k >= files.length) return;
            try { const r = await uploadFile(files[k], `${g.name.trim()} ${k + 1}${(files[k].name.match(/\.[a-z0-9]+$/i) || ['.jpg'])[0]}`); if (r.kind === 'image') got[k] = r; }
            catch (e) { if (e.message === 'Phiên đăng nhập đã hết hạn.') throw e; problems.push(`${g.name} · ${files[k].name}: ${e.message}`); }
            done += 1; doneImgs += 1;
            setNote(g, `đang tải ${done}/${files.length}`, 'gold');
            stateEl.textContent = `Đang tải ảnh… sản phẩm ${i + 1}/${todo.length} · ảnh ${doneImgs}/${totalImgs}`;
          }
        }));
        const imgs = got.filter(Boolean);
        if (!imgs.length) { setNote(g, 'không tải được ảnh', 'bad'); problems.push(`${g.name}: không tải được ảnh nào — chưa tạo sản phẩm.`); continue; }
        let video = '';
        if (g.video) { setNote(g, 'đang tải video', 'gold'); try { const r = await uploadFile(g.video, `${g.name.trim()} video${(g.video.name.match(/\.[a-z0-9]+$/i) || ['.mp4'])[0]}`); if (r.kind === 'video') video = r.src; } catch (e) { if (e.message === 'Phiên đăng nhập đã hết hạn.') throw e; problems.push(`${g.name} · ${g.video.name}: ${e.message}`); } }
        const name = g.name.trim();
        ready.push({ g, product: { slug: slugify(name), status: opts.status, sample: false, featured: 0, created: today, category: g.category, badges: [], name: { vi: name, en: name }, config: { vi: '', en: '' }, description: { vi: '', en: '' }, gold_karats: opts.gold_karats, gold_colors: opts.gold_colors, gemstones: opts.gemstones, customizable: true, weight_note: { vi: '', en: '' }, gemstone_specs: { vi: '', en: '' }, sizes: null, certificates: [], images: imgs.map((r) => ({ src: r.src, srcset: r.srcset || '', alt: { vi: name, en: name } })), video, model3d: '' } });
        setNote(g, imgs.length < files.length ? `đã tải ${imgs.length}/${files.length} ảnh` : 'đã tải ảnh', imgs.length < files.length ? 'warn' : 'ok');
      }
    } catch (e) { problems.push(e.message); }
    // ghi tất cả sản phẩm đã tải xong ảnh trong MỘT lần (kể cả khi giữa chừng gặp lỗi)
    let created = [];
    if (ready.length) {
      stateEl.textContent = `Đang tạo ${ready.length} sản phẩm…`;
      try {
        const r = await api('products-import', { method: 'POST', body: { products: ready.map((x) => x.product) } });
        created = r.created; (r.failed || []).forEach((f) => problems.push(`${f.name}: ${f.error}`));
      } catch (e) { problems.push(`Chưa tạo được sản phẩm: ${e.message}`); }
    }
    busy = false;
    const names = new Set(created.map((c) => c.name));
    groups.filter((g) => g.on && names.has(g.name.trim())).forEach((g) => URL.revokeObjectURL(g.thumb));
    groups = groups.filter((g) => !(g.on && names.has(g.name.trim())));
    dirty = groups.length > 0; catalogCache = null;
    created.forEach((c) => existing.add(c.slug));
    result = { created, problems, status: opts.status };
    drawResult(); draw();
    toast(created.length ? `Đã tạo ${created.length} sản phẩm · website đã cập nhật.` : 'Chưa tạo được sản phẩm nào.', !created.length);
  }

  function drawResult() {
    if (!result) { resultEl.replaceChildren(); return; }
    resultEl.replaceChildren(card(`Kết quả: đã tạo ${result.created.length} sản phẩm`, result.created.length ? `Các sản phẩm ${result.status === 'hidden' ? 'đang ẩn' : 'đang hiện trên website'}. Bấm vào từng sản phẩm để bổ sung dòng cấu hình, mô tả, size… ` : null,
      result.created.length ? h('div', { class: 'chips' }, result.created.map((c) => h('a', { class: 'btn ghost sm', href: `#/products/${c.slug}`, text: c.name }))) : null,
      result.problems.length ? h('div', { class: 'subbox' }, h('span', { class: 'lbl', text: `Cần xem lại (${result.problems.length})` }), h('ul', { class: 'imp-problems' }, result.problems.map((p) => h('li', { text: p })))) : null,
      h('div', { class: 'chips' }, h('a', { class: 'btn primary sm', href: '#/products', text: 'Về danh sách sản phẩm' }))));
    resultEl.scrollIntoView({ block: 'start' });
  }

  draw();
  return page('Sản phẩm', 'Tải theo thư mục', [h('a', { class: 'btn ghost', href: '#/products' }, icon('back'), 'Danh sách sản phẩm')],
    resultEl,
    card('1 · Chọn thư mục', 'Ảnh trong mỗi thư mục xếp theo tên tệp; ảnh đầu tiên là ảnh đại diện. Cỡ ảnh nên dùng: 1600 × 2000 px (dọc 4:5). Chỉ dùng ảnh thật của sản phẩm.', zone,
      h('p', { class: 'hint', text: 'Muốn chọn nhiều thư mục cùng lúc: chọn các thư mục trong Finder rồi kéo thả vào khung trên. Thư mục mẹ có các thư mục con đặt theo tên danh mục (ví dụ “Nhẫn nam”) thì sản phẩm bên trong tự được xếp vào danh mục đó.' })),
    h('div', { on: { change: () => { dirty = groups.length > 0; draw(); } } }, card('2 · Thiết lập chung', 'Áp dụng cho mọi sản phẩm trong lượt này; sửa riêng từng sản phẩm sau khi tạo.',
      h('div', { class: 'grid2' }, field('Danh mục mặc định', defCat, 'Dùng cho các thư mục không tự nhận được danh mục.'), field('Trạng thái sau khi tạo', defStatus)),
      field('Tuổi vàng', chips(opts, 'gold_karats', (catalog.karats || ['10K', '14K', '18K']).map((k) => [k, k]))),
      field('Màu vàng', chips(opts, 'gold_colors', Object.entries(catalog.goldColors).map(([k, v]) => [k, v.vi, v.swatch]), { swatch: true })),
      field('Loại đá quý', chips(opts, 'gemstones', Object.entries(catalog.gemstones).map(([k, v]) => [k, v.vi]))))),
    card('3 · Kiểm tra danh sách', 'Bỏ tích những thư mục không muốn tạo; sửa tên và danh mục ngay tại đây.', listEl),
    h('div', { class: 'savebar' }, stateEl, clearBtn, goBtn));
}

async function viewProduct(slug) {
  const { catalog } = catalogCache ? { catalog: catalogCache } : await api('catalog');
  catalogCache = catalog;
  const isNew = slug === 'new';
  const orig = catalog.products.find((p) => p.slug === slug);
  const d3 = await api('models3d').catch(() => null); // mẫu 3D / công cụ tự thiết kế để gắn vào sản phẩm
  const from3d = isNew ? product3dDraft : null; product3dDraft = null;
  if (!isNew && !orig) return page('Sản phẩm', 'Không tìm thấy sản phẩm', [h('a', { class: 'btn ghost', href: '#/products', text: 'Quay lại' })]);
  const p = isNew ? { slug: '', status: 'published', sample: false, featured: 0, created: new Date().toISOString().slice(0, 10), category: catalog.categories[0].id, badges: [], name: { vi: '', en: '' }, config: { vi: '', en: '' }, description: { vi: '', en: '' }, gold_karats: ['14K', '18K'], gold_colors: ['vang'], gemstones: [], customizable: true, weight_note: { vi: '', en: '' }, gemstone_specs: { vi: '', en: '' }, sizes: null, certificates: [], images: [], video: '', model3d: '' } : clone(orig);
  if (from3d) { // sản phẩm mới từ mẫu 3D: điền sẵn tên, mô tả, màu vàng, đá quý; để ẨN cho tới khi bạn xem lại và bấm “Đang hiện”
    p.name = { vi: from3d.name.vi, en: from3d.name.en || from3d.name.vi }; p.slug = slugify(from3d.name.vi); p.model3d = from3d.slug; p.status = 'hidden';
    if (from3d.description?.vi) p.description = { vi: from3d.description.vi, en: from3d.description.en || '' };
    if (catalog.categories.some((c) => c.id === from3d.family)) p.category = from3d.family;
    const gc = (from3d.metals || []).filter((k) => catalog.goldColors[k]); if (gc.length) p.gold_colors = gc;
    p.gemstones = (from3d.gems || []).filter((k) => catalog.gemstones[k]);
    setTimeout(() => { markDirty(); toast('Đã điền sẵn từ mẫu 3D. Nhập dòng cấu hình, chọn ảnh, rồi đổi sang “Đang hiện” khi sẵn sàng.'); }, 50);
  }
  let slugTouched = !isNew || !!from3d;
  const slugInp = input(p, 'slug', { max: 80, onInput: () => { slugTouched = true; } });
  const nameField = bi('Tên sản phẩm', p, 'name', { max: 120 });
  $('input', nameField).addEventListener('input', (e) => { if (!slugTouched) { p.slug = slugify(e.target.value); slugInp.value = p.slug; } });

  // Size
  const sz = { label: clone(p.sizes?.label || { vi: 'Size', en: 'Size' }), options: (p.sizes?.options || []).join(', '), def: p.sizes?.default || '' };
  const sizeBox = h('div', { class: 'body' },
    bi('Tên lựa chọn size', sz, 'label', { max: 40, hint: 'Ví dụ: Size nhẫn / Ring size, Chiều dài / Length' }),
    h('div', { class: 'grid2' },
      field('Các lựa chọn (cách nhau bằng dấu phẩy)', input(sz, 'options', { max: 300, placeholder: '18, 20, 22, 24' }), 'Để trống nếu sản phẩm không có lựa chọn size.'),
      field('Mặc định', input(sz, 'def', { max: 20 }))));

  // Ảnh
  const imgsEl = h('div', { class: 'imgs' });
  const drawImgs = () => {
    imgsEl.replaceChildren(...p.images.map((im, i) => h('div', { class: 'imgc' },
      h('div', { class: 'pv' }, h('img', { src: im.src, alt: '' })),
      h('div', { class: 'meta' },
        h('input', { type: 'text', value: im.alt?.vi || '', placeholder: 'Mô tả ảnh (VI)', 'aria-label': 'Mô tả ảnh tiếng Việt', on: { input: (e) => { setP(im, 'alt.vi', e.target.value); markDirty(); } } }),
        h('input', { type: 'text', value: im.alt?.en || '', placeholder: 'Image description (EN)', 'aria-label': 'Mô tả ảnh tiếng Anh', on: { input: (e) => { setP(im, 'alt.en', e.target.value); markDirty(); } } }),
        h('div', { class: 'acts' },
          h('span', {}, h('button', { type: 'button', title: 'Đưa lên trước', 'aria-label': 'Đưa lên trước', disabled: i === 0, on: { click: () => { [p.images[i - 1], p.images[i]] = [p.images[i], p.images[i - 1]]; markDirty(); drawImgs(); } } }, icon('up')), ' ',
            h('button', { type: 'button', title: 'Đưa xuống sau', 'aria-label': 'Đưa xuống sau', disabled: i === p.images.length - 1, on: { click: () => { [p.images[i + 1], p.images[i]] = [p.images[i], p.images[i + 1]]; markDirty(); drawImgs(); } } }, icon('down'))),
          h('button', { type: 'button', class: 'del', on: { click: () => { p.images.splice(i, 1); markDirty(); drawImgs(); } } }, 'Bỏ ảnh'))))),
    dropzone('Thêm ảnh', 'Kéo thả hoặc bấm để chọn · JPG, PNG, WebP · tự tối ưu sang WebP · cỡ ảnh nên dùng: 1600 × 2000 px (dọc 4:5)', { accept: 'image/*', multiple: true, onFiles: async (files) => {
      for (const f of files) {
        toast(`Đang tải ${f.name}…`);
        try { const r = await uploadFile(f); p.images.push({ src: r.src, srcset: r.srcset, alt: { vi: p.name.vi, en: p.name.en } }); markDirty(); drawImgs(); } catch (e) { toast(`${f.name}: ${e.message}`, true); }
      }
      toast('Đã tải ảnh. Nhớ bấm Lưu.');
    } }));
  };
  drawImgs();

  const bar = savebar(async () => {
    const opts = sz.options.split(',').map((s) => s.trim()).filter(Boolean);
    p.sizes = opts.length ? { label: sz.label, options: opts, default: opts.includes(sz.def.trim()) ? sz.def.trim() : opts[0] } : null;
    const r = await api(`products/${isNew ? (p.slug || 'new') : orig.slug}`, { method: 'PUT', body: { product: p } });
    catalogCache = null;
    toast(buildMsg(r.build));
    if (isNew || r.product.slug !== slug) { dirty = false; location.hash = `#/products/${r.product.slug}`; }
  }, [!isNew && p.status !== 'hidden' ? h('a', { class: 'btn ghost', href: `/san-pham/${orig.slug}/`, target: '_blank', rel: 'noopener' }, icon('ext'), 'Xem trên web') : null]);

  const form = h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
    card('Thông tin chính', null,
      nameField,
      h('div', { class: 'grid2' }, field('Đường dẫn (slug)', slugInp, 'Chữ thường không dấu, dùng trong link: /san-pham/<slug>/'), field('Danh mục', select(p, 'category', catalog.categories.map((c) => [c.id, c.vi])))),
      h('div', { class: 'grid3' },
        field('Hiển thị', select(p, 'status', [['published', 'Đang hiện trên website'], ['hidden', 'Ẩn khỏi website']])),
        field('Thứ tự nổi bật', input(p, 'featured', { type: 'number' }), '0 = không nổi bật. 1–4 hiện ở “Nổi bật” trang chủ.'),
        field('Ngày thêm', input(p, 'created', { type: 'date' }), 'Dùng cho sắp xếp “Mới nhất”.')),
      field('Nhãn', chips(p, 'badges', Object.entries(catalog.badges).map(([k, v]) => [k, v.vi]))),
      h('div', { class: 'chips' }, toggle('Custom được', p, 'customizable'), toggle('Đây là dữ liệu minh hoạ (chưa phải sản phẩm thật)', p, 'sample'))),
    card('Mô tả', 'Không ghi giá. Câu chữ: gọi khách là “bạn”, luôn viết “đá quý”, không dùng “chúng tôi”.',
      bi('Dòng cấu hình (hiện dưới tên)', p, 'config', { max: 160, hint: 'Ví dụ: Vàng 18K · Moissanite phủ kín' }),
      bi('Mô tả cảm xúc (2–3 câu)', p, 'description', { textarea: true, rows: 4, max: 900 })),
    card('Chất liệu', null,
      field('Tuổi vàng', chips(p, 'gold_karats', (catalog.karats || ['10K', '14K', '18K']).map((k) => [k, k]))),
      field('Màu vàng', chips(p, 'gold_colors', Object.entries(catalog.goldColors).map(([k, v]) => [k, v.vi, v.swatch]), { swatch: true })),
      field('Loại đá quý', chips(p, 'gemstones', Object.entries(catalog.gemstones).map(([k, v]) => [k, v.vi]))),
      field('Giấy kiểm định', chips(p, 'certificates', (catalog.certificates || ['GGJ', 'GRA', 'IGI', 'GIA']).map((k) => [k, k])))),
    card('Thông số', null,
      bi('Trọng lượng vàng', p, 'weight_note', { max: 200, hint: 'Để trống → hiển thị “Cân & ghi rõ theo cấu hình đã chốt”.' }),
      bi('Thông số đá quý', p, 'gemstone_specs', { textarea: true, rows: 2, max: 300 })),
    h('section', { class: 'card' }, h('h2', { text: 'Lựa chọn size' }), sizeBox),
    card('Ảnh & video', 'Ảnh đầu tiên là ảnh đại diện. Chỉ dùng ảnh thật của sản phẩm — không dùng ảnh AI. Cỡ ảnh nên dùng: 1600 × 2000 px (dọc 4:5); thẻ sản phẩm cắt bớt mép trên dưới nên đặt món ở giữa.', imgsEl, field('Video sản phẩm (tuỳ chọn)', mediaOne(p, 'video', { kind: 'video', label: 'Tải video MP4' }))),
    card('Mô hình 3D', 'Gắn một mẫu 3D đã thêm ở mục Sản phẩm 3D: trang sản phẩm có khung xem 3D trong thư viện ảnh (xoay, đổi theo màu vàng và đá quý khách chọn) và thẻ sản phẩm có nhãn 3D — chưa có ảnh thật thì dùng ảnh 3D làm ảnh đại diện. Gắn công cụ tự thiết kế thì khách bấm vào thẻ sản phẩm (ở danh mục, trang chủ, tìm kiếm) là mở thẳng công cụ 3D, không qua trang chi tiết — hợp cho khung “Sản phẩm tự thiết kế” của từng danh mục.',
      field('Mẫu 3D / công cụ tự thiết kế', select(p, 'model3d', [['', '— Không gắn 3D —'], ...(d3?.models || []).map((x) => [x.slug, `${x.name.vi} · ${x.kind === 'app' ? 'công cụ tự thiết kế' : 'mẫu 3D'}${x.status === 'hidden' ? ' (đang ẩn — chưa hiện trên website)' : ''}`])]), d3 ? 'Thêm mẫu mới ở mục Sản phẩm 3D.' : 'Không tải được danh sách mẫu 3D.')),
    !isNew && card('Xoá sản phẩm', 'Sản phẩm sẽ biến mất khỏi website. Có thể khôi phục trong mục Sao lưu → Lịch sử phiên bản.',
      h('div', {}, h('button', { type: 'button', class: 'btn danger', on: { click: async () => {
        if (!(await confirmBox(`Xoá “${orig.name.vi}” khỏi website?`, 'Xoá'))) return;
        try { const r = await api(`products/${orig.slug}`, { method: 'DELETE' }); dirty = false; catalogCache = null; toast(buildMsg(r.build)); location.hash = '#/products'; } catch (e) { toast(e.message, true); }
      } } }, 'Xoá sản phẩm'))),
    bar);
  return h('div', { class: 'inner' }, h('a', { class: 'back', href: '#/products' }, icon('back'), 'Sản phẩm'), h('div', { class: 'head' }, h('div', {}, h('p', { class: 'kick', text: isNew ? 'Thêm mới' : 'Chỉnh sửa' }), h('h1', { text: isNew ? 'Sản phẩm mới' : orig.name.vi }))), form);
}

/* ───────── Sản phẩm 3D ───────── */
// Hai loại: "Mẫu 3D" (tệp .glb — xoay, đổi màu vàng & đá quý) và "Công cụ tự thiết kế" (nhẫn cưới, nhẫn cầu hôn — khách tự chọn kiểu dáng, đá quý, chi tiết rồi gửi thiết kế cho T Gold).
// Mỗi cái một trang riêng /3d/<slug>/ để gửi khách; trang không liên kết sang mẫu khác. Có thể gắn vào một sản phẩm (trang sản phẩm hiện khung 3D hoặc nút mở công cụ).
let m3dCache = null;
let m3dDraft = null;       // bản nháp mẫu mới (điền sẵn từ thông tin tệp 3D), giữ khi vẽ lại trang
let product3dDraft = null; // mẫu 3D được chọn để tạo sản phẩm mới ("Thêm thành sản phẩm")
const m3dPath = (slug, lang = 'vi') => (lang === 'en' ? `/en/3d/${slug}/` : `/3d/${slug}/`);
const kb = (n) => `${Math.round(n / 1024).toLocaleString('vi-VN')} KB`;
const isApp = (m) => m.kind === 'app';
const m3dKind = (m) => (isApp(m) ? 'Công cụ tự thiết kế' : 'Mẫu 3D');
async function copyText(text, msg = 'Đã sao chép link') {
  try { await navigator.clipboard.writeText(text); } catch {
    const t = h('textarea', { value: text, style: 'position:fixed;top:0;opacity:0' }); document.body.append(t); t.select(); document.execCommand('copy'); t.remove();
  }
  toast(msg);
}
function m3dLinks(d, m) {
  const base = String(d.siteUrl || '').replace(/\/$/, '');
  const full = (lang) => base + m3dPath(m.slug, lang);
  return h('div', { class: 'm3d-link' },
    h('code', { text: full('vi') }),
    h('button', { type: 'button', class: 'btn primary sm', on: { click: () => copyText(full('vi')) } }, icon('copy'), 'Sao chép link'),
    !isApp(m) && h('button', { type: 'button', class: 'btn ghost sm', title: full('en'), on: { click: () => copyText(full('en'), 'Đã sao chép link tiếng Anh') } }, 'Link EN'),
    h('a', { class: 'btn ghost sm', href: m3dPath(m.slug), target: '_blank', rel: 'noopener' }, icon('ext'), 'Mở'));
}
// sản phẩm đang gắn mẫu này + nút tạo sản phẩm mới từ mẫu
function m3dProducts(d, m) {
  const used = d.usage?.[m.slug] || [];
  return h('div', { class: 'm3d-prod' },
    used.length ? h('span', {}, 'Gắn với sản phẩm: ', ...used.flatMap((u, i) => [i ? ', ' : '', h('a', { href: `#/products/${u.slug}`, text: u.name })])) : h('span', { class: 'mute', text: 'Chưa gắn với sản phẩm nào trên website' }),
    h('button', { type: 'button', class: 'btn ghost sm', on: { click: () => { product3dDraft = m; location.hash = '#/products/new'; } } }, icon('plus'), used.length ? 'Thêm sản phẩm khác từ mẫu này' : 'Thêm thành sản phẩm'));
}
async function viewModels3d() {
  m3dDraft = null;
  const d = await api('models3d'); m3dCache = d;
  const fileOf = (src) => d.files.find((f) => f.src === src);
  const appName = (id) => d.options.apps.find((a) => a.id === id)?.name || id;
  const row = (m) => h('div', { class: 'row m3d-row' },
    h('div', { class: 'thumb' }, m.poster ? h('img', { src: m.poster, alt: '' }) : icon('cube')),
    h('div', { class: 'm3d-main' },
      h('div', { class: 't', text: m.name.vi }),
      h('div', { class: 's', text: [isApp(m) ? appName(m.app) : (m.code ? `Mã ${m.code}` : 'Chưa có mã mẫu'), isApp(m) ? '' : (fileOf(m.src) ? kb(fileOf(m.src).size) : 'thiếu tệp 3D'), !isApp(m) && m.view === 'pair' ? 'đôi nhẫn' : '', m.note].filter(Boolean).join(' · ') }),
      m.status === 'hidden' ? h('p', { class: 'hint', text: 'Đang ẩn — link chưa mở được. Chọn “Đang hiện” để dùng link.' }) : m3dLinks(d, m),
      m3dProducts(d, m)),
    h('div', { class: 'r' }, h('span', { class: `pill ${m.status === 'hidden' ? 'mute' : 'ok'}`, text: m.status === 'hidden' ? 'Đang ẩn' : 'Đang hiện' }), h('a', { class: 'btn ghost sm', href: `#/models3d/${m.slug}` }, 'Sửa')));
  const apps = d.models.filter(isApp), models = d.models.filter((m) => !isApp(m));
  return page('Nội dung', 'Sản phẩm 3D', [h('a', { class: 'btn ghost', href: '#/models3d/new-app' }, icon('plus'), 'Thêm công cụ tự thiết kế'), h('a', { class: 'btn primary', href: '#/models3d/new' }, icon('plus'), 'Thêm mẫu 3D')],
    card(null, `Mỗi mẫu 3D hay công cụ tự thiết kế có một trang riêng để bạn gửi cho khách (Zalo, Facebook, tin nhắn…). Trang không liên kết sang mẫu khác và không hiện trên Google. Bấm “Thêm thành sản phẩm” để đưa mẫu lên danh mục sản phẩm — trang sản phẩm sẽ có khung xem 3D. Link dùng tên miền trong Thông tin website (${d.siteUrl}), mở được khi website đã đưa lên mạng; nút “Mở” xem ngay trên máy chủ hiện tại.`),
    d.pending?.length ? card('Có sẵn trong website, chưa thêm', `${d.pending.length} mục đã được chép vào website (bằng npm run sync-3d) nhưng chưa có trang riêng: ${d.pending.map((x) => x.name).join(', ')}.`,
      h('div', {}, h('button', { type: 'button', class: 'btn primary', on: { click: async (e) => {
        e.target.disabled = true;
        try { const r = await api('models3d-import', { method: 'POST' }); m3dCache = null; toast(r.added.length ? `Đã thêm ${r.added.length} mục. ${buildMsg(r.build)}` : 'Không có gì để thêm.'); route(); } catch (err) { toast(err.message, true); e.target.disabled = false; }
      } } }, icon('plus'), `Thêm tất cả (${d.pending.length})`))) : null,
    h('h2', { class: 'm3d-h', text: 'Công cụ tự thiết kế' }),
    h('div', { class: 'list' }, apps.length ? apps.map(row) : h('p', { class: 'empty', text: 'Chưa có công cụ nào. Bấm “Thêm công cụ tự thiết kế”.' })),
    h('h2', { class: 'm3d-h', text: 'Mẫu 3D' }),
    h('div', { class: 'list' }, models.length ? models.map(row) : h('p', { class: 'empty', text: 'Chưa có mẫu 3D nào. Bấm “Thêm mẫu 3D”.' })));
}
async function viewModel3d(slug) {
  const d = m3dCache || await api('models3d'); m3dCache = d;
  const isNew = slug === 'new' || slug === 'new-app';
  const orig = d.models.find((x) => x.slug === slug);
  if (!isNew && !orig) return page('Sản phẩm 3D', 'Không tìm thấy mẫu 3D', [h('a', { class: 'btn ghost', href: '#/models3d', text: 'Quay lại' })]);
  const allMetals = d.options.metals.map((x) => x.id), allGems = d.options.gems.map((x) => x.id);
  const blank = { slug: '', status: 'published', kind: slug === 'new-app' ? 'app' : 'model', code: '', name: { vi: '', en: '' }, description: { vi: '', en: '' }, src: '', app: '', view: 'ring', metals: [...allMetals], gems: [...allGems], metal: 'vang-trang', gem: 'lab-diamond', metal2: '', innerGem: '', tilt: false, poster: '', family: '', note: '', created: new Date().toISOString().slice(0, 10) };
  const m = clone(isNew ? (m3dDraft && m3dDraft.kind === blank.kind ? m3dDraft : blank) : orig);
  const app = isApp(m);
  const slugInp = input(m, 'slug', { max: 80 });
  if (!isNew) slugInp.readOnly = true;
  let slugTouched = !isNew || !!m.slug;
  slugInp.addEventListener('input', () => { slugTouched = true; });
  const nameField = bi('Tên', m, 'name', { max: 120 });
  $('input', nameField).addEventListener('input', (e) => { if (!slugTouched) { m.slug = slugify(e.target.value); slugInp.value = m.slug; } });

  // Tệp 3D: chọn tệp có sẵn (mẫu tách từ nhẫn cưới có kèm thông tin → điền sẵn) hoặc tải .glb mới
  const fileBox = h('div', { class: 'body' });
  const fillFrom = async (f) => { // điền sẵn tên, mô tả, màu vàng, đá quý, ảnh đại diện từ thông tin đi kèm tệp (chỉ khi thêm mới)
    const me = f?.meta; if (!isNew || !me) return;
    const name = m.name.vi || me.ten || ''; m.name = { vi: name, en: m.name.en || name };
    if (!m.slug) m.slug = slugify(me.id || name);
    if (!m.description.vi && me.moTa) m.description = { vi: me.moTa, en: m.description.en || '' };
    m.view = me.view === 'pair' ? 'pair' : 'ring'; if (me.metal) m.metal = me.metal; m.metal2 = me.metal2 || ''; m.innerGem = me.innerGem || ''; if (me.gem) m.gem = me.gem; if (me.coDa === false) m.gems = [];
    if (f.poster && !m.poster) m.poster = f.poster; if (me.family && !m.family) m.family = me.family;
    m3dDraft = clone(m); dirty = false; await route(); markDirty(); toast('Đã điền sẵn thông tin từ tệp 3D. Xem lại rồi bấm Lưu.');
  };
  const drawFile = () => {
    const sel = h('select', { on: { change: (e) => { m.src = e.target.value; markDirty(); fillFrom(d.files.find((f) => f.src === m.src)); } } },
      h('option', { value: '', text: '— Chọn tệp 3D —' }),
      d.files.map((f) => h('option', { value: f.src, selected: m.src === f.src, text: `${f.src.replace(/^\/(3d\/models|media\/3d)\//, '')} · ${kb(f.size)} · ${f.from}${f.meta?.ten ? ` · ${f.meta.ten}` : ''}` })));
    fileBox.replaceChildren(field('Tệp 3D (.glb)', sel, 'Tệp .glb chuyển từ file thiết kế .3dm của xưởng, hoặc mẫu tách từ nhẫn cưới (thư mục nhan-cuoi). Không tải file .3dm gốc lên website.'),
      h('div', {}, h('button', { type: 'button', class: 'btn ghost sm', on: { click: () => pickFiles({ accept: '.glb,model/gltf-binary', onFiles: async ([f]) => {
        toast('Đang tải tệp 3D…');
        const fd = new FormData(); fd.append('file', f);
        try { const r = await api('upload3d', { method: 'POST', form: fd }); d.files.push({ src: r.src, size: r.size, from: 'Tải lên từ CMS' }); m.src = r.src; markDirty(); drawFile(); toast('Đã tải lên. Nhớ bấm Lưu.'); } catch (e) { toast(e.message, true); }
      } }) } }, icon('plus'), 'Tải tệp .glb mới')));
  };
  drawFile();

  const live = !isNew && orig.status !== 'hidden';
  const preview = live ? h('iframe', { class: 'm3d-frame', src: m3dPath(orig.slug), title: `Xem trước ${orig.name.vi}`, loading: 'lazy' }) : null;
  const cats = (catalogCache || (await api('catalog')).catalog).categories;
  const bar = savebar(async () => {
    const r = await api(`models3d/${isNew ? (m.slug || 'new') : orig.slug}`, { method: 'PUT', body: { model: m, isNew } });
    m3dCache = null; m3dDraft = null; toast(buildMsg(r.build));
    if (isNew || r.model.status !== orig.status) { dirty = false; location.hash = `#/models3d/${r.model.slug}`; if (!isNew) route(); } else if (preview) preview.src = `${m3dPath(orig.slug)}?t=${Date.now()}`;
  }, [live ? h('a', { class: 'btn ghost', href: m3dPath(orig.slug), target: '_blank', rel: 'noopener' }, icon('ext'), 'Mở trang 3D') : null]);

  const form = h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
    live && card('Link gửi khách', app ? 'Link công cụ tự thiết kế (chỉ tiếng Việt).' : 'Link tiếng Việt dùng cho khách trong nước; “Link EN” là bản tiếng Anh của cùng trang.', m3dLinks(d, orig)),
    !isNew && card('Sản phẩm trên website', 'Gắn mẫu này vào một sản phẩm: mẫu 3D thì trang sản phẩm có khung xem 3D; công cụ tự thiết kế thì bấm vào thẻ sản phẩm là mở thẳng công cụ. Thẻ sản phẩm dùng ảnh 3D khi chưa có ảnh thật. Việc gắn làm trong trang sửa sản phẩm.', m3dProducts(d, orig)),
    card(app ? 'Thông tin công cụ' : 'Thông tin mẫu', null,
      nameField,
      h('div', { class: 'grid3' },
        !app ? field('Mã mẫu', input(m, 'code', { max: 40, placeholder: 'vd: NN Q640' }), 'Hiện dưới tên trên trang 3D. Để trống nếu chưa có.') : field('Công cụ', select(m, 'app', [['', '— Chọn công cụ —'], ...d.options.apps.map((a) => [a.id, `${a.name}${a.ready ? '' : ' (chưa chép vào website — chạy npm run sync-3d)'}`])]), 'Khách tự chọn kiểu dáng, đá quý và chi tiết rồi gửi thiết kế cho T Gold. Trang chạy trọn màn hình, chỉ tiếng Việt.'),
        field('Đường dẫn', slugInp, isNew ? 'Tạo tự động từ tên. Link: /3d/<đường dẫn>/' : `Link: ${m3dPath(orig.slug)} — đã tạo nên không đổi được (link đã gửi sẽ hỏng).`),
        field('Hiển thị', select(m, 'status', [['published', 'Đang hiện (link mở được)'], ['hidden', 'Ẩn (link không mở được)']]))),
      !app && bi('Mô tả ngắn (tuỳ chọn)', m, 'description', { textarea: true, rows: 2, max: 400, hint: 'Để trống → hiện câu hướng dẫn xoay / phóng to. Gọi khách là “bạn”, luôn viết “đá quý”, không dùng “chúng tôi”. Không ghi giá.' })),
    !app && card('Tệp 3D', null, fileBox),
    !app && card('Cách bày & lựa chọn trên trang', 'Khách đổi màu vàng và loại đá quý ngay trên khung 3D.',
      field('Cách bày', select(m, 'view', [['ring', 'Một món — xoay quanh (nhẫn, mặt dây…)'], ['pair', 'Đôi nhẫn nằm trên bàn (nhẫn cưới)']])),
      field('Màu vàng khách được chọn', chips(m, 'metals', d.options.metals.map((x) => [x.id, x.name]))),
      field('Loại đá quý khách được chọn', chips(m, 'gems', d.options.gems.map((x) => [x.id, x.name])), 'Bỏ trống tất cả nếu mẫu không có đá quý.'),
      h('div', { class: 'grid2' },
        field('Màu vàng khi mở trang', select(m, 'metal', d.options.metals.map((x) => [x.id, x.name]))),
        field('Loại đá quý khi mở trang', select(m, 'gem', d.options.gems.map((x) => [x.id, x.name])))),
      h('div', { class: 'grid2' },
        field('Màu vàng thứ hai (nhẫn hai màu vàng)', select(m, 'metal2', [['', 'Không dùng'], ...d.options.metals.map((x) => [x.id, x.name])]), 'Chỉ dùng cho mẫu có phần vàng thứ hai (mẫu tách từ nhẫn cưới điền sẵn).'),
        field('Đá ẩn lòng nhẫn', select(m, 'innerGem', [['', 'Không có'], ...d.options.gems.map((x) => [x.id, x.name])]), 'Loại đá của hàng đá ẩn trong lòng nhẫn (nếu mẫu có).')),
      h('div', { class: 'chips' }, toggle('Mở trang ở chế độ xoay chéo (thấy cả mặt trên viên đá)', m, 'tilt'))),
    card('Ảnh đại diện & danh mục', 'Ảnh 3D dùng làm ảnh trên thẻ sản phẩm và đầu thư viện ảnh khi sản phẩm chưa có ảnh thật (nên là ảnh dọc 3:4). Danh mục gợi ý dùng khi bấm “Thêm thành sản phẩm”.',
      field('Ảnh đại diện', mediaOne(m, 'poster', { label: 'Tải ảnh lên' }), 'Cỡ ảnh nên dùng: 1600 × 2000 px (dọc 4:5). Đường dẫn dạng /3d/models/… (ảnh đi kèm tệp 3D) hoặc /media/… (tải lên từ đây).'),
      field('Danh mục sản phẩm gợi ý', select(m, 'family', [['', '— Không gợi ý —'], ...cats.map((c) => [c.id, c.vi])]))),
    card('Ghi chú nội bộ', 'Chỉ hiện trong trang quản trị (vd: thông số đá quý đo từ file, tên file gốc…).', area(m, 'note', { rows: 2, max: 600 })),
    preview && card('Xem trước', 'Trang 3D như khách thấy. Lưu xong, khung xem trước tự tải lại.', preview),
    !isNew && card(app ? 'Xoá công cụ khỏi website' : 'Xoá mẫu 3D', 'Trang 3D và link ngừng hoạt động. Tệp .glb vẫn được giữ. Có thể khôi phục trong Sao lưu → Lịch sử phiên bản. Mẫu đang gắn với sản phẩm thì phải gỡ khỏi sản phẩm trước.',
      h('div', {}, h('button', { type: 'button', class: 'btn danger', on: { click: async () => {
        if (!(await confirmBox(`Xoá “${orig.name.vi}”? Link đã gửi cho khách sẽ không mở được nữa.`, 'Xoá'))) return;
        try { const r = await api(`models3d/${orig.slug}`, { method: 'DELETE' }); dirty = false; m3dCache = null; toast(buildMsg(r.build)); location.hash = '#/models3d'; } catch (e) { toast(e.message, true); }
      } } }, 'Xoá'))),
    bar);
  return h('div', { class: 'inner' }, h('a', { class: 'back', href: '#/models3d' }, icon('back'), 'Sản phẩm 3D'), h('div', { class: 'head' }, h('div', {}, h('p', { class: 'kick', text: isNew ? 'Thêm mới' : 'Chỉnh sửa' }), h('h1', { text: isNew ? (app ? 'Công cụ tự thiết kế mới' : 'Mẫu 3D mới') : orig.name.vi }))), form);
}

/* ───────── Tạp chí ───────── */
let journalCache = null;
async function viewJournal() {
  const { journal } = await api('journal'); journalCache = journal;
  const ST = { published: ['Đã đăng', 'ok'], draft: ['Bản nháp', 'warn'], hidden: ['Đang ẩn', 'mute'] };
  return page('Nội dung', 'Tạp chí', [h('a', { class: 'btn primary', href: '#/journal/new' }, icon('plus'), 'Viết bài mới')],
    h('div', { class: 'list' }, journal.posts.length ? journal.posts.map((p) => h('div', { class: 'row', tabindex: '0', role: 'button', on: { click: () => { location.hash = `#/journal/${p.slug}`; }, keydown: (e) => { if (e.key === 'Enter') location.hash = `#/journal/${p.slug}`; } } },
      h('div', { class: 'thumb' }, p.cover?.src ? h('img', { src: p.cover.src, alt: '' }) : icon('book')),
      h('div', {}, h('div', { class: 't', text: p.title.vi }), h('div', { class: 's', text: `${p.date} · ${p.category?.vi || ''}` })),
      h('div', { class: 'r' }, p.sample ? h('span', { class: 'pill warn', text: 'Bài mẫu' }) : null, h('span', { class: `pill ${ST[p.status]?.[1]}`, text: ST[p.status]?.[0] || p.status })))) : h('p', { class: 'empty', text: 'Chưa có bài viết.' })));
}
function mdEditor(obj, lang) {
  const ta = area(obj, `body.${lang}`, { rows: 18, max: 60000, cls: 'code' });
  ta.setAttribute('aria-label', `Nội dung (${lang === 'vi' ? 'tiếng Việt' : 'English'})`);
  const pv = h('div', { class: 'preview', hidden: true });
  const bw = h('button', { type: 'button', 'aria-pressed': 'true', text: 'Soạn' });
  const bp = h('button', { type: 'button', 'aria-pressed': 'false', text: 'Xem trước' });
  bw.onclick = () => { ta.hidden = false; pv.hidden = true; bw.setAttribute('aria-pressed', 'true'); bp.setAttribute('aria-pressed', 'false'); };
  bp.onclick = () => { pv.innerHTML = markdown(ta.value); ta.hidden = true; pv.hidden = false; bw.setAttribute('aria-pressed', 'false'); bp.setAttribute('aria-pressed', 'true'); }; // markdown() đã escape HTML
  return h('div', { class: 'f' }, h('span', { class: 'lbl', text: lang === 'vi' ? 'Nội dung · Tiếng Việt' : 'Nội dung · English' }), h('div', { class: 'tabs2' }, bw, bp), ta, pv);
}
async function viewPost(slug) {
  const { journal } = journalCache ? { journal: journalCache } : await api('journal');
  journalCache = journal;
  const isNew = slug === 'new';
  const orig = journal.posts.find((p) => p.slug === slug);
  if (!isNew && !orig) return page('Tạp chí', 'Không tìm thấy bài viết', [h('a', { class: 'btn ghost', href: '#/journal', text: 'Quay lại' })]);
  const p = isNew ? { slug: '', status: 'draft', sample: false, date: new Date().toISOString().slice(0, 10), category: { vi: '', en: '' }, title: { vi: '', en: '' }, excerpt: { vi: '', en: '' }, cover: { src: '', alt: { vi: '', en: '' } }, body: { vi: '', en: '' } } : clone(orig);
  let slugTouched = !isNew;
  const slugInp = input(p, 'slug', { max: 100, onInput: () => { slugTouched = true; } });
  const titleField = bi('Tiêu đề', p, 'title', { max: 200 });
  $('input', titleField).addEventListener('input', (e) => { if (!slugTouched) { p.slug = slugify(e.target.value); slugInp.value = p.slug; } });
  const bar = savebar(async () => {
    const r = await api(`posts/${isNew ? (p.slug || 'new') : orig.slug}`, { method: 'PUT', body: { post: p } });
    journalCache = null;
    toast(buildMsg(r.build));
    if (isNew || r.post.slug !== slug) { dirty = false; location.hash = `#/journal/${r.post.slug}`; }
  }, [!isNew && p.status === 'published' ? h('a', { class: 'btn ghost', href: `/tap-chi/${orig.slug}/`, target: '_blank', rel: 'noopener' }, icon('ext'), 'Xem trên web') : null]);
  const form = h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
    card('Thông tin bài', null, titleField,
      h('div', { class: 'grid3' }, field('Đường dẫn (slug)', slugInp, 'Link: /tap-chi/<slug>/'), field('Trạng thái', select(p, 'status', [['published', 'Đăng lên website'], ['draft', 'Bản nháp'], ['hidden', 'Ẩn']])), field('Ngày đăng', input(p, 'date', { type: 'date' }))),
      bi('Chuyên mục', p, 'category', { max: 60, hint: 'Ví dụ: Chất liệu / Materials' }),
      bi('Tóm tắt (1–2 câu)', p, 'excerpt', { textarea: true, rows: 2, max: 400 }),
      toggle('Đây là bài mẫu (cần duyệt nội dung)', p, 'sample')),
    card('Ảnh bìa', 'Cỡ ảnh nên dùng: 1600 × 900 px (ngang 16:9) — ô bài viết ở trang danh sách và trang chủ cắt bớt hai mép bên, nên đặt chủ thể ở giữa. Ảnh thật, ánh sáng low-key, tông ấm.', mediaOne(p, 'cover.src', { label: 'Tải ảnh bìa' }), bi('Mô tả ảnh bìa', p, 'cover.alt', { max: 200 })),
    card('Nội dung', null, h('p', { class: 'md-help' }, 'Định dạng: ', h('code', { text: '## Tiêu đề' }), ' · ', h('code', { text: '- danh sách' }), ' · ', h('code', { text: '**đậm**' }), ' · ', h('code', { text: '*nghiêng*' }), ' · ', h('code', { text: '[chữ](https://…)' }), ' · Enter để xuống dòng · dòng trống để sang đoạn mới.'),
      h('div', { class: 'grid2' }, mdEditor(p, 'vi'), mdEditor(p, 'en'))),
    !isNew && card('Xoá bài viết', null, h('div', {}, h('button', { type: 'button', class: 'btn danger', on: { click: async () => {
      if (!(await confirmBox(`Xoá bài “${orig.title.vi}”?`, 'Xoá'))) return;
      try { const r = await api(`posts/${orig.slug}`, { method: 'DELETE' }); dirty = false; journalCache = null; toast(buildMsg(r.build)); location.hash = '#/journal'; } catch (e) { toast(e.message, true); }
    } } }, 'Xoá bài viết'))),
    bar);
  return h('div', { class: 'inner' }, h('a', { class: 'back', href: '#/journal' }, icon('back'), 'Tạp chí'), h('div', { class: 'head' }, h('div', {}, h('p', { class: 'kick', text: isNew ? 'Viết mới' : 'Chỉnh sửa' }), h('h1', { text: isNew ? 'Bài viết mới' : orig.title.vi }))), form);
}

/* ───────── Thông tin website ───────── */
async function viewSettings() {
  const { site } = await api('site');
  const s = clone(site);
  const warn = h('div', { class: 'warnbox', hidden: true });
  const claim = (title, key, fields) => h('div', { class: 'card' }, h('h2', { text: title }), h('div', { class: 'body' }, ...fields, toggle('Đã xác minh — nội dung đúng với chính sách thực tế', s, `claims.${key}.verified`)));
  const bar = savebar(async () => {
    const r = await api('site', { method: 'PUT', body: s });
    toast(buildMsg(r.build));
    warn.hidden = !r.warnings?.length; warn.textContent = (r.warnings || []).join(' ');
    if (r.warnings?.length) toast('Đã lưu, nhưng có mục chưa hợp lệ bị bỏ qua.', true);
  }, [h('a', { class: 'btn ghost', href: '/lien-he/', target: '_blank', rel: 'noopener' }, icon('ext'), 'Trang Liên hệ')]);
  return page('Cài đặt', 'Thông tin website', [],
    h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
      warn,
      card('Liên hệ & showroom', 'Ô để trống sẽ hiển thị “(cập nhật)” trên website.',
        h('div', { class: 'grid3' }, field('Hotline', input(s, 'contact.hotline', { type: 'tel', max: 30, placeholder: '0900 000 000' })), field('Zalo (số hoặc link)', input(s, 'contact.zalo', { max: 200, placeholder: '0900000000' })), field('Email', input(s, 'contact.email', { type: 'email', max: 120 }))),
        field('Messenger', input(s, 'contact.messenger', { type: 'url', placeholder: 'https://m.me/…' })),
        bi('Địa chỉ showroom', s, 'contact.address', { max: 300 }),
        bi('Giờ mở cửa', s, 'contact.hours', { max: 120 }),
        toggle('Giờ mở cửa đã được xác nhận', s, 'contact.hoursVerified'),
        field('Link nhúng bản đồ', input(s, 'contact.mapEmbed', { type: 'url', max: 2000, placeholder: 'https://www.google.com/maps/embed?pb=…' }), 'Google Maps → Chia sẻ → Nhúng bản đồ → sao chép phần link trong src="…".'),
        field('Link chỉ đường (Google Maps)', input(s, 'contact.mapLink', { type: 'url' }))),
      card('Mạng xã hội', null, h('div', { class: 'grid2' },
        field('Instagram', input(s, 'social.instagram', { type: 'url', placeholder: 'https://instagram.com/…' })), field('Facebook', input(s, 'social.facebook', { type: 'url' })),
        field('TikTok', input(s, 'social.tiktok', { type: 'url' })), field('Zalo OA', input(s, 'social.zalo', { type: 'url' })))),
      card('Hero trang chủ', 'Slide, ảnh và chữ của hero (cùng mọi khối khác trên trang chủ) nay sửa trong mục Trang chủ.', h('div', {}, h('a', { class: 'btn ghost', href: '#/homepage' }, icon('layout'), 'Mở mục Trang chủ'))),
      h('h2', { class: 'sr', text: 'Tuyên bố cần xác minh' }),
      claim('Thời gian hoàn thiện', 'leadTime', [bi('Câu hiển thị', s, 'claims.leadTime', { max: 300 })]),
      claim('Bảo hành', 'warranty', [h('div', { class: 'grid2' }, field('Tiêu đề (VI)', input(s, 'claims.warranty.vi.title', { max: 80 })), field('Title (EN)', input(s, 'claims.warranty.en.title', { max: 80 }))), h('div', { class: 'grid2' }, field('Mô tả (VI)', input(s, 'claims.warranty.vi.text', { max: 300 })), field('Description (EN)', input(s, 'claims.warranty.en.text', { max: 300 })))]),
      claim('Đơn vị kiểm định', 'certificates', [field('Danh sách (cách nhau bằng dấu phẩy)', (() => { const o = { v: s.claims.certificates.list.join(', ') }; return input(o, 'v', { max: 100, onInput: (v) => { s.claims.certificates.list = v.split(',').map((x) => x.trim()).filter(Boolean); } }); })())]),
      claim('Đổi mẫu', 'exchange', [bi('Câu hiển thị', s, 'claims.exchange', { max: 120 })]),
      card('Nâng cao', null,
        field('Tên miền chính thức', input(s, 'siteUrl', { type: 'url' }), 'Dùng cho link chia sẻ, sitemap, Google. Ví dụ: https://tgoldluxury.vn'),
        h('div', { class: 'grid3' }, field('Nơi nhận form', input(s, 'form.endpoint', { max: 400 }), 'Mặc định /api/booking (hộp thư Lịch hẹn).'), field('Số ảnh tối đa', input(s, 'form.maxFiles', { type: 'number' })), field('Dung lượng mỗi ảnh (MB)', input(s, 'form.maxFileMB', { type: 'number' })))),
      bar));
}

/* ───────── Trang chủ ───────── */
const PAGE_LABELS = {
  home: 'Trang chủ', collection: 'Bộ sưu tập (tất cả sản phẩm)', custom: 'Custom', materials: 'Chất liệu & Kiểm định (Tiêu chuẩn chất lượng)',
  workshop: 'Xưởng T Gold', story: 'Câu chuyện (Về T Gold)', contact: 'Liên hệ', booking: 'Form đặt lịch tư vấn', journal: 'Tạp chí',
  order: 'Cách đặt hàng', care: 'Bảo hành & chăm sóc',
};
const ICON_LABELS = { gem: 'Viên đá quý', workshop: 'Bàn chế tác', pen: 'Bút thiết kế', shield: 'Khiên bảo hành', cert: 'Giấy kiểm định', ring: 'Chiếc nhẫn', spark: 'Lấp lánh', clock: 'Đồng hồ' };
const FOCUS_OPTS = [['50% 50%', 'Giữa ảnh'], ['50% 20%', 'Phía trên'], ['50% 80%', 'Phía dưới'], ['20% 50%', 'Bên trái'], ['80% 50%', 'Bên phải']];
const emptyBi = () => ({ vi: '', en: '' });
const emptyImg = () => ({ src: '', srcset: '', alt: emptyBi(), focus: '50% 50%' });
const emptyCta = (to = 'page:collection') => ({ label: emptyBi(), link: { to } });

// Chọn đích của link: trang / danh mục / sản phẩm / bài viết / link tự nhập (bản VI & EN)
function linkPicker(obj, path, o) {
  if (!getP(obj, path)?.to) setP(obj, path, { to: 'page:home' });
  const link = getP(obj, path);
  const urlBox = h('div', { class: 'bi', hidden: link.to !== 'url' },
    h('div', { class: 'l', 'data-lang': 'VI' }, h('input', { type: 'text', value: link.url?.vi || '', placeholder: '/duong-dan/ hoặc https://…', 'aria-label': 'Link tiếng Việt', on: { input: (e) => { setP(link, 'url.vi', e.target.value.trim()); markDirty(); } } })),
    h('div', { class: 'l', 'data-lang': 'EN' }, h('input', { type: 'text', value: link.url?.en || '', placeholder: '/en/… hoặc https://…', 'aria-label': 'Link tiếng Anh', on: { input: (e) => { setP(link, 'url.en', e.target.value.trim()); markDirty(); } } })));
  const opt = (v, t) => h('option', { value: v, selected: link.to === v, text: t });
  const sel = h('select', { 'aria-label': 'Trỏ tới', on: { change: (e) => { link.to = e.target.value; if (link.to === 'url' && !link.url) link.url = emptyBi(); urlBox.hidden = link.to !== 'url'; markDirty(); } } },
    h('optgroup', { label: 'Trang' }, o.pages.map((p) => opt(`page:${p}`, PAGE_LABELS[p] || p))),
    h('optgroup', { label: 'Danh mục' }, o.categories.map((c) => opt(`cat:${c.id}`, c.name))),
    h('optgroup', { label: 'Sản phẩm' }, o.products.map((p) => opt(`product:${p.slug}`, p.name))),
    h('optgroup', { label: 'Bài Tạp chí' }, o.posts.map((p) => opt(`post:${p.slug}`, p.title))),
    h('optgroup', { label: 'Khác' }, opt('url', 'Link tự nhập…')));
  return h('div', { class: 'linkpick' }, sel, urlBox);
}
// Nút / link: chữ (VI · EN) + đích
const ctaBox = (c, o, label = 'Chữ trên nút') => {
  if (!c.label) c.label = emptyBi();
  return h('div', { class: 'cta-box' }, bi(label, c, 'label', { max: 60 }), field('Trỏ tới', linkPicker(c, 'link', o)));
};
function ctaField(title, obj, path, o, hint) {
  if (!getP(obj, path)) setP(obj, path, emptyCta());
  return h('div', { class: 'subbox' }, h('span', { class: 'lbl', text: title }), ctaBox(getP(obj, path), o), hint && h('p', { class: 'hint', text: hint }));
}
// Ảnh: tải lên (tự chuyển WebP 800 / 1600 px) · vị trí giữ khi khung bị cắt · mô tả ảnh (alt)
// size: cỡ ảnh nên dùng cho khung này (hiện thành dòng chú thích nhỏ dưới tên ô)
function imageField(label, obj, path, { hint, size } = {}) {
  if (!getP(obj, path)) setP(obj, path, emptyImg());
  const im = getP(obj, path);
  if (!im.alt) im.alt = emptyBi();
  const wrap = h('div', { class: 'imgfield' });
  const draw = () => {
    const pv = h('div', { class: 'pv' }, im.src ? h('img', { src: im.src, alt: '', style: `object-position:${im.focus || '50% 50%'}` }) : 'Chưa có ảnh');
    const up = h('button', { type: 'button', class: 'btn ghost sm', on: { click: () => pickFiles({ accept: 'image/*', onFiles: async ([f]) => {
      toast('Đang tải ảnh lên…');
      try {
        const r = await uploadFile(f);
        if (r.kind !== 'image') throw new Error('Ô này chỉ nhận ảnh.');
        im.src = r.src; im.srcset = r.srcset || ''; markDirty(); draw(); toast('Đã tải ảnh. Nhớ bấm Lưu.');
      } catch (e) { toast(e.message, true); }
    } }) } }, icon('img'), im.src ? 'Thay ảnh' : 'Tải ảnh');
    const rm = im.src && h('button', { type: 'button', class: 'btn danger sm', on: { click: () => { im.src = ''; im.srcset = ''; markDirty(); draw(); } } }, 'Bỏ ảnh');
    const opts = FOCUS_OPTS.some(([v]) => v === im.focus) ? FOCUS_OPTS : [...FOCUS_OPTS, [im.focus, `Tuỳ chỉnh (${im.focus})`]];
    const focusSel = h('select', { on: { change: (e) => { im.focus = e.target.value; markDirty(); draw(); } } }, opts.map(([v, l]) => h('option', { value: v, selected: im.focus === v, text: l })));
    wrap.replaceChildren(pv, h('div', { class: 'grow' }, h('div', { class: 'chips' }, up, rm),
      field('Phần ảnh luôn giữ lại khi khung bị cắt', focusSel),
      bi('Mô tả ảnh (alt — tốt cho SEO)', im, 'alt', { max: 200 })));
  };
  draw();
  return h('div', { class: 'f' }, h('span', { class: 'lbl', text: label }), size && h('p', { class: 'hint size', text: `Cỡ ảnh nên dùng: ${size}` }), wrap, hint && h('p', { class: 'hint', text: hint }));
}
// Danh sách sửa được: thêm · xoá · đổi thứ tự
function listEditor(arr, { max = 10, addLabel = 'Thêm', make, item, title = (_, i) => `Mục ${i + 1}`, collapsible = false, onDelete }) {
  const box = h('div', { class: 'lst' });
  let openIdx = collapsible ? 0 : -1;
  const move = (i, d) => { [arr[i + d], arr[i]] = [arr[i], arr[i + d]]; openIdx = i + d; markDirty(); draw(); };
  const draw = () => {
    const rows = arr.map((it, i) => {
      const head = h(collapsible ? 'summary' : 'div', { class: 'lst-head' }, h('b', { text: title(it, i) }), h('span', { class: 'lst-acts' },
        h('button', { type: 'button', title: 'Đưa lên', 'aria-label': 'Đưa lên', disabled: i === 0, on: { click: (e) => { e.preventDefault(); move(i, -1); } } }, icon('up')),
        h('button', { type: 'button', title: 'Đưa xuống', 'aria-label': 'Đưa xuống', disabled: i === arr.length - 1, on: { click: (e) => { e.preventDefault(); move(i, 1); } } }, icon('down')),
        h('button', { type: 'button', class: 'del', on: { click: async (e) => { e.preventDefault(); if (!(await (onDelete ? onDelete(it, i) : confirmBox(`Xoá “${title(it, i)}”?`, 'Xoá')))) return; arr.splice(i, 1); markDirty(); draw(); } } }, 'Xoá')));
      const row = h(collapsible ? 'details' : 'div', { class: 'lst-item', open: collapsible && i === openIdx }, head, h('div', { class: 'lst-body' }, item(it, i)));
      row.addEventListener('input', () => { head.querySelector('b').textContent = title(it, i); }); // tiêu đề dòng cập nhật ngay khi gõ
      return row;
    });
    box.replaceChildren(...rows, arr.length < max
      ? h('button', { type: 'button', class: 'btn ghost sm lst-add', on: { click: () => { arr.push(make()); openIdx = arr.length - 1; markDirty(); draw(); } } }, icon('plus'), addLabel)
      : h('p', { class: 'hint', text: `Tối đa ${max} mục.` }));
  };
  draw();
  return box;
}
// Chọn & sắp xếp sản phẩm / bài viết theo thứ tự hiển thị
function pickList(arr, all, { max, empty }) {
  const box = h('div', { class: 'pick' });
  const draw = () => {
    const btn = (lbl, ic, dis, fn, cls = '') => h('button', { type: 'button', class: cls, title: lbl, 'aria-label': lbl, disabled: dis, on: { click: fn } }, ic ? icon(ic) : lbl);
    const add = h('select', { 'aria-label': 'Thêm', disabled: arr.length >= max, on: { change: (e) => { if (e.target.value) { arr.push(e.target.value); markDirty(); draw(); } } } },
      h('option', { value: '', text: arr.length >= max ? `Đã đủ ${max} mục` : '+ Thêm vào danh sách…' }), all.filter((x) => !arr.includes(x.slug)).map((x) => h('option', { value: x.slug, text: x.name })));
    box.replaceChildren(arr.length ? h('ol', { class: 'pick-list' }, arr.map((slug, i) => {
      const x = all.find((y) => y.slug === slug);
      return h('li', {}, h('span', { class: 'thumb' }, x?.img ? h('img', { src: x.img, alt: '' }) : icon('gem')), h('span', { class: 't', text: x ? x.name : `${slug} (không còn hiển thị — sẽ bị bỏ khi lưu)` }),
        h('span', { class: 'lst-acts' }, btn('Đưa lên', 'up', i === 0, () => { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; markDirty(); draw(); }), btn('Đưa xuống', 'down', i === arr.length - 1, () => { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; markDirty(); draw(); }), btn('Bỏ', null, false, () => { arr.splice(i, 1); markDirty(); draw(); }, 'del')));
    })) : h('p', { class: 'hint', text: empty }), add);
  };
  draw();
  return box;
}

async function viewHome() {
  const d = await api('home');
  const o = d.options;
  const hm = clone(d.home);
  // Bổ sung khung trống cho mục chưa có (dữ liệu cũ / bị xoá bớt)
  const need = (p, v) => { if (getP(hm, p) == null) setP(hm, p, v); };
  need('seo', { title: emptyBi(), description: emptyBi() });
  need('hero', { interval: 7, tagline: '', slides: [] }); need('hero.slides', []); need('hero.h1', { vi: '', en: '' });
  for (const k of ['trust', 'categories', 'featured', 'order', 'custom', 'why', 'journal']) { need(k, {}); if (hm[k].enabled == null) hm[k].enabled = true; }
  need('trust.items', []); need('categories.images', {}); need('featured.products', []); need('order.steps', []);
  need('custom.sendItems', []); need('custom.flow', []); need('why.items', []); need('journal.posts', []); need('journal.chips', []);
  hm.hero.slides.forEach((s) => { if (!Array.isArray(s.ctas)) s.ctas = []; });

  const warn = h('div', { class: 'warnbox', hidden: true });
  const bar = savebar(async () => {
    const r = await api('home', { method: 'PUT', body: hm });
    toast(buildMsg(r.build));
    warn.hidden = !r.warnings?.length;
    warn.textContent = r.warnings?.length ? `Đã lưu. Lưu ý: ${r.warnings.join(' ')}` : '';
  }, [h('a', { class: 'btn ghost', href: '/', target: '_blank', rel: 'noopener' }, icon('ext'), 'Xem trang chủ')]);

  const SECS = [['hs-seo', 'SEO'], ['hs-hero', 'Hero'], ['hs-trust', 'Cam kết'], ['hs-cat', 'Danh mục'], ['hs-feat', 'Nổi bật'], ['hs-order', 'Đặt hàng'], ['hs-custom', 'Custom'], ['hs-why', 'Vì sao'], ['hs-jr', 'Tạp chí']];
  const jump = h('nav', { class: 'jump', 'aria-label': 'Đi tới khối' }, SECS.map(([id, l]) => h('a', { href: '#/homepage', on: { click: (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } } }, l)));
  const sec = (id, title, desc, obj, ...kids) => h('section', { class: 'card', id },
    h('div', { class: 'card-top' }, h('h2', { text: title }), obj && toggle('Hiện trên website', obj, 'enabled')),
    desc && h('p', { class: 'desc', text: desc }), h('div', { class: 'body' }, kids));
  const heads = (obj, { lead = false } = {}) => [bi('Dòng nhỏ phía trên (eyebrow)', obj, 'kicker', { max: 90 }), bi('Tiêu đề', obj, 'title', { max: 160, hint: 'Đặt phần chữ vàng nghiêng giữa hai dấu *…*' }), lead && bi('Đoạn mô tả', obj, 'lead', { textarea: true, rows: 2, max: 260 })];
  const biItem = (label, max) => (x) => bi(label, { x }, 'x', { max });

  const form = h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
    card(null, null,
      h('p', { class: 'hint' }, 'Mọi chữ, ảnh và link trên trang chủ đều sửa ở đây. Ô tiếng Anh để trống sẽ dùng tạm tiếng Việt. Bấm Lưu (hoặc Ctrl/⌘ + S) — website cập nhật ngay.'),
      jump),
    warn,
    sec('hs-seo', 'SEO trang chủ', 'Hiện trên kết quả Google và khi chia sẻ link.', null,
      bi('Tiêu đề trang (nên ≤ 60 ký tự)', hm, 'seo.title', { max: 90 }),
      bi('Mô tả (nên ≤ 160 ký tự)', hm, 'seo.description', { textarea: true, rows: 2, max: 220 })),
    sec('hs-hero', '01 · Hero — slide tự lướt', 'Nên 3–4 slide. Slide 1 là thông điệp chính và là tiêu đề H1 duy nhất của trang; chỉ ảnh slide 1 tải ngay, ảnh các slide sau tải khi trang đã hiện xong.', null,
      h('div', { class: 'grid2' },
        field('Thời gian mỗi slide (giây)', input(hm, 'hero.interval', { type: 'number' }), 'Từ 4 đến 15 giây. Khuyến nghị 7.'),
        field('Dòng chữ nhỏ dưới nút (slide 1)', input(hm, 'hero.tagline', { max: 80 }), 'Chữ Latin in hoa, ví dụ: TRUE MATERIALS · TAILORED DESIGN · YOUR TRAIT')),
      bi('Tiêu đề H1 đầy đủ (ẩn — cho Google & trình đọc màn hình)', hm, 'hero.h1', { max: 160, hint: 'Không hiện trên trang; khách vẫn thấy tiêu đề slide 1 như cũ. Nên có tên thương hiệu và ngành hàng, vd: T Gold – Trang sức Luxury cho giá trị được nhìn thấy. Để trống → dùng chữ đang hiện trên slide 1.' }),
      listEditor(hm.hero.slides, {
        max: 5, addLabel: 'Thêm slide', collapsible: true,
        title: (s, i) => `Slide ${i + 1}${s.title?.vi ? ` · ${s.title.vi}` : ''}${i === 0 ? ' — tiêu đề H1' : ''}`,
        make: () => ({ nav: emptyBi(), kicker: emptyBi(), title: emptyBi(), subtitle: emptyBi(), text: emptyBi(), image: emptyImg(), ctas: [emptyCta()] }),
        item: (s, i) => h('div', { class: 'body' },
          bi('Nhãn trên thanh điều hướng', s, 'nav', { max: 30, hint: '1–2 từ, ví dụ: Chất liệu' }),
          bi(i === 0 ? 'Dòng nhỏ phía trên — nằm trong H1, nên chứa từ khoá' : 'Dòng nhỏ phía trên', s, 'kicker', { max: 90 }),
          bi('Tiêu đề lớn (hiện in hoa)', s, 'title', { max: 60 }),
          bi('Dòng vàng bên dưới tiêu đề', s, 'subtitle', { max: 90 }),
          bi('Đoạn mô tả', s, 'text', { textarea: true, rows: 3, max: 320 }),
          imageField('Ảnh slide', s, 'image', { size: '1600 × 1400 px (gần vuông) — máy tính cắt bớt mép trên dưới, điện thoại cắt bớt hai mép bên, nên đặt chủ thể ở giữa', hint: 'Ảnh thật, tối thiểu 1600 px chiều ngang; hệ thống tự tối ưu sang WebP. Trên máy tính ảnh nằm bên phải, trên điện thoại nằm phía trên chữ.' }),
          h('div', { class: 'f' }, h('span', { class: 'lbl', text: 'Link gạch chân (tối đa 2)' }),
            listEditor(s.ctas, { max: 2, addLabel: 'Thêm nút', title: (_, k) => (k === 0 ? 'Nút chính' : 'Nút phụ'), make: () => emptyCta(), item: (c) => ctaBox(c, o) }))),
      })),
    sec('hs-trust', '02 · Dải cam kết (dưới hero)', '4 cam kết ngắn — mỗi ô 1 biểu tượng, 1 dòng chính, 1 dòng phụ.', hm.trust,
      listEditor(hm.trust.items, {
        max: 4, addLabel: 'Thêm cam kết', title: (it, i) => `${i + 1} · ${it.title?.vi || 'Cam kết mới'}`,
        make: () => ({ icon: 'gem', title: emptyBi(), text: emptyBi() }),
        item: (it) => h('div', { class: 'body' }, field('Biểu tượng', select(it, 'icon', o.icons.map((k) => [k, ICON_LABELS[k] || k]))), bi('Dòng chính', it, 'title', { max: 50 }), bi('Dòng phụ', it, 'text', { max: 70 })),
      })),
    sec('hs-cat', '03 · Danh mục sản phẩm', 'Dải cuộn ngang: điện thoại hiện 3 ô, máy tính 6 ô; nhiều hơn thì cuộn bằng 2 mũi tên. Ảnh của từng ô chọn ngay bên dưới.', hm.categories,
      h('div', { class: 'cat-order' }, h('div', {}, h('p', { class: 'lbl', text: `Danh mục đang hiện · ${o.categories.length} mục, theo thứ tự` }), h('ol', {}, o.categories.map((c) => h('li', { text: c.name })))),
        h('a', { class: 'btn ghost sm', href: '#/categories' }, icon('tag'), 'Thêm / xoá / sắp xếp danh mục')),
      ...heads(hm.categories, { lead: true }),
      ctaField('Link bên phải tiêu đề (để trống chữ để ẩn; có đoạn mô tả thì link ẩn)', hm.categories, 'link', o),
      h('div', { class: 'grid-imgs' }, o.categories.map((c) => imageField(`Ảnh · ${c.name}`, hm.categories.images, c.id, { size: '900 × 1200 px (dọc 3:4)' })))),
    sec('hs-feat', '04 · Sản phẩm nổi bật', 'Chọn và sắp xếp sản phẩm. Để trống danh sách → tự lấy theo “Thứ tự nổi bật” trong mục Sản phẩm, rồi tới mẫu mới nhất.', hm.featured,
      ...heads(hm.featured, { lead: true }),
      field('Sản phẩm hiển thị (theo thứ tự)', pickList(hm.featured.products, o.products, { max: 12, empty: 'Chưa chọn — đang tự lấy theo thứ tự nổi bật.' })),
      h('div', { class: 'grid2' }, field('Số sản phẩm tối đa', input(hm.featured, 'limit', { type: 'number' }), 'Từ 2 đến 12. Khuyến nghị 8.'), bi('Dòng giá trên thẻ', hm.featured, 'priceNote', { max: 40, hint: 'Ví dụ: Liên hệ báo giá. Để trống để ẩn.' })),
      ctaField('Nút cuối khối', hm.featured, 'cta', o)),
    sec('hs-order', '05 · Đã tìm thấy mẫu bạn thích? (Cách đặt hàng)', 'Các bước này hiện cả trên trang Cách đặt hàng.', hm.order,
      ...heads(hm.order, { lead: true }),
      imageField('Ảnh', hm.order, 'image', { size: '1600 × 1200 px (ngang 4:3)' }),
      h('div', { class: 'f' }, h('span', { class: 'lbl', text: 'Các bước' }), listEditor(hm.order.steps, {
        max: 6, addLabel: 'Thêm bước', title: (st, i) => `Bước ${i + 1} · ${st.title?.vi || ''}`,
        make: () => ({ title: emptyBi(), text: emptyBi() }),
        item: (st) => h('div', { class: 'body' }, bi('Tên bước', st, 'title', { max: 60 }), bi('Mô tả', st, 'text', { textarea: true, rows: 2, max: 220 })),
      })),
      ctaField('Nút', hm.order, 'cta', o)),
    sec('hs-custom', '06 · Gợi ý Custom', null, hm.custom,
      ...heads(hm.custom, { lead: true }),
      bi('Dòng “Gửi cho T Gold:”', hm.custom, 'sendLabel', { max: 40 }),
      h('div', { class: 'grid2' },
        h('div', { class: 'f' }, h('span', { class: 'lbl', text: 'Những thứ khách có thể gửi' }), listEditor(hm.custom.sendItems, { max: 5, addLabel: 'Thêm', title: (x, i) => `${i + 1} · ${x.vi || ''}`, make: emptyBi, item: biItem('Nội dung', 40) })),
        h('div', { class: 'f' }, h('span', { class: 'lbl', text: 'Quy trình (hiện nối nhau bằng →)' }), listEditor(hm.custom.flow, { max: 6, addLabel: 'Thêm bước', title: (x, i) => `${i + 1} · ${x.vi || ''}`, make: emptyBi, item: biItem('Bước', 30) }))),
      imageField('Ảnh', hm.custom, 'image', { size: '1600 × 1000 px (ngang 16:10)' }),
      ctaField('Nút', hm.custom, 'cta', o)),
    sec('hs-why', '07 · Vì sao là T Gold?', 'Khối thuyết phục — nên giữ 4 ô, mỗi ô có ảnh thật và link tới trang chi tiết.', hm.why,
      ...heads(hm.why, { lead: true }),
      listEditor(hm.why.items, {
        max: 4, addLabel: 'Thêm ô', collapsible: true, title: (it, i) => `${i + 1} · ${it.title?.vi || 'Ô mới'}`,
        make: () => ({ title: emptyBi(), text: emptyBi(), image: emptyImg(), link: emptyCta('page:story') }),
        item: (it) => h('div', { class: 'body' }, bi('Tiêu đề', it, 'title', { max: 70 }), bi('Mô tả', it, 'text', { textarea: true, rows: 2, max: 260 }), imageField('Ảnh', it, 'image', { size: '1200 × 900 px (ngang 4:3) — trên điện thoại hiện ô vuông, cắt bớt hai mép bên' }), ctaField('Link', it, 'link', o)),
      }),
      bi('Câu kết', hm.why, 'closing', { max: 160 }),
      ctaField('Nút', hm.why, 'cta', o)),
    sec('hs-jr', '08 · Tạp chí', 'Chọn 3 bài muốn hiện (bài đầu hiện lớn). Để trống → tự lấy 3 bài mới nhất.', hm.journal,
      ...heads(hm.journal, { lead: true }),
      ctaField('Link “Xem tất cả bài viết” (có đoạn mô tả thì link chuyển xuống dưới các bài)', hm.journal, 'link', o),
      field('Bài hiển thị', pickList(hm.journal.posts, o.posts.map((p) => ({ slug: p.slug, name: p.title, img: p.img })), { max: 3, empty: 'Chưa chọn — đang tự lấy 3 bài mới nhất.' })),
      h('div', { class: 'f' }, h('span', { class: 'lbl', text: 'Chuyên mục (nút nhỏ phía trên các bài — tuỳ chọn)' }),
        listEditor(hm.journal.chips, { max: 8, addLabel: 'Thêm chuyên mục', title: (c, i) => `${i + 1} · ${c.label?.vi || ''}`, make: () => emptyCta('page:journal'), item: (c) => ctaBox(c, o, 'Tên chuyên mục') }))),
    bar);
  return page('Nội dung', 'Trang chủ', [], form);
}

/* ───────── Trang thông tin ───────── */
// Nhãn tiếng Việt cho các ô chữ. Khoá theo đường dẫn (số thứ tự thay bằng *), không có thì theo tên khoá cuối.
const KEY_LABELS = {
  title: 'Tiêu đề SEO (hiện trên Google & tab trình duyệt)', description: 'Mô tả SEO (hiện dưới tiêu đề trên Google)',
  kick: 'Dòng nhỏ phía trên (eyebrow)', h1: 'Tiêu đề trang (H1)', h: 'Tiêu đề', lead: 'Đoạn mô tả', p: 'Đoạn mô tả', cta: 'Chữ trên nút',
  more: 'Chữ trên link', read: 'Chữ “Đọc thêm”', close: 'Câu kết', items: 'Danh sách', steps: 'Các bước', rows: 'Các dòng', ph: 'Khung ảnh chờ (nhãn · mô tả cảnh cần chụp)',
  quote: 'Câu trích', empty: 'Thông báo khi chưa có nội dung', min: 'Chữ “phút đọc”',
  band: 'Dải “Chưa thấy đúng món?”', form: 'Form đặt lịch', paths: 'Các hướng bắt đầu', tips: 'Gợi ý khi gửi ý tưởng',
};
const INFO_LABELS = {
  custom: { 'paths.*.link': 'Chữ trên link', 'paths.*.to': 'Đích của link', 'paths.*.h': 'Tên hướng', 'paths.*.p': 'Mô tả', 'paths.*.items.*': 'Điểm', 'tips.*': 'Gợi ý', cta: 'Chữ trên nút chính', 'paths.*.n': 'Ký hiệu', 'paths.*.items': 'Các điểm tuỳ chỉnh', procKick: 'Quy trình · dòng nhỏ', procH: 'Quy trình · tiêu đề', steps: 'Quy trình 4 bước', 'steps.*.0': 'Tên bước', 'steps.*.1': 'Mô tả', 'steps.*.2': 'Bạn nhận được (tuỳ chọn)', baKick: 'Trước & sau · dòng nhỏ', baH: 'Trước & sau · tiêu đề', pairs: 'Các cặp ảnh trước & sau', 'pairs.*.0': 'Tên mẫu', 'pairs.*.1': 'Mô tả ảnh 3D', 'pairs.*.2': 'Mô tả ảnh thành phẩm', r3d: 'Nhãn khung ảnh 3D', rDone: 'Nhãn khung thành phẩm', formKick: 'Khối form · dòng nhỏ', formH: 'Khối form · tiêu đề', formLead: 'Khối form · mô tả', faqKick: 'Hỏi đáp · dòng nhỏ', faqH: 'Hỏi đáp · tiêu đề', faq: 'Câu hỏi thường gặp', 'faq.*.0': 'Câu hỏi', 'faq.*.1': 'Trả lời', ctaA: 'Khối kết · nút A (tự thiết kế 3D)', ctaB: 'Khối kết · nút B (gửi ý tưởng)', toolsKick: 'Khối A · dòng nhỏ', toolsH: 'Khối A · tiêu đề', toolsLead: 'Khối A · mô tả', tools: 'Khối A · thẻ công cụ 3D', 'tools.nhan-nam': 'Thẻ nhẫn nam', 'tools.mat-day': 'Thẻ mặt dây chuyền', 'tools.nhan-cuoi': 'Thẻ nhẫn cưới', 'tools.nhan-cau-hon': 'Thẻ nhẫn cầu hôn', 'tools.nhan-nam.0': 'Tên thẻ', 'tools.nhan-nam.1': 'Dòng mô tả', 'tools.mat-day.0': 'Tên thẻ', 'tools.mat-day.1': 'Dòng mô tả', 'tools.nhan-cuoi.0': 'Tên thẻ', 'tools.nhan-cuoi.1': 'Dòng mô tả', 'tools.nhan-cau-hon.0': 'Tên thẻ', 'tools.nhan-cau-hon.1': 'Dòng mô tả', toolTag: 'Khối A · nhãn trên ảnh', toolOpen: 'Khối A · chữ trên link của thẻ', collP: 'Khối A · câu dẫn sang bộ sưu tập', collLink: 'Khối A · chữ trên link bộ sưu tập', endKick: 'Khối kết · dòng nhỏ', endH: 'Khối kết · tiêu đề', endLead: 'Khối kết · mô tả', idea: 'Form gửi ý tưởng (ảnh mẫu · mô tả · Zalo)', 'idea.photos': 'Nhãn ô ảnh mẫu', 'idea.photosCta': 'Chữ nút chọn ảnh', 'idea.photosHint': 'Gợi ý tải ảnh ({n} = số ảnh, {mb} = dung lượng)', 'idea.desc': 'Nhãn ô mô tả', 'idea.descPh': 'Gợi ý trong ô mô tả', 'idea.needOne': 'Báo lỗi khi chưa có ảnh lẫn mô tả', 'idea.name': 'Nhãn ô tên', 'idea.remove': 'Chữ “Bỏ ảnh” (đọc màn hình)', 'idea.submit': 'Chữ trên nút gửi (khi đã có Zalo)', 'idea.fine': 'Dòng ghi chú nhỏ dưới nút gửi', 'idea.okH': 'Sau khi gửi · tiêu đề', 'idea.code': 'Chữ “Mã ý tưởng”', 'idea.okZalo': 'Sau khi gửi · hướng dẫn mở Zalo', 'idea.okPlain': 'Sau khi gửi · khi chưa cấu hình Zalo', 'idea.openZalo': 'Chữ trên nút mở Zalo', 'idea.copy': 'Chữ nút sao chép', 'idea.copied': 'Thông báo đã sao chép', 'idea.copyFail': 'Thông báo chưa sao chép được', 'idea.again': 'Chữ “Gửi ý tưởng khác”', 'idea.msgHead': 'Tin nhắn Zalo · dòng đầu', 'idea.msgName': 'Tin nhắn Zalo · chữ “Tên”', 'idea.msgKind': 'Tin nhắn Zalo · chữ “Quan tâm”', 'idea.msgDesc': 'Tin nhắn Zalo · chữ “Mô tả”', 'idea.msgPhotos': 'Tin nhắn Zalo · dòng ảnh ({n} = số ảnh)' },
  materials: { toc: 'Mục lục', 'toc.*.1': 'Tên mục', 'gold.cols.*.rows': 'Các dòng', 'gold.colors.*.1': 'Mô tả', 'gem.heads.*': 'Tên cột', 'gem.rows.*.1.*': 'Giá trị', 'gem.rows': 'Bảng so sánh', 'cert.steps': 'Năm bước đọc giấy kiểm định', 'no.items': 'Chất liệu không dùng', 'each.rows': 'Thông tin đi kèm', 'cert.ph.0': 'Nhãn khung ảnh chờ', 'cert.ph.1': 'Mô tả ảnh cần chụp', tocLabel: 'Tiêu đề mục lục', gold: 'Khối tuổi vàng', 'gold.cols': 'Ba cột tuổi vàng', 'gold.cols.*.k': 'Tuổi vàng', 'gold.cols.*.pct': 'Hàm lượng vàng', 'gold.cols.*.rows.*.0': 'Tiêu chí', 'gold.cols.*.rows.*.1': 'Nội dung', 'gold.pctLabel': 'Chữ sau hàm lượng', 'gold.colorsH': 'Tiêu đề phần màu vàng', 'gold.colors': 'Ba màu vàng', 'gold.colors.*.1': 'Mô tả', gem: 'Khối đá quý', 'gem.heads': 'Tên cột', 'gem.rows.*.0': 'Tiêu chí', 'gem.rows.*.1': 'Giá trị từng cột', cert: 'Khối giấy kiểm định', 'cert.steps.*.0': 'Mục', 'cert.steps.*.1': 'Giải thích', no: 'Khối “Không dùng”', 'no.items.*.0': 'Chất liệu', 'no.items.*.1': 'Lý do', each: 'Khối “Mỗi món đi kèm”', 'each.rows.*.0': 'Thông tin', 'each.rows.*.1': 'Nội dung' },
  workshop: { video: 'Khung video / ảnh lớn', 'video.0': 'Nhãn khung', 'video.1': 'Mô tả cảnh cần quay / chụp', 'introP.*': 'Đoạn', introKick: 'Giới thiệu · dòng nhỏ', introH: 'Giới thiệu · tiêu đề', introP: 'Giới thiệu · các đoạn', stagesKick: 'Công đoạn · dòng nhỏ', stagesH: 'Công đoạn · tiêu đề', stages: 'Sáu công đoạn', 'stages.*.0': 'Tên công đoạn', 'stages.*.1': 'Mô tả', 'stages.*.2': 'Mô tả ảnh cần chụp', ph: 'Nhãn khung ảnh công đoạn', ctaH: 'Khối cuối · tiêu đề', ctaLead: 'Khối cuối · mô tả', ctaBtn: 'Khối cuối · chữ trên nút' },
  story: { h1Full: 'Tiêu đề H1 đầy đủ (ẩn — dành cho Google & trình đọc màn hình)', lead: 'Đầu trang · các đoạn mô tả', 'lead.*': 'Đoạn', whatKick: 'T Gold là gì · dòng nhỏ', whatH: 'T Gold là gì · tiêu đề', whatP: 'T Gold là gì · các đoạn', 'whatP.*': 'Đoạn', whatLinks: 'T Gold là gì · các nút', 'whatLinks.*.1': 'Chữ trên nút', whyKick: 'Vì sao tồn tại · dòng nhỏ', whyH: 'Vì sao tồn tại · tiêu đề', whyP: 'Vì sao tồn tại · đoạn mở', 'whyP.*': 'Đoạn', whyKey: 'Vì sao tồn tại · câu nhấn (chữ vàng)', whyMarks: 'Vì sao tồn tại · các dấu mốc', 'whyMarks.*': 'Dòng', whyP2: 'Vì sao tồn tại · đoạn kết', 'whyP2.*': 'Đoạn', whyClose: 'Vì sao tồn tại · câu ký', maniKick: 'Tuyên ngôn · dòng nhỏ', maniH: 'Tuyên ngôn · tiêu đề (2 câu)', 'maniH.*.*': 'Dòng', maniP: 'Tuyên ngôn · các đoạn', 'maniP.*': 'Đoạn', maniHi: 'Tuyên ngôn · câu nhấn (chữ vàng)', maniClose: 'Tuyên ngôn · câu kết', tKick: 'Bốn tầng ý nghĩa · dòng nhỏ', tH: 'Bốn tầng ý nghĩa · tiêu đề', ts: 'Bốn tầng ý nghĩa chữ T', 'ts.*.0': 'Chữ lớn', 'ts.*.1': 'Dòng phụ', 'ts.*.2': 'Các đoạn mô tả', 'ts.*.2.*': 'Đoạn', 'ts.*.3': 'Câu ký (chữ vàng cuối thẻ)', whoKick: 'Dành cho ai · dòng nhỏ', whoH: 'Dành cho ai · tiêu đề', whoP: 'Dành cho ai · các đoạn', 'whoP.*.*': 'Dòng', pillarsKick: 'Chữ ký thương hiệu · dòng nhỏ', values: 'Năm tính từ thương hiệu', 'values.*.0': 'Tiếng Anh', 'values.*.1': 'Tiếng Việt', links: 'Dành cho ai · các nút', 'links.*.1': 'Chữ trên nút', misKick: 'Đồng hành · dòng nhỏ', misH: 'Đồng hành · tiêu đề', misP: 'Đồng hành · các đoạn (đoạn 2 gồm 2 dòng = hai dấu mốc đặt đối xứng)', 'misP.*.*': 'Dòng', misClose: 'Đồng hành · câu kết (chữ vàng)', ctaH: 'Khối cuối · tiêu đề', ctaLead: 'Khối cuối · mô tả' },
  contact: { 'form.kick': 'Dòng nhỏ phía trên', 'form.h': 'Tiêu đề form', 'form.name': 'Nhãn “Họ tên”', 'form.phone': 'Nhãn “Số điện thoại”', 'form.phoneHint': 'Gợi ý số điện thoại', 'form.phoneErr': 'Báo lỗi số điện thoại', 'form.nameErr': 'Báo lỗi họ tên', 'form.interest': 'Nhãn “Bạn quan tâm”', 'form.when': 'Nhãn “Thời gian mong muốn”', 'form.date': 'Nhãn “Ngày”', 'form.slot': 'Nhãn “Buổi”', 'form.note': 'Nhãn “Ghi chú”', 'form.notePh': 'Gợi ý trong ô ghi chú', 'form.upload': 'Nhãn “Ảnh ý tưởng”', 'form.optional': 'Chữ “tuỳ chọn”', 'form.uploadCta': 'Chữ nút chọn ảnh', 'form.uploadHint': 'Gợi ý tải ảnh ({n} = số ảnh, {mb} = dung lượng)', 'form.fileErr': 'Báo lỗi ảnh', 'form.consent': 'Câu đồng ý xử lý thông tin', 'form.consentErr': 'Báo lỗi khi chưa đồng ý', 'form.submit': 'Chữ nút gửi', 'form.sending': 'Chữ khi đang gửi', 'form.okH': 'Gửi thành công · tiêu đề', 'form.okP': 'Gửi thành công · mô tả', 'form.okAgain': 'Chữ “Gửi yêu cầu khác”', 'form.err': 'Báo lỗi khi gửi không được', 'form.required': 'Chữ “bắt buộc”', 'form.fromPiece': 'Nhãn “Món quan tâm”', 'form.fromConfig': 'Nhãn “Cấu hình”', 'form.fromSaved': 'Nhãn “Danh sách đã lưu”', 'mapPh.0': 'Nhãn khung', 'mapPh.1': 'Mô tả', 'form.interests': 'Các lựa chọn “Bạn quan tâm”', 'form.slots': 'Các lựa chọn buổi', showroom: 'Tiêu đề khối showroom', channels: 'Tiêu đề khối kênh nhắn tin', addr: 'Nhãn “Địa chỉ”', hotline: 'Nhãn “Hotline”', hours: 'Nhãn “Giờ mở cửa”', email: 'Nhãn “Email”', directions: 'Chữ “Chỉ đường”', mapPh: 'Khung bản đồ chờ (nhãn · mô tả)', 'form.interests.*.1': 'Lựa chọn', 'form.slots.*.1': 'Lựa chọn' },
  collection: { filterLabel: 'Nhãn vùng bộ lọc (đọc màn hình)', karat: 'Nhãn “Tuổi vàng”', gem: 'Nhãn “Loại đá quý”', color: 'Nhãn “Màu vàng”', customOnly: 'Chữ “Chỉ hiện mẫu Custom được”', clear: 'Chữ “Xoá bộ lọc”', show: 'Nút xem kết quả ({n} = số món)', count: 'Chữ sau số lượng (“món”)', sort: 'Chữ “Sắp xếp”', sortFeatured: 'Lựa chọn “Nổi bật”', sortNew: 'Lựa chọn “Mới nhất”', close: 'Chữ “Đóng bộ lọc”', all: 'Tab “Tất cả”', catLabel: 'Nhãn nhóm tab', filters: 'Chữ “Bộ lọc”', emptyH: 'Khi không có mẫu phù hợp · tiêu đề', emptyP: 'Khi không có mẫu phù hợp · mô tả', emptyCta: 'Khi không có mẫu phù hợp · chữ trên nút' },
  category: { nav: 'Nhãn vùng danh mục (đọc màn hình)', all: 'Tab “Tất cả”', count: 'Chữ sau số lượng (“mẫu”)', coll: 'Chữ “Bộ sưu tập” (đường dẫn)', emptyH: 'Danh mục chưa có mẫu · tiêu đề', emptyP: 'Danh mục chưa có mẫu · mô tả', emptyCta: 'Danh mục chưa có mẫu · chữ trên nút' },
  journal: { ph: 'Nhãn khung ảnh bài viết', more: 'Tiêu đề “Bài viết khác”' },
  order: { 'paths.*.h': 'Tên hướng', 'paths.*.p': 'Mô tả', 'paths.*.cta': 'Chữ trên nút', stepsH: 'Chữ “Quy trình”', pathsH: 'Tiêu đề “Hai cách bắt đầu”', 'paths.*.to': 'Trang đích', promH: 'Tiêu đề khối cam kết' },
  care: { 'items.*.1': 'Tên dịch vụ', 'items.*.2': 'Mô tả', exH: 'Dải đổi mẫu · tiêu đề', exP: 'Dải đổi mẫu · mô tả', ask: 'Dải đổi mẫu · câu hỏi thêm', askCta: 'Dải đổi mẫu · chữ trên nút' },
};
const SLOT_LABELS = {
  'pair-1-3d': 'Cặp 1 · ảnh 3D', 'pair-1-done': 'Cặp 1 · ảnh thành phẩm', 'pair-2-3d': 'Cặp 2 · ảnh 3D', 'pair-2-done': 'Cặp 2 · ảnh thành phẩm',
  'st-hero': 'Ảnh đầu trang (vuông)', 'st-what-1': '“T Gold là gì” · ảnh lớn (dọc 3:4)', 'st-what-2': '“T Gold là gì” · ảnh nhỏ chồng góc (dọc 3:4)', 'st-strip': 'Dải ảnh ngang trước khối “Vì sao T Gold tồn tại”', 'st-who': '“Dành cho ai” · ảnh (dọc 4:5)',
  cert: 'Ảnh giấy kiểm định đặt cạnh món trang sức', video: 'Ảnh bìa video / ảnh lớn đầu trang',
};
// Cỡ ảnh nên dùng cho từng khung ảnh của các trang thông tin (theo khung hiển thị thật trên website)
const SLOT_SIZES = {
  'pair-1-3d': '800 × 1000 px (dọc 4:5) — ảnh 3D hiện trọn trong khung nền đen, không bị cắt', 'pair-2-3d': '800 × 1000 px (dọc 4:5) — ảnh 3D hiện trọn trong khung nền đen, không bị cắt',
  'pair-1-done': '1200 × 1500 px (dọc 4:5)', 'pair-2-done': '1200 × 1500 px (dọc 4:5)',
  cert: '1200 × 1500 px (dọc 4:5)',
  video: 'có video: 1080 × 1080 px (vuông) · không có video: 1600 × 900 px (ngang 16:9, điện thoại cắt còn dọc 4:5)',
  'st-hero': '1200 × 1200 px (vuông)', 'st-what-1': '1200 × 1600 px (dọc 3:4)', 'st-what-2': '900 × 1200 px (dọc 3:4)',
  'st-strip': '1600 × 800 px (ngang 2:1) — máy tính chỉ hiện dải giữa, nên đặt chủ thể ở giữa', 'st-who': '1200 × 1500 px (dọc 4:5)',
};
const ID_LIKE = /^[a-z0-9-]*$/;
const pageLabel = (pid, path) => {
  const L = INFO_LABELS[pid] || {};
  const nums = path.map((k) => (typeof k === 'number' ? '*' : k));
  const keepLast = typeof path.at(-1) === 'number' ? [...nums.slice(0, -1), path.at(-1)].join('.') : null;
  if (keepLast && L[keepLast]) return L[keepLast];
  const star = nums.join('.');
  if (L[star]) return L[star];
  const last = [...path].reverse().find((k) => typeof k !== 'number');
  const base = L[nums.filter((k, i) => i < nums.length - (typeof path.at(-1) === 'number' ? 1 : 0)).join('.')] || KEY_LABELS[last] || last;
  return typeof path.at(-1) === 'number' ? `${base} · ${path.at(-1) + 1}` : base;
};
const hasEditable = (v) => (typeof v === 'string' ? !ID_LIKE.test(v) : Array.isArray(v) ? v.some(hasEditable) : v && typeof v === 'object' ? Object.values(v).some(hasEditable) : false);
// Mặc định (dạng soạn thảo) + phần đã sửa → giá trị đang hiển thị
const overlay = (def, ov) => {
  if (typeof def === 'string') return typeof ov === 'string' && ov ? ov : def;
  if (Array.isArray(def)) return def.map((d, i) => overlay(d, ov?.[i]));
  if (def && typeof def === 'object') return Object.fromEntries(Object.keys(def).map((k) => [k, overlay(def[k], ov?.[k])]));
  return def;
};

let pagesCache = null;
async function viewPages() {
  const { pages } = await api('pages'); pagesCache = pages;
  const count = (v) => (typeof v === 'string' ? 1 : Array.isArray(v) ? v.reduce((a, x) => a + (x == null ? 0 : count(x)), 0) : v && typeof v === 'object' ? Object.values(v).reduce((a, x) => a + count(x), 0) : 0);
  return page('Nội dung', 'Trang thông tin', [],
    card(null, null, h('p', { class: 'hint', text: 'Sửa chữ (tiếng Việt & tiếng Anh) và ảnh của từng trang. Ô nào không sửa sẽ giữ chữ mặc định. Trong tiêu đề, đặt phần chữ vàng nghiêng giữa hai dấu *…*.' })),
    h('div', { class: 'list' }, pages.map((p) => {
      const n = count(p.saved.vi) + count(p.saved.en) + Object.keys(p.saved.images || {}).length;
      return h('div', { class: 'row', tabindex: '0', role: 'button', on: { click: () => { location.hash = `#/pages/${p.id}`; }, keydown: (e) => { if (e.key === 'Enter') location.hash = `#/pages/${p.id}`; } } },
        h('div', { class: 'thumb' }, icon('file')),
        h('div', {}, h('div', { class: 't', text: p.name }), h('div', { class: 's', text: p.url || 'Áp dụng cho /bo-suu-tap/<danh-mục>/' })),
        h('div', { class: 'r' }, n ? h('span', { class: 'pill gold', text: `Đã sửa ${n} mục` }) : h('span', { class: 'pill mute', text: 'Chữ mặc định' })));
    })));
}

async function viewPageEdit(id) {
  if (!pagesCache) pagesCache = (await api('pages')).pages;
  const p = pagesCache.find((x) => x.id === id);
  if (!p) return page('Trang thông tin', 'Không tìm thấy trang', [h('a', { class: 'btn ghost', href: '#/pages', text: 'Quay lại' })]);
  const vals = { vi: overlay(p.defaults.vi, p.saved.vi), en: overlay(p.defaults.en, p.saved.en) };
  const images = clone(p.saved.images || {});

  // Một ô chữ song ngữ (VI · EN) — có nút khôi phục chữ mặc định
  function textField(path, label) {
    const dVi = getP(p.defaults.vi, path.join('.')), dEn = getP(p.defaults.en, path.join('.'));
    const long = Math.max(String(dVi || '').length, String(dEn || '').length) > 90;
    const mk = (l, d) => {
      const cur = getP(vals[l], path.join('.')) ?? '';
      const ctl = long ? h('textarea', { rows: Math.min(6, Math.ceil(String(cur).length / 80) + 1), maxLength: 3000, value: cur }) : h('input', { type: 'text', maxLength: 3000, value: cur });
      const reset = h('button', { type: 'button', class: 'reset-def', title: 'Khôi phục chữ mặc định', hidden: cur === d, on: { click: () => { ctl.value = d ?? ''; setP(vals[l], path.join('.'), d ?? ''); reset.hidden = true; markDirty(); } } }, '↺ Mặc định');
      ctl.addEventListener('input', () => { setP(vals[l], path.join('.'), ctl.value); reset.hidden = ctl.value === d; markDirty(); });
      ctl.setAttribute('aria-label', `${label} (${l === 'vi' ? 'tiếng Việt' : 'English'})`);
      return h('div', { class: 'l', 'data-lang': l.toUpperCase() }, ctl, reset);
    };
    return h('div', { class: 'f' }, h('span', { class: 'lbl', text: label }), h('div', { class: 'bi' }, mk('vi', dVi), mk('en', dEn)));
  }
  const firstText = (x) => { const t = typeof x === 'string' ? x : Array.isArray(x) ? x.map(firstText).find(Boolean) : x && typeof x === 'object' ? (x.h ? x.h : Object.values(x).map(firstText).find(Boolean)) : ''; return t && !ID_LIKE.test(t) ? t : ''; };
  // Các ô của một mục (bộ nhiều cột hoặc đối tượng)
  function itemFields(path, x, depth) {
    if (Array.isArray(x)) return x.map((y, j) => (hasEditable(y) ? (typeof y === 'string' ? textField([...path, j], pageLabel(id, [...path, j])) : node([...path, j], y, depth + 1)) : null));
    return Object.keys(x).map((k) => (hasEditable(x[k]) ? node([...path, k], x[k], depth + 1) : null));
  }
  function node(path, def, depth = 0) {
    if (typeof def === 'string') return ID_LIKE.test(def) ? null : textField(path, pageLabel(id, path));
    if (Array.isArray(def)) {
      const label = pageLabel(id, path);
      if (def.every((x) => typeof x === 'string')) return h('div', { class: 'subbox' }, h('span', { class: 'lbl', text: label }), h('div', { class: 'body' }, def.map((x, i) => (ID_LIKE.test(x) ? null : textField([...path, i], pageLabel(id, [...path, i]))))));
      const items = def.map((x, i) => {
        if (!hasEditable(x)) return null;
        const t = firstText(x).replace(/\*/g, '').slice(0, 60);
        const title = `${label} · ${i + 1}${t ? ` — ${t}` : ''}`;
        return depth > 0
          ? h('div', { class: 'subbox' }, h('span', { class: 'lbl', text: title }), h('div', { class: 'body' }, itemFields([...path, i], x, depth)))
          : h('details', { class: 'lst-item' }, h('summary', { class: 'lst-head' }, h('b', { text: title })), h('div', { class: 'lst-body' }, h('div', { class: 'body' }, itemFields([...path, i], x, depth))));
      });
      return depth > 0 ? h('div', { class: 'body' }, h('span', { class: 'lbl', text: label }), items) : h('div', { class: 'lst' }, items);
    }
    if (def && typeof def === 'object') return Object.keys(def).map((k) => (hasEditable(def[k]) ? node([...path, k], def[k], depth) : null));
    return null;
  }

  // Nhóm: SEO · Đầu trang · Nội dung khác (ô lẻ) · từng khối (mảng / đối tượng)
  const top = Object.keys(p.defaults.vi).filter((k) => hasEditable(p.defaults.vi[k]));
  const scal = (keys) => keys.filter((k) => typeof p.defaults.vi[k] === 'string');
  const seo = scal(top.filter((k) => ['title', 'description'].includes(k)));
  const head = scal(top.filter((k) => ['kick', 'h1', 'lead'].includes(k)));
  const rest = scal(top.filter((k) => !seo.includes(k) && !head.includes(k)));
  const blocks = top.filter((k) => typeof p.defaults.vi[k] !== 'string');
  const bar = savebar(async () => {
    const r = await api(`pages/${id}`, { method: 'PUT', body: { vi: vals.vi, en: vals.en, images } });
    pagesCache = null;
    toast(buildMsg(r.build));
  }, [p.url ? h('a', { class: 'btn ghost', href: p.url, target: '_blank', rel: 'noopener' }, icon('ext'), 'Xem trang') : null]);
  const form = h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } },
    card(null, null, h('p', { class: 'hint', text: 'Sửa trực tiếp trong ô. Nút “↺ Mặc định” đưa ô về chữ gốc. Chữ vàng nghiêng: đặt giữa hai dấu *…*. Bấm Lưu (hoặc Ctrl/⌘ + S) — trang cập nhật ngay.' })),
    seo.length && card('SEO', 'Hiện trên kết quả Google và khi chia sẻ link.', ...seo.map((k) => node([k], p.defaults.vi[k]))),
    head.length && card('Đầu trang', null, ...head.map((k) => node([k], p.defaults.vi[k]))),
    p.slots.length && card('Ảnh', 'Ảnh thật — hệ thống tự tối ưu sang WebP. Khung chưa có ảnh sẽ hiện khung chờ kèm mô tả cảnh cần chụp.', h('div', { class: 'grid-imgs' }, p.slots.map((sl) => imageField(SLOT_LABELS[sl] || (sl.startsWith('stage-') ? `Ảnh công đoạn ${sl.slice(6)}` : sl), images, sl, { size: SLOT_SIZES[sl] || (sl.startsWith('stage-') ? '1600 × 1200 px (ngang 4:3)' : '') }))),
      id === 'workshop' && p.slots.includes('video') && field('Video đầu trang (tuỳ chọn)', mediaOne(images, 'video.video', { kind: 'video', label: 'Tải video MP4' }), 'Cỡ video nên dùng: 720 × 720 px (vuông). MP4 (H.264) hoặc WebM, không cần tiếng, nên dưới 10 MB. Video tự chạy khi khách cuộn tới; ảnh bìa ở trên hiện trước khi video chạy nên cần có ảnh bìa. Video quay từ điện thoại (.mov) cần nén sang MP4 trước khi tải.')),
    ...blocks.map((k) => card(pageLabel(id, [k]), null, node([k], p.defaults.vi[k]))),
    rest.length && card('Nội dung khác', 'Các dòng chữ nhỏ, nhãn và thông báo trên trang.', ...rest.map((k) => node([k], p.defaults.vi[k]))),
    bar);
  return h('div', { class: 'inner' }, h('a', { class: 'back', href: '#/pages' }, icon('back'), 'Trang thông tin'), h('div', { class: 'head' }, h('div', {}, h('p', { class: 'kick', text: 'Chỉnh sửa' }), h('h1', { text: p.name }))), form);
}

/* ───────── Danh mục sản phẩm ───────── */
async function viewCategories() {
  const { catalog } = await api('catalog'); catalogCache = catalog;
  const cats = catalog.categories.map((c) => ({ ...c, _old: true }));
  // Xoá danh mục còn sản phẩm: mã cũ → danh mục nhận sản phẩm (giữ tham chiếu, nên đổi tên / mã danh mục mới vẫn đúng)
  const moveTo = new Map();
  const dest = (id) => { let t = id, n = 0; while (moveTo.has(t) && n++ < 30) t = moveTo.get(t).id; return t; };
  const count = (id) => catalog.products.filter((x) => dest(x.category) === id).length;
  const bar = savebar(async () => {
    const moves = Object.fromEntries([...moveTo].map(([k, c]) => [k, c.id]));
    const r = await api('categories', { method: 'PUT', body: { categories: cats.map(({ id, vi, en }) => ({ id, vi, en })), moves } });
    catalogCache = null; dirty = false;
    toast(r.moved ? `Đã chuyển ${r.moved} sản phẩm sang danh mục mới · ${buildMsg(r.build)}` : buildMsg(r.build));
    route();
  }, [h('a', { class: 'btn ghost', href: '/bo-suu-tap/', target: '_blank', rel: 'noopener' }, icon('ext'), 'Bộ sưu tập')]);
  const list = listEditor(cats, {
    max: 30, addLabel: 'Thêm danh mục', collapsible: true,
    title: (c, i) => { const n = c.id ? count(c.id) : 0; return `${i + 1} · ${c.vi || 'Danh mục mới'}${n ? ` · ${n} sản phẩm` : ''}`; },
    make: () => ({ id: '', vi: '', en: '' }),
    onDelete: async (c) => {
      const n = c.id ? count(c.id) : 0;
      if (!n) return confirmBox(`Xoá danh mục “${c.vi || 'mới'}”?`, 'Xoá');
      const others = cats.filter((x) => x !== c && x.id && x.vi);
      if (!others.length) { toast('Cần ít nhất một danh mục khác để chuyển sản phẩm sang.', true); return false; }
      const to = await selectBox(`Danh mục “${c.vi}” đang có ${n} sản phẩm. Chọn danh mục để chuyển các sản phẩm này sang, rồi xoá “${c.vi}”:`, others.map((x) => [x.id, x.vi]), 'Chuyển & xoá');
      if (!to) return false;
      moveTo.set(c.id, others.find((x) => x.id === to));
      return true;
    },
    item: (c) => {
      const slug = input(c, 'id', { max: 40, placeholder: 'vd: vong-co' });
      if (c._old) slug.readOnly = true;
      const name = input(c, 'vi', { max: 60 });
      name.addEventListener('input', () => { if (!c._old && !c._slugTouched) { c.id = slugify(name.value); slug.value = c.id; } });
      slug.addEventListener('input', () => { c._slugTouched = true; });
      return h('div', { class: 'body' }, h('div', { class: 'grid2' }, field('Tên (tiếng Việt)', name), field('Name (English)', input(c, 'en', { max: 60 }))),
        field('Mã (dùng trong link)', slug, c._old ? `Link: /bo-suu-tap/${c.id}/ — mã đã dùng nên không đổi được.` : 'Chữ thường không dấu, số và dấu gạch ngang. Tạo tự động từ tên.'));
    },
  });
  return page('Nội dung', 'Danh mục sản phẩm', [h('a', { class: 'btn ghost', href: '#/homepage' }, icon('layout'), 'Ảnh danh mục trên trang chủ')],
    card(null, 'Thêm danh mục mới bằng nút bên dưới; sắp xếp bằng mũi tên ↑ ↓; bấm “Xoá” để bỏ danh mục — nếu danh mục còn sản phẩm, bạn chọn danh mục để chuyển các sản phẩm đó sang. Thứ tự ở đây là thứ tự hiện trên trang chủ và trang Bộ sưu tập. Chân trang có thứ tự cố định riêng (Nhẫn nam, Mặt dây, Dây chuyền, Lắc tay, Bông tai, Nhẫn nữ, Nhẫn cưới & nhẫn cặp); danh mục mới thêm sẽ hiện ở cuối cột Sản phẩm. Mỗi danh mục tự có trang riêng /bo-suu-tap/<mã>/. Danh mục mới cần chọn ảnh ở Trang chủ → 03 · Danh mục. Nhớ bấm Lưu.', list),
    h('form', { on: { submit: (e) => { e.preventDefault(); bar.save(); } } }, bar));
}

/* ───────── Sao lưu ───────── */
async function viewBackup() {
  const { history } = await api('history');
  const NAMES = { 'site.json': 'Thông tin website', 'products.json': 'Sản phẩm', 'journal.json': 'Tạp chí', 'home.json': 'Trang chủ', 'pages.json': 'Trang thông tin', 'models3d.json': 'Sản phẩm 3D' };
  const verLabel = (v) => { const m = v.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})/); return m ? fmtTime(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z`) : v; };
  const restoreInp = h('input', { type: 'file', accept: 'application/json,.json', class: 'sr', on: { change: async () => {
    const f = restoreInp.files[0]; restoreInp.value = '';
    if (!f || !(await confirmBox('Khôi phục toàn bộ nội dung từ tệp sao lưu này? Nội dung hiện tại vẫn được lưu trong Lịch sử phiên bản.', 'Khôi phục'))) return;
    try { const pack = JSON.parse(await f.text()); const r = await api('restore', { method: 'POST', body: pack }); toast(buildMsg(r.build)); route(); } catch (e) { toast(e.message, true); }
  } } });
  const ov = await api('overview');
  const gh = ov.github;
  return page('Hệ thống', 'Sao lưu & lịch sử', [],
    card('Sao lưu toàn bộ nội dung', 'Tải về một tệp JSON gồm thông tin website, trang chủ, sản phẩm, bài Tạp chí và trạng thái lịch hẹn. Nên tải định kỳ mỗi tuần.',
      h('div', { class: 'chips' }, h('a', { class: 'btn primary', href: '/admin/api/backup' }, icon('dl'), 'Tải bản sao lưu'), h('button', { class: 'btn ghost', type: 'button', on: { click: () => restoreInp.click() } }, 'Khôi phục từ tệp…'), restoreInp)),
    card('Lịch sử phiên bản', 'Mỗi lần lưu, phiên bản trước được giữ lại (tối đa 40 bản mỗi mục).',
      ...Object.entries(history).map(([f, list]) => h('details', {}, h('summary', { class: 'lbl', style: 'cursor:pointer;padding:6px 0' }, `${NAMES[f]} (${list.length})`),
        list.length ? h('ul', { class: 'todo' }, list.map((v) => h('li', {}, h('span', { text: verLabel(v) }), h('a', { href: '#', on: { click: async (e) => {
          e.preventDefault();
          if (!(await confirmBox(`Khôi phục “${NAMES[f]}” về phiên bản ${verLabel(v)}?`, 'Khôi phục'))) return;
          try { const r = await api('history/restore', { method: 'POST', body: { file: f, version: v } }); toast(buildMsg(r.build)); route(); } catch (x) { toast(x.message, true); }
        } }, text: 'Khôi phục' })))) : h('p', { class: 'hint', text: 'Chưa có phiên bản cũ.' })))),
    card('Sao lưu lên GitHub', gh.enabled ? `Đang bật: ${gh.repo} (${gh.branch}). Mỗi lần lưu, thay đổi được tự commit sau khoảng 20 giây.` : 'Tuỳ chọn. Đặt GITHUB_TOKEN và GITHUB_REPO trên máy chủ để mọi chỉnh sửa trong CMS được lưu cả vào kho GitHub.',
      h('dl', { class: 'kv' }, h('dt', { text: 'Lần cuối' }), h('dd', { text: gh.lastSync ? `${fmtTime(gh.lastSync)} · commit ${gh.lastCommit}` : '—' }), h('dt', { text: 'Đang chờ' }), h('dd', { text: `${gh.pending} tệp` }), gh.lastError && h('dt', { text: 'Lỗi' }), gh.lastError && h('dd', { class: 'err', text: gh.lastError })),
      gh.enabled && h('div', {}, h('button', { class: 'btn ghost', type: 'button', on: { click: async () => { try { await api('sync', { method: 'POST' }); toast('Đã đồng bộ lên GitHub'); route(); } catch (e) { toast(e.message, true); } } } }, 'Đồng bộ ngay'))));
}

/* ───────── Định tuyến ───────── */
let lastHash = location.hash;
async function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const [sec, arg] = hash.split('/');
  const main = () => $('#main');
  const map = { '': viewOverview, bookings: () => viewBookings(arg), homepage: viewHome, products: () => (arg === 'import' ? viewProductImport() : arg ? viewProduct(arg) : viewProducts()), journal: () => (arg ? viewPost(arg) : viewJournal()), pages: () => (arg ? viewPageEdit(arg) : viewPages()), categories: viewCategories, models3d: () => (arg ? viewModel3d(arg) : viewModels3d()), settings: viewSettings, backup: viewBackup };
  const fn = map[sec] || viewOverview;
  if (!$('.shell')) shell(h('p', { class: 'boot', text: 'Đang tải…' }), sec);
  try {
    const view = await fn();
    shell(view, sec in map ? sec : '');
    dirty = false;
    main()?.focus({ preventScroll: true });
    scrollTo(0, 0);
  } catch (e) {
    if (e.message !== 'Phiên đăng nhập đã hết hạn.') { shell(page('Lỗi', 'Không tải được trang', [], card(null, null, h('p', { class: 'err', text: e.message }))), sec); }
  }
}
addEventListener('hashchange', async () => {
  if (dirty && !(await confirmBox('Có thay đổi chưa lưu. Rời trang này?', 'Rời trang'))) { history.replaceState(null, '', lastHash || '#/'); return; }
  lastHash = location.hash;
  route();
});
addEventListener('keydown', (e) => { if ((e.metaKey || e.ctrlKey) && e.key === 's') { const bar = $('.savebar'); if (bar) { e.preventDefault(); bar.save(); } } });

async function boot() {
  try {
    const s = await (await fetch('/admin/api/session')).json();
    if (!s.authenticated) return renderLogin();
    lastHash = location.hash;
    route();
  } catch { root.replaceChildren(h('p', { class: 'boot', text: 'Không kết nối được máy chủ.' })); }
}
boot();
