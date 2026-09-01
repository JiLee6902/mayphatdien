import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadCategories, loadEquipmentByCategory, loadSettings } from '@/lib/content';
import { categoryHref } from '@/config/categories';
import { CategoryFilter } from '@/components/CategoryFilter';
import { JsonLd } from '@/components/JsonLd';
import { graph, breadcrumbSchema } from '@/lib/schema';

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
    <section className="bg-bg py-24 md:py-32">
      <JsonLd data={graph([breadcrumbSchema(crumbs)])} />
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-navy">
                Trang chủ
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/thiet-bi/" className="hover:text-navy">
                Thiết bị
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="font-semibold text-navy">{category.name}</li>
          </ol>
        </nav>

        <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Danh mục thiết bị
        </p>
        <h1 className="mt-4 text-[34px] font-extrabold tracking-tight text-navy md:text-[44px]">
          Cho thuê {category.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{category.meta}</p>

        <div className="mt-10 border-t border-line pt-10">
          <CategoryFilter items={items} hotline={settings.hotline} />
        </div>
      </div>
    </section>
  );
}
