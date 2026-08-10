# Thiết kế lại website PMC — Cho thuê thiết bị công nghiệp

**Ngày:** 2026-08-10
**Trạng thái:** Đã duyệt thiết kế, chờ lập kế hoạch triển khai
**Thay thế:** https://chothuethietbipmc.com/

---

## 1. Mục tiêu

Xây dựng lại website công ty PMC (cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao UHP, máy hàn) với:

- **UI/UX hiện đại** theo phong cách B2B của techcoop.com (sạch, tin cậy, nhiều khoảng trắng).
- **SEO tốt hơn** đối thủ mayphatdienvogia.com, khai thác đúng ý định "cho thuê" + công suất + khu vực.
- **Chi phí server ≈ 0đ/năm** (chỉ trả tiền tên miền).
- **Nhân viên không rành kỹ thuật tự cập nhật nội dung** qua giao diện quản trị.

### Quyết định đã chốt với người dùng
- Nội dung: **viết mới chuẩn SEO** (lấy dữ liệu site cũ làm gốc, viết lại tiêu đề/mô tả tối ưu từ khóa).
- Ngôn ngữ: **chỉ tiếng Việt**.
- Kênh liên hệ chính: **Hotline (gọi) + Zalo/chat** (nút nổi luôn hiện). Form báo giá là phụ.

---

## 2. Kiến trúc kỹ thuật

```
Next.js (App Router, output: 'export')  →  build ra HTML tĩnh
        ↑ fetch nội dung lúc build
     Sanity CMS (content lake hosted, free tier)
        ↓ khi nhân viên bấm Publish → webhook
   Cloudflare Pages (host + CDN edge VN, rebuild tự động)
```

| Thành phần | Lựa chọn | Chi phí/năm | Lý do |
|---|---|---|---|
| Framework | Next.js App Router, static export | 0đ | SSG = HTML sẵn, SEO tốt nhất, không cần server runtime |
| CMS | Sanity (free tier) | 0đ | Content lake hosted (không phải chạy DB), Studio UI thân thiện cho nhân viên |
| Hosting | Cloudflare Pages | 0đ | Băng thông **không giới hạn**, có PoP tại VN, **không cấm dùng thương mại** |
| Domain | Giữ domain hiện tại | ~250–350k | — |

> **Không dùng Vercel free**: gói Hobby cấm mục đích thương mại → công ty cho thuê sẽ phải trả $20/tháng. Cloudflare Pages không có ràng buộc này.

**Cơ chế cập nhật nội dung:** nhân viên sửa trong Sanity Studio → bấm Publish → webhook gọi Cloudflare Pages deploy hook → site rebuild và cập nhật sau ~1–2 phút. Không đụng tới code.

---

## 3. Cấu trúc trang & Chiến lược SEO (điểm khác biệt để vượt đối thủ)

Đối thủ mạnh nhờ landing page riêng cho từng danh mục. Ta làm mạnh hơn bằng cách khai thác **ý định "cho thuê" + công suất + khu vực** — nhóm long-tail ít cạnh tranh, khách có nhu cầu thuê thực sự.

### 3.1 Cây trang & URL

- `/` — Trang chủ: "Cho thuê máy phát điện, máy nén khí, thiết bị công nghiệp — PMC"
- **4 trang danh mục (landing giàu từ khóa):**
  - `/cho-thue-may-phat-dien`
  - `/cho-thue-may-nen-khi`
  - `/cho-thue-may-phun-rua-ap-luc-cao`
  - `/cho-thue-may-han`
- **Trang lọc long-tail** theo công suất/khu vực, ví dụ:
  - `/cho-thue-may-phat-dien/100kva`
  - `/cho-thue-may-phat-dien-binh-duong`
- **Trang chi tiết thiết bị:** `/thiet-bi/<slug>` (vd `/thiet-bi/may-phat-dien-cummins-100kva`) — thông số, ảnh, schema Product.
- **Dự án tiêu biểu:** `/du-an/<slug>` — tăng E-E-A-T + link nội bộ.
- **Tin tức/blog:** `/tin-tuc/<slug>` — bắt từ khóa thông tin.
- `/gioi-thieu`, `/lien-he` — schema LocalBusiness, NAP đủ 2 cơ sở (HCM + Vũng Tàu).

### 3.2 Kỹ thuật SEO đi kèm
- `sitemap.xml` + `robots.txt` tự sinh lúc build.
- Structured data schema.org: `LocalBusiness`, `Product`, `BreadcrumbList`, `FAQPage`.
- Metadata (title, description) viết tay theo từ khóa cho từng trang; Open Graph; canonical URL.
- Core Web Vitals: mục tiêu PageSpeed ≥ 90 (mobile & desktop). Ảnh WebP/AVIF, lazy-load, font tối ưu.
- Link nội bộ chặt: danh mục ↔ thiết bị ↔ dự án ↔ bài viết.
- **301 redirect** toàn bộ URL cũ → URL mới khi chuyển domain (giữ thứ hạng đã có).

---

## 4. Giao diện

- **Màu:** xanh dương/teal đậm (tin cậy, công nghiệp) + trắng + xám nhạt; điểm nhấn cam/vàng cho nút CTA.
- **Font:** Be Vietnam Pro (hỗ trợ tiếng Việt tốt, hiện đại).
- **Layout:** header dính; hero mạnh (tiêu đề + CTA "Nhận báo giá"/"Gọi ngay"); khối số liệu (số năm kinh nghiệm, số dự án, tổng công suất kho...); thẻ danh mục; thiết bị nổi bật; showcase dự án; logo thương hiệu/đối tác; footer NAP đầy đủ.
- **Mobile-first** (đa số traffic VN từ điện thoại).
- **Nút nổi Hotline (gọi nhanh) + Zalo** luôn hiển thị.

### 4.1 Khách tìm thiết bị dễ dàng (discoverability — ưu tiên cao)

Mục tiêu: từ bất kỳ trang nào, khách chỉ **1–2 cú chạm** là tới đúng thiết bị cần thuê.

- **Mega menu ở header:** rê/chạm vào "Thiết bị" xổ ra 4 danh mục kèm thiết bị tiêu biểu + ảnh nhỏ → thấy ngay không cần vào sâu.
- **Ô tìm kiếm** trên header: gõ "100kva", "cummins", "máy hàn"... ra gợi ý tức thì (client-side, dữ liệu build sẵn — 0đ, không cần server).
- **Bộ lọc trên trang danh mục:** lọc theo công suất, thương hiệu, khu vực; kết quả cập nhật ngay.
- **Thẻ danh mục lớn, rõ ràng** ngay trang chủ (icon + tên + số lượng thiết bị) → lối vào trực quan.
- **Breadcrumb** trên mọi trang sâu (Trang chủ › Máy phát điện › Cummins 100kVA) → dễ định hướng + tốt SEO.
- **Mỗi thiết bị:** ảnh rõ, thông số dạng bảng dễ đọc, nút "Gọi thuê ngay"/"Chat Zalo" đặt cạnh thông tin, gợi ý "thiết bị liên quan".
- **Menu mobile:** danh mục thu gọn dạng accordion + nút tìm kiếm nổi bật.

---

## 5. Mô hình nội dung trong Sanity (CMS)

| Schema | Trường chính | Dùng cho |
|---|---|---|
| `equipment` (Thiết bị) | tên, slug, danh mục (ref), thương hiệu, công suất, bảng thông số kỹ thuật, ảnh (nhiều), mô tả SEO, khu vực áp dụng, nổi bật (bool) | Trang chi tiết + lọc |
| `category` (Danh mục) | tên, slug, mô tả landing, title/meta SEO, icon/ảnh | 4 trang danh mục |
| `project` (Dự án) | tên, khách hàng, địa điểm, thiết bị dùng (ref), ảnh, mô tả | Showcase uy tín |
| `post` (Bài viết) | tiêu đề, slug, ảnh bìa, nội dung rich text, meta SEO, ngày đăng | Tin tức/blog |
| `settings` (Cấu hình chung) | hotline, Zalo, email, địa chỉ 2 cơ sở, logo, mạng xã hội, số liệu hero | Header/footer/toàn site |

---

## 6. Kiểm thử & nghiệm thu

- **Build & lint** tự động; Cloudflare Pages fail build nếu lỗi → không deploy bản hỏng.
- **SEO/hiệu năng:** Lighthouse Performance/SEO/Best-Practices ≥ 90; kiểm sitemap, robots, structured data (Google Rich Results Test).
- **Responsive:** kiểm mobile/tablet/desktop.
- **Chức năng:** nút Hotline gọi được, nút Zalo mở đúng; CMS publish → nội dung lên đúng; không có link 404 nội bộ.
- **Trước khi chuyển domain:** deploy bản thử trên `*.pages.dev` để duyệt thực tế; sau đó trỏ domain thật + 301 redirect URL cũ.

---

## 7. Ngoài phạm vi (YAGNI)

- Đa ngôn ngữ (chỉ tiếng Việt).
- Thanh toán/giỏ hàng online (mô hình cho thuê B2B — liên hệ báo giá).
- Tài khoản người dùng / đăng nhập khách.
- Form báo giá gửi email: **tùy chọn**, chỉ thêm nếu người dùng yêu cầu sau (dùng Formspree/Cloudflare, vẫn 0đ).
