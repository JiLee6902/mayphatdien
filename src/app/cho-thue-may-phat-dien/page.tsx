import type { Metadata } from 'next';
import { CategoryView } from '@/components/CategoryView';

const DESC =
  'Cho thuê máy phát điện công nghiệp 10 – 1500 kVA: Cummins, Mitsubishi, Denyo, MTU. Sẵn kho, giao lắp và vận hành tận công trình.';

export const metadata: Metadata = {
  title: 'Cho thuê máy phát điện',
  description: DESC,
  alternates: { canonical: '/cho-thue-may-phat-dien/' },
  openGraph: {
    title: 'Cho thuê máy phát điện | PMC',
    description: DESC,
    url: 'https://chothuethietbipmc.com/cho-thue-may-phat-dien/',
  },
};

export default function Page() {
  return <CategoryView slug="may-phat-dien" />;
}
