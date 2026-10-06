// Lấy một phần site.css cho trang không nạp site.css (trang công cụ tự thiết kế 3D có bộ CSS riêng).
// Mỗi selector được gói vào vùng `roots` (chính phần tử gốc hoặc nằm bên trong) → chỉ tác động lên thanh menu và các bảng,
// không chạm vào giao diện công cụ. Bỏ selector cần class / id không có trong vùng đó (vốn không bao giờ khớp).
// Biến :root và @font-face giữ nguyên; @keyframes được đổi tên (thêm tiền tố) để không trùng tên hiệu ứng của công cụ.

const skipStr = (s, i) => { const q = s[i]; for (i++; i < s.length && s[i] !== q; i++) if (s[i] === '\\') i++; return i; };

// Các khối cấp ngoài cùng: [phần đầu, nội dung trong ngoặc nhọn]
function blocks(css) {
  const out = [];
  let depth = 0, start = 0, head = '';
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === '"' || c === "'") i = skipStr(css, i);
    else if (c === '/' && css[i + 1] === '*') { const e = css.indexOf('*/', i + 2); i = e < 0 ? css.length : e + 1; }
    else if (c === '{') { if (depth++ === 0) { head = css.slice(start, i).replace(/\/\*[\s\S]*?\*\//g, '').trim(); start = i + 1; } }
    else if (c === '}') { if (depth > 0 && --depth === 0) { out.push([head, css.slice(start, i)]); start = i + 1; } }
    else if (c === ';' && depth === 0) start = i + 1;
  }
  return out;
}

// Tách danh sách selector theo dấu phẩy ở ngoài ngoặc
function splitList(s) {
  const out = [];
  let d = 0, st = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '"' || c === "'") i = skipStr(s, i);
    else if (c === '(' || c === '[') d++;
    else if (c === ')' || c === ']') d--;
    else if (c === ',' && !d) { out.push(s.slice(st, i).trim()); st = i + 1; }
  }
  out.push(s.slice(st).trim());
  return out.filter(Boolean);
}

// Độ dài phần tử đầu tiên của selector (tới dấu cách / > + ~ ở ngoài ngoặc)
function firstLen(sel) {
  let d = 0;
  for (let i = 0; i < sel.length; i++) {
    const c = sel[i];
    if (c === '"' || c === "'") i = skipStr(sel, i);
    else if (c === '(' || c === '[') d++;
    else if (c === ')' || c === ']') d--;
    else if (!d && /[\s>+~]/.test(c)) return i;
  }
  return sel.length;
}

function fits(sel, classes, ids) {
  const s = sel.replace(/:not\((?:[^()]|\([^()]*\))*\)/g, '').replace(/\[[^\]]*\]/g, '');
  if (/^(html|body)\b/i.test(s.slice(0, firstLen(s)))) return false;
  return [...s.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)].every((m) => classes.has(m[1]))
    && [...s.matchAll(/#(-?[_a-zA-Z][\w-]*)/g)].every((m) => ids.has(m[1]));
}

// Gắn vùng vào phần tử đầu tiên của selector (đặt trước ::pseudo-element nếu có)
function scope(sel, wrap) {
  const n = firstLen(sel);
  const pe = sel.slice(0, n).indexOf('::');
  const at = pe < 0 ? n : pe;
  return sel.slice(0, at) + wrap + sel.slice(at);
}

function walk(css, opt, keyframes) {
  let out = '';
  for (const [head, body] of blocks(css)) {
    if (head[0] === '@') {
      const name = head.slice(1).split(/[\s(]/)[0].toLowerCase();
      if (name === 'media' || name === 'supports') { const inner = walk(body, opt, keyframes); if (inner) out += `${head}{${inner}}`; }
      else if (name === 'font-face') out += `${head}{${body}}`;
      else if (name.endsWith('keyframes')) keyframes.set(head.split(/\s+/)[1], body);
      continue;
    }
    const sels = splitList(head);
    const keep = sels.filter((s) => s !== ':root' && fits(s, opt.classes, opt.ids)).map((s) => scope(s, opt.wrap));
    if (sels.includes(':root')) out += `:root{${body}}`;
    if (keep.length) out += `${keep.join(',')}{${body}}`;
  }
  return out;
}

// roots: ['.site-head', …] · classes / ids: Set các class / id có trong vùng đó (kể cả class do JS thêm vào)
export function scopedCss(css, { roots, classes, ids = new Set(), prefix = 'tgh-' }) {
  const wrap = `:is(${roots.map((r) => `${r},${r} *`).join(',')})`;
  const keyframes = new Map();
  const used = new Set();
  let out = walk(css, { classes, ids, wrap }, keyframes);
  out = out.replace(/(animation(?:-name)?\s*:)([^;}]*)/g, (m, p, v) => p + v.replace(/[\w-]+/g, (w) => (keyframes.has(w) ? (used.add(w), prefix + w) : w)));
  for (const n of used) out += `@keyframes ${prefix}${n}{${keyframes.get(n)}}`;
  return out;
}
