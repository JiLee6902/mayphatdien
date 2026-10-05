# Khung nhập nhanh thiết bị (catalog expansion)

Mỗi model mới = 1 landing page SEO. Thêm 1 object vào mảng `equipment` trong
`src/config/equipment.ts` (hoặc tạo document `equipment` trong Sanity Studio với cùng field).

## Template copy-paste (dán vào `src/config/equipment.ts`)

```ts
{
  slug: 'may-phat-dien-cummins-350kva',        // URL: /thiet-bi/<slug>/ — không dấu, gạch nối, DUY NHẤT
  name: 'Máy phát điện Cummins 350kVA',         // tiêu đề hiển thị + <h1> + title SEO
  categorySlug: 'may-phat-dien',                // 1 trong: may-phat-dien | may-nen-khi | may-phun-rua-ap-luc-cao | may-han
  brand: 'Cummins',                             // dùng cho chip + lọc + Product schema
  power: '350 kVA',                             // chip chính + lọc công suất (số đứng đầu để sort đúng)
  image: '/images/equipment/mpd-cummins-350kva.jpg', // đặt ảnh .jpg + .webp cùng tên vào public/images/equipment/
  featured: false,                              // true = hiện ở khối "nổi bật" homepage
  specs: [                                      // bảng thông số — càng chi tiết càng tốt cho SEO/long-tail
    { label: 'Công suất', value: '350 kVA / 280 kW' },
    { label: 'Hãng máy', value: 'Cummins (USA)' },
    { label: 'Nhiên liệu', value: 'Diesel' },
    { label: 'Vỏ máy', value: 'Siêu cách âm' },
    { label: 'Điện áp', value: '380/220V - 50Hz' },
  ],
  description:                                   // 1-3 câu, chèn tự nhiên từ khóa (model + ứng dụng + "cho thuê")
    'Máy phát điện Cummins 350kVA vỏ siêu cách âm, cho thuê theo ngày/tuần/tháng, giao lắp tận công trình.',
},
```

## Quy tắc để mỗi trang chuẩn SEO
1. **slug duy nhất, có từ khóa** — khớp cách khách tìm ("cho thuê máy phát điện cummins 350kva").
2. **Ảnh thật** — mỗi model nên có ảnh riêng (có cả `.webp`), KHÔNG dùng chung 1 ảnh (tránh giống nhau).
3. **specs ≥ 4 dòng** — bảng thông số là nội dung Google + AI đọc; càng cụ thể càng dễ lên long-tail.
4. **description khác nhau** — không copy-paste; mỗi model 1 mô tả riêng (tránh thin/duplicate content).
5. Sau khi thêm: sitemap + schema + trang chi tiết tự sinh, không cần sửa code.

## Danh sách model cần nhập
Xem `missing-models-checklist.md` — ~97 ứng viên trích từ site cũ (đã lọc bản EN/trùng).
Ưu tiên nhập các model **còn đang kinh doanh** trước; bỏ qua case-study/ảnh kho (đưa vào mục Dự án thay vì sản phẩm).
