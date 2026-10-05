# PMC — SEO Action Plan (site mới Next.js)

**Ngày:** 2026-10-05
**Health Score (code site mới):** ~82/100
**Kết luận 1 dòng:** Kỹ thuật SEO đã xuất sắc — thứ chặn "lên top" là **(1) site mới chưa deploy**, **(2) thiếu 301 từ site cũ**, **(3) catalog mỏng (13 vs ~65 sản phẩm cũ)**, **(4) off-page (GBP + backlink)**.

---

## 🔴 CRITICAL — làm ngay (tuần 1)

### 1. Site mới CHƯA lên domain
`chothuethietbipmc.com` vẫn đang chạy **web PHP cũ**. Route mới (`/thiet-bi/`) trả 404 trên domain.
→ Deploy bản Next.js (`npm run deploy` → Cloudflare Pages) và trỏ domain về nó. **Mọi việc SEO vô nghĩa cho tới khi site mới thực sự live.**

### 2. 301 redirect site cũ → mới  (ĐÃ TẠO SẴN)
Site cũ có **211 URL đang index** (song ngữ VN/EN, có backlink + thứ hạng). Nếu không 301, thay site = **mất sạch equity** → về mốc 0.
→ File `public/_redirects` đã sinh sẵn (210 rule, 39 khớp đúng model, còn lại về category). Build lại là nó vào `out/`. **Review nhanh rồi deploy kèm.**

### 3. Google Search Console
- Verify domain, submit `sitemap.xml` mới.
- Dùng "Change of Address" / theo dõi Coverage để Google nuốt 301 nhanh.
- Submit IndexNow (site đã hỗ trợ) cho các URL mới.

---

## 🟠 HIGH — tuần 2-3

### 4. Mở rộng catalog (đòn bẩy ranking lớn nhất)
Site cũ rank nhờ **~65 trang sản phẩm long-tail** (mỗi model 1 trang: "airman pdsf 830s 12bar", "denyo 1300ub 13bar"…). Site mới chỉ **13 sản phẩm** → mất hàng loạt từ khóa cụ thể.
→ Nhập lại các model còn thiếu vào catalog (Sanity/config): các dải máy phát Cummins/Denyo/Mitsubishi/Komatsu/Isuzu/Hitachi, máy nén Airman/Denyo/Ingersoll-Rand, UHP 2500bar + hydrotest 6000/30000psi + gas booster + chart recorder, phụ kiện (tủ hòa đồng bộ, cáp, bồn khí). Mỗi model = 1 landing page = 1 cơ hội top.

### 5. Google Business Profile (B2B local = quan trọng số 1)
2 văn phòng (TP.HCM + Vũng Tàu) → 2 hồ sơ GBP: ảnh thiết bị thật, danh mục "Thiết bị cho thuê", NAP khớp site, gom review khách. Lên map-pack nhanh hơn organic nhiều.

### 6. Nội dung tin tức đều đặn
Mới 8 bài. Ra 2-4 bài/tháng theo truy vấn thật ("chọn công suất máy phát điện", "thuê máy nén khí bao nhiêu tiền"…) để bắt top-of-funnel + tạo internal link về trang sản phẩm.

---

## 🟡 MEDIUM — tháng 2

7. **Backlink**: xin link từ nhà thầu/đối tác/KCN đã phục vụ; hồ sơ năng lực PDF; đăng bạ ngành.
8. **FAQ schema** trên trang sản phẩm + trang chủ (giá thuê tối thiểu, có kỹ thuật đi kèm không, xử lý sự cố…) → ăn rich result + AI Overviews.
9. **Trang khu vực** ("cho thuê máy phát điện Vũng Tàu/Bình Dương/Đồng Nai") nếu muốn phủ local theo tỉnh.

## 🟢 LOW — backlog
10. Title riêng cho trang 404. 11. `llms.txt` (tùy chọn, cho AI crawler). 12. Web manifest/PWA icons.

---

## Những gì ĐÃ TỐT (không cần sửa)
✅ metadataBase, canonical, hreflang vi-VN · ✅ OpenGraph + Twitter card · ✅ robots.txt + sitemap.xml tự sinh · ✅ JSON-LD đầy đủ (Organization, WebSite, LocalBusiness, Product, Breadcrumb, ItemList, BlogPosting) · ✅ 195 ảnh **0 thiếu alt**, WebP · ✅ mỗi trang đúng 1 H1, title/meta unique · ✅ static export + preload LCP (CWV tốt).
