import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

const DESC =
  'Cho thuê máy hàn MIG, TIG và máy hàn kéo theo máy phát. Đáp ứng kết cấu thép, cơ khí công trình và dự án công nghiệp. Giao tận nơi.';

export const metadata: Metadata = {
  title: 'Cho thuê máy hàn',
  description: DESC,
  alternates: { canonical: '/cho-thue-may-han/' },
  openGraph: {
    title: 'Cho thuê máy hàn | PMC',
    description: DESC,
    url: 'https://chothuethietbipmc.com/cho-thue-may-han/',
  },
};

export default function Page() {
  return <CategoryView slug="may-han" />;
}
