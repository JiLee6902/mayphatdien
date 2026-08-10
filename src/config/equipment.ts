export interface Spec {
  label: string;
  value: string;
}

export interface Equipment {
  slug: string;
  name: string;
  categorySlug: string; // matches a Category.slug in categories.ts
  brand: string;
  power: string; // primary spec chip, e.g. "550 kVA" or "13 bar"
  image: string;
  featured?: boolean;
  specs: Spec[];
  description: string;
}

export const equipment: Equipment[] = [
  // ---- Máy phát điện ----
  {
    slug: 'may-phat-dien-cummins-550kva',
    name: 'Máy phát điện Cummins US 550kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '550 kVA',
    image: '/images/equipment/mpd-cummins-550kva.jpg',
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
    image: '/images/equipment/mpd-mitsubishi-300kva.jpg',
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
    image: '/images/equipment/mpd-denyo-100kva.jpg',
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
    image: '/images/equipment/mpd-denyo-150kva.jpg',
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
    image: '/images/equipment/mpd-mtu-1250kva.jpg',
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
    image: '/images/equipment/mpd-komatsu-75kva.jpg',
    specs: [
      { label: 'Công suất', value: '75 kVA / 60 kW' },
      { label: 'Hãng máy', value: 'Komatsu' },
      { label: 'Nhiên liệu', value: 'Diesel' },
      { label: 'Điện áp', value: '380/220V - 50Hz' },
    ],
    description:
      'Máy phát điện Komatsu 75kVA gọn nhẹ, cơ động, phù hợp công trình nhỏ và dự phòng.',
  },
  // ---- Máy nén khí ----
  {
    slug: 'may-nen-khi-denyo-dis-390',
    name: 'Máy nén khí Denyo DIS-390SS',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '10.5 bar',
    image: '/images/equipment/mnk-denyo-390.jpg',
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
    image: '/images/equipment/mnk-airman-750.jpg',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động' },
    ],
    description:
      'Máy nén khí Airman 750S công suất lớn, áp suất cao, đáp ứng công trình quy mô lớn và ứng dụng UHP.',
  },
  // ---- Phun rửa áp lực cao (UHP) ----
  {
    slug: 'may-phun-rua-uhp-densin-c1400',
    name: 'Máy phun nước siêu cao áp UHP Densin C1400',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'Densin',
    power: '38.000 psi',
    image: '/images/equipment/uhp-densin-c1400.jpg',
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
    image: '/images/equipment/uhp-hydrotest-10000.jpg',
    specs: [
      { label: 'Áp suất', value: '10.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống' },
      { label: 'Kèm theo', value: 'Chart recorder' },
    ],
    description:
      'Máy hydrotest 10.000 psi phục vụ thử áp đường ống, bồn bể trong các dự án dầu khí và công nghiệp.',
  },
  // ---- Máy hàn ----
  {
    slug: 'may-han-mig-350a',
    name: 'Máy hàn MIG 350A',
    categorySlug: 'may-han',
    brand: 'PMC',
    power: '350A',
    image: '/images/equipment/mh-mig-350a.jpg',
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
    image: '/images/equipment/mh-mig-500a.jpg',
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
    image: '/images/equipment/mh-tig-280a.jpg',
    specs: [
      { label: 'Dòng hàn', value: '280A' },
      { label: 'Phương pháp', value: 'TIG / que' },
      { label: 'Điện áp', value: '220/380V' },
    ],
    description:
      'Máy hàn TIG kết hợp hàn que 280A cho mối hàn tinh xảo trên inox, nhôm và thép.',
  },
];

export const equipmentHref = (slug: string) => `/thiet-bi/${slug}/`;

export const equipmentByCategory = (categorySlug: string) =>
  equipment.filter((e) => e.categorySlug === categorySlug);

export const getEquipment = (slug: string) =>
  equipment.find((e) => e.slug === slug);

export const featuredEquipment = () => equipment.filter((e) => e.featured);
