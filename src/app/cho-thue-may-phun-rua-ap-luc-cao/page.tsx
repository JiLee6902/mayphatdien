import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

export const metadata: Metadata = {
  title: 'Cho thuê máy phun rửa áp lực cao (UHP) | PMC',
  description:
    'Cho thuê hệ thống phun rửa áp lực cao (UHP) và máy hydrotest nhiều cấp áp suất. Ứng dụng tẩy rửa, cắt, thử áp trong dầu khí và công nghiệp.',
};

export default function Page() {
  return <CategoryView slug="may-phun-rua-ap-luc-cao" />;
}
