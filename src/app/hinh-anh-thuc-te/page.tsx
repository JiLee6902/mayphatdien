import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ProofWall } from '@/components/ProofWall';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { graph, breadcrumbSchema } from '@/lib/schema';
import { gallery } from '@/config/gallery';
import { loadSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'Hình ảnh thực tế — Thiết bị PMC tại công trình' },
  description:
    'Hình ảnh thực tế máy phát điện, máy nén khí, UHP và máy hàn của PMC hoạt động tại công trình: giàn khoan ngoài khơi, cảng nước sâu, lọc hóa dầu, Metro, nhà máy và bệnh viện.',
  alternates: { canonical: '/hinh-anh-thuc-te/' },
};

export default async function HinhAnhThucTePage() {
  const settings = await loadSettings();
  const hardCount = gallery.filter((g) => g.hard).length;
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Hình ảnh thực tế', path: '/hinh-anh-thuc-te/' },
  ];

  return (
    <>
      <JsonLd data={graph([breadcrumbSchema(crumbs)])} />

      <PageHeader
        eyebrow="Minh chứng năng lực"
        title="Hình ảnh thực tế tại công trình"
        subtitle={`${gallery.length}+ hình ảnh máy PMC đang hoạt động ngoài thực địa — trong đó ${hardCount}+ ảnh tại các công trình khó: giàn khoan ngoài khơi, cảng nước sâu, lọc hóa dầu, Metro.`}
        crumb="Hình ảnh thực tế"
      />

      <section className="mx-auto max-w-[1600px] px-6 py-14 md:py-16 lg:px-10">
        <ProofWall />
      </section>

      <CtaBand
        settings={settings}
        title="Muốn thiết bị như trong ảnh cho công trình của bạn?"
        lead="PMC khảo sát hiện trường và báo giá miễn phí — giao lắp tận nơi."
      />
    </>
  );
}
