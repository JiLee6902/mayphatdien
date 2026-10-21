import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site, telHref } from '@/config/site';
import {
  loadAllEquipment,
  loadEquipmentBySlug,
  loadEquipmentByCategory,
  loadCategories,
  loadSettings,
} from '@/lib/content';
import { equipmentHref } from '@/config/equipment';
import { categoryHref } from '@/config/categories';
import { EquipmentCard } from '@/components/EquipmentCard';
import { EquipmentGallery } from '@/components/EquipmentGallery';
import { Img } from '@/components/ui/Img';
import { JsonLd } from '@/components/JsonLd';
import { Faq } from '@/components/Faq';
import { generalFaqs } from '@/config/faqs';
import { graph, productSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const equipment = await loadAllEquipment();
  return equipment.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await loadEquipmentBySlug(slug);
  if (!item) return { title: 'Không tìm thấy thiết bị' };
  const canonical = equipmentHref(slug);
  const description = item.seoDescription || item.description;
  const ogImage = item.image || site.ogImage;
  return {
    title: `${item.name} — Cho thuê`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${item.name} — Cho thuê | PMC`,
      description,
      url: `${site.url}${canonical}`,
      images: [{ url: ogImage }],
    },
  };
}

const trust = [
  'Khảo sát công trình miễn phí',
  'Vận chuyển & lắp đặt tận nơi',
  'Vận hành, bảo trì định kỳ',
  'Kỹ thuật hỗ trợ 24/7',
];

function CheckIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-none text-signal" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 flex-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function ZaloIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 flex-none" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.5 6.5h1v1h-1v-1zm2 0h1v1h-1v-1zm-3.5 2h6v1h-2.5v3H14v1h-4v-1h1.5v-3H9v-1z" />
    </svg>
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = await loadEquipmentBySlug(slug);
  if (!item) notFound();

  const [categories, categoryEquipment, settings] = await Promise.all([
    loadCategories(),
    loadEquipmentByCategory(item.categorySlug),
    loadSettings(),
  ]);
  const category = categories.find((c) => c.slug === item.categorySlug);
  const related = categoryEquipment.filter((e) => e.slug !== item.slug).slice(0, 3);

  const canonical = equipmentHref(item.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Thiết bị', path: '/thiet-bi/' },
    ...(category ? [{ name: category.name, path: categoryHref(category.slug) }] : []),
    { name: item.name, path: canonical },
  ];

  return (
    <>
      <JsonLd data={graph([productSchema(item, canonical), breadcrumbSchema(crumbs), faqSchema(generalFaqs, canonical)])} />

      {/* ── HERO STRIP ── */}
      <div className="relative overflow-hidden bg-graphite grid-texture">
        {/* Subtle depth */}

        <div className="relative mx-auto max-w-[1320px] px-6 pb-14 pt-10 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px] text-paper-mute">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="transition-colors hover:text-paper">Trang chủ</Link></li>
              <li aria-hidden className="text-paper-mute/50">›</li>
              <li><Link href="/thiet-bi/" className="transition-colors hover:text-paper">Thiết bị</Link></li>
              {category && (
                <>
                  <li aria-hidden className="text-paper-mute/50">›</li>
                  <li><Link href={categoryHref(category.slug)} className="transition-colors hover:text-paper">{category.name}</Link></li>
                </>
              )}
              <li aria-hidden className="text-paper-mute/50">›</li>
              <li className="text-paper">{item.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: title + quick specs */}
            <div>
              <p className="eyebrow">
                {category?.name ?? 'Cho thuê'} · PMC
              </p>
              <h1 className="mt-4 font-display text-[30px] font-extrabold leading-tight tracking-tight text-paper md:text-[40px] lg:text-[46px]">
                {item.name}
              </h1>

              {/* hero spec pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-lg bg-signal px-4 py-2 text-sm font-extrabold text-white">
                  {item.power}
                </span>
                <span className="rounded-lg border border-edge-strong bg-graphite-2 px-4 py-2 text-sm font-bold text-paper">
                  {item.brand}
                </span>
                {item.featured && (
                  <span className="rounded-lg border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-bold text-signal-dark">
                    Nổi bật
                  </span>
                )}
              </div>

              {/* quick trust checklist */}
              <ul className="mt-8 grid grid-cols-2 gap-y-3.5 gap-x-6">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[15px] font-medium text-paper-dim">
                    <CheckIcon /> {t}
                  </li>
                ))}
              </ul>

              {/* CTA buttons inside hero on mobile */}
              <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
                <a
                  href={telHref(settings.hotline)}
                  className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 font-bold text-white transition-colors duration-150 hover:bg-signal-dark"
                >
                  <PhoneIcon /> Gọi thuê ngay
                </a>
                <a
                  href={settings.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-edge-strong px-6 py-3.5 font-bold text-paper transition-colors duration-150 hover:border-signal hover:text-signal"
                >
                  <ZaloIcon /> Zalo
                </a>
              </div>
            </div>

            {/* Right: hero image thumbnail */}
            {item.image && (
              <div className="hidden overflow-hidden rounded-lg border border-edge lg:block">
                <Img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="bg-graphite pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

            {/* ── LEFT COLUMN — flat, hairline-separated (no boxes) ── */}
            <div className="lg:col-span-7">

              {/* Gallery */}
              <EquipmentGallery images={item.images} name={item.name} featured={item.featured} />

              {/* Quick specs — one hairline strip, not separate cards */}
              {item.specs.length > 0 && (
                <div className="mt-8 flex border-y border-edge">
                  {item.specs.slice(0, 3).map((s) => (
                    <div key={s.label} className="flex-1 border-l border-edge px-5 py-5 first:border-l-0 first:pl-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-signal-dark">{s.label}</p>
                      <p className="mt-2 text-[19px] font-extrabold tracking-tight text-paper">{s.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description — flat section */}
              <section className="mt-12">
                <p className="eyebrow">Mô tả thiết bị</p>
                <p className="mt-4 text-[15.5px] leading-8 text-paper-dim text-justify">{item.description}</p>
              </section>

              {/* Full spec table — flat, hairline rows */}
              <section className="mt-12">
                <p className="eyebrow">Thông số kỹ thuật</p>
                <table className="mt-4 w-full text-sm">
                  <tbody className="divide-y divide-edge border-y border-edge">
                    {item.specs.map((spec) => (
                      <tr key={spec.label} className="transition-colors hover:bg-graphite-2">
                        <th scope="row" className="w-1/2 py-4 pr-4 text-left font-medium text-paper-dim">{spec.label}</th>
                        <td className="py-4 pl-4 text-right font-bold text-paper">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

            </div>

            {/* ── RIGHT COLUMN — sticky CTA ── */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">

                {/* Single unified card */}
                <div className="surface overflow-hidden rounded-lg">

                  {/* Pricing header */}
                  <div className="border-b border-edge px-6 py-5">
                    <p className="eyebrow">Báo giá thuê</p>
                    <p className="mt-1.5 font-display text-[22px] font-extrabold tracking-tight text-paper">Liên hệ nhận giá tốt nhất</p>
                    <p className="mt-0.5 text-[13px] text-paper-dim">Theo ngày · tuần · tháng · dài hạn</p>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-2.5 px-6 py-5">
                    <a
                      href={telHref(settings.hotline)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-signal py-3.5 text-[15px] font-bold text-white transition-colors duration-150 hover:bg-signal-dark active:scale-[0.98]"
                    >
                      <PhoneIcon /> Gọi ngay · <span>{settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}</span>
                    </a>
                    <a
                      href={settings.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-edge bg-graphite-3 py-3.5 text-[15px] font-bold text-paper transition-colors duration-150 hover:border-signal hover:text-signal"
                    >
                      <ZaloIcon /> Chat Zalo — báo giá nhanh
                    </a>
                  </div>

                  {/* Quick info */}
                  <div className="border-t border-edge px-6 py-5">
                    <dl className="divide-y divide-edge">
                      <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <dt className="text-paper-dim">Thương hiệu</dt>
                        <dd className="font-bold text-paper">{item.brand}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <dt className="text-paper-dim">Công suất</dt>
                        <dd className="font-bold text-paper">{item.power}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <dt className="text-paper-dim">Danh mục</dt>
                        <dd className="font-bold text-paper">{category?.name}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-2.5 text-sm">
                        <dt className="text-paper-dim">Khu vực phục vụ</dt>
                        <dd className="font-bold text-paper">Toàn miền Nam</dd>
                      </div>
                    </dl>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Related equipment */}
          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-paper md:text-[28px]">Thiết bị liên quan</h2>
                {category && (
                  <Link href={categoryHref(category.slug)} className="text-sm font-semibold text-signal-dark transition-colors hover:text-signal">
                    Xem tất cả →
                  </Link>
                )}
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => (
                  <EquipmentCard key={rel.slug} item={rel} hotline={settings.hotline} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Faq items={generalFaqs} />
    </>
  );
}
