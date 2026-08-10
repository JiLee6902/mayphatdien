# PMC Website

Trang web tĩnh (static site) của PMC, xây dựng bằng [Next.js](https://nextjs.org) và triển khai trên [Cloudflare Pages](https://pages.cloudflare.com).

Next.js được cấu hình với `output: 'export'` (xem `next.config.mjs`), nên `next build` sẽ xuất toàn bộ site ra các file HTML/CSS/JS tĩnh trong thư mục `out/` — sẵn sàng để đưa lên bất kỳ static host nào, ở đây là Cloudflare Pages.

## Yêu cầu

- Node.js 20 trở lên
- npm

Cài đặt phụ thuộc:

```bash
npm install
```

## Phát triển (Local dev)

Chạy dev server tại http://localhost:3000:

```bash
npm run dev
```

Trang sẽ tự động cập nhật khi bạn chỉnh sửa mã nguồn trong `src/`.

## Kiểm thử (Test)

Chạy toàn bộ test (Vitest):

```bash
npm test
```

Chế độ watch khi đang phát triển:

```bash
npm run test:watch
```

## Build

Tạo bản build tĩnh trong thư mục `out/`:

```bash
npm run build
```

Sau khi build thành công, `out/index.html` (và các trang khác) sẽ xuất hiện. Thư mục `out/` được gitignore — không commit thư mục này.

## Triển khai (Deploy)

Site được deploy lên **Cloudflare Pages** bằng [Wrangler](https://developers.cloudflare.com/workers/wrangler/). Cấu hình nằm trong `wrangler.toml`:

```toml
name = "pmc-website"
compatibility_date = "2026-08-10"
pages_build_output_dir = "out"
```

### Bước 1 — Đăng nhập Cloudflare (chỉ làm một lần)

Lệnh này mở trình duyệt để xác thực tài khoản Cloudflare. Đây là bước tương tác thủ công, cần một người thực hiện:

```bash
npx wrangler login
```

Wrangler sẽ lưu thông tin đăng nhập cục bộ, nên lần sau không cần đăng nhập lại (trừ khi token hết hạn hoặc bạn `wrangler logout`).

### Bước 2 — Deploy

```bash
npm run deploy
```

Lệnh `deploy` (định nghĩa trong `package.json`) sẽ:

1. Chạy `next build` để tạo bản tĩnh mới trong `out/`.
2. Chạy `wrangler pages deploy out --project-name=pmc-website` để tải thư mục `out/` lên Cloudflare Pages.

Sau khi hoàn tất, Wrangler in ra một URL preview có dạng:

```
https://<hash>.pmc-website.pages.dev
```

Mở URL đó để xem bản vừa deploy. Mỗi lần deploy tạo ra một URL preview riêng; nhánh production (theo cấu hình trên Cloudflare Pages) sẽ có domain cố định của dự án.

## Cấu trúc thư mục

- `src/` — mã nguồn ứng dụng Next.js (App Router)
- `public/` — tài nguyên tĩnh (ảnh, favicon, ...)
- `out/` — output build tĩnh (gitignore)
- `wrangler.toml` — cấu hình Cloudflare Pages
- `next.config.mjs` — cấu hình Next.js (static export)
