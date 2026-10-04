// npm run build → dist/
import '../src/lib/env.js';
import { enableReleaseBuild } from '../src/lib/storage.js';
// A release build reads available CMS content or the repository seed, without
// creating or initializing DATA_DIR. Production startup validates the live store.
enableReleaseBuild();
const { buildSite } = await import('../src/build.js');

const r = await buildSite();
console.log(`✓ Build xong → dist/  (${r.pages} trang, nội dung từ ${r.from}) · ${r.ms} ms · v${r.version}`);
if (!r.endpoint) console.warn('⚠ form.endpoint đang trống: form Đặt lịch sẽ giả lập gửi thành công.');
