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

      {/* Header — white with accent depth */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-accent/[0.06] blur-[80px]" />
        <div className="relative mx-auto max-w-[1280px] px-8 pb-8 pt-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition-colors hover:text-navy">Trang chủ</Link></li>
              <li aria-hidden className="text-muted/40">›</li>
              <li><Link href="/thiet-bi/" className="transition-colors hover:text-navy">Thiết bị</Link></li>
              <li aria-hidden className="text-muted/40">›</li>
              <li className="font-semibold text-ink">{category.name}</li>
            </ol>
          </nav>

          <p className="mt-8 text-[13px] font-bold uppercase tracking-widest text-accent">Danh mục thiết bị</p>
          <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-navy md:text-[46px]">
            Cho thuê {category.name}
          </h1>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-8 pb-14 pt-10 lg:px-12 md:pb-16 md:pt-11">
          <CategoryFilter items={items} hotline={settings.hotline} />
        </div>
      </section>
    </>
  );
}
