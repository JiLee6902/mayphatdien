import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

export const metadata: Metadata = {
  title: 'Cho thuê máy hàn | PMC',
  description:
    'Cho thuê máy hàn MIG, TIG và máy hàn kéo theo máy phát. Đáp ứng kết cấu thép, cơ khí công trình và dự án công nghiệp. Giao tận nơi.',
};

export default function Page() {
  return <CategoryView slug="may-han" />;
}
