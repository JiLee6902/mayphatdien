import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadCategories, loadEquipmentByCategory, loadSettings } from '@/lib/content';
import { categoryHref } from '@/config/categories';
import { categoryInfo } from '@/config/categoryInfo';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProofWall } from '@/components/ProofWall';
import { gallery, type GalleryCategory } from '@/config/gallery';
import { Faq } from '@/components/Faq';
import { Reveal } from '@/components/motion/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { graph, breadcrumbSchema, itemListSchema, faqSchema } from '@/lib/schema';

export async function CategoryView({ slug }: { slug: string }) {
  const [categories, items, settings] = await Promise.all([
    loadCategories(),
    loadEquipmentByCategory(slug),
    loadSettings(),
  ]);
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const info = categoryInfo[slug];
  const shots = gallery.filter((g) => g.category === (slug as GalleryCategory));

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
          ...(info ? [faqSchema(info.faqs, categoryHref(slug))] : []),
        ])}
      />

      {/* Header — light band (Hilti, matches PageHeader) */}
      <section className="relative overflow-hidden border-b border-edge bg-white">
        <div className="absolute inset-y-0 left-0 w-1 bg-signal" />
        <div className="relative mx-auto max-w-[1320px] px-6 pb-12 pt-10 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-paper-mute">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition-colors hover:text-signal">Trang chủ</Link></li>
              <li aria-hidden className="text-paper-mute/60">/</li>
              <li><Link href="/thiet-bi/" className="transition-colors hover:text-signal">Thiết bị</Link></li>
              <li aria-hidden className="text-paper-mute/60">/</li>
              <li className="text-paper">{category.name}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8">Danh mục thiết bị</p>
          <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.02] tracking-tight text-paper md:text-[52px]">
            Cho thuê {category.name}
          </h1>
          {info && (
            <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-paper-dim">{info.intro}</p>
          )}
          {info && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {info.applications.map((a) => (
                <span key={a} className="inline-flex items-center rounded-lg border border-edge bg-graphite px-3.5 py-1.5 text-[13px] font-semibold text-paper">
                  {a}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Listing */}
      <section className="bg-graphite-2 border-b border-edge">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 lg:px-10 md:pb-20 md:pt-20">
          <CategoryFilter items={items} hotline={settings.hotline} />
        </div>
      </section>

      {shots.length > 0 && (
        <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Hình ảnh thực tế</p>
          <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-paper md:text-[32px]">
            {category.name} PMC tại công trình
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper-dim">
            Hình ảnh thật tại công trường — bằng chứng thiết bị PMC đã vận hành ở nhiều dự án, kể cả công trình khó.
          </p>
          <div className="mt-8">
            <ProofWall shots={shots} showFilter={false} />
          </div>
        </section>
      )}

      {info && (
        <>
          {/* Selection guide + why PMC */}
          <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Guide table */}
              <Reveal>
                <p className="eyebrow">Tư vấn nhanh</p>
                <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-paper md:text-[30px]">
                  {info.guideTitle}
                </h2>
                <div className="mt-6 overflow-hidden rounded-xl border border-edge">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-ink text-white">
                      <tr>
                        <th className="px-5 py-3 font-bold">{info.guideCols[0]}</th>
                        <th className="px-5 py-3 font-bold">{info.guideCols[1]}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-edge bg-graphite">
                      {info.guide.map((g) => (
                        <tr key={g.need}>
                          <td className="px-5 py-3.5 text-paper-dim">{g.need}</td>
                          <td className="px-5 py-3.5 font-bold text-paper">{g.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[13px] text-paper-mute">
                  Chỉ mang tính tham khảo — PMC khảo sát miễn phí và tư vấn chính xác theo công trình của bạn.
                </p>
              </Reveal>

              {/* Why PMC */}
              <Reveal delay={100}>
                <p className="eyebrow">Vì sao chọn PMC</p>
                <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-paper md:text-[30px]">
                  Thuê {category.name.toLowerCase()} tại PMC
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {info.why.map((w) => (
                    <div key={w.title} className="surface rounded-lg p-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                      </div>
                      <h3 className="mt-3 font-display text-[15px] font-extrabold leading-snug tracking-tight text-paper">{w.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-paper-mute">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Category FAQ */}
          <section className="border-t border-edge bg-graphite-2">
            <Faq items={info.faqs} title={`Câu hỏi thường gặp về ${category.name.toLowerCase()}`} />
          </section>
        </>
      )}
    </>
  );
}
