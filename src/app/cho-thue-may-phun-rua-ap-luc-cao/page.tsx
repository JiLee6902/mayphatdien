import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

const DESC =
  'Cho thuê hệ thống phun rửa áp lực cao (UHP) và máy hydrotest nhiều cấp áp suất. Ứng dụng tẩy rửa, cắt, thử áp trong dầu khí và công nghiệp.';

export const metadata: Metadata = {
  title: 'Cho thuê máy phun rửa áp lực cao (UHP)',
  description: DESC,
  alternates: { canonical: '/cho-thue-may-phun-rua-ap-luc-cao/' },
  openGraph: {
    title: 'Cho thuê máy phun rửa áp lực cao (UHP) | PMC',
    description: DESC,
    url: 'https://chothuethietbipmc.com/cho-thue-may-phun-rua-ap-luc-cao/',
  },
};

export default function Page() {
  return <CategoryView slug="may-phun-rua-ap-luc-cao" />;
}
