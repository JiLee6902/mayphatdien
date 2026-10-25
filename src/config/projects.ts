export const projectHref = (slug: string) => `/du-an/${slug}/`;

export interface ProjectEquipmentRef {
  slug: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  image: string;
  desc: string;
  gallery?: string[]; // real on-site deployment photos
  equipmentUsed?: ProjectEquipmentRef[];
}

// Equipment chip helpers (slugs verified against equipment.ts).
const GEN_250 = { slug: 'may-phat-dien-mitsubishi-250kva', name: 'Máy phát điện Mitsubishi 250kVA' };
const GEN_300 = { slug: 'may-phat-dien-mitsubishi-300kva', name: 'Máy phát điện Mitsubishi 300kVA' };
const GEN_350 = { slug: 'may-phat-dien-cummins-350kva-nta855', name: 'Máy phát điện Cummins 350kVA' };
const GEN_150 = { slug: 'may-phat-dien-denyo-150kva-6db10', name: 'Máy phát điện Denyo 150kVA' };
const AIR_830 = { slug: 'may-nen-khi-airman-pdsf830s-12bar', name: 'Máy nén khí Airman PDSF830S' };
const AIR_765 = { slug: 'may-nen-khi-denyo-dis765us-13bar', name: 'Máy nén khí Denyo DIS765US' };
const WELD_500 = { slug: 'may-han-mig-500a', name: 'Máy hàn MIG 500A' };

// Real PMC projects — photos are genuine on-site deployment shots from PMC's
// field archive (crews, geotags, client/contractor branding visible). This is
// the company's proof-of-capability portfolio, the strongest trust signal for
// B2B customers vetting a supplier.
export const projects: Project[] = [
  {
    slug: 'san-bay-long-thanh',
    title: 'Sân bay Quốc tế Long Thành',
    location: 'Long Thành, Đồng Nai',
    image: '/images/projects/san-bay-long-thanh/hero.jpg',
    desc: 'Cấp máy phát điện phục vụ thi công cho gói thầu tại đại dự án Sân bay Quốc tế Long Thành — công trình trọng điểm quốc gia. PMC giao lắp bằng xe cẩu chuyên dụng, đấu nối và vận hành ổn định liên tục theo tiến độ nhà thầu.',
    gallery: [
      '/images/projects/san-bay-long-thanh/g1.jpg',
      '/images/projects/san-bay-long-thanh/g2.jpg',
      '/images/projects/san-bay-long-thanh/g3.jpg',
      '/images/projects/san-bay-long-thanh/g4.jpg',
      '/images/projects/san-bay-long-thanh/g5.jpg',
    ],
    equipmentUsed: [GEN_350, GEN_300],
  },
  {
    slug: 'loc-hoa-dau-long-son',
    title: 'Tổ hợp Lọc hóa dầu Long Sơn (LSP)',
    location: 'Long Sơn, Vũng Tàu',
    image: '/images/projects/loc-hoa-dau-long-son/hero.jpg',
    desc: 'Nhiều tổ máy phát điện công suất lớn phục vụ thi công khu A1 và các hạng mục của Tổ hợp Hóa dầu Long Sơn. Môi trường nhà máy hóa dầu đòi hỏi khắt khe về an toàn và độ ổn định nguồn điện — PMC bố trí kỹ thuật trực theo máy, cấp nguồn liên tục.',
    gallery: [
      '/images/projects/loc-hoa-dau-long-son/g1.jpg',
      '/images/projects/loc-hoa-dau-long-son/g2.jpg',
      '/images/projects/loc-hoa-dau-long-son/g3.jpg',
      '/images/projects/loc-hoa-dau-long-son/g4.jpg',
      '/images/projects/loc-hoa-dau-long-son/g5.jpg',
    ],
    equipmentUsed: [GEN_350, GEN_300, GEN_250],
  },
  {
    slug: 'gian-khoan-kinh-ngu',
    title: 'Giàn khoan Kình Ngư Trắng & Nam Kình Ngư',
    location: 'Mỏ ngoài khơi, BR-VT',
    image: '/images/projects/gian-khoan-kinh-ngu/hero.jpg',
    desc: 'Cấp máy phát điện và máy phát hàn cho công tác gia công, lắp dựng kết cấu phục vụ các giàn Kình Ngư Trắng và Nam Kình Ngư. Thiết bị làm việc ổn định trong môi trường dầu khí ngoài khơi, đáp ứng yêu cầu an toàn nghiêm ngặt.',
    gallery: [
      '/images/projects/gian-khoan-kinh-ngu/g1.jpg',
      '/images/projects/gian-khoan-kinh-ngu/g2.jpg',
      '/images/projects/gian-khoan-kinh-ngu/g3.jpg',
      '/images/projects/gian-khoan-kinh-ngu/g4.jpg',
      '/images/projects/gian-khoan-kinh-ngu/g5.jpg',
    ],
    equipmentUsed: [GEN_350, WELD_500],
  },
  {
    slug: 'gian-khoan-lac-da-vang',
    title: 'Giàn khoan Lạc Đà Vàng — PTSC M&C',
    location: 'Ngoài khơi BR-VT',
    image: '/images/projects/gian-khoan-lac-da-vang/hero.jpg',
    desc: 'Tổ máy phát điện dạng container cấp nguồn cho chế tạo, đấu nối kết cấu dự án Lạc Đà Vàng tại bãi chế tạo PTSC M&C. Vỏ container chịu thời tiết, cách âm tốt, phù hợp môi trường công nghiệp nặng và vận hành dài ngày.',
    gallery: [
      '/images/projects/gian-khoan-lac-da-vang/g1.jpg',
      '/images/projects/gian-khoan-lac-da-vang/g2.jpg',
      '/images/projects/gian-khoan-lac-da-vang/g3.jpg',
      '/images/projects/gian-khoan-lac-da-vang/g4.jpg',
    ],
    equipmentUsed: [GEN_350, WELD_500],
  },
  {
    slug: 'gian-khoan-pos',
    title: 'Giàn POS — chế tạo kết cấu dầu khí',
    location: 'Vũng Tàu',
    image: '/images/projects/gian-khoan-pos/hero.jpg',
    desc: 'Máy phát điện phục vụ công tác chế tạo và hoàn thiện kết cấu giàn POS. Cấp nguồn ổn định cho thiết bị hàn, nâng hạ và chiếu sáng thi công trong suốt quá trình gia công.',
    gallery: [
      '/images/projects/gian-khoan-pos/g1.jpg',
      '/images/projects/gian-khoan-pos/g2.jpg',
      '/images/projects/gian-khoan-pos/g3.jpg',
      '/images/projects/gian-khoan-pos/g4.jpg',
      '/images/projects/gian-khoan-pos/g5.jpg',
    ],
    equipmentUsed: [GEN_300, WELD_500],
  },
  {
    slug: 'cang-cai-mep',
    title: 'Cảng nước sâu Cái Mép',
    location: 'Thị Vải – Cái Mép, BR-VT',
    image: '/images/projects/cang-cai-mep/hero.jpg',
    desc: 'Máy phát điện và máy nén khí cấp cho công tác ráp cầu, bốc dỡ và thi công tại cụm cảng nước sâu Cái Mép. PMC vận chuyển bằng xe nâng và cẩu chuyên dụng, lắp đặt ngay tại cầu cảng.',
    gallery: [
      '/images/projects/cang-cai-mep/g1.jpg',
      '/images/projects/cang-cai-mep/g2.jpg',
      '/images/projects/cang-cai-mep/g3.jpg',
      '/images/projects/cang-cai-mep/g4.jpg',
      '/images/projects/cang-cai-mep/g5.jpg',
    ],
    equipmentUsed: [GEN_350, AIR_765],
  },
  {
    slug: 'cang-ptsc-phu-my',
    title: 'Cảng PTSC Phú Mỹ',
    location: 'Phú Mỹ, BR-VT',
    image: '/images/projects/cang-ptsc-phu-my/hero.jpg',
    desc: 'Cho thuê máy phát điện cấp nguồn thi công tại cảng PTSC Phú Mỹ — một trong những cảng dịch vụ dầu khí lớn của khu vực. Giao lắp, đấu nối và bảo trì tại chỗ theo yêu cầu nhà thầu.',
    gallery: [
      '/images/projects/cang-ptsc-phu-my/g1.jpg',
      '/images/projects/cang-ptsc-phu-my/g2.jpg',
      '/images/projects/cang-ptsc-phu-my/g3.jpg',
      '/images/projects/cang-ptsc-phu-my/g4.jpg',
      '/images/projects/cang-ptsc-phu-my/g5.jpg',
    ],
    equipmentUsed: [GEN_300, AIR_830],
  },
  {
    slug: 'cang-quoc-te-long-son',
    title: 'Cảng Quốc tế Long Sơn',
    location: 'Long Sơn, Vũng Tàu',
    image: '/images/projects/cang-quoc-te-long-son/hero.jpg',
    desc: 'Máy phát điện phục vụ thi công hạ tầng cảng và các hạng mục phụ trợ tại Cảng Quốc tế Long Sơn.',
    gallery: [
      '/images/projects/cang-quoc-te-long-son/g1.jpg',
      '/images/projects/cang-quoc-te-long-son/g2.jpg',
      '/images/projects/cang-quoc-te-long-son/g3.jpg',
    ],
    equipmentUsed: [GEN_300],
  },
  {
    slug: 'cang-ba-son',
    title: 'Cảng Ba Son',
    location: 'TP.HCM',
    image: '/images/projects/cang-ba-son/hero.jpg',
    desc: 'Tổ máy phát điện container cấp nguồn cho thi công khu vực nhà máy đóng tàu Ba Son ven sông Sài Gòn.',
    gallery: [
      '/images/projects/cang-ba-son/g1.jpg',
      '/images/projects/cang-ba-son/g2.jpg',
    ],
    equipmentUsed: [GEN_350],
  },
  {
    slug: 'kcn-dong-xuyen',
    title: 'Cảng & KCN Đông Xuyên',
    location: 'TP. Vũng Tàu',
    image: '/images/projects/kcn-dong-xuyen/hero.jpg',
    desc: 'Nhiều đợt cho thuê máy phát điện phục vụ các nhà thầu cơ khí, đóng tàu và chế tạo kết cấu trong Khu công nghiệp Đông Xuyên.',
    gallery: [
      '/images/projects/kcn-dong-xuyen/g1.jpg',
      '/images/projects/kcn-dong-xuyen/g2.jpg',
      '/images/projects/kcn-dong-xuyen/g3.jpg',
      '/images/projects/kcn-dong-xuyen/g4.jpg',
      '/images/projects/kcn-dong-xuyen/g5.jpg',
    ],
    equipmentUsed: [GEN_250, WELD_500],
  },
  {
    slug: 'cao-toc-ben-luc-long-thanh',
    title: 'Cao tốc Bến Lức – Long Thành (đoạn Nhà Bè)',
    location: 'Nhà Bè, TP.HCM',
    image: '/images/projects/cao-toc-ben-luc-long-thanh/hero.jpg',
    desc: 'Máy phát điện cấp nguồn thi công cho gói thầu cao tốc Bến Lức – Long Thành đoạn qua Nhà Bè. Giao lắp cơ động, di chuyển linh hoạt theo công trường trải dài.',
    gallery: [
      '/images/projects/cao-toc-ben-luc-long-thanh/g1.jpg',
      '/images/projects/cao-toc-ben-luc-long-thanh/g2.jpg',
      '/images/projects/cao-toc-ben-luc-long-thanh/g3.jpg',
      '/images/projects/cao-toc-ben-luc-long-thanh/g4.jpg',
      '/images/projects/cao-toc-ben-luc-long-thanh/g5.jpg',
    ],
    equipmentUsed: [GEN_150],
  },
  {
    slug: 'nha-may-aston-phu-my',
    title: 'Nhà máy Aston Phú Mỹ',
    location: 'Phú Mỹ, BR-VT',
    image: '/images/projects/nha-may-aston-phu-my/hero.jpg',
    desc: 'Máy phát điện cấp nguồn dự phòng và thi công phục vụ xây dựng nhà máy tại KCN Phú Mỹ.',
    gallery: [
      '/images/projects/nha-may-aston-phu-my/g1.jpg',
      '/images/projects/nha-may-aston-phu-my/g2.jpg',
      '/images/projects/nha-may-aston-phu-my/g3.jpg',
      '/images/projects/nha-may-aston-phu-my/g4.jpg',
      '/images/projects/nha-may-aston-phu-my/g5.jpg',
    ],
    equipmentUsed: [GEN_300],
  },
  {
    slug: 'nha-may-miko-vsip3',
    title: 'Nhà máy thực phẩm Miko — VSIP 3',
    location: 'Bắc Tân Uyên, Bình Dương',
    image: '/images/projects/nha-may-miko-vsip3/hero.jpg',
    desc: 'Cấp máy phát điện cho thi công và chạy thử dây chuyền tại nhà máy sản xuất thực phẩm Miko, KCN VSIP 3.',
    gallery: [
      '/images/projects/nha-may-miko-vsip3/g1.jpg',
      '/images/projects/nha-may-miko-vsip3/g2.jpg',
      '/images/projects/nha-may-miko-vsip3/g3.jpg',
      '/images/projects/nha-may-miko-vsip3/g4.jpg',
    ],
    equipmentUsed: [GEN_250],
  },
  {
    slug: 'benh-vien-tam-anh',
    title: 'Bệnh viện Đa khoa Tâm Anh',
    location: 'TP.HCM',
    image: '/images/projects/benh-vien-tam-anh/hero.jpg',
    desc: 'Máy phát điện Mitsubishi cách âm cấp nguồn dự phòng cho công trình bệnh viện — nơi đòi hỏi nguồn điện liên tục và vận hành êm, không gây ồn khu vực xung quanh.',
    gallery: [
      '/images/projects/benh-vien-tam-anh/g1.jpg',
      '/images/projects/benh-vien-tam-anh/g2.jpg',
      '/images/projects/benh-vien-tam-anh/g3.jpg',
      '/images/projects/benh-vien-tam-anh/g4.jpg',
      '/images/projects/benh-vien-tam-anh/g5.jpg',
    ],
    equipmentUsed: [GEN_250],
  },
  {
    slug: 'sycamore-capitaland',
    title: 'Khu đô thị Sycamore — CapitaLand',
    location: 'Thủ Dầu Một, Bình Dương',
    image: '/images/projects/sycamore-capitaland/hero.jpg',
    desc: 'Máy phát điện Cummins 350kVA cấp nguồn thi công cho dự án Sycamore của CapitaLand.',
    gallery: [
      '/images/projects/sycamore-capitaland/g1.jpg',
    ],
    equipmentUsed: [GEN_350],
  },
  {
    slug: 'sungroup-vung-tau',
    title: 'Tổ hợp SunGroup Vũng Tàu',
    location: 'TP. Vũng Tàu',
    image: '/images/projects/sungroup-vung-tau/hero.jpg',
    desc: 'Máy phát điện phục vụ thi công các hạng mục thuộc tổ hợp dự án SunGroup tại Vũng Tàu.',
    gallery: [
      '/images/projects/sungroup-vung-tau/g1.jpg',
      '/images/projects/sungroup-vung-tau/g2.jpg',
      '/images/projects/sungroup-vung-tau/g3.jpg',
    ],
    equipmentUsed: [GEN_300],
  },
  {
    slug: 'resort-ho-tram',
    title: 'Resort Ixora & The Grand Hồ Tràm',
    location: 'Xuyên Mộc, BR-VT',
    image: '/images/projects/resort-ho-tram/hero.jpg',
    desc: 'Cấp máy phát điện cho các gói thầu tại tổ hợp nghỉ dưỡng Hồ Tràm (Ixora, Casino Hồ Tràm). Phối hợp cùng nhà thầu lớn, giao lắp và vận hành đúng tiến độ.',
    gallery: [
      '/images/projects/resort-ho-tram/g1.jpg',
      '/images/projects/resort-ho-tram/g2.jpg',
      '/images/projects/resort-ho-tram/g3.jpg',
      '/images/projects/resort-ho-tram/g4.jpg',
      '/images/projects/resort-ho-tram/g5.jpg',
    ],
    equipmentUsed: [GEN_350, GEN_300],
  },
  {
    slug: 'khu-tai-dinh-cu-phuoc-hung',
    title: 'Khu tái định cư Phước Hưng',
    location: 'BR-VT',
    image: '/images/projects/khu-tai-dinh-cu-phuoc-hung/hero.jpg',
    desc: 'Máy phát điện cấp nguồn thi công hạ tầng khu tái định cư Phước Hưng.',
    gallery: [
      '/images/projects/khu-tai-dinh-cu-phuoc-hung/g1.jpg',
      '/images/projects/khu-tai-dinh-cu-phuoc-hung/g2.jpg',
      '/images/projects/khu-tai-dinh-cu-phuoc-hung/g3.jpg',
      '/images/projects/khu-tai-dinh-cu-phuoc-hung/g4.jpg',
      '/images/projects/khu-tai-dinh-cu-phuoc-hung/g5.jpg',
    ],
    equipmentUsed: [GEN_150],
  },
  {
    slug: 'ganh-hao-bac-lieu',
    title: 'Công trình ven biển Gành Hào',
    location: 'Gành Hào, Bạc Liêu',
    image: '/images/projects/ganh-hao-bac-lieu/hero.jpg',
    desc: 'Máy phát điện giao lắp phục vụ thi công công trình tại khu vực Gành Hào, Bạc Liêu. Địa bàn xa, PMC vận chuyển và lắp đặt trọn gói, hỗ trợ kỹ thuật tại chỗ.',
    gallery: [
      '/images/projects/ganh-hao-bac-lieu/g1.jpg',
      '/images/projects/ganh-hao-bac-lieu/g2.jpg',
      '/images/projects/ganh-hao-bac-lieu/g3.jpg',
      '/images/projects/ganh-hao-bac-lieu/g4.jpg',
      '/images/projects/ganh-hao-bac-lieu/g5.jpg',
    ],
    equipmentUsed: [GEN_250],
  },
  {
    slug: 'cau-cua-lap',
    title: 'Cầu Cửa Lấp',
    location: 'TP. Vũng Tàu',
    image: '/images/projects/cau-cua-lap/hero.jpg',
    desc: 'Máy phát điện cấp nguồn cho thi công cầu Cửa Lấp.',
    gallery: [
      '/images/projects/cau-cua-lap/g1.jpg',
      '/images/projects/cau-cua-lap/g2.jpg',
      '/images/projects/cau-cua-lap/g3.jpg',
      '/images/projects/cau-cua-lap/g4.jpg',
      '/images/projects/cau-cua-lap/g5.jpg',
    ],
    equipmentUsed: [GEN_150],
  },
];
