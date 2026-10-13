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

  // ---------------------------------------------------------------- Máy nén khí
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

  // ---------------------------------------------------------------- UHP / Hydrotest
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

  // ---------------------------------------------------------------- Máy hàn
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
