# T Gold – Luxury Jewelry · Website song ngữ VI / EN + trang quản trị

Website tĩnh, dựng bằng Node.js và không phụ thuộc framework, kèm trang quản trị nội dung `/admin`.
Tiếng Việt nằm ở `/`, tiếng Anh ở `/en/`. Mỗi trang có `hreflang` trỏ sang bản ngôn ngữ còn lại.

| Trang | VI | EN |
|---|---|---|
| Trang chủ | `/` | `/en/` |
| Bộ sưu tập (lọc, sắp xếp) | `/bo-suu-tap/` | `/en/collection/` |
| Trang danh mục (mỗi loại một URL) | `/bo-suu-tap/<danh-muc>/` | `/en/collection/<danh-muc>/` |
| Sản phẩm | `/san-pham/<slug>/` | `/en/product/<slug>/` |
| Custom | `/custom/` | `/en/custom/` |
| Chất liệu & kiểm định | `/chat-lieu-kiem-dinh/` | `/en/materials-certification/` |
| Xưởng | `/xuong/` | `/en/workshop/` |
| Câu chuyện | `/cau-chuyen/` | `/en/story/` |
| Tạp chí + bài viết | `/tap-chi/` | `/en/journal/` |
| Liên hệ + đặt lịch | `/lien-he/` | `/en/contact/` |
| Cách đặt hàng | `/cach-dat-hang/` | `/en/how-to-order/` |
| Bảo hành & chăm sóc | `/bao-hanh/` | `/en/warranty-care/` |
| Quản trị | `/admin/` | — |

## Chạy trên máy

```bash
npm install
cp .env.example .env      # rồi đặt ADMIN_PASSWORD
npm run dev               # http://localhost:3000  ·  quản trị: http://localhost:3000/admin/
```

| Lệnh | Việc |
|---|---|
| `npm start` / `npm run dev` | Build lại với nội dung mới nhất rồi chạy server (website + form + `/admin`) |
| `npm run build` | Chỉ tạo `dist/` (dùng cho hosting tĩnh) |
| `npm run brand` | Tạo lại monogram PNG/WebP nền trong suốt và favicon từ `scripts/tgold-logo-source.jpg` |
| `npm run sync-3d` | Chép khung xem 3D, các tệp `.glb` (kể cả thư mục con `nhan-cuoi/`: mẫu nhẫn cưới đã tách riêng) và công cụ tự thiết kế nhẫn cưới / nhẫn cầu hôn / nhẫn nam từ `../3D's Products` sang `public/3d/` và `3d-app/` (chạy khi có mẫu 3D mới hoặc khung xem / công cụ được cập nhật; rồi khởi động lại máy chủ) |
| `npm run og` | Tạo lại ảnh chia sẻ `og-vi.jpg` / `og-en.jpg` (cần Google Chrome trên máy) |

## Trang quản trị `/admin`

Đăng nhập bằng `ADMIN_PASSWORD`. Giao diện tiếng Việt, dùng được trên điện thoại.

- **Tổng quan:** số lịch hẹn mới, danh sách “việc cần làm” (thông tin còn “(cập nhật)”, tuyên bố chưa xác minh, sản phẩm mẫu).
- **Trang chủ:** sửa mọi khối trên trang chủ, cả chữ (VI / EN), ảnh và link. Không cần sửa code.
  - *Hero:* 1–5 slide tự lướt (khuyến nghị 4). Mỗi slide có nhãn điều hướng, dòng nhỏ, tiêu đề, dòng vàng, mô tả, ảnh (vị trí giữ khi cắt khung, mô tả alt) và tối đa 2 nút. Thời gian mỗi slide chỉnh được. Slide 1 là tiêu đề H1 duy nhất của trang.
  - *Các khối:* dải cam kết, danh mục (ảnh từng danh mục), sản phẩm nổi bật (chọn và sắp xếp sản phẩm), cách đặt hàng (các bước dùng chung với trang `/cach-dat-hang/`), Custom, Vì sao là T Gold, Tạp chí (chọn bài, chuyên mục). Khối nào cũng bật / tắt được.
  - *Tiêu đề:* đặt phần chữ vàng nghiêng giữa hai dấu `*…*`.
  - *Link:* chọn trang, danh mục, sản phẩm, bài viết hoặc tự nhập. Nếu nội dung đích bị xoá, link tự quay về trang cha, không bao giờ ra link hỏng.
- **Trang thông tin:** sửa chữ (VI / EN) và ảnh của từng trang: Bộ sưu tập, Trang danh mục, Custom, Chất liệu & Kiểm định, Xưởng, Câu chuyện, Liên hệ & form đặt lịch, Tạp chí, Cách đặt hàng, Bảo hành. Chữ mặc định nằm trong code; CMS chỉ lưu ô đã sửa (`content/pages.json`), mỗi ô có nút “↺ Mặc định”.
- **Danh mục sản phẩm** (Sản phẩm → Quản lý danh mục): thêm, đổi tên, sắp xếp; mỗi danh mục tự có trang `/bo-suu-tap/<mã>/`. Không xoá được danh mục còn sản phẩm. Trên trang chủ, danh mục hiện thành dải cuộn ngang (điện thoại 3 ô, máy tính 6 ô, nhiều hơn thì cuộn bằng mũi tên).
- **Lịch hẹn:** hộp thư các yêu cầu khách gửi từ form. Xem ảnh ý tưởng, gọi hoặc mở Zalo, đổi trạng thái, ghi chú nội bộ, xuất CSV mở bằng Excel, xoá khi khách yêu cầu.
- **Sản phẩm:** thêm, sửa, ẩn, xoá; tên và mô tả song ngữ; tuổi vàng, màu vàng, đá quý, giấy kiểm định, size; tải ảnh (tự chuyển sang WebP 400/800/1600px) và video. Không có trường giá.
- **Sản phẩm 3D — hai loại (29/09):** **Mẫu 3D** (tệp `.glb`: xoay, đổi màu vàng và đá quý; cách bày “một món” hoặc “đôi nhẫn nằm trên bàn”) và **Công cụ tự thiết kế** (nhẫn cưới `nhan-cuoi`, nhẫn cầu hôn `nhan-cau-hon`: khách tự chọn kiểu dáng, đá quý, chi tiết rồi bấm “Gửi thiết kế cho T Gold” sang form Đặt lịch — chạy trọn trang, chỉ tiếng Việt; mã chạy ở `public/3d/app/`, mẫu trang ở `3d-app/*.html` không công khai, `src/pages/app3d.js` dựng trang). Sau `npm run sync-3d`, mục “Có sẵn trong website, chưa thêm” ở đầu trang **Sản phẩm 3D** có nút **Thêm tất cả** (14 mẫu nhẫn cưới đã tách + 2 công cụ); thêm lẻ thì chọn tệp `.glb` trong thư mục `nhan-cuoi/` — tên, mô tả, màu vàng, đá quý, ảnh đại diện được điền sẵn từ tệp `<mã>.json` đi kèm.
- **Công cụ tự thiết kế nhẫn nam (01/10):** công cụ thứ ba (`nhan-nam`, khai báo trong `MODEL3D_APPS` của `src/lib/core.js`). Sau `npm run sync-3d` + khởi động lại, vào /admin → Sản phẩm 3D sẽ thấy “Tự thiết kế nhẫn nam” ở danh sách chờ thêm; thêm xong thì gắn vào một sản phẩm của danh mục Nhẫn nam để bấm thẻ là mở thẳng công cụ.
- **Công cụ tự thiết kế mặt dây chuyền (01/10):** công cụ thứ tư (`mat-day`, khai báo trong `MODEL3D_APPS` của `src/lib/core.js`; `scripts/sync-3d.mjs` chép `mat-day.js` + mẫu trang `3d-app/mat-day.html` + ảnh đại diện `public/3d/models/cong-cu/mat-day.jpg`). Sau `npm run sync-3d` + khởi động lại, vào /admin → Sản phẩm 3D → “Thêm công cụ tự thiết kế” sẽ thấy “Tự thiết kế mặt dây chuyền”.
- **Gắn 3D vào sản phẩm:** ở mỗi mẫu 3D có nút **Thêm thành sản phẩm** (mở sản phẩm mới, điền sẵn tên / mô tả / màu vàng / đá quý / danh mục gợi ý, để **ẨN** cho tới khi bạn nhập dòng cấu hình, chọn ảnh rồi đổi sang “Đang hiện”). Trong trang sửa sản phẩm có ô **Mô hình 3D** chọn mẫu / công cụ: trang sản phẩm có khung xem 3D trong thư viện ảnh (chỉ tải khi khách bấm “Xem 3D” hoặc ảnh thu nhỏ 3D; đổi theo màu vàng và đá quý khách chọn), thẻ sản phẩm có nhãn 3D và dùng ảnh 3D làm ảnh đại diện khi chưa có ảnh thật; **gắn mẫu 3D thì khung 3D là khung đầu tiên của thư viện và tự bật khi vào trang** — màu vàng & đá quý chọn sẵn theo mẫu 3D (như ảnh đại diện), đôi nhẫn dùng đúng khung chụp ảnh đại diện nên 3D hiện lên trùng khít ảnh; thanh công cụ của đôi nhẫn nằm ngang ở góc trên. Ảnh đại diện 3D `public/3d/models/**.jpg` là 1600 × 2000 kèm bản `-800.jpg` (thẻ sản phẩm tự dùng srcset); link ảnh có `?v=<mã>` theo kích thước + lúc sửa tệp, nên chụp lại ảnh (giữ tên tệp) thì trình duyệt tải bản mới ngay dù ảnh được lưu đệm 30 ngày (ảnh 3D hiện tới khi khung tải xong; máy bật tiết kiệm dữ liệu thì chờ khách bấm “Xem 3D”). Mẫu tách từ công cụ (tệp `<mã>.json` cạnh `.glb` có `thietKe`, vd. 14 mẫu nhẫn cưới) có thêm nút **“Tự tuỳ chỉnh lại”** dưới hàng nút tư vấn: mở công cụ tương ứng (mục Công cụ tự thiết kế đang hiện) với sẵn mẫu này + màu vàng / đá quý / tuổi vàng khách đang chọn (`/3d/<công cụ>/#mau=<mã>&metal=…&gem=…&karat=…`); tóm tắt trong công cụ ghi “Mẫu gốc”. **gắn công cụ tự thiết kế thì khách bấm vào thẻ sản phẩm (danh mục, trang chủ, tìm kiếm, bộ sưu tập) là vào thẳng công cụ 3D** — không qua trang chi tiết; địa chỉ `/san-pham/<slug>/` cũ chỉ chuyển tiếp sang công cụ và không vào sitemap. Cách dùng: mỗi danh mục có một sản phẩm “Tự thiết kế …” gắn đúng công cụ (nhẫn cưới ↔ “Tự thiết kế nhẫn cưới”, nhẫn cầu hôn ↔ “Tự thiết kế nhẫn cầu hôn”); thẻ dùng ảnh mặc định `public/3d/models/cong-cu/<công cụ>.jpg` nếu sản phẩm chưa có ảnh riêng. Muốn đổi danh mục / liên kết: sửa ở trang sản phẩm trong CMS. Mẫu đang gắn với sản phẩm thì phải gỡ khỏi sản phẩm trước khi xoá. Trường mới: `model3d` (sản phẩm), `kind` / `app` / `view` / `metal2` / `innerGem` / `poster` / `family` (mẫu 3D).
- **Sản phẩm 3D:** mỗi mẫu 3D có trang riêng `/3d/<đường dẫn>/` (tiếng Anh `/en/3d/<đường dẫn>/`) để gửi link cho khách. Trang không liên kết sang mẫu 3D khác, không vào sitemap và để noindex. Danh sách có nút **Sao chép link** / **Link EN** / **Mở**. Trong trang sửa: tên, mã mẫu, mô tả ngắn, ẩn / hiện, chọn tệp `.glb` có sẵn hoặc tải tệp mới, màu vàng và loại đá quý khách được chọn (kể cả Sapphire xanh, Ruby, Emerald, Sapphire vàng), cấu hình khi mở trang, mở sẵn chế độ xoay chéo, ghi chú nội bộ, xem trước. Đường dẫn của mẫu đã tạo không đổi được (để link đã gửi không hỏng). Nút “Tư vấn & đặt hàng” mở form Đặt lịch với tên mẫu và cấu hình khách đang xem.
- **Tạp chí:** viết bài song ngữ bằng Markdown đơn giản, có xem trước, ảnh bìa, lưu nháp hoặc đăng.
- **Thông tin website:** hotline, Zalo, địa chỉ, giờ mở cửa, bản đồ, mạng xã hội, các tuyên bố cần xác minh (bảo hành, đổi mẫu… hiện cả trên trang Bảo hành & chăm sóc).
- **Sao lưu:** tải hoặc khôi phục toàn bộ nội dung; lịch sử 40 phiên bản gần nhất cho mỗi mục; đồng bộ GitHub.

Mỗi lần bấm **Lưu**, website được build lại ngay (khoảng 0,1 giây). Không cần deploy lại.

### Dữ liệu nằm ở đâu

```
content/              ← nội dung gốc trong repo (seed): site.json, products.json, journal.json, home.json (trang chủ), pages.json (chữ đã sửa của trang thông tin), models3d.json (sản phẩm 3D)
DATA_DIR/ (mặc định storage/, không commit)
  content/            ← nội dung đang chạy, do CMS chỉnh sửa (lần đầu tự chép từ content/)
  media/              ← ảnh & video tải lên từ CMS → công khai tại /media/… (tệp 3D .glb tải lên: media/3d/)
  bookings/           ← lịch hẹn + ảnh khách gửi (KHÔNG công khai, chỉ xem trong /admin)
  history/            ← các phiên bản cũ để khôi phục
```

> ⚠️ Trên Hostinger, đặt `DATA_DIR` ra **ngoài thư mục deploy** (ví dụ `/home/uXXXX/tgold-data`) để lần deploy sau không ghi đè dữ liệu CMS. Nên bật thêm sao lưu GitHub, hoặc tải bản sao lưu hằng tuần.

### Bảo mật
- Mật khẩu chỉ nằm trong biến môi trường. Cookie phiên là HttpOnly và SameSite=Strict, hết hạn sau 12 giờ không dùng. Sai mật khẩu 8 lần bị khoá 15 phút.
- Mọi yêu cầu thay đổi dữ liệu phải kèm header riêng (chống CSRF). Trang quản trị có CSP chặt và `noindex`.
- Dữ liệu nhập từ CMS luôn được escape khi đưa ra website, kể cả trong JSON-LD.

## Thay ảnh / video thật
Dùng `/admin` → Sản phẩm → **Thêm ảnh**, hoặc `/admin` → Trang chủ → **Tải ảnh / Thay ảnh** ở từng khối. Ảnh chưa có sẽ hiện khung placeholder kèm mô tả cảnh cần chụp.

Ảnh thật ban đầu (ảnh T Gold cung cấp, đã tối ưu WebP 400/800/1200–1600px) nằm ở `public/assets/photos/`. Ảnh tải lên từ CMS nằm ở `DATA_DIR/media/`; bản đã đưa vào repo nằm ở `public/media/` (máy chủ tìm trong `DATA_DIR/media/` trước, không có thì dùng bản trong repo).

## Cấu trúc code
```
src/pages/*.js        ← nội dung & bố cục từng trang (VI và EN đặt cạnh nhau)
src/partials/         ← layout, thẻ sản phẩm, khối dùng chung
src/lib/              ← content store, routes, markdown an toàn
src/build.js          ← build tĩnh (dùng chung cho npm run build và CMS)
src/admin/            ← API trang quản trị, kiểm tra dữ liệu, đồng bộ GitHub
admin/                ← giao diện trang quản trị
public/               ← css, js, logo, favicon; public/api/booking.php cho hosting PHP
server.js             ← server Node
```

## Đưa lên GitHub

Repo: <https://github.com/vudung1billiondollars/tgoldluxuryvn> (nhánh `main`).

```bash
git add -A && git commit -m "Cập nhật website"
git push
```

Trước khi push, nếu đã sửa nội dung trong `/admin` trên máy và muốn đưa các thay đổi đó vào repo:
chép `storage/content/*.json` sang `content/` và `storage/media/` sang `public/media/` (đường dẫn `/media/…` giữ nguyên).
Không bao giờ commit `.env`, `storage/` (có lịch hẹn và ảnh khách gửi) hay tệp 3D gốc `.3dm`.

## Deploy lên Hostinger (gói có Node.js: Business / Cloud) — tên miền tgoldluxury.vn
1. hPanel → **Websites → Add website → Node.js Apps → Import Git repository**, chọn repo `tgoldluxuryvn`, nhánh `main`, gắn tên miền `tgoldluxury.vn`.
2. Build command: `npm run build` · Start command: `npm start` · Node 20 trở lên.
3. **Environment variables** (xem `.env.example`): `ADMIN_PASSWORD` (bắt buộc, đặt mật khẩu mới cho bản chạy thật), `DATA_DIR` (đặt ngoài thư mục deploy, ví dụ `/home/uXXXX/tgold-data`), SMTP của Hostinger Email và `BOOKING_TO`. Nếu muốn, thêm `GITHUB_TOKEN` và `GITHUB_REPO=vudung1billiondollars/tgoldluxuryvn`.
4. Trỏ tên miền về Hostinger (nameserver hoặc bản ghi A theo hướng dẫn trong hPanel) và bật SSL.
5. Mở `https://tgoldluxury.vn/admin/`, đăng nhập, rồi điền mục **Thông tin website** trước tiên (hotline, Zalo, địa chỉ).

Lần chạy đầu trên máy chủ, nội dung trong `content/` được chép sang `DATA_DIR/content/`; từ đó CMS sửa trên bản chép này. Deploy lại **không** ghi đè nội dung đã sửa trong CMS (miễn là `DATA_DIR` nằm ngoài thư mục deploy).

Nếu sau này chuyển sang gói chỉ có PHP: chép `docs/deploy-branch.yml.example` thành `.github/workflows/deploy-branch.yml` (cần quyền `workflow` khi push) — workflow này build sẵn `dist/` sang nhánh `deploy`, form chạy qua `api/booking.php`. Trang `/admin` **không** chạy trên gói này.

## Cần chủ dự án bổ sung / xác minh
Xem **/admin → Tổng quan → Việc cần làm**. Mục này tự liệt kê những thông tin còn thiếu và những tuyên bố chưa được xác minh.
