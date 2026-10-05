# PMC — Full SEO Audit (site mới Next.js)

**Domain:** https://chothuethietbipmc.com · **Business type:** Local Service / B2B equipment rental (miền Nam VN)
**Ngày:** 2026-10-05 · **Health Score (code site mới):** ~82/100

## Executive Summary
Site Next.js mới có **nền tảng SEO kỹ thuật xuất sắc** (schema, meta, sitemap, alt ảnh, CWV). Nhưng:
1. **Chưa deploy** — domain vẫn chạy web PHP cũ (route mới = 404).
2. **211 URL cũ đang index** sẽ mất equity nếu không 301 (đã tạo `public/_redirects`).
3. **Catalog mỏng**: 13 sản phẩm vs ~65 của site cũ → mất nhiều từ khóa long-tail.
4. Off-page yếu: chưa tối ưu GBP, ít backlink, ít nội dung mới.

## Điểm theo hạng mục
| Hạng mục | Điểm | Ghi chú |
|---|---|---|
| Technical SEO | 92 | robots/sitemap/canonical/https/static tốt |
| Content Quality | 55 | **catalog mỏng, ít bài viết** — điểm kéo tổng thể xuống |
| On-Page SEO | 90 | title/meta/H1 unique, chuẩn |
| Schema | 95 | graph JSON-LD đầy đủ |
| Performance (CWV) | 85 | static + preload LCP + WebP (chưa đo field) |
| AI Search Readiness | 80 | schema tốt; thiếu FAQ, llms.txt |
| Images | 95 | 195 ảnh, 0 thiếu alt, WebP |

## Build audit (out/, 38 trang)
- Sitemap: 35 URL route mới · robots.txt hợp lệ · homepage 1×H1, 2 JSON-LD.
- Product page: title unique, canonical, Product schema (4 khối JSON-LD).
- 195 `<img>` — **0 thiếu alt**. Không trang nào thiếu title/meta/canonical.
- "Trùng title" duy nhất = homepage + 3 biến thể trang 404 (không index) → không phải lỗi.

## Site cũ — tài sản phải giữ (migration)
211 URL: ~65 sản phẩm VN + bản EN + blog + nhiều URL trùng dạng số (`-NN.html`).
→ `public/_redirects`: 210 rule 301, 39 khớp đúng model, còn lại về category liên quan (không rơi 404).

Xem chi tiết hành động trong **ACTION-PLAN.md**.
