import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

const DESC =
  'Cho thuê máy nén khí di động & cố định 8 – 15 bar. Phục vụ phun cát, khoan, vệ sinh công nghiệp và ứng dụng UHP. Giao lắp tận công trình.';

export const metadata: Metadata = {
  title: 'Cho thuê máy nén khí',
  description: DESC,
  alternates: { canonical: '/cho-thue-may-nen-khi/' },
  openGraph: {
    title: 'Cho thuê máy nén khí | PMC',
    description: DESC,
    url: 'https://chothuethietbipmc.com/cho-thue-may-nen-khi/',
  },
};

export default function Page() {
  return <CategoryView slug="may-nen-khi" />;
}
