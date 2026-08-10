import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

export const metadata: Metadata = {
  title: 'Cho thuê máy phát điện | PMC',
  description:
    'Cho thuê máy phát điện công nghiệp 10 – 1500 kVA: Cummins, Mitsubishi, Denyo, MTU. Sẵn kho, giao lắp và vận hành tận công trình.',
};

export default function Page() {
  return <CategoryView slug="may-phat-dien" />;
}
