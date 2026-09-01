import type { Metadata } from 'next';
import { loadCategories, loadFeaturedEquipment, loadSettings } from '@/lib/content';
import { CategoryCard } from '@/components/CategoryCard';
import { EquipmentCard } from '@/components/EquipmentCard';

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
  const [categories, featured, settings] = await Promise.all([
    loadCategories(),
    loadFeaturedEquipment(),
    loadSettings(),
  ]);

  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Thiết bị cho thuê
        </p>
        <h1 className="mt-4 text-[34px] font-extrabold tracking-tight text-navy md:text-[44px]">
          Thiết bị cho thuê
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn
          kho, giao lắp và vận hành tận công trình.
        </p>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>

        <h2 className="mt-20 text-[34px] font-extrabold tracking-tight text-navy md:text-[44px]">
          Thiết bị nổi bật
        </h2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <EquipmentCard key={item.slug} item={item} hotline={settings.hotline} />
          ))}
        </div>
      </div>
    </section>
  );
}
