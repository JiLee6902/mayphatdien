import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

export const metadata: Metadata = {
  title: 'Cho thuê máy nén khí | PMC',
  description:
    'Cho thuê máy nén khí di động & cố định 8 – 15 bar. Phục vụ phun cát, khoan, vệ sinh công nghiệp và ứng dụng UHP. Giao lắp tận công trình.',
};

export default function Page() {
  return <CategoryView slug="may-nen-khi" />;
}
