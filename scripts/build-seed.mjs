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

// ---- Write NDJSON ----
const ndjson = docs.map((d) => JSON.stringify(d)).join('\n') + '\n';
const outDir = join(repoRoot, 'sanity');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'seed.ndjson');
writeFileSync(outPath, ndjson, 'utf8');

console.log(
  `Wrote ${docs.length} documents to ${outPath} ` +
    `(${categories.length} categories + ${equipment.length} equipment + 1 settings)`,
);
