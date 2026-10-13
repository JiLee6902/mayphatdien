import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadCategories, loadEquipmentByCategory, loadSettings } from '@/lib/content';
import { categoryHref } from '@/config/categories';
import { CategoryFilter } from '@/components/CategoryFilter';
import { JsonLd } from '@/components/JsonLd';
import { graph, breadcrumbSchema, itemListSchema } from '@/lib/schema';

export async function CategoryView({ slug }: { slug: string }) {
  const [categories, items, settings] = await Promise.all([
    loadCategories(),
    loadEquipmentByCategory(slug),
    loadSettings(),
  ]);
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Thiết bị', path: '/thiet-bi/' },
    { name: category.name, path: categoryHref(slug) },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(crumbs),
          ...(items.length ? [itemListSchema(items, categoryHref(slug))] : []),
        ])}
      />

      {/* Header — dark band (matches PageHeader) */}
      <section className="on-dark relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1b1f26] via-ink to-[#101216]">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />
        <div className="absolute inset-y-0 left-0 w-1 bg-signal" />
        <div className="relative mx-auto max-w-[1320px] px-6 pb-14 pt-12 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition-colors hover:text-signal">Trang chủ</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li><Link href="/thiet-bi/" className="transition-colors hover:text-signal">Thiết bị</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li className="text-white/80">{category.name}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8">Danh mục thiết bị</p>
          <h1 className="mt-4 font-display text-[34px] font-extrabold uppercase leading-[1.02] tracking-tight text-white md:text-[52px]">
            Cho thuê {category.name}
          </h1>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-graphite-2 border-b border-edge">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 lg:px-10 md:pb-20 md:pt-20">
          <CategoryFilter items={items} hotline={settings.hotline} />
        </div>
      </section>
    </>
  );
}
