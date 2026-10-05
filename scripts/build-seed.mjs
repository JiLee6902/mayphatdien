// Build a Sanity seed NDJSON file from the static content model.
//
// Data below is transcribed from:
//   - src/config/categories.ts  (slug, name; `meta` -> description)
//   - src/config/equipment.ts   (slug, name, categorySlug, brand, power, specs, description, featured)
//   - src/config/site.ts        (settings singleton)
//
// IMAGES ARE INTENTIONALLY OMITTED. Images live in the local /public tree as
// plain paths, not as Sanity assets. Staff upload real images in the Studio
// after import; the schema `image`/`images` fields stay empty in the seed.
//
// Usage:
//   node scripts/build-seed.mjs
//   npx sanity dataset import sanity/seed.ndjson production
//
// Output: sanity/seed.ndjson (one JSON document per line).

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

// ---- Categories (from src/config/categories.ts) ----
// `meta` is mapped to `description`; `order` mirrors the array order.
const categories = [
  {
    slug: 'may-phat-dien',
    name: 'Máy phát điện',
    description: '10 – 1500 kVA · Cummins, Mitsubishi, Denyo, MTU · 40+ máy',
  },
  {
    slug: 'may-nen-khi',
    name: 'Máy nén khí',
    description: '8 – 15 bar · di động & cố định · 15+ máy',
  },
  {
    slug: 'may-phun-rua-ap-luc-cao',
    name: 'Phun rửa áp lực cao (UHP)',
    description: 'Hệ thống UHP & hydrotest · nhiều cấp áp suất',
  },
  {
    slug: 'may-han',
    name: 'Máy hàn',
    description: 'MIG · TIG · máy hàn kéo theo máy phát',
  },
];

// ---- Equipment (from src/config/equipment.ts) ----
const equipment = [
  {
    slug: 'may-phat-dien-cummins-550kva',
    name: 'Máy phát điện Cummins US 550kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '550 kVA',
    featured: true,
    specs: [
      { label: 'Công suất', value: '550 kVA / 440 kW' },
      { label: 'Hãng máy', value: 'Cummins (USA)' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện công nghiệp Cummins 550kVA, vỏ siêu cách âm, phù hợp nhà máy, công trình lớn, sự kiện. Sẵn kho, giao lắp và vận hành tận nơi.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-300kva',
    name: 'Máy phát điện Mitsubishi 300kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '300 kVA',
    specs: [
      { label: 'Công suất', value: '300 kVA / 240 kW' },
      { label: 'Hãng máy', value: 'Mitsubishi' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện Mitsubishi 300kVA vận hành ổn định, tiết kiệm nhiên liệu, phù hợp nhà xưởng và công trình vừa.',
  },
  {
    slug: 'may-phat-dien-denyo-100kva',
    name: 'Máy phát điện Denyo 100kVA (siêu êm)',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '100 kVA',
    specs: [
      { label: 'Công suất', value: '100 kVA / 80 kW' },
      { label: 'Hãng máy', value: 'Denyo (Japan)' },
      { label: 'Độ ồn', value: 'Siêu êm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện Denyo 100kVA chống ồn, độ ồn thấp, lý tưởng cho khu dân cư, tòa nhà, sự kiện.',
  },
  {
    slug: 'may-phat-dien-denyo-150kva',
    name: 'Máy phát điện Denyo 150kVA (siêu êm)',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '150 kVA',
    specs: [
      { label: 'Công suất', value: '150 kVA / 120 kW' },
      { label: 'Hãng máy', value: 'Denyo (Japan)' },
      { label: 'Độ ồn', value: 'Siêu êm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện Denyo 150kVA vỏ chống ồn, khởi động nhanh, phù hợp dự phòng cho tòa nhà và công trình.',
  },
  {
    slug: 'may-phat-dien-mtu-1250kva',
    name: 'Máy phát điện MTU 1250kVA',
    categorySlug: 'may-phat-dien',
    brand: 'MTU',
    power: '1250 kVA',
    featured: true,
    specs: [
      { label: 'Công suất', value: '1250 kVA / 1000 kW' },
      { label: 'Hãng máy', value: 'MTU (Germany)' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Ứng dụng', value: 'Công nghiệp nặng' },
    ],
    description:
      'Máy phát điện MTU 1250kVA cho tải lớn: nhà máy, khu công nghiệp, dự án dầu khí. Công suất mạnh, bền bỉ.',
  },
  {
    slug: 'may-phat-dien-komatsu-75kva',
    name: 'Máy phát điện Komatsu 75kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Komatsu',
    power: '75 kVA',
    specs: [
      { label: 'Công suất', value: '75 kVA / 60 kW' },
      { label: 'Hãng máy', value: 'Komatsu' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện Komatsu 75kVA gọn nhẹ, cơ động, phù hợp công trình nhỏ và dự phòng.',
  },
  {
    slug: 'may-nen-khi-denyo-dis-390',
    name: 'Máy nén khí Denyo DIS-390SS',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '10.5 bar',
    featured: true,
    specs: [
      { label: 'Lưu lượng', value: '390 cfm' },
      { label: 'Áp suất', value: '10.5 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động (kéo theo)' },
    ],
    description:
      'Máy nén khí Denyo DIS-390SS di động, áp suất ổn định, phục vụ phun cát, khoan, vệ sinh công nghiệp.',
  },
  {
    slug: 'may-nen-khi-airman-750',
    name: 'Máy nén khí Airman 750S (12 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '12 bar',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động' },
    ],
    description:
      'Máy nén khí Airman 750S công suất lớn, áp suất cao, đáp ứng công trình quy mô lớn và ứng dụng UHP.',
  },
  {
    slug: 'may-phun-rua-uhp-densin-c1400',
    name: 'Máy phun nước siêu cao áp UHP Densin C1400',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'Densin',
    power: '38.000 psi',
    featured: true,
    specs: [
      { label: 'Áp suất', value: 'Lên đến 38.000 psi' },
      { label: 'Model', value: 'Densin C1400' },
      { label: 'Ứng dụng', value: 'Cắt/tẩy rửa UHP' },
    ],
    description:
      'Hệ thống phun nước siêu cao áp (UHP) Densin C1400 cho tẩy rửa, cắt, làm sạch bề mặt trong dầu khí và công nghiệp.',
  },
  {
    slug: 'may-hydrotest-10000-psi',
    name: 'Máy Hydrotest 10.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '10.000 psi',
    specs: [
      { label: 'Áp suất', value: '10.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống' },
      { label: 'Kèm theo', value: 'Chart recorder' },
    ],
    description:
      'Máy hydrotest 10.000 psi phục vụ thử áp đường ống, bồn bể trong các dự án dầu khí và công nghiệp.',
  },
  {
    slug: 'may-han-mig-350a',
    name: 'Máy hàn MIG 350A',
    categorySlug: 'may-han',
    brand: 'PMC',
    power: '350A',
    specs: [
      { label: 'Dòng hàn', value: '350A' },
      { label: 'Phương pháp', value: 'MIG' },
      { label: 'Điện áp', value: '380V - 3 pha' },
    ],
    description:
      'Máy hàn MIG 350A cho năng suất cao, mối hàn đẹp, phù hợp kết cấu thép và cơ khí công trình.',
  },
  {
    slug: 'may-han-mig-500a',
    name: 'Máy hàn MIG 500A',
    categorySlug: 'may-han',
    brand: 'PMC',
    power: '500A',
    specs: [
      { label: 'Dòng hàn', value: '500A' },
      { label: 'Phương pháp', value: 'MIG' },
      { label: 'Điện áp', value: '380V - 3 pha' },
    ],
    description:
      'Máy hàn MIG 500A công suất lớn cho kết cấu thép dày, dự án công nghiệp nặng.',
  },
  {
    slug: 'may-han-tig-280a',
    name: 'Máy hàn TIG & điện 280A',
    categorySlug: 'may-han',
    brand: 'PMC',
    power: '280A',
    specs: [
      { label: 'Dòng hàn', value: '280A' },
      { label: 'Phương pháp', value: 'TIG / que' },
      { label: 'Điện áp', value: '220/380V' },
    ],
    description:
      'Máy hàn TIG kết hợp hàn que 280A cho mối hàn tinh xảo trên inox, nhôm và thép.',
  },

  // --- Additional generators from real site ---
  {
    slug: 'may-phat-dien-cummins-250kva',
    name: 'Máy phát điện Cummins US 250kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '250 kVA',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Hãng máy', value: 'Cummins (USA)' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Cummins US 250kVA vận hành bền bỉ, phù hợp nhà xưởng, công trình vừa và khu dân cư.',
  },
  {
    slug: 'may-phat-dien-cummins-250kva-cach-am',
    name: 'Máy phát điện Cummins US 250kVA (thùng siêu cách âm)',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '250 kVA',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Hãng máy', value: 'Cummins (USA)' },
      { label: 'Vỏ máy', value: 'Thùng siêu cách âm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Cummins 250kVA thùng siêu cách âm, phù hợp toà nhà, khu dân cư, sự kiện yêu cầu độ ồn thấp.',
  },
  {
    slug: 'may-phat-dien-cummins-350kva',
    name: 'Máy phát điện Cummins 350kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '350 kVA',
    specs: [
      { label: 'Công suất', value: '350 kVA / 280 kW' },
      { label: 'Hãng máy', value: 'Cummins (USA)' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Cummins 350kVA công suất trung cao, đáp ứng nhà máy sản xuất và khu công nghiệp.',
  },
  {
    slug: 'may-phat-dien-cummins-687kva',
    name: 'Máy phát điện Cummins US 687kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '687 kVA',
    specs: [
      { label: 'Công suất', value: '687 kVA / 550 kW' },
      { label: 'Hãng máy', value: 'Cummins (USA)' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Cummins 687kVA công suất lớn, phục vụ nhà máy công nghiệp, dự án dầu khí và cảng biển.',
  },
  {
    slug: 'may-phat-dien-genset-550kva-60hz',
    name: 'Máy phát điện Genset 550kVA (60Hz, 440V)',
    categorySlug: 'may-phat-dien',
    brand: 'Genset',
    power: '550 kVA',
    specs: [
      { label: 'Công suất', value: '550 kVA / 440 kW' },
      { label: 'Tần số', value: '60 Hz' },
      { label: 'Điện áp', value: '440V' },
      { label: 'Ứng dụng', value: 'Offshore / xuất khẩu' },
    ],
    description: 'Máy phát điện Genset 550kVA chuẩn 60Hz/440V, phù hợp dự án offshore, nước ngoài và ứng dụng đặc thù.',
  },
  {
    slug: 'may-phat-dien-denyo-45kva',
    name: 'Máy phát điện Denyo 45kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '45 kVA',
    specs: [
      { label: 'Công suất', value: '45 kVA / 36 kW' },
      { label: 'Hãng máy', value: 'Denyo (Japan)' },
      { label: 'Độ ồn', value: 'Siêu êm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Denyo 45kVA nhỏ gọn, cơ động, phù hợp công trình nhỏ, văn phòng và sự kiện ngoài trời.',
  },
  {
    slug: 'may-phat-dien-denyo-75kva',
    name: 'Máy phát điện Denyo 75kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '75 kVA',
    specs: [
      { label: 'Công suất', value: '75 kVA / 60 kW' },
      { label: 'Hãng máy', value: 'Denyo (Japan)' },
      { label: 'Độ ồn', value: 'Siêu êm' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Denyo 75kVA vỏ cách âm, vận hành êm ái, lý tưởng cho nhà xưởng và khu dân cư.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-50kva',
    name: 'Máy phát điện Mitsubishi 50kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '50 kVA',
    specs: [
      { label: 'Công suất', value: '50 kVA / 40 kW' },
      { label: 'Hãng máy', value: 'Mitsubishi' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Mitsubishi 50kVA gọn nhẹ, tiết kiệm nhiên liệu, phù hợp hộ gia đình và văn phòng nhỏ.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-90kva',
    name: 'Máy phát điện Mitsubishi 90kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '90 kVA',
    specs: [
      { label: 'Công suất', value: '90 kVA / 72 kW' },
      { label: 'Hãng máy', value: 'Mitsubishi' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Mitsubishi 90kVA bền bỉ, vận hành ổn định, phù hợp nhà xưởng và công trình xây dựng.',
  },
  {
    slug: 'may-phat-dien-isuzu-45kva',
    name: 'Máy phát điện Isuzu 45kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Isuzu',
    power: '45 kVA',
    specs: [
      { label: 'Công suất', value: '45 kVA / 36 kW' },
      { label: 'Hãng máy', value: 'Isuzu' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description: 'Máy phát điện Isuzu 45kVA động cơ Nhật Bản bền bỉ, tiêu hao nhiên liệu thấp, cơ động dễ di chuyển.',
  },

  // --- Additional compressors ---
  {
    slug: 'may-nen-khi-airman-sds-850s',
    name: 'Máy nén khí Airman SDS-850S (8 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    featured: true,
    specs: [
      { label: 'Lưu lượng', value: '850 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động diesel' },
    ],
    description: 'Máy nén khí Airman SDS-850S lưu lượng lớn 850 cfm, phù hợp phun cát, khoan và làm sạch công nghiệp.',
  },
  {
    slug: 'may-nen-khi-airman-pdsf-830s',
    name: 'Máy nén khí Airman PDSF-830S (12 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '12 bar',
    specs: [
      { label: 'Lưu lượng', value: '830 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động diesel' },
    ],
    description: 'Máy nén khí Airman PDSF-830S áp suất 12 bar, phù hợp ứng dụng áp cao tại cảng biển và công nghiệp nặng.',
  },
  {
    slug: 'may-nen-khi-denyo-dis-765us',
    name: 'Máy nén khí Denyo DIS-765US (13 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '13 bar',
    specs: [
      { label: 'Lưu lượng', value: '765 cfm' },
      { label: 'Áp suất', value: '13 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động — cấp hải dương' },
    ],
    description: 'Máy nén khí Denyo DIS-765US chuẩn hải dương (offshore), 13 bar, dùng cho tàu khoan và dự án cảng.',
  },
  {
    slug: 'may-nen-khi-airman-pdsg-750s-t',
    name: 'Máy nén khí Airman PDSG-750S-T (15 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '15 bar',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '15 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động — áp cao' },
    ],
    description: 'Máy nén khí Airman PDSG-750S-T áp suất cao 15 bar, phục vụ UHP, thử thủy lực và ứng dụng áp cao chuyên biệt.',
  },
  {
    slug: 'may-nen-khi-airman-pdsf-750s',
    name: 'Máy nén khí Airman PDSF-750S (12 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '12 bar',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động diesel' },
    ],
    description: 'Máy nén khí Airman PDSF-750S 12 bar, di động, phục vụ công trình xây dựng và xử lý bề mặt.',
  },
  {
    slug: 'may-nen-khi-denyo-pds-750s',
    name: 'Máy nén khí Denyo PDS-750S (8 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '8 bar',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động diesel' },
    ],
    description: 'Máy nén khí Denyo PDS-750S 8 bar lưu lượng lớn, vận hành ổn định, phù hợp nhiều ứng dụng công nghiệp.',
  },
  {
    slug: 'may-nen-khi-denyo-dis-1300ub',
    name: 'Máy nén khí Denyo DIS-1300UB (13 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '13 bar',
    specs: [
      { label: 'Lưu lượng', value: '1300 cfm' },
      { label: 'Áp suất', value: '13 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động — công suất lớn' },
    ],
    description: 'Máy nén khí Denyo DIS-1300UB lưu lượng 1300 cfm, công suất lớn nhất dòng di động, phục vụ dự án trọng điểm.',
  },
  {
    slug: 'may-nen-khi-airman-655s',
    name: 'Máy nén khí Airman 655S (8 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    specs: [
      { label: 'Lưu lượng', value: '655 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động diesel' },
    ],
    description: 'Máy nén khí Airman 655S gọn nhẹ, dễ di chuyển, phù hợp công trình vừa và nhỏ.',
  },
  {
    slug: 'may-nen-khi-airman-pds175s',
    name: 'Máy nén khí Airman PDS175S (8 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    specs: [
      { label: 'Lưu lượng', value: '175 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động nhỏ' },
    ],
    description: 'Máy nén khí Airman PDS175S nhỏ gọn, lý tưởng cho công việc bảo trì, vệ sinh và ứng dụng áp nhỏ.',
  },
  {
    slug: 'may-nen-khi-airman-pds125s',
    name: 'Máy nén khí Airman PDS125S (8 bar)',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    specs: [
      { label: 'Lưu lượng', value: '125 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Loại', value: 'Di động nhỏ' },
    ],
    description: 'Máy nén khí Airman PDS125S nhỏ gọn, tiết kiệm nhiên liệu, phù hợp sửa chữa và bảo trì công trình.',
  },
  {
    slug: 'may-nen-khi-ingersoll-rand-75kw',
    name: 'Máy nén khí Ingersoll Rand 75kW (cố định)',
    categorySlug: 'may-nen-khi',
    brand: 'Ingersoll Rand',
    power: '75 kW',
    specs: [
      { label: 'Công suất động cơ', value: '75 kW' },
      { label: 'Hãng máy', value: 'Ingersoll Rand (USA)' },
      { label: 'Loại', value: 'Cố định (trạm)' },
      { label: 'Ứng dụng', value: 'Xưởng sản xuất, KCN' },
    ],
    description: 'Máy nén khí cố định Ingersoll Rand 75kW, phù hợp nhà xưởng sản xuất liên tục và khu công nghiệp.',
  },

  // --- Additional UHP / Hydrotest ---
  {
    slug: 'may-hydrotest-30000-psi',
    name: 'Máy Hydrotest 30.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '30.000 psi',
    specs: [
      { label: 'Áp suất', value: '30.000 psi (~2070 bar)' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống cao áp' },
      { label: 'Kèm theo', value: 'Chart recorder 30.000 psi' },
    ],
    description: 'Máy hydrotest 30.000 psi phục vụ thử áp đường ống, van, thiết bị áp lực cao trong dầu khí và hóa chất.',
  },
  {
    slug: 'may-tang-ap-khi-15000-psi',
    name: 'Bơm tăng áp khí 15.000 psi (Gas Booster)',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '15.000 psi',
    specs: [
      { label: 'Áp suất đầu ra', value: '15.000 psi (~1035 bar)' },
      { label: 'Loại', value: 'Gas Booster' },
      { label: 'Ứng dụng', value: 'Nạp khí, thử áp bình khí' },
    ],
    description: 'Bơm tăng áp khí Gas Booster 15.000 psi dùng nạp bình, thử áp thiết bị khí nén và ứng dụng dầu khí.',
  },
  {
    slug: 'may-ghi-bieu-do-ap-suat',
    name: 'Chart Recorder áp suất (6.000 – 30.000 psi)',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '30.000 psi',
    specs: [
      { label: 'Dải đo', value: '6.000 – 30.000 psi' },
      { label: 'Loại', value: 'Ghi biểu đồ áp suất' },
      { label: 'Ứng dụng', value: 'Lưu hồ sơ thử áp' },
    ],
    description: 'Chart Recorder ghi nhận và lưu biểu đồ áp suất trong quá trình hydrotest, đáp ứng yêu cầu hồ sơ nghiệm thu.',
  },

  // --- Additional welding ---
  {
    slug: 'may-phat-han-denyo-dlw300esw',
    name: 'Máy phát hàn Denyo DLW-300ESW',
    categorySlug: 'may-han',
    brand: 'Denyo',
    power: '300A',
    specs: [
      { label: 'Dòng hàn', value: '300A' },
      { label: 'Model', value: 'DLW-300ESW' },
      { label: 'Hãng máy', value: 'Denyo (Japan)' },
      { label: 'Điện áp phụ', value: '220V - 3 pha' },
    ],
    description: 'Máy phát hàn Denyo DLW-300ESW tích hợp máy phát điện phụ 220V, phục vụ hàn và dùng điện đồng thời tại công trình.',
  },
  {
    slug: 'may-phat-han-airman-300a',
    name: 'Máy phát hàn Airman 300A',
    categorySlug: 'may-han',
    brand: 'Airman',
    power: '300A',
    specs: [
      { label: 'Dòng hàn', value: '300A' },
      { label: 'Hãng máy', value: 'Airman (Japan)' },
      { label: 'Điện áp phụ', value: '220V - 3 pha' },
      { label: 'Loại', value: 'Diesel — di động' },
    ],
    description: 'Máy phát hàn Airman 300A diesel di động, phù hợp hàn tại công trường, tàu biển và vị trí không có điện lưới.',
  },
];

// ---- Blog posts (from real site articles) ----
const posts = [
  {
    slug: 'cach-chon-cong-suat-may-phat-dien-cong-nghiep',
    title: 'Cách chọn công suất máy phát điện công nghiệp',
    publishedAt: '2025-06-20T07:00:00Z',
    excerpt: 'Hướng dẫn xác định đúng công suất máy phát điện cần thuê: lập danh sách tải, tra cứu thông số, tính tổng kVA và chọn dự phòng phù hợp.',
    seoDescription: 'Cách chọn công suất máy phát điện công nghiệp phù hợp — hướng dẫn từng bước từ PMC giúp tối ưu chi phí và đảm bảo an toàn.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Khi cần thuê máy phát điện cho công trình hoặc nhà máy, việc chọn đúng công suất là yếu tố quan trọng nhất. Máy quá nhỏ sẽ không đủ tải, máy quá lớn lại lãng phí nhiên liệu và chi phí thuê.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Bước 1: Lập danh sách thiết bị cần cấp điện' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Liệt kê tất cả thiết bị điện sẽ hoạt động đồng thời: động cơ, máy lạnh, đèn chiếu sáng, thiết bị văn phòng. Tra công suất trên nhãn máy hoặc tài liệu kỹ thuật.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Bước 2: Tính tổng công suất và hệ số khởi động' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Động cơ điện khi khởi động tiêu thụ gấp 3–7 lần công suất định mức. Cần cộng thêm hệ số này vào tổng tải để tránh máy phát bị quá tải khi khởi động.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Bước 3: Chọn công suất máy phát có dự phòng 20–30%' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sau khi tính tổng tải thực tế, nên chọn máy phát có công suất lớn hơn 20–30% để đảm bảo vận hành ổn định và kéo dài tuổi thọ máy. Liên hệ PMC để được tư vấn miễn phí.' }] },
    ],
  },
  {
    slug: 'dich-vu-cho-thue-may-phat-dien-chung-cu-can-ho',
    title: 'Dịch vụ cho thuê máy phát điện chung cư, căn hộ',
    publishedAt: '2025-07-02T07:00:00Z',
    excerpt: 'PMC cung cấp giải pháp thuê máy phát điện dự phòng cho chung cư, toà nhà căn hộ — bao gồm khảo sát, lắp đặt, vận hành và bảo trì trong suốt thời gian thuê.',
    seoDescription: 'Cho thuê máy phát điện chung cư, căn hộ tại TP.HCM và miền Nam — PMC khảo sát, lắp đặt, bảo trì tận nơi.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Mất điện tại chung cư cao tầng gây ảnh hưởng lớn đến sinh hoạt cư dân: thang máy ngừng hoạt động, hệ thống bơm nước tắt, camera an ninh mất tín hiệu. Thuê máy phát điện dự phòng là giải pháp tối ưu để đảm bảo continuity.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Quy trình thuê máy phát điện chung cư tại PMC' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '1. Tiếp nhận yêu cầu — 2. Tư vấn công suất & thương hiệu — 3. Khảo sát thực địa — 4. Báo giá chi tiết — 5. Ký hợp đồng — 6. Vận chuyển & lắp đặt — 7. Kiểm tra, bàn giao — 8. Bảo trì định kỳ — 9. Thanh lý hợp đồng.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Cam kết dịch vụ' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'PMC cam kết tư vấn miễn phí, giao máy và lắp đặt không tính phí, sửa chữa trong ngày khi có sự cố, và có thể thay máy nếu thiết bị không đáp ứng yêu cầu.' }] },
    ],
  },
  {
    slug: 'cong-trinh-cho-thue-may-phat-dien-tai-dao-binh-ba-nha-trang',
    title: 'Công trình cho thuê máy phát điện tại đảo Bình Ba, Nha Trang',
    publishedAt: '2025-07-15T07:00:00Z',
    excerpt: 'PMC cung cấp dịch vụ cho thuê và lắp đặt máy phát điện tại đảo Bình Ba (Cam Ranh, Khánh Hoà) — minh chứng khả năng phục vụ công trình vùng sâu, hải đảo.',
    seoDescription: 'PMC cho thuê máy phát điện tại đảo Bình Ba Nha Trang — vận chuyển, lắp đặt và vận hành tận nơi cho công trình hải đảo.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đảo Bình Ba thuộc TP. Cam Ranh, tỉnh Khánh Hoà, nổi tiếng với nghề nuôi tôm hùm. Hệ thống điện lưới tại đảo còn hạn chế, nhiều dự án xây dựng và cơ sở kinh doanh phải sử dụng máy phát điện độc lập.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Thách thức vận chuyển ra đảo' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'PMC đã phối hợp vận chuyển thiết bị bằng tàu ra đảo, đảm bảo máy phát điện đến đúng tiến độ và an toàn. Đội kỹ thuật cũng lưu trú để hỗ trợ vận hành trong giai đoạn đầu.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đây là một trong nhiều dự án PMC thực hiện tại các khu vực xa trung tâm, khẳng định năng lực phục vụ toàn khu vực miền Nam và các tỉnh ven biển.' }] },
    ],
  },
  {
    slug: 'su-co-thuong-gap-khi-su-dung-binh-khi-nen',
    title: 'Sự cố thường gặp khi sử dụng bình khí nén và cách phòng tránh',
    publishedAt: '2025-06-10T07:00:00Z',
    excerpt: 'Tổng hợp các sự cố nguy hiểm thường gặp với bình khí nén: nổ, rò rỉ, cháy — và quy trình vận hành an toàn theo tiêu chuẩn.',
    seoDescription: 'Sự cố bình khí nén thường gặp và cách phòng tránh — hướng dẫn an toàn từ PMC cho công trình và nhà xưởng.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Bình khí nén là thiết bị áp lực, nếu sử dụng không đúng cách có thể gây nổ, cháy hoặc rò rỉ khí độc. Dưới đây là các sự cố thường gặp và biện pháp phòng tránh.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Các nguy cơ chính' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '• Nổ bình do nhiệt, va đập hoặc ăn mòn\n• Rò rỉ khí gây ngạt hoặc bắt lửa\n• Điện rò do cách điện kém\n• Van an toàn hỏng không xả được áp dư' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Quy tắc vận hành an toàn' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '• Kiểm tra đồng hồ áp, van an toàn hàng ngày\n• Đặt bình cách nguồn nhiệt tối thiểu 5m\n• Không hàn bình khi còn áp\n• Kiểm định áp kế ít nhất 1 năm/lần\n• Dừng ngay khi áp vượt ngưỡng hoặc phát hiện nứt, rỉ sét' }] },
    ],
  },
  {
    slug: 'ung-dung-may-nen-khi-trong-xu-ly-nuoc-thai',
    title: 'Ứng dụng máy nén khí trong xử lý nước thải',
    publishedAt: '2025-05-25T07:00:00Z',
    excerpt: 'Máy nén khí đóng vai trò quan trọng trong hệ thống xử lý nước thải công nghiệp — cấp khí cho bể aerotank, bơm bùn và các công đoạn oxy hoá.',
    seoDescription: 'Ứng dụng máy nén khí trong xử lý nước thải công nghiệp — PMC cho thuê máy nén khí phù hợp nhà máy, KCN tại miền Nam.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Trong hệ thống xử lý nước thải công nghiệp, máy nén khí cung cấp oxy cho vi sinh vật phân huỷ chất ô nhiễm tại bể aerotank — một trong những công đoạn cốt lõi của quá trình xử lý sinh học.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Vai trò của máy nén khí' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '• Cấp khí bể aerotank (thổi khí khuếch tán)\n• Vận hành bơm màng khí nén\n• Cấp khí rửa ngược lọc cát, lọc sinh học\n• Hỗ trợ quá trình keo tụ và tuyển nổi (DAF)' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Chọn máy nén khí phù hợp' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tuỳ theo lưu lượng nước thải và công suất bể, PMC tư vấn lựa chọn máy nén khí cố định (Ingersoll Rand, Hitachi) hoặc di động (Airman, Denyo) phù hợp với từng giai đoạn dự án.' }] },
    ],
  },
  {
    slug: 'cach-lua-chon-vo-cach-am-may-phat-dien',
    title: 'Cách lựa chọn vỏ cách âm máy phát điện phù hợp',
    publishedAt: '2025-06-05T07:00:00Z',
    excerpt: 'So sánh các loại vỏ cách âm máy phát điện: vỏ thép mạ, vỏ inox, vỏ composite — và tiêu chí chọn theo môi trường sử dụng.',
    seoDescription: 'Hướng dẫn chọn vỏ cách âm máy phát điện phù hợp cho khu dân cư, nhà máy và công trình ngoài trời.',
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Vỏ cách âm (soundproof enclosure) giúp giảm tiếng ồn máy phát điện từ 85–100 dB xuống còn 65–75 dB, đáp ứng tiêu chuẩn môi trường tại khu dân cư và toà nhà.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Các loại vỏ phổ biến' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '• Vỏ thép mạ kẽm: giá thành thấp, phù hợp trong nhà và công trình tạm\n• Vỏ inox: chống ăn mòn tốt, phù hợp vùng biển, ven sông\n• Vỏ composite: nhẹ, bền, cách nhiệt tốt, chi phí cao hơn' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Tiêu chí lựa chọn' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Xem xét: vị trí đặt máy (trong nhà / ngoài trời), mức độ ẩm muối (vùng biển cần inox), yêu cầu độ ồn tối đa và ngân sách. PMC tư vấn miễn phí và có sẵn nhiều loại vỏ để lựa chọn.' }] },
    ],
  },
];

// ---- Projects (from chothuethietbipmc.com) ----
const projects = [
  {
    slug: 'hudeco-thu-dau-mot-binh-duong',
    title: 'HuDeCo Thủ Dầu 1, Bình Dương — Máy phát điện 300kVA',
    publishedAt: '2025-04-10T07:00:00Z',
    excerpt: 'Cung cấp và lắp đặt máy phát điện 300kVA cho dự án nhà ở thương mại HuDeCo tại Thủ Dầu Một, Bình Dương. Giao lắp đúng tiến độ, vận hành ổn định suốt thời gian thi công.',
    client: 'HuDeCo Bình Dương',
    location: 'Thủ Dầu Một, Bình Dương',
    equipment: 'Máy phát điện 300kVA',
  },
  {
    slug: 'ptsc-cang-vung-tau-airman-pdsf830',
    title: 'PTSC Cảng Vũng Tàu — Máy nén khí Airman PDSF830',
    publishedAt: '2025-03-20T07:00:00Z',
    excerpt: 'Cho thuê máy nén khí Airman PDSF830 phục vụ công tác phun cát làm sạch tàu tại cảng PTSC Vũng Tàu. Thiết bị hoạt động liên tục 24/7 trong điều kiện cảng biển.',
    client: 'PTSC',
    location: 'Cảng PTSC, Vũng Tàu',
    equipment: 'Máy nén khí Airman PDSF830',
  },
  {
    slug: 'offshore-may-nen-khi-denyo-dis-765us',
    title: 'Dự án Offshore — Máy nén khí Denyo DIS-765US',
    publishedAt: '2025-02-15T07:00:00Z',
    excerpt: 'Cung cấp máy nén khí Denyo DIS-765US chuẩn hải dương (offshore) cho dự án ngoài khơi. Thiết bị đáp ứng tiêu chuẩn an toàn biển khắt khe, vận hành ổn định trên giàn.',
    client: 'Dự án offshore',
    location: 'Ngoài khơi, miền Nam',
    equipment: 'Máy nén khí Denyo DIS-765US 13 bar',
  },
  {
    slug: 'pvd6-may-hydrotest-uhp',
    title: 'PVD6 — Hệ thống UHP & Hydrotest',
    publishedAt: '2025-01-08T07:00:00Z',
    excerpt: 'Triển khai hệ thống phun nước siêu cao áp (UHP) và hydrotest phục vụ kiểm tra đường ống cho giàn khoan PVD6. Áp suất kiểm tra lên đến 10.000 psi, đạt tiêu chuẩn dầu khí.',
    client: 'PVD6',
    location: 'Giàn khoan PVD6, ngoài khơi Vũng Tàu',
    equipment: 'Máy hydrotest UHP 10.000 psi',
  },
  {
    slug: 'deepventure-tau-khoan-may-han',
    title: 'Deepventure — Tàu khoan, máy phát hàn & cáp hàn',
    publishedAt: '2024-12-05T07:00:00Z',
    excerpt: 'Cung cấp máy phát hàn và hệ thống cáp hàn chuyên dụng cho tàu khoan Deepventure. Thiết bị đáp ứng tiêu chuẩn hàng hải, hàn kết cấu thép trên biển.',
    client: 'Deepventure',
    location: 'Tàu khoan Deepventure',
    equipment: 'Máy phát hàn + cáp hàn MIG',
  },
  {
    slug: 'xu-ly-nuoc-thai-hcm-may-han-mig',
    title: 'Nhà máy xử lý nước thải TP.HCM — Máy hàn MIG & cáp',
    publishedAt: '2024-11-20T07:00:00Z',
    excerpt: 'Cho thuê máy hàn MIG và hệ thống cáp hàn phục vụ thi công bể xử lý nước thải tại TP.HCM. Đội kỹ thuật PMC hỗ trợ lắp đặt và vận hành tại công trường.',
    client: 'Ban quản lý dự án xử lý nước thải TP.HCM',
    location: 'TP. Hồ Chí Minh',
    equipment: 'Máy hàn MIG + cáp hàn',
  },
  {
    slug: 'dai-quang-minh-hcm-ingersoll-rand-75kw',
    title: 'Đại Quang Minh TP.HCM — Máy nén khí Ingersoll Rand 75kW',
    publishedAt: '2024-10-14T07:00:00Z',
    excerpt: 'Cung cấp máy nén khí cố định Ingersoll Rand 75kW cho dự án Đại Quang Minh tại TP.HCM. Thiết bị vận hành liên tục phục vụ thi công kết cấu và hoàn thiện công trình.',
    client: 'Đại Quang Minh',
    location: 'TP. Hồ Chí Minh',
    equipment: 'Máy nén khí Ingersoll Rand 75kW',
  },
];

// ---- Settings singleton (from src/config/site.ts) ----
const settings = {
  companyName: 'Công ty TNHH P.M.C',
  brand: 'PMC',
  hotline: '0936899431',
  email: 'pmc@pmcvn.com',
  zaloUrl: 'https://zalo.me/0936899431',
  locations: [
    {
      name: 'Văn phòng TP.HCM',
      address: '246/40A11 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh, TP.HCM',
      phone: '02835141558',
    },
    {
      name: 'Trụ sở Vũng Tàu',
      address: '1591A Đường 30/4, P.12, TP Vũng Tàu, BR-VT',
      phone: '02543839699',
    },
  ],
};

// ---- Images: uploaded during `sanity dataset import` via _sanityAsset refs ----
// Local files under /public are attached so imported content has real photos.
const asset = (rel) => ({
  _type: 'image',
  _sanityAsset: `image@file://${join(repoRoot, 'public', rel)}`,
});
const E = 'images/equipment';
const C = 'images/categories';
const categoryImage = {
  'may-phat-dien': `${C}/may-phat-dien.jpg`,
  'may-nen-khi': `${C}/may-nen-khi.jpg`,
  'may-phun-rua-ap-luc-cao': `${C}/phun-rua-uhp.jpg`,
  'may-han': `${C}/may-han.jpg`,
};
const equipmentImages = {
  'may-phat-dien-cummins-550kva': [`${E}/mpd-cummins-550kva.jpg`, `${E}/mpd-mtu-1250kva.jpg`, `${E}/mpd-mitsubishi-300kva.jpg`, `${C}/may-phat-dien.jpg`],
  'may-phat-dien-mitsubishi-300kva': [`${E}/mpd-mitsubishi-300kva.jpg`, `${E}/mpd-denyo-150kva.jpg`, `${E}/mpd-cummins-550kva.jpg`],
  'may-phat-dien-denyo-100kva': [`${E}/mpd-denyo-100kva.jpg`, `${E}/mpd-denyo-150kva.jpg`, `${E}/mpd-komatsu-75kva.jpg`],
  'may-phat-dien-denyo-150kva': [`${E}/mpd-denyo-150kva.jpg`, `${E}/mpd-denyo-100kva.jpg`, `${E}/mpd-mitsubishi-300kva.jpg`],
  'may-phat-dien-mtu-1250kva': [`${E}/mpd-mtu-1250kva.jpg`, `${E}/mpd-cummins-550kva.jpg`, `${C}/may-phat-dien.jpg`],
  'may-phat-dien-komatsu-75kva': [`${E}/mpd-komatsu-75kva.jpg`, `${E}/mpd-denyo-100kva.jpg`],
  'may-nen-khi-denyo-dis-390': [`${E}/mnk-denyo-390.jpg`, `${E}/mnk-airman-750.jpg`, `${C}/may-nen-khi.jpg`],
  'may-nen-khi-airman-750': [`${E}/mnk-airman-750.jpg`, `${E}/mnk-denyo-390.jpg`, `${C}/may-nen-khi.jpg`],
  'may-phun-rua-uhp-densin-c1400': [`${E}/uhp-densin-c1400.jpg`, `${E}/uhp-hydrotest-10000.jpg`, `${C}/phun-rua-uhp.jpg`],
  'may-hydrotest-10000-psi': [`${E}/uhp-hydrotest-10000.jpg`, `${E}/uhp-densin-c1400.jpg`],
  'may-han-mig-350a': [`${E}/mh-mig-350a.jpg`, `${E}/mh-mig-500a.jpg`, `${E}/mh-tig-280a.jpg`],
  'may-han-mig-500a': [`${E}/mh-mig-500a.jpg`, `${E}/mh-mig-350a.jpg`, `${E}/mh-tig-280a.jpg`],
  'may-han-tig-280a': [`${E}/mh-tig-280a.jpg`, `${E}/mh-mig-350a.jpg`],
};

// ---- Build documents ----
const docs = [];

categories.forEach((c, i) => {
  docs.push({
    _id: `category-${c.slug}`,
    _type: 'category',
    name: c.name,
    slug: { _type: 'slug', current: c.slug },
    description: c.description,
    order: i,
    ...(categoryImage[c.slug] ? { image: asset(categoryImage[c.slug]) } : {}),
  });
});

equipment.forEach((e) => {
  const imgs = equipmentImages[e.slug] || [];
  docs.push({
    _id: `equipment-${e.slug}`,
    _type: 'equipment',
    name: e.name,
    slug: { _type: 'slug', current: e.slug },
    category: { _type: 'reference', _ref: `category-${e.categorySlug}` },
    brand: e.brand,
    power: e.power,
    featured: Boolean(e.featured),
    specs: e.specs.map((s) => ({ _type: 'spec', ...s })),
    description: e.description,
    ...(imgs.length ? { images: imgs.map((p) => ({ ...asset(p), _key: p.replace(/\W/g, '') })) } : {}),
  });
});

docs.push({
  _id: 'settings',
  _type: 'settings',
  companyName: settings.companyName,
  brand: settings.brand,
  hotline: settings.hotline,
  email: settings.email,
  zaloUrl: settings.zaloUrl,
  locations: settings.locations.map((l) => ({ _type: 'location', ...l })),
});

projects.forEach((p) => {
  docs.push({
    _id: `project-${p.slug}`,
    _type: 'project',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    publishedAt: p.publishedAt,
    excerpt: p.excerpt,
    client: p.client,
    location: p.location,
    equipment: p.equipment,
  });
});

posts.forEach((p) => {
  docs.push({
    _id: `post-${p.slug}`,
    _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    publishedAt: p.publishedAt,
    excerpt: p.excerpt,
    seoDescription: p.seoDescription,
    body: p.body.map((block, i) => ({
      ...block,
      _key: `block${i}`,
      markDefs: [],
      children: block.children.map((child, j) => ({ ...child, _key: `child${i}${j}`, marks: [] })),
    })),
  });
});

// ---- Write NDJSON ----
const ndjson = docs.map((d) => JSON.stringify(d)).join('\n') + '\n';
const outDir = join(repoRoot, 'sanity');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'seed.ndjson');
writeFileSync(outPath, ndjson, 'utf8');

console.log(
  `Wrote ${docs.length} documents to ${outPath} ` +
    `(${categories.length} categories + ${equipment.length} equipment + ${projects.length} projects + ${posts.length} posts + 1 settings)`,
);
