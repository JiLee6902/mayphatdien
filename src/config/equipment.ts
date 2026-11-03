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

export const equipmentHref = (slug: string) => `/thiet-bi/${slug}/`;

const DIESEL = { label: 'Nhiên liệu', value: 'Diesel' };
const VOLT = { label: 'Điện áp', value: '380/220V - 50Hz' };

export const equipment: Equipment[] = [
  // ---------------------------------------------------------------- Máy phát điện
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
      { label: 'Động cơ', value: 'MTU (Đức)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Container cách âm' },
      VOLT,
    ],
    description:
      'Tổ máy phát điện công suất cực lớn MTU 1250kVA, động cơ MTU (Đức) đặt trong container cách âm — dòng máy đầu bảng của PMC cho nhà máy, cảng, lọc hóa dầu và dự án đòi hỏi nguồn điện công suất lớn, liên tục.',
  },
  {
    slug: 'may-phat-dien-cummins-qst-1250kva',
    name: 'Máy phát điện Cummins QST 1250kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '1250 kVA',
    image: '/images/equipment/mpd-cummins-qst-1250kva.jpg',
    specs: [
      { label: 'Công suất', value: '1250 kVA / 1000 kW' },
      { label: 'Động cơ', value: 'Cummins QST30' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Container cách âm' },
      VOLT,
    ],
    description:
      'Tổ máy phát điện Cummins QST30 1250kVA đặt trong container cách âm — công suất cực lớn, vận hành dài ngày cho nhà máy, cảng và dự án dầu khí. Cùng với MTU 1250kVA, đây là cặp máy đầu bảng trong đội máy PMC.',
  },
  {
    slug: 'may-phat-dien-perkins-750kva',
    name: 'Máy phát điện Perkins 750kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Perkins',
    power: '750 kVA',
    image: '/images/equipment/mpd-perkins-750kva.jpg',
    featured: true,
    specs: [
      { label: 'Công suất', value: '750 kVA / 600 kW' },
      { label: 'Động cơ', value: 'Perkins (Anh)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Khung hở / có mái che' },
      VOLT,
    ],
    description:
      'Máy phát điện Perkins 750kVA động cơ Anh Quốc, công suất lớn và bền bỉ cho công trình trọng điểm, nhà máy và khu công nghiệp. Sẵn kho, PMC vận chuyển và lắp đặt tận nơi.',
  },
  {
    slug: 'may-phat-dien-cummins-687kva',
    name: 'Máy phát điện Cummins (US) 687kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '687 kVA',
    image: '/images/equipment/mpd-cummins-us-687kva.jpg',
    specs: [
      { label: 'Công suất', value: '687 kVA / 550 kW' },
      { label: 'Động cơ', value: 'Cummins (US)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Cummins (US) 687kVA vỏ siêu cách âm, công suất lớn cho nhà máy, công trình và sự kiện quy mô lớn. Vận hành ổn định, tiết kiệm nhiên liệu.',
  },
  {
    slug: 'may-phat-dien-cummins-550kva',
    name: 'Máy phát điện Cummins (US) 550kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '550 kVA',
    image: '/images/equipment/mpd-cummins-us-550kva.jpg',
    specs: [
      { label: 'Công suất', value: '550 kVA / 440 kW' },
      { label: 'Động cơ', value: 'Cummins (US)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Container cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Cummins (US) 550kVA đặt trong container cách âm, phù hợp nhà máy và công trình công suất lớn cần vận hành dài ngày ngoài trời.',
  },
  {
    slug: 'may-phat-dien-550kva-60hz',
    name: 'Máy phát điện 550kVA (440kW, 60Hz/440V)',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '550 kVA',
    image: '/images/equipment/mpd-genset-550kva.jpg',
    specs: [
      { label: 'Công suất', value: '550 kVA / 440 kW' },
      { label: 'Tần số', value: '60 Hz' },
      { label: 'Điện áp', value: '440V' },
      DIESEL,
    ],
    description:
      'Tổ máy phát điện 550kVA (440kW) chuẩn 60Hz – 440V, phục vụ các dự án và thiết bị yêu cầu nguồn điện 60Hz (dầu khí, hàng hải, thiết bị nhập khẩu).',
  },
  {
    slug: 'may-phat-dien-cummins-250kva',
    name: 'Máy phát điện Cummins (US) 250kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '250 kVA',
    image: '/images/equipment/mpd-cummins-us-250kva.jpg',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Động cơ', value: 'Cummins (US)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Cummins (US) 250kVA vỏ cách âm, lựa chọn phổ biến cho nhà máy, cao ốc và công trình cỡ vừa. Khởi động nhanh, vận hành ổn định.',
  },
  {
    slug: 'may-phat-dien-cummins-250kva-sieu-cach-am',
    name: 'Máy phát điện Cummins (US) 250kVA — thùng siêu cách âm',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '250 kVA',
    image: '/images/equipment/mpd-cummins-us-250kva-cacham.jpg',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Động cơ', value: 'Cummins (US)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Thùng siêu cách âm' },
      VOLT,
    ],
    description:
      'Phiên bản 250kVA với thùng siêu cách âm — độ ồn thấp, lý tưởng cho bệnh viện, khách sạn, khu dân cư và nơi yêu cầu vận hành êm.',
  },
  {
    slug: 'may-phat-dien-cummins-220kva',
    name: 'Máy phát điện Cummins (US) 220kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '220 kVA',
    image: '/images/equipment/mpd-cummins-us-220kva.jpg',
    specs: [
      { label: 'Công suất', value: '220 kVA / 176 kW' },
      { label: 'Động cơ', value: 'Cummins (US)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Cummins (US) 220kVA vỏ cách âm, cân bằng giữa công suất và tính cơ động cho công trình và nhà xưởng cỡ vừa.',
  },
  {
    slug: 'may-phat-dien-denyo-300kva',
    name: 'Máy phát điện Denyo 300kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '300 kVA',
    image: '/images/equipment/mpd-denyo-300kva.jpg',
    specs: [
      { label: 'Công suất', value: '300 kVA / 240 kW' },
      { label: 'Hãng máy', value: 'Denyo (Nhật)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 300kVA nhập Nhật, vỏ siêu cách âm, nổi tiếng bền và êm — lựa chọn tin cậy cho công trình và nhà máy.',
  },
  {
    slug: 'may-phat-dien-denyo-100kva',
    name: 'Máy phát điện Denyo 100kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '100 kVA',
    image: '/images/equipment/mpd-denyo-100kva.jpg',
    specs: [
      { label: 'Công suất', value: '100 kVA / 80 kW' },
      { label: 'Hãng máy', value: 'Denyo (Nhật)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 100kVA nhập Nhật, vỏ siêu cách âm, vận hành êm và tiết kiệm — phù hợp công trình, nhà xưởng và sự kiện cỡ vừa.',
  },
  {
    slug: 'may-phat-dien-denyo-75kva',
    name: 'Máy phát điện Denyo 75kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '75 kVA',
    image: '/images/equipment/mpd-denyo-75kva.jpg',
    specs: [
      { label: 'Công suất', value: '75 kVA / 60 kW' },
      { label: 'Hãng máy', value: 'Denyo (Nhật)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 75kVA nhập Nhật, nhỏ gọn, cơ động và bền bỉ cho công trình vừa và nhỏ, cấp nguồn dự phòng.',
  },
  {
    slug: 'may-phat-dien-denyo-45kva',
    name: 'Máy phát điện Denyo 45kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '45 kVA',
    image: '/images/equipment/mpd-denyo-45kva.jpg',
    specs: [
      { label: 'Công suất', value: '45 kVA / 36 kW' },
      { label: 'Hãng máy', value: 'Denyo (Nhật)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 45kVA nhập Nhật, gọn nhẹ và tiết kiệm nhiên liệu, lý tưởng cho công trình nhỏ, cửa hàng và nhu cầu dự phòng.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-90kva',
    name: 'Máy phát điện Mitsubishi 90kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '90 kVA',
    image: '/images/equipment/mpd-mitsubishi-90kva.jpg',
    specs: [
      { label: 'Công suất', value: '90 kVA / 72 kW' },
      { label: 'Động cơ', value: 'Mitsubishi' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Mitsubishi 90kVA vỏ cách âm, vận hành bền bỉ và êm ái cho công trình, nhà xưởng và sự kiện.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-50kva',
    name: 'Máy phát điện Mitsubishi 50kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '50 kVA',
    image: '/images/equipment/mpd-mitsubishi-50kva.jpg',
    specs: [
      { label: 'Công suất', value: '50 kVA / 40 kW' },
      { label: 'Động cơ', value: 'Mitsubishi' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Mitsubishi 50kVA nhỏ gọn, cơ động, phù hợp công trình nhỏ, cửa hàng và nhu cầu dự phòng ngắn hạn.',
  },
  {
    slug: 'may-phat-dien-isuzu-45kva',
    name: 'Máy phát điện Isuzu 45kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Isuzu',
    power: '45 kVA',
    image: '/images/equipment/mpd-isuzu-45kva.jpg',
    specs: [
      { label: 'Công suất', value: '45 kVA / 36 kW' },
      { label: 'Hãng máy', value: 'Isuzu' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Isuzu 45kVA cơ động, tiết kiệm nhiên liệu, phù hợp công trình nhỏ và dự phòng.',
  },
  {
    slug: 'may-phat-dien-nippon-60kva',
    name: 'Máy phát điện Nippon Sharyo 60kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Nippon Sharyo',
    power: '60 kVA',
    image: '/images/equipment/mpd-nippon-60kva.jpg',
    specs: [
      { label: 'Công suất', value: '60 kVA / 48 kW' },
      { label: 'Hãng máy', value: 'Nippon Sharyo (Nhật)' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Nippon Sharyo 60kVA nhập Nhật, vỏ cách âm, vận hành êm và ổn định cho công trình và nhà xưởng cỡ nhỏ–vừa.',
  },
  {
    slug: 'may-phat-dien-cummins-350kva-nta855',
    name: 'Máy phát điện Cummins 350kVA (NTA855)',
    categorySlug: 'may-phat-dien',
    brand: 'Cummins',
    power: '350 kVA',
    image: '/images/equipment/mpd-cummins-350kva-nta855.jpg',
    featured: true,
    specs: [
      { label: 'Công suất', value: '350 kVA / 280 kW' },
      { label: 'Động cơ', value: 'Cummins NTA855' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện công nghiệp Cummins 350kVA động cơ NTA855, vỏ siêu cách âm, vận hành bền bỉ cho nhà máy, công trình lớn và sự kiện. Sẵn kho, giao lắp và vận hành tận nơi.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-300kva',
    name: 'Máy phát điện Mitsubishi 300kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '300 kVA',
    image: '/images/equipment/mpd-mitsubishi-300kva.jpg',
    featured: true,
    specs: [
      { label: 'Công suất', value: '300 kVA / 240 kW' },
      { label: 'Hãng máy', value: 'Mitsubishi' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Mitsubishi 300kVA vận hành ổn định, tiết kiệm nhiên liệu, phù hợp nhà xưởng và công trình quy mô vừa đến lớn.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-250kva',
    name: 'Máy phát điện Mitsubishi 250kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '250 kVA',
    image: '/images/equipment/mpd-mitsubishi-250kva.jpg',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Hãng máy', value: 'Mitsubishi' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Mitsubishi 250kVA cách âm, đã phục vụ nhiều dự án tại cảng Cái Mép, phù hợp công trình và nhà máy.',
  },
  {
    slug: 'may-phat-dien-mitsubishi-250kva-6d24',
    name: 'Máy phát điện Mitsubishi 250kVA (6D24)',
    categorySlug: 'may-phat-dien',
    brand: 'Mitsubishi',
    power: '250 kVA',
    image: '/images/equipment/mpd-mitsubishi-250kva-6d24.jpg',
    specs: [
      { label: 'Công suất', value: '250 kVA / 200 kW' },
      { label: 'Động cơ', value: 'Mitsubishi 6D24' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Mitsubishi 250kVA động cơ 6D24 bền bỉ, tiết kiệm nhiên liệu, phù hợp cấp nguồn dự phòng dài hạn.',
  },
  {
    slug: 'may-phat-dien-hitachi-150kva',
    name: 'Máy phát điện Hitachi 150kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Hitachi',
    power: '150 kVA',
    image: '/images/equipment/mpd-hitachi-150kva.jpg',
    specs: [
      { label: 'Công suất', value: '150 kVA / 120 kW' },
      { label: 'Hãng máy', value: 'Hitachi' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Hitachi 150kVA vỏ cách âm, khởi động nhanh, phù hợp công trình và nhà máy quy mô vừa.',
  },
  {
    slug: 'may-phat-dien-denyo-150kva-6db10',
    name: 'Máy phát điện Denyo 150kVA (Mitsubishi 6DB10)',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '150 kVA',
    image: '/images/equipment/mpd-denyo-150kva-6db10.jpg',
    featured: true,
    specs: [
      { label: 'Công suất', value: '150 kVA / 120 kW' },
      { label: 'Động cơ', value: 'Mitsubishi 6DB10' },
      DIESEL,
      { label: 'Vỏ máy', value: 'Siêu cách âm' },
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 150kVA động cơ Mitsubishi 6DB10, vỏ siêu cách âm, độ ồn thấp — lý tưởng cho khu dân cư và dự án yêu cầu yên tĩnh.',
  },
  {
    slug: 'may-phat-dien-denyo-hino-90kva',
    name: 'Máy phát điện Denyo Hino 90kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '90 kVA',
    image: '/images/equipment/mpd-denyo-hino-90kva.jpg',
    specs: [
      { label: 'Công suất', value: '90 kVA / 72 kW' },
      { label: 'Động cơ', value: 'Hino DS50' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 90kVA động cơ Hino DS50, vỏ siêu cách âm, cơ động — phù hợp công trình vừa và nhỏ.',
  },
  {
    slug: 'may-phat-dien-komatsu-75kva',
    name: 'Máy phát điện Komatsu 60/75kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Komatsu',
    power: '75 kVA',
    image: '/images/equipment/mpd-komatsu-75kva.jpg',
    specs: [
      { label: 'Công suất', value: '60 - 75 kVA' },
      { label: 'Hãng máy', value: 'Komatsu' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Komatsu 60/75kVA cách âm, vận hành ổn định, phù hợp cấp nguồn dự phòng cho công trình.',
  },
  {
    slug: 'may-phat-dien-denyo-hino-60kva',
    name: 'Máy phát điện Denyo Hino 50/60kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '60 kVA',
    image: '/images/equipment/mpd-denyo-hino-60kva.jpg',
    specs: [
      { label: 'Công suất', value: '50 - 60 kVA' },
      { label: 'Động cơ', value: 'Hino' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 50/60kVA động cơ Hino, vỏ siêu cách âm, cơ động cao — giao lắp nhanh tận công trình.',
  },
  {
    slug: 'may-phat-dien-denyo-isuzu-50kva',
    name: 'Máy phát điện Denyo Isuzu 45/50kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Denyo',
    power: '50 kVA',
    image: '/images/equipment/mpd-denyo-isuzu-50kva.jpg',
    specs: [
      { label: 'Công suất', value: '45 - 50 kVA' },
      { label: 'Động cơ', value: 'Isuzu' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Denyo 45/50kVA động cơ Isuzu, vỏ cách âm, tiết kiệm nhiên liệu — phù hợp công trình nhỏ và sự kiện.',
  },
  {
    slug: 'may-phat-dien-isuzu-25kva',
    name: 'Máy phát điện Isuzu 25kVA',
    categorySlug: 'may-phat-dien',
    brand: 'Isuzu',
    power: '25 kVA',
    image: '/images/equipment/mpd-isuzu-25kva.jpg',
    specs: [
      { label: 'Công suất', value: '25 kVA / 20 kW' },
      { label: 'Hãng máy', value: 'Isuzu' },
      DIESEL,
      VOLT,
    ],
    description:
      'Máy phát điện Isuzu 25kVA nhỏ gọn, cơ động, phù hợp cửa hàng, công trình nhỏ và nhu cầu dự phòng ngắn hạn.',
  },
  {
    slug: 'tu-hoa-dong-bo',
    name: 'Tủ hòa đồng bộ (đến 3200A)',
    categorySlug: 'may-phat-dien',
    brand: 'PMC',
    power: '3200 A',
    image: '/images/equipment/acc-tu-hoa-dong-bo-3200a.jpg',
    specs: [
      { label: 'Dòng định mức', value: 'Đến 3200A' },
      { label: 'Chức năng', value: 'Hòa đồng bộ nhiều tổ máy' },
      { label: 'Ứng dụng', value: 'Ghép tải, dự phòng công suất lớn' },
    ],
    description:
      'Tủ hòa đồng bộ cho phép ghép song song nhiều máy phát điện để cấp một nguồn công suất lớn, liên tục và dự phòng — giải pháp cho nhà máy, cảng và dự án tải lớn. Dòng định mức đến 3200A.',
  },
  {
    slug: 'cap-dong-dien-25-240mm2',
    name: 'Cáp đồng lõi điện từ 25–240mm²',
    categorySlug: 'may-phat-dien',
    brand: 'PMC',
    power: '25–240 mm²',
    image: '/images/equipment/acc-cap-dong.jpg',
    specs: [
      { label: 'Tiết diện', value: '25 – 240 mm²' },
      { label: 'Lõi', value: 'Đồng' },
      { label: 'Ứng dụng', value: 'Đấu nối máy phát → tủ điện / tải' },
    ],
    description:
      'Cáp đồng cho thuê kèm theo máy phát điện, tiết diện từ 25 đến 240mm², đủ chiều dài để đấu nối từ tổ máy đến tủ điện và tải tại công trường.',
  },

  // ---------------------------------------------------------------- Máy nén khí
  {
    slug: 'may-nen-khi-airman-pds125s-8bar',
    name: 'Máy nén khí Airman PDS125S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '125 cfm',
    image: '/images/equipment/mnk-airman-pds125s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '125 cfm (3,5 m³/phút)' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman (Nhật)' },
      DIESEL,
    ],
    description:
      'Máy nén khí Airman PDS125S nhập Nhật, lưu lượng 125cfm ở 8 bar, nhỏ gọn và cơ động — phù hợp phun cát, chạy dụng cụ khí nén và công trình cỡ nhỏ–vừa.',
  },
  {
    slug: 'binh-chua-khi',
    name: 'Bình chứa khí nén',
    categorySlug: 'may-nen-khi',
    brand: 'PMC',
    power: 'Ổn áp khí',
    image: '/images/equipment/acc-binh-chua-khi.jpg',
    specs: [
      { label: 'Chức năng', value: 'Tích & ổn định áp khí' },
      { label: 'Kết hợp', value: 'Đi kèm máy nén khí' },
      { label: 'Ứng dụng', value: 'Giảm dao động áp, bảo vệ thiết bị' },
    ],
    description:
      'Bình chứa khí nén cho thuê kèm máy nén, giúp tích trữ và ổn định áp suất khí, giảm dao động và bảo vệ thiết bị hạ nguồn khi nhu cầu khí thay đổi đột ngột.',
  },
  {
    slug: 'may-nen-khi-airman-pdsf830s-12bar',
    name: 'Máy nén khí Airman PDSF-830S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '12 bar',
    image: '/images/equipment/mnk-airman-pdsf830s.jpg',
    featured: true,
    specs: [
      { label: 'Lưu lượng', value: '830 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman PDSF-830S áp suất 12 bar, lưu lượng lớn, phù hợp phun cát, làm sạch bề mặt và cấp khí công trình.',
  },
  {
    slug: 'may-nen-khi-denyo-dis765us-13bar',
    name: 'Máy nén khí Denyo DIS-765US',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '13 bar',
    image: '/images/equipment/mnk-denyo-dis765us.jpg',
    featured: true,
    specs: [
      { label: 'Lưu lượng', value: '765 cfm' },
      { label: 'Áp suất', value: '13 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Denyo DIS-765US áp suất 13 bar, ổn định, đã phục vụ nhiều dự án cảng và dầu khí tại miền Nam.',
  },
  {
    slug: 'may-nen-khi-airman-pdsg750s-15bar',
    name: 'Máy nén khí Airman PDSG-750S-T',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '15 bar',
    image: '/images/equipment/mnk-airman-pdsg750s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '15 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman PDSG-750S-T áp suất cao 15 bar, đáp ứng công đoạn yêu cầu áp lực lớn như khoan, thử áp.',
  },
  {
    slug: 'may-nen-khi-airman-pdsf750s-12bar',
    name: 'Máy nén khí Airman PDSF-750S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '12 bar',
    image: '/images/equipment/mnk-airman-pdsf750s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '12 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman PDSF-750S 12 bar, lưu lượng lớn, vận hành bền bỉ cho công trình và nhà máy.',
  },
  {
    slug: 'may-nen-khi-airman-sds850s-8bar',
    name: 'Máy nén khí Airman SDS-850S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    image: '/images/equipment/mnk-airman-sds850s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '850 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman SDS-850S lưu lượng 850 cfm, 8 bar — phù hợp cấp khí quy mô lớn cho công trình.',
  },
  {
    slug: 'may-nen-khi-denyo-dis1300ub-13bar',
    name: 'Máy nén khí Denyo DIS-1300UB',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '13 bar',
    image: '/images/equipment/mnk-denyo-dis1300ub.jpg',
    specs: [
      { label: 'Lưu lượng', value: '1300 cfm' },
      { label: 'Áp suất', value: '13 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Denyo DIS-1300UB lưu lượng rất lớn 1300 cfm, đáp ứng dự án quy mô lớn, phun cát và làm sạch diện rộng.',
  },
  {
    slug: 'may-nen-khi-denyo-pds750s-8bar',
    name: 'Máy nén khí Denyo PDS-750S',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '8 bar',
    image: '/images/equipment/mnk-denyo-pds750s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '750 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Denyo PDS-750S 8 bar, 750 cfm, vận hành ổn định cho thi công và cấp khí nhà máy.',
  },
  {
    slug: 'may-nen-khi-airman-655s-8bar',
    name: 'Máy nén khí Airman 655S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    image: '/images/equipment/mnk-airman-655s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '655 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman 655S 8 bar, cơ động, phù hợp đa dạng công trình và nhu cầu cấp khí tạm thời.',
  },
  {
    slug: 'may-nen-khi-denyo-dis390ss-8bar',
    name: 'Máy nén khí Denyo DIS-390SS',
    categorySlug: 'may-nen-khi',
    brand: 'Denyo',
    power: '8 bar',
    image: '/images/equipment/mnk-denyo-dis390ss.jpg',
    specs: [
      { label: 'Lưu lượng', value: '390 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Denyo' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Denyo DIS-390SS 390 cfm, 8 bar, nhỏ gọn cơ động — phù hợp công trình vừa và nhỏ.',
  },
  {
    slug: 'may-nen-khi-airman-pds175s-8bar',
    name: 'Máy nén khí Airman PDS-175S',
    categorySlug: 'may-nen-khi',
    brand: 'Airman',
    power: '8 bar',
    image: '/images/equipment/mnk-airman-pds175s.jpg',
    specs: [
      { label: 'Lưu lượng', value: '175 cfm' },
      { label: 'Áp suất', value: '8 bar' },
      { label: 'Hãng máy', value: 'Airman' },
      { label: 'Loại', value: 'Di động, Diesel' },
    ],
    description:
      'Máy nén khí Airman PDS-175S 175 cfm, 8 bar, nhỏ gọn, dễ di chuyển cho các công việc cấp khí nhẹ.',
  },
  {
    slug: 'may-nen-khi-ingersoll-rand-75kw',
    name: 'Máy nén khí Ingersoll Rand 75kW',
    categorySlug: 'may-nen-khi',
    brand: 'Ingersoll Rand',
    power: '75 kW',
    image: '/images/equipment/mnk-ingersoll-75kw.jpg',
    specs: [
      { label: 'Công suất', value: '75 kW' },
      { label: 'Áp suất', value: '7 - 8 bar' },
      { label: 'Hãng máy', value: 'Ingersoll Rand' },
      { label: 'Loại', value: 'Trục vít, chạy điện' },
    ],
    description:
      'Máy nén khí trục vít Ingersoll Rand 75kW chạy điện, cấp khí liên tục ổn định cho dây chuyền sản xuất trong nhà máy.',
  },
  {
    slug: 'may-nen-khi-ingersoll-rand-55kw',
    name: 'Máy nén khí Ingersoll Rand 55kW',
    categorySlug: 'may-nen-khi',
    brand: 'Ingersoll Rand',
    power: '55 kW',
    image: '/images/equipment/mnk-ingersoll-55kw.jpg',
    specs: [
      { label: 'Công suất', value: '55 kW' },
      { label: 'Áp suất', value: '7 - 8 bar' },
      { label: 'Hãng máy', value: 'Ingersoll Rand' },
      { label: 'Loại', value: 'Trục vít, chạy điện' },
    ],
    description:
      'Máy nén khí trục vít Ingersoll Rand 55kW chạy điện, vận hành êm, phù hợp cấp khí cố định cho nhà máy sản xuất.',
  },
  {
    slug: 'may-nen-khi-hitachi-55kw',
    name: 'Máy nén khí Hitachi 55kW',
    categorySlug: 'may-nen-khi',
    brand: 'Hitachi',
    power: '55 kW',
    image: '/images/equipment/mnk-hitachi-55kw.jpg',
    specs: [
      { label: 'Công suất', value: '55 kW' },
      { label: 'Áp suất', value: '7 - 8 bar' },
      { label: 'Hãng máy', value: 'Hitachi' },
      { label: 'Loại', value: 'Trục vít, chạy điện' },
    ],
    description:
      'Máy nén khí trục vít Hitachi 55kW chạy điện, ổn định và tiết kiệm, đã phục vụ dự án tàu điện ngầm Metro.',
  },
  {
    slug: 'bo-say-khi',
    name: 'Bộ sấy khí',
    categorySlug: 'may-nen-khi',
    brand: 'PMC',
    power: 'Tách ẩm',
    image: '/images/equipment/bo-say-khi.jpg',
    specs: [
      { label: 'Chức năng', value: 'Làm khô, tách ẩm khí nén' },
      { label: 'Ứng dụng', value: 'Phun sơn, phun cát, khí sạch' },
      { label: 'Đi kèm', value: 'Lắp sau máy nén khí' },
    ],
    description:
      'Bộ sấy khí (air dryer) tách ẩm và làm khô khí nén trước khi sử dụng — cho thuê kèm máy nén khí khi công việc đòi hỏi khí sạch, khô như phun sơn, phun cát hay cấp khí cho thiết bị khí nén.',
  },

  // ---------------------------------------------------------------- UHP / Hydrotest
  {
    slug: 'may-ban-nuoc-sieu-cao-ap-uhp-2500bar',
    name: 'Máy bắn nước siêu cao áp UHP 2500 bar',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'UHP',
    power: '2500 bar',
    image: '/images/equipment/uhp-densin-c1400.jpg',
    specs: [
      { label: 'Áp suất', value: 'Đến 2500 bar' },
      { label: 'Công dụng', value: 'Tẩy cáu cặn, sơn, gỉ cứng đầu' },
      { label: 'Ứng dụng', value: 'Bồn bể, đường ống, kết cấu' },
    ],
    description:
      'Hệ thống bắn nước siêu cao áp UHP áp suất đến 2500 bar — xử lý cáu cặn, lớp sơn và gỉ bám chắc trên bồn bể, đường ống và kết cấu trong nhà máy, dầu khí. Vận hành bởi kỹ thuật viên PMC.',
  },
  {
    slug: 'may-ban-nuoc-ap-luc-cao-200-1000bar',
    name: 'Máy bắn nước áp lực cao 200–1000 bar',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'UHP',
    power: '200–1000 bar',
    image: '/images/equipment/uhp-densin-c1400.jpg',
    specs: [
      { label: 'Áp suất', value: '200 – 1000 bar' },
      { label: 'Công dụng', value: 'Vệ sinh, tẩy rửa công nghiệp' },
      { label: 'Ứng dụng', value: 'Bề mặt, thiết bị, sàn nhà máy' },
    ],
    description:
      'Máy bắn nước áp lực cao dải 200–1000 bar cho vệ sinh và tẩy rửa công nghiệp: bề mặt thiết bị, sàn nhà máy, kết cấu — linh hoạt theo yêu cầu áp suất của từng công việc.',
  },
  {
    slug: 'may-phun-nuoc-uhp-densin-c1400',
    name: 'Máy phun nước siêu cao áp UHP Densin C1400',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'Densin',
    power: '1400 bar',
    image: '/images/equipment/uhp-densin-c1400.jpg',
    featured: true,
    specs: [
      { label: 'Áp suất', value: '1400 bar' },
      { label: 'Model', value: 'Densin C1400 (38D)' },
      { label: 'Ứng dụng', value: 'Làm sạch, bóc tách bề mặt' },
    ],
    description:
      'Máy phun nước siêu cao áp UHP Densin C1400 áp lực 1400 bar, xử lý cáu cặn đường ống, bồn bể và làm sạch bề mặt công nghiệp.',
  },
  {
    slug: 'he-thong-hydrotest-30000psi',
    name: 'Hệ thống Hydrotest 30.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '30.000 psi',
    image: '/images/equipment/uhp-hydrotest-30000psi.jpg',
    specs: [
      { label: 'Áp suất', value: '30.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống, bồn bể' },
      { label: 'Loại', value: 'Hydrotest' },
    ],
    description:
      'Hệ thống thử áp Hydrotest 30.000 psi phục vụ kiểm tra áp lực đường ống, van và bồn bể trong công nghiệp dầu khí.',
  },
  {
    slug: 'he-thong-hydrotest-10000psi',
    name: 'Hệ thống Hydrotest 10.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '10.000 psi',
    image: '/images/equipment/uhp-hydrotest-10000psi.jpg',
    specs: [
      { label: 'Áp suất', value: '10.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống, thiết bị' },
      { label: 'Loại', value: 'Hydrotest' },
    ],
    description:
      'Hệ thống thử áp Hydrotest 10.000 psi cho kiểm tra áp lực đường ống và thiết bị áp lực, kèm thiết bị ghi biểu đồ.',
  },
  {
    slug: 'bom-tang-ap-khi-15000psi',
    name: 'Bơm tăng áp khí 15.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '15.000 psi',
    image: '/images/equipment/uhp-gasbooster-15000psi.jpg',
    specs: [
      { label: 'Áp suất', value: '15.000 psi' },
      { label: 'Ứng dụng', value: 'Tăng áp khí, thử áp' },
      { label: 'Loại', value: 'Gas booster' },
    ],
    description:
      'Bơm tăng áp khí (gas booster) 15.000 psi phục vụ nạp và thử áp bằng khí cho các hệ thống áp lực cao.',
  },
  {
    slug: 'thiet-bi-ghi-bieu-do-ap-20000psi',
    name: 'Thiết bị ghi biểu đồ áp 20.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '20.000 psi',
    image: '/images/equipment/uhp-chart-recorder-20000psi.jpg',
    specs: [
      { label: 'Dải đo', value: '20.000 psi' },
      { label: 'Ứng dụng', value: 'Ghi biểu đồ áp suất thử' },
      { label: 'Loại', value: 'Chart recorder' },
    ],
    description:
      'Thiết bị ghi biểu đồ áp suất (chart recorder) dải 20.000 psi, lưu lại dữ liệu áp theo thời gian trong quá trình thử áp.',
  },
  {
    slug: 'he-thong-hydrotest-6000psi',
    name: 'Hệ thống Hydrotest 6.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '6.000 psi',
    image: '/images/equipment/uhp-hydrotest-10000psi.jpg',
    specs: [
      { label: 'Áp suất', value: '6.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp đường ống, thiết bị' },
      { label: 'Loại', value: 'Hydrotest' },
    ],
    description:
      'Hệ thống thử áp Hydrotest 6.000 psi cho kiểm tra áp lực đường ống và thiết bị áp lực ở dải áp vừa, kèm thiết bị ghi biểu đồ.',
  },
  {
    slug: 'he-thong-gas-booster-10000psi',
    name: 'Hệ thống Gas Booster 10.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '10.000 psi',
    image: '/images/equipment/uhp-gasbooster-15000psi.jpg',
    specs: [
      { label: 'Áp suất', value: '10.000 psi' },
      { label: 'Ứng dụng', value: 'Thử áp bằng khí nén' },
      { label: 'Loại', value: 'Gas booster' },
    ],
    description:
      'Hệ thống tăng áp khí (gas booster) 10.000 psi phục vụ nạp và thử áp bằng khí cho đường ống, van và thiết bị áp lực.',
  },
  {
    slug: 'thiet-bi-ghi-bieu-do-ap-30000psi',
    name: 'Thiết bị ghi biểu đồ áp 30.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '30.000 psi',
    image: '/images/equipment/uhp-chart-recorder-30000psi.jpg',
    specs: [
      { label: 'Dải đo', value: '30.000 psi' },
      { label: 'Ứng dụng', value: 'Ghi biểu đồ áp suất thử' },
      { label: 'Loại', value: 'Chart recorder' },
    ],
    description:
      'Thiết bị ghi biểu đồ áp suất (chart recorder) dải 30.000 psi, ghi lại dữ liệu áp theo thời gian khi thử áp cao — phục vụ nghiệm thu đường ống và bồn bể dầu khí.',
  },
  {
    slug: 'thiet-bi-ghi-bieu-do-ap-6000psi',
    name: 'Thiết bị ghi biểu đồ áp 6.000 psi',
    categorySlug: 'may-phun-rua-ap-luc-cao',
    brand: 'PMC',
    power: '6.000 psi',
    image: '/images/equipment/uhp-chart-recorder-20000psi.jpg',
    specs: [
      { label: 'Dải đo', value: '6.000 psi' },
      { label: 'Ứng dụng', value: 'Ghi biểu đồ áp suất thử' },
      { label: 'Loại', value: 'Chart recorder' },
    ],
    description:
      'Thiết bị ghi biểu đồ áp suất (chart recorder) dải 6.000 psi, lưu dữ liệu áp theo thời gian trong quá trình thử áp ở dải áp vừa.',
  },

  // ---------------------------------------------------------------- Máy hàn
  {
    slug: 'may-phat-han-denyo-dlw300esw',
    name: 'Máy phát hàn Denyo DLW300ESW',
    categorySlug: 'may-han',
    brand: 'Denyo',
    power: '300A',
    image: '/images/equipment/mph-denyo-dlw300esw.jpg',
    specs: [
      { label: 'Dòng hàn', value: '300A' },
      { label: 'Hãng máy', value: 'Denyo (Nhật)' },
      DIESEL,
      { label: 'Tính năng', value: 'Vừa hàn vừa phát điện' },
    ],
    description:
      'Máy phát hàn Denyo DLW300ESW chạy diesel — vừa cấp dòng hàn 300A vừa phát điện, cơ động cho công trình ngoài trời, cầu cảng và giàn khoan không có nguồn điện sẵn.',
  },
  {
    slug: 'may-phat-han-airman-300a',
    name: 'Máy phát hàn Airman 300A',
    categorySlug: 'may-han',
    brand: 'Airman',
    power: '300A',
    image: '/images/equipment/mph-denyo-dlw300esw.jpg',
    specs: [
      { label: 'Dòng hàn', value: '300A' },
      { label: 'Hãng máy', value: 'Airman (Nhật)' },
      DIESEL,
      { label: 'Tính năng', value: 'Vừa hàn vừa phát điện' },
    ],
    description:
      'Máy phát hàn Airman 300A chạy diesel — cấp dòng hàn 300A và phát điện phụ, phù hợp thi công hàn tại công trình ngoài trời, cầu cảng và khu vực không có nguồn điện lưới.',
  },
  {
    slug: 'may-han-mig-500a',
    name: 'Máy hàn MIG 500A',
    categorySlug: 'may-han',
    brand: 'MIG',
    power: '500A',
    image: '/images/equipment/mh-mig-500a.jpg',
    specs: [
      { label: 'Dòng hàn', value: '500A' },
      { label: 'Phương pháp', value: 'MIG/MAG' },
      { label: 'Ứng dụng', value: 'Kết cấu thép, công trình' },
    ],
    description:
      'Máy hàn MIG 500A công suất lớn cho thi công kết cấu thép, cầu cảng và nhà xưởng — có thể kéo theo máy phát điện.',
  },
  {
    slug: 'may-han-mig-350a',
    name: 'Máy hàn MIG 350A',
    categorySlug: 'may-han',
    brand: 'MIG',
    power: '350A',
    image: '/images/equipment/mh-mig-350a.jpg',
    specs: [
      { label: 'Dòng hàn', value: '350A' },
      { label: 'Phương pháp', value: 'MIG/MAG' },
      { label: 'Ứng dụng', value: 'Cơ khí, gia công' },
    ],
    description:
      'Máy hàn MIG 350A linh hoạt cho gia công cơ khí, lắp đặt và sửa chữa tại công trình.',
  },
  {
    slug: 'may-han-tig-280a',
    name: 'Máy hàn TIG 280A',
    categorySlug: 'may-han',
    brand: 'TIG',
    power: '280A',
    image: '/images/equipment/mh-tig-280a.jpg',
    specs: [
      { label: 'Dòng hàn', value: '280A' },
      { label: 'Phương pháp', value: 'TIG' },
      { label: 'Ứng dụng', value: 'Hàn inox, mối hàn tinh' },
    ],
    description:
      'Máy hàn TIG 280A cho mối hàn sạch, chính xác trên inox và kim loại mỏng — phù hợp yêu cầu kỹ thuật cao.',
  },
];

export const equipmentByCategory = (categorySlug: string) =>
  equipment.filter((e) => e.categorySlug === categorySlug);

export const getEquipment = (slug: string) =>
  equipment.find((e) => e.slug === slug);

export const featuredEquipment = () => equipment.filter((e) => e.featured);

/** Images for an item's detail gallery. Each product has one real photo. */
export const getImages = (item: Equipment): string[] => [item.image];
