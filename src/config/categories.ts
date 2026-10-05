export interface Category {
  slug: string; // used to build /cho-thue-<slug>/
  name: string;
  meta: string;
  image: string;
  count?: string; // short inventory badge, e.g. "40+ máy"
}

export const categories: Category[] = [
  {
    slug: 'may-phat-dien',
    name: 'Máy phát điện',
    meta: '10 – 1500 kVA · Cummins, Mitsubishi, Denyo, MTU',
    image: '/images/categories/may-phat-dien.jpg',
    count: '40+ máy',
  },
  {
    slug: 'may-nen-khi',
    name: 'Máy nén khí',
    meta: '8 – 15 bar · di động & cố định',
    image: '/images/categories/may-nen-khi.jpg',
    count: '15+ máy',
  },
  {
    slug: 'may-phun-rua-ap-luc-cao',
    name: 'Phun rửa áp lực cao (UHP)',
    meta: 'Hệ thống UHP & hydrotest · nhiều cấp áp suất',
    image: '/images/categories/phun-rua-uhp.jpg',
    count: 'Nhiều cấp áp',
  },
  {
    slug: 'may-han',
    name: 'Máy hàn',
    meta: 'MIG · TIG · máy hàn kéo theo máy phát',
    image: '/images/categories/may-han.jpg',
    count: 'MIG · TIG',
  },
];

export const categoryHref = (slug: string) => `/cho-thue-${slug}/`;
