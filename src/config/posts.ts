import type { PortableTextBlock } from '@portabletext/types';

export const postHref = (slug: string) => `/tin-tuc/${slug}/`;

export interface Post {
  slug: string;
  title: string;
  date: string; // display string, e.g. "15/07/2025"
  excerpt: string;
  image: string;
  body?: PortableTextBlock[]; // rich text (CMS only)
}

// Static fallback used when the CMS has no `post` documents yet.
export const posts: Post[] = [
  {
    slug: 'thue-hay-mua-may-phat-dien',
    title: 'Thuê hay mua máy phát điện?',
    date: '15/07/2025',
    excerpt:
      'So sánh chi phí, hiệu quả và tính linh hoạt giữa thuê và mua máy phát điện cho từng loại công trình.',
    image: '/images/categories/may-phat-dien.jpg',
  },
  {
    slug: 'chon-cong-suat-may-phat-dien-theo-tai',
    title: 'Chọn công suất máy phát điện theo tải',
    date: '02/07/2025',
    excerpt:
      'Hướng dẫn tính toán công suất phù hợp để tránh quá tải và tối ưu chi phí nhiên liệu.',
    image: '/images/hero-genset.jpg',
  },
  {
    slug: 'bao-duong-may-nen-khi-dung-cach',
    title: 'Bảo dưỡng máy nén khí đúng cách',
    date: '20/06/2025',
    excerpt:
      'Quy trình bảo dưỡng định kỳ giúp máy nén khí vận hành ổn định và kéo dài tuổi thọ.',
    image: '/images/categories/may-nen-khi.jpg',
  },
  {
    slug: 'ung-dung-phun-rua-ap-luc-cao-uhp',
    title: 'Ứng dụng phun rửa áp lực cao (UHP) trong công nghiệp',
    date: '05/06/2025',
    excerpt:
      'Vì sao UHP là giải pháp làm sạch hiệu quả cho đường ống, bồn bể và bề mặt kim loại.',
    image: '/images/categories/phun-rua-uhp.jpg',
  },
  {
    slug: 'kinh-nghiem-chon-may-han-cong-trinh',
    title: 'Kinh nghiệm chọn máy hàn cho công trình',
    date: '22/05/2025',
    excerpt:
      'Các tiêu chí lựa chọn máy hàn theo vật liệu, độ dày và điều kiện thi công thực tế.',
    image: '/images/categories/may-han.jpg',
  },
  {
    slug: 'chuan-bi-mat-bang-lap-dat-thiet-bi',
    title: 'Chuẩn bị mặt bằng trước khi lắp đặt thiết bị',
    date: '08/05/2025',
    excerpt:
      'Những lưu ý về không gian, thông gió và an toàn khi tiếp nhận thiết bị công nghiệp.',
    image: '/images/categories/may-nen-khi.jpg',
  },
];
