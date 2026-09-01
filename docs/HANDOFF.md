# PMC Website — Handoff / Nhật ký (2026-08-10)

Dự án làm lại website **chothuethietbipmc.com** (PMC — cho thuê máy phát điện, máy nén khí, phun rửa UHP, máy hàn) thành site mới UI/UX + SEO tốt hơn.

## Toạ độ dự án
- **Repo local:** `/Users/mac/Desktop/pmc-website`
- **GitHub:** https://github.com/JiLee6902/mayphatdien (branch mặc định `main`; nhánh làm việc `phase-1-foundation`). Đã push toàn bộ code UI + trang.
- **Tài khoản GitHub push:** `JiLee6902` (đăng nhập HTTPS qua gh; `chile-it` KHÔNG có quyền push).
- **Dev server:** `npm run dev` → http://localhost:3000
- **Chụp screenshot (để review UI):** `PLAYWRIGHT_BROWSERS_PATH="$HOME/.claude/skills/seo/ms-playwright" ~/.claude/skills/seo/.venv/bin/python` + playwright.

## Stack đã chốt
- **Next.js 16** (App Router, **static export** `output:'export'`) · **Tailwind v4** · TypeScript · **Vitest + RTL** (18 test pass).
- **Host:** Cloudflare Pages (miễn phí) — CHƯA deploy (cần `wrangler login`).
- **CMS:** Sanity — project **"pmc"**, `projectId = jdaow9bk`, dataset `production`, org `oUa9glZ78` (tài khoản Quynh Chi Le), plan Growth Trial.

## Thiết kế (ĐÃ CHỐT — không đổi trừ khi yêu cầu)
- Màu: **xanh dương navy `#0e3a66` + cam `#e2811c`** (accent), nền sáng `#f4f7fb`. Font **Be Vietnam Pro**, base **17px**.
- Hero immersive (min-h 90vh, gradient + glass card). Trang chi tiết chuẩn "senior": **sidebar CTA sticky, ô thông số nổi bật, gallery nhiều ảnh (nút ‹ › + thumbnail + 1/N), bảng spec zebra, hàng tin cậy**. Thẻ card bo góc + shadow + hover lift.

## ĐÃ XONG (Pha 1 + Pha 3 + toàn bộ UI, đã push)
- Trang chủ: hero, dải thương hiệu, nhóm thiết bị, **Thiết bị nổi bật**, "Vì sao chọn PMC" (thẻ nền tối + checklist), CTA band, footer, **menu mobile**, nút nổi Hotline/Zalo.
- **4 trang danh mục** `/cho-thue-*` + bộ lọc (thương hiệu/công suất).
- `/thiet-bi` (tổng quan) + **13 trang chi tiết** `/thiet-bi/[slug]` (gallery nhiều ảnh).
- `/lien-he`, `/gioi-thieu`, `/du-an`, `/tin-tuc`.
- Build tĩnh 26 route OK; ESLint sạch; 18/18 test.
- Data tĩnh: `src/config/categories.ts`, `src/config/equipment.ts` (13 máy + gallery qua `getImages`), `src/config/site.ts` (NAP 2 cơ sở).

## PHA 2 — CMS Sanity: ĐÃ ĐẤU NỐI (còn 1 bước thủ công: token + seed)
**Đã làm (đợt này):**
- Scaffold backend: `sanity.config.ts`, `sanity.cli.ts`, `src/sanity/{schemas/*, client.ts, image.ts, queries.ts}`, `scripts/build-seed.mjs`, `.env.example`.
- **Data layer `src/lib/content.ts`**: mọi getter thử Sanity trước, **tự fallback về config tĩnh** khi CMS chưa cấu hình / lỗi mạng / chưa có document. Chuẩn hoá shape khớp interface tĩnh (`category.description→meta`, equipment kèm `images[]`).
- **Đã đấu nối tất cả trang nội dung** sang data layer (async Server Components): trang chủ, `/thiet-bi`, `/thiet-bi/[slug]` (+ `generateStaticParams` async), 4 trang danh mục (`CategoryView`), `/du-an` + **`/du-an/[slug]`**, `/tin-tuc` + **`/tin-tuc/[slug]`** (render body PortableText + schema BlogPosting). Fallback tĩnh: `src/config/{projects,posts}.ts` (có slug).
- **Settings đã nối vào web**: `loadSettings()` (React `cache`, fallback `defaultSiteSettings`) → Header/Footer/FloatingContact/Hero/CtaBand/MobileMenu/EquipmentCard nhận qua prop (đồng bộ, vẫn test được). Sửa hotline/Zalo/email/NAP trong admin → toàn site đổi sau khi build lại. (NAP trong JSON-LD vẫn lấy từ `site.ts` canonical — có locality/region CMS chưa có.)
- **Admin (Studio) chuẩn senior**: desk tuỳ biến (`src/sanity/structure.ts`) — Settings dạng **singleton** ghim đầu, nhãn tiếng Việt, `groups` (Nội dung/SEO/…), validation, orderings. Chặn tạo/xoá/nhân bản singleton trong `sanity.config.ts`. Đã cài peer `styled-components`.
- ✅ `next build` (static export) 26 route OK · `sanity build` OK · ESLint sạch · 18/18 test.

**BƯỚC THỦ CÔNG CÒN LẠI (cần tài khoản Sanity):**
1. **Token Editor:** revoke token cũ đã lộ tại https://www.sanity.io/manage/project/jdaow9bk/api → tạo token **Editor** → `echo 'SANITY_AUTH_TOKEN=sk...' >> .env.local`.
2. **Tạo dataset + nạp dữ liệu + deploy Studio:**
   ```
   cd /Users/mac/Desktop/pmc-website
   set -a; . ./.env.local; set +a
   npx sanity dataset create production --visibility public   # nếu chưa có
   node scripts/build-seed.mjs                                # sinh sanity/seed.ndjson (kèm ảnh)
   npx sanity dataset import sanity/seed.ndjson production --replace
   npx sanity deploy                                          # ra link admin, vd pmc.sanity.studio
   ```
   Sau khi seed xong, chỉ cần **build lại web** — data layer tự chuyển sang đọc từ Sanity (không đổi code).
3. Commit + push.

**Ghi chú:** NAP/hotline vẫn đọc từ `src/config/site.ts` (Header/Footer/FloatingContact dùng ở client). Schema `settings` đã sẵn sàng để đấu nối sau nếu cần chỉnh NAP qua CMS.

## PHA 4 — SEO KỸ THUẬT: ĐÃ IMPLEMENT (on-page/technical hoàn tất)
**Đã làm (đợt này) — toàn bộ nền tảng SEO trong code:**
- **JSON-LD graph** (`src/lib/schema.ts` + `src/components/JsonLd.tsx`): site-wide **Organization + WebSite + LocalBusiness×2** (HCM + Vũng Tàu, kèm PostalAddress + ContactPoint + areaServed) nhúng ở layout; trang chi tiết có **Product** (specs → PropertyValue, Brand) + **BreadcrumbList**; trang danh mục có BreadcrumbList. **KHÔNG** FAQPage/HowTo. Không bịa giá (rental "Liên hệ") nên bỏ Offer.
- **`sitemap.xml`** (23 URL, `app/sitemap.ts`, sinh từ data layer) + **`robots.txt`** (`app/robots.ts`) — cả hai `dynamic='force-static'` để chạy với `output:'export'`.
- **Metadata từng trang**: `metadataBase`, title template `%s | PMC` (đã sửa double-brand), `description`, **canonical** (trailing slash), **OpenGraph + Twitter card** (ảnh mặc định `site.ogImage`). Trang chi tiết dùng `seoDescription` (CMS) + ảnh sản phẩm cho OG.
- **IndexNow**: key file `public/169f3df9acc8d4f32784ebfe19a6ac76.txt` + `scripts/indexnow.mjs` (submit toàn bộ sitemap sau deploy).
- ✅ Đã verify trên `out/`: robots.txt + sitemap.xml đúng; JSON-LD parse hợp lệ; canonical/OG/title đúng trên mọi trang. `next build` OK · ESLint sạch · 18/18 test.
- **Lợi thế:** đối thủ mayphatdienvogia.com chặn Googlebot 403 → site này crawl được + schema đầy đủ là đã vượt về kỹ thuật.

**CÒN LẠI (vận hành, ngoài code — cần deploy + tài khoản):**
1. **Deploy Cloudflare Pages:** `npx wrangler login` → `npm run deploy` → `*.pages.dev` → trỏ domain `chothuethietbipmc.com` + **301 redirect URL cũ→mới**.
2. **Google Search Console:** verify domain, submit `sitemap.xml`, request indexing. Chạy `node scripts/indexnow.mjs` sau deploy.
3. **Google Business Profile ×2** (HCM + Vũng Tàu) — đòn bẩy local ranking mạnh nhất; NAP khớp `src/config/site.ts`. Thêm citation (danh bạ) NAP đồng nhất.
4. **Ảnh OG thật 1200×630** (đang tạm dùng ảnh hero) — có thể dùng skill `seo image-gen`.
5. **Đo lại điểm** bằng skill `seo audit <url>` sau khi live (mục tiêu Technical ≥90, Local ≥85) + bổ sung nội dung/bài viết đều đặn.

## Tham chiếu
- Spec: `docs/superpowers/specs/2026-08-10-pmc-website-design.md`
- Plan Pha 1: `docs/superpowers/plans/2026-08-10-pmc-phase1-foundation.md`
- Audit SEO (skill claude-seo đã cài): site cũ Technical 44/100, Local 28/100; đối thủ mayphatdienvogia.com chặn Googlebot 403 (cơ hội vượt).
