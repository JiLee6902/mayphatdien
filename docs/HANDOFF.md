# PMC Website — Handoff / Nhật ký (2026-08-10)

Dự án làm lại website **chothuethietbipmc.com** (PMC — cho thuê máy phát điện, máy nén khí, phun rửa UHP, máy hàn) thành site mới UI/UX + SEO tốt hơn.

## Toạ độ dự án
- **Repo local:** `/Users/mac/pmc-website`
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

## PHA 2 — CMS Sanity: ĐANG DỞ, ĐANG KẸT
**Đã làm:**
- Scaffold backend: `sanity.config.ts`, `sanity.cli.ts`, `src/sanity/{schemas/*, client.ts, image.ts, queries.ts}`, `scripts/build-seed.mjs` (seed 4 danh mục + 13 thiết bị + settings, **kèm ảnh** qua `_sanityAsset`), `.env.example`.
- `.env.local` (gitignored) đã có `NEXT_PUBLIC_SANITY_PROJECT_ID=jdaow9bk`, `NEXT_PUBLIC_SANITY_DATASET=production`.
- Query đã shape khớp component (chỉ cần map `category.description → meta`).

**ĐANG KẸT:** `SANITY_AUTH_TOKEN` trong `.env.local` là token **Viewer/thiếu quyền** → CLI báo *Unauthorized (missing grant sanity.project.datasets/read)*. Cần **token Editor**.

**⚠️ BẢO MẬT:** token cũ `skxZXLI30YE52...` đã **lộ trong chat** → **PHẢI REVOKE** tại https://www.sanity.io/manage/project/jdaow9bk/api và tạo token **Editor** mới.

## VIỆC TIẾP THEO (mai làm)
1. **Sanity token Editor:** revoke token cũ, tạo token **Editor** mới → `echo 'SANITY_AUTH_TOKEN=sk...' >> .env.local`.
2. **Nạp dữ liệu + Studio:**
   ```
   cd /Users/mac/pmc-website
   set -a; . ./.env.local; set +a
   npx sanity dataset create production --visibility public   # nếu chưa có
   npx sanity dataset import sanity/seed.ndjson production --replace   # chạy: node scripts/build-seed.mjs trước
   npx sanity deploy   # ra link Studio (vd pmc.sanity.studio) cho nhân viên
   ```
3. **Đấu nối web đọc từ Sanity:** đổi các trang sang dùng `src/sanity/queries.ts` (getCategories, getAllEquipment, getEquipmentBySlug + generateStaticParams async, getFeaturedEquipment, getEquipmentByCategory, getProjects, getPosts). Map `description→meta`; gallery dùng `item.images`. **Cập nhật `src/app/page.test.tsx`** vì `Home` sẽ thành async (RTL không render async component trực tiếp). Giữ fallback data tĩnh khi thiếu `projectId`.
4. Commit + push.
5. **Pha 4 — SEO:** schema LocalBusiness×2 (HCM + Vũng Tàu) + Product/Offer + BreadcrumbList + WebSite/SearchAction; sitemap.xml + robots.txt (lastmod thật); metadata từng trang; IndexNow; 301 redirect URL cũ→mới. **KHÔNG dùng FAQPage** (Google bỏ FAQ rich results 07/05/2026). Mục tiêu: Technical 44→≥90, Local 28→≥85 (đo lại bằng skill `seo`).
6. **Deploy Cloudflare Pages:** `npx wrangler login` (trong Terminal thật) → `npm run deploy` → `*.pages.dev` để duyệt → trỏ domain + 301.

## Tham chiếu
- Spec: `docs/superpowers/specs/2026-08-10-pmc-website-design.md`
- Plan Pha 1: `docs/superpowers/plans/2026-08-10-pmc-phase1-foundation.md`
- Audit SEO (skill claude-seo đã cài): site cũ Technical 44/100, Local 28/100; đối thủ mayphatdienvogia.com chặn Googlebot 403 (cơ hội vượt).
