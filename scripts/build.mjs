// npm run build → dist/
import { buildSite } from '../src/build.js';

const r = await buildSite();
console.log(`✓ Build xong → dist/  (${r.pages} trang, nội dung từ ${r.from}) · ${r.ms} ms · v${r.version}`);
if (!r.endpoint) console.warn('⚠ form.endpoint đang trống: form Đặt lịch sẽ giả lập gửi thành công.');
