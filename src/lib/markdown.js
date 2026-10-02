// Markdown tối giản, an toàn (escape toàn bộ HTML trước): ## / ### tiêu đề, - hoặc 1. danh sách,
// **đậm**, *nghiêng*, [chữ](link), > trích dẫn, --- đường kẻ, dòng trống = đoạn mới.
// Dùng cho bài Tạp chí — cả khi build lẫn khi xem trước trong trang quản trị.
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, '$1<i>$2</i>')
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|#|mailto:|tel:)[^\s)]+)\)/g, (m, t, h) => {
      const ext = /^https?:\/\//.test(h);
      return `<a href="${h}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
    });
}

export function markdown(src = '') {
  const lines = String(src).replace(/\r\n?/g, '\n').split('\n');
  const out = [];
  let para = [], list = null, quote = [];
  // Enter một lần = xuống dòng trong đoạn; dòng trống = đoạn mới
  const flushPara = () => { if (para.length) { out.push(`<p>${para.map(inline).join('<br>')}</p>`); para = []; } };
  const flushList = () => { if (list) { out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`); list = null; } };
  const flushQuote = () => { if (quote.length) { out.push(`<blockquote><p>${quote.map(inline).join('<br>')}</p></blockquote>`); quote = []; } };
  const flush = () => { flushPara(); flushList(); flushQuote(); };

  for (const raw of lines) {
    const line = raw.trimEnd();
    let m;
    if (!line.trim()) { flush(); continue; }
    if ((m = line.match(/^(#{2,3})\s+(.+)$/))) { flush(); const n = m[1].length; out.push(`<h${n}>${inline(m[2])}</h${n}>`); continue; }
    if (/^-{3,}$/.test(line.trim())) { flush(); out.push('<hr>'); continue; }
    if ((m = line.match(/^>\s?(.*)$/))) { flushPara(); flushList(); quote.push(m[1]); continue; }
    if ((m = line.match(/^\s*[-*]\s+(.+)$/)) || (m = line.match(/^\s*\d+[.)]\s+(.+)$/))) {
      flushPara(); flushQuote();
      const tag = /^\s*\d/.test(line) ? 'ol' : 'ul';
      if (!list || list.tag !== tag) { flushList(); list = { tag, items: [] }; }
      list.items.push(m[1]);
      continue;
    }
    flushList(); flushQuote();
    para.push(line.trim());
  }
  flush();
  return out.join('\n');
}

// Thời gian đọc ước tính (phút)
export const readingTime = (src = '') => Math.max(1, Math.round(String(src).split(/\s+/).filter(Boolean).length / 220));
