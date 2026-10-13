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
  equipmentUsed?: ProjectEquipmentRef[]; // linked equipment (CMS only)
}

// Real projects seeded from chothuethietbipmc.com (static fallback when the
// CMS has no `project` documents yet).
export const projects: Project[] = [
  {
    slug: 'may-phat-dien-cummins-350kva-sycamore-capitaland',
    title: 'Máy phát điện Cummins 350kVA — Sycamore CapitaLand',
    location: 'Bình Dương',
    image: '/images/equipment/mpd-cummins-350kva-nta855.jpg',
    desc: 'Cấp nguồn dự phòng công suất lớn phục vụ thi công dự án Sycamore (CapitaLand) tại Bình Dương.',
  },
  {
    slug: 'may-phat-dien-cang-ptsc-phu-my',
    title: 'Máy phát điện dự án cảng PTSC Phú Mỹ',
    location: 'Phú Mỹ, BR-VT',
    image: '/images/categories/may-phat-dien.jpg',
    desc: 'Cho thuê máy phát điện cấp nguồn thi công tại dự án cảng PTSC Phú Mỹ.',
  },
  {
    slug: 'may-nen-khi-airman-cang-ptsc-vung-tau',
    title: 'Máy nén khí Airman PDSF830 — cảng PTSC Vũng Tàu',
    location: 'Vũng Tàu, BR-VT',
    image: '/images/equipment/mnk-airman-pdsf830s.jpg',
    desc: 'Cung cấp khí nén áp suất cao, ổn định cho công đoạn thi công tại dự án cảng PTSC Vũng Tàu.',
  },
  {
    slug: 'may-phat-dien-1000kva-cang-cai-mep',
    title: 'Máy phát điện 1000kVA cấp cho ráp cầu — cảng Cái Mép',
    location: 'Cái Mép, BR-VT',
    image: '/images/equipment/mpd-mitsubishi-250kva.jpg',
    desc: 'Máy phát điện công suất lớn cấp nguồn cho công tác ráp cầu tại cảng Cái Mép.',
  },
  {
    slug: 'may-nen-khi-750cfm-cang-cai-mep',
    title: 'Máy nén khí 750cfm, 10 bar — cảng Cái Mép',
    location: 'Cái Mép, BR-VT',
    image: '/images/equipment/mnk-denyo-dis765us.jpg',
    desc: 'Cho thuê máy nén khí lưu lượng 750cfm, áp suất 10 bar phục vụ dự án tại cảng Cái Mép.',
  },
  {
    slug: 'he-thong-uhp-du-an-pvd6',
    title: 'Hệ thống UHP — dự án PVD6',
    location: 'Vũng Tàu, BR-VT',
    image: '/images/equipment/uhp-densin-c1400.jpg',
    desc: 'Thiết bị phun rửa áp lực siêu cao (UHP) xử lý cáu cặn đường ống và bồn bể cho dự án PVD6.',
  },
  {
    slug: 'may-nen-khi-hitachi-tau-dien-ngam-metro',
    title: 'Máy nén khí Hitachi 55kW — tàu điện ngầm Metro',
    location: 'TP.HCM',
    image: '/images/equipment/mnk-hitachi-55kw.jpg',
    desc: 'Máy nén khí trục vít 55kW cấp khí ổn định cho dự án tuyến tàu điện ngầm Metro TP.HCM.',
  },
  {
    slug: 'may-nen-khi-ingersoll-nha-may-pepperl',
    title: 'Máy nén khí Ingersoll Rand 55kW — nhà máy Pepperl+Fuchs',
    location: 'TP.HCM',
    image: '/images/equipment/mnk-ingersoll-55kw.jpg',
    desc: 'Cho thuê máy nén khí trục vít 55kW phục vụ dây chuyền tại nhà máy Pepperl+Fuchs Việt Nam.',
  },
  {
    slug: 'may-nen-khi-ingersoll-dai-quang-minh',
    title: 'Máy nén khí Ingersoll Rand 75kW — dự án Đại Quang Minh',
    location: 'TP. Thủ Đức, TP.HCM',
    image: '/images/equipment/mnk-ingersoll-75kw.jpg',
    desc: 'Cung cấp khí nén công suất 75kW cho thi công dự án khu đô thị Đại Quang Minh.',
  },
  {
    slug: 'may-phat-dien-dao-binh-ba',
    title: 'Cho thuê máy phát điện tại đảo Bình Ba',
    location: 'Cam Ranh, Khánh Hòa',
    image: '/images/blog/cong-trinh-may-phat-dien-dao-binh-ba.jpg',
    desc: 'Cung cấp và lắp đặt trọn gói hệ thống máy phát điện cho công trình tại đảo Bình Ba, Nha Trang.',
  },
  {
    slug: 'may-phat-han-tau-khoan-deepventure',
    title: 'Cấp máy phát hàn trên tàu khoan DeepVenture',
    location: 'Ngoài khơi',
    image: '/images/categories/may-han.jpg',
    desc: 'Bố trí máy phát hàn phục vụ công tác hàn, gia công kết cấu trên giàn khoan DeepVenture.',
  },
];
