import type { Metadata } from 'next';
import { loadCategories, loadAllEquipment, loadSettings } from '@/lib/content';
import { CategoryCard } from '@/components/CategoryCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { CtaBand } from '@/components/CtaBand';
import { PageHeader } from '@/components/PageHeader';
import { FleetStrength } from '@/components/FleetStrength';
import { Reveal } from '@/components/motion/Reveal';

const DESC =
  'Danh mục thiết bị công nghiệp PMC cho thuê: máy phát điện, máy nén khí, phun rửa áp lực cao (UHP) và máy hàn. Sẵn kho, giao lắp tận công trình.';

export const metadata: Metadata = {
  title: 'Thiết bị cho thuê',
  description: DESC,
  alternates: { canonical: '/thiet-bi/' },
  openGraph: {
    title: 'Thiết bị cho thuê | PMC',
    description: DESC,
    url: 'https://chothuethietbipmc.com/thiet-bi/',
  },
};

export default async function Page() {
  const [categories, equipment, settings] = await Promise.all([
    loadCategories(),
    loadAllEquipment(),
    loadSettings(),
  ]);

  const catChips = categories.map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <>
      <PageHeader
        eyebrow="Thiết bị"
        title="Thiết bị cho thuê"
        subtitle="4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp và vận hành tận công trình."
        crumb="Thiết bị"
      />

      {/* Categories — quick nav into each group */}
      <section className="mx-auto max-w-[1320px] px-6 pb-16 pt-12 lg:px-10 md:pb-20">
        <Reveal>
          <p className="eyebrow">Danh mục</p>
          <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[32px]">
            Chọn nhóm thiết bị
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <CategoryCard category={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full catalog — every item, filterable by category / brand / power.
          Kept high up: on a "Thiết bị" page the list is what visitors came for. */}
      <section className="bg-graphite-2 border-y border-edge">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-16 lg:px-10 md:pb-20 md:pt-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Toàn bộ</p>
              <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[32px]">
                Tất cả thiết bị
              </h2>
            </div>
            <p className="text-sm font-semibold text-paper-dim">
              <span className="font-bold text-paper">{equipment.length}</span> thiết bị sẵn kho
            </p>
          </Reveal>
          <div className="mt-8">
            <CategoryFilter items={equipment} hotline={settings.hotline} categories={catChips} />
          </div>
        </div>
      </section>

      {/* Fleet strengths — supporting credibility, after the list */}
      <FleetStrength />

      <CtaBand
        settings={settings}
        title="Đã tìm được thiết bị phù hợp?"
        lead="Gọi để nhận báo giá chi tiết theo công suất và thời gian thuê."
      />
    </>
  );
}
