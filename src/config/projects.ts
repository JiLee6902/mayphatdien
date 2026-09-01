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

// Static fallback used when the CMS has no `project` documents yet.
export const projects: Project[] = [
  {
    slug: 'may-phat-dien-kcn-dai-quang-minh',
    title: 'Cho thuê máy phát điện KCN Đại Quang Minh',
    location: 'TP. Thủ Đức, TP.HCM',
    image: '/images/categories/may-phat-dien.jpg',
    desc: 'Cấp nguồn dự phòng công suất lớn phục vụ thi công hạ tầng khu đô thị.',
  },
  {
    slug: 'may-nen-khi-du-an-pvd6',
    title: 'Máy nén khí dự án PVD6',
    location: 'Vũng Tàu, BR-VT',
    image: '/images/categories/may-nen-khi.jpg',
    desc: 'Cung cấp khí nén ổn định cho công đoạn phun cát và làm sạch bề mặt.',
  },
  {
    slug: 'he-thong-uhp-nha-may-loc-dau',
    title: 'Hệ thống UHP nhà máy lọc dầu',
    location: 'Đồng Nai',
    image: '/images/categories/phun-rua-uhp.jpg',
    desc: 'Thiết bị phun rửa áp lực siêu cao xử lý cáu cặn đường ống và bồn bể.',
  },
  {
    slug: 'may-han-cong-trinh-cau-cang',
    title: 'Máy hàn công trình cầu cảng',
    location: 'Cần Thơ',
    image: '/images/categories/may-han.jpg',
    desc: 'Bố trí dàn máy hàn di động phục vụ thi công kết cấu thép cầu cảng.',
  },
  {
    slug: 'nguon-du-phong-su-kien-quy-mo-lon',
    title: 'Nguồn dự phòng sự kiện quy mô lớn',
    location: 'Bình Dương',
    image: '/images/hero-genset.jpg',
    desc: 'Máy phát điện cách âm bảo đảm điện liên tục cho sự kiện ngoài trời.',
  },
  {
    slug: 'cum-may-nen-khi-nha-may-san-xuat',
    title: 'Cụm máy nén khí nhà máy sản xuất',
    location: 'Long An',
    image: '/images/categories/may-nen-khi.jpg',
    desc: 'Thuê dài hạn máy nén khí công nghiệp cho dây chuyền sản xuất liên tục.',
  },
];
