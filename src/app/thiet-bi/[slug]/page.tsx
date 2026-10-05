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
    <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] flex-none text-accent-dark" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
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
      <div className="relative overflow-hidden bg-white">
        {/* Subtle depth */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/[0.06] blur-[80px]" />

        <div className="relative mx-auto max-w-[1280px] px-8 pb-14 pt-10 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="transition-colors hover:text-navy">Trang chủ</Link></li>
              <li aria-hidden className="text-muted/50">›</li>
              <li><Link href="/thiet-bi/" className="transition-colors hover:text-navy">Thiết bị</Link></li>
              {category && (
                <>
                  <li aria-hidden className="text-muted/50">›</li>
                  <li><Link href={categoryHref(category.slug)} className="transition-colors hover:text-navy">{category.name}</Link></li>
                </>
              )}
              <li aria-hidden className="text-muted/50">›</li>
              <li className="text-ink">{item.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: title + quick specs */}
            <div>
              <p className="text-[13px] font-bold uppercase tracking-widest text-accent">
                {category?.name ?? 'Cho thuê'} · PMC
              </p>
              <h1 className="mt-4 text-[30px] font-extrabold leading-tight tracking-tight text-navy md:text-[40px] lg:text-[46px]">
                {item.name}
              </h1>

              {/* hero spec pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-accent px-4 py-2 text-sm font-extrabold text-navy-dark shadow-md shadow-accent/25">
                  {item.power}
                </span>
                <span className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm">
                  {item.brand}
                </span>
                {item.featured && (
                  <span className="rounded-xl border border-accent/30 bg-accent/8 px-4 py-2 text-sm font-bold text-accent">
                    Nổi bật
                  </span>
                )}
              </div>

              {/* quick trust checklist */}
              <ul className="mt-8 grid grid-cols-2 gap-y-3.5 gap-x-6">
                {trust.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[15px] font-medium text-ink/80">
                    <CheckIcon /> {t}
                  </li>
                ))}
              </ul>

              {/* CTA buttons inside hero on mobile */}
              <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
                <a
                  href={telHref(settings.hotline)}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-bold text-navy-dark shadow-md shadow-accent/25 transition-all duration-150 hover:bg-accent-dark hover:shadow-lg"
                >
                  <PhoneIcon /> Gọi thuê ngay
                </a>
                <a
                  href={settings.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3.5 font-bold text-navy transition-all duration-150 hover:border-accent/40 hover:text-accent"
                >
                  <ZaloIcon /> Zalo
                </a>
              </div>
            </div>

            {/* Right: hero image thumbnail */}
            {item.image && (
              <div className="hidden overflow-hidden rounded-[24px] shadow-[0_24px_64px_-16px_rgba(20,36,59,0.16)] ring-1 ring-black/[0.06] lg:block">
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
      <div className="bg-bg pb-20 pt-10 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-7 space-y-8">

              {/* Gallery */}
              <EquipmentGallery images={item.images} name={item.name} featured={item.featured} />

              {/* Spec highlight cards */}
              {item.specs.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {item.specs.slice(0, 3).map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white px-4 py-4 text-center ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-14px_rgba(20,36,59,0.25)] hover:ring-accent/30">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-accent-dark">{s.label}</p>
                      <p className="mt-1.5 text-[18px] font-extrabold tracking-tight text-navy">{s.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <h2 className="text-base font-extrabold tracking-tight text-navy">Mô tả thiết bị</h2>
                <p className="mt-3 text-[15px] leading-7 text-ink/75">{item.description}</p>
              </div>

              {/* Full spec table */}
              <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
                <div className="border-b border-line px-5 py-3.5">
                  <h2 className="text-base font-extrabold tracking-tight text-navy">Thông số kỹ thuật</h2>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-line">
                    {item.specs.map((spec) => (
                      <tr key={spec.label} className="hover:bg-accent/[0.025] transition-colors">
                        <th scope="row" className="w-1/2 px-5 py-3.5 text-left font-medium text-muted">{spec.label}</th>
                        <td className="px-5 py-3.5 text-right font-bold text-navy">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* ── RIGHT COLUMN — sticky CTA ── */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">

                {/* Single unified card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line">

                  {/* Pricing header */}
                  <div className="border-b border-line px-6 py-5">
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-muted">Báo giá thuê</p>
                    <p className="mt-1 text-[22px] font-extrabold text-navy">Liên hệ nhận giá tốt nhất</p>
                    <p className="mt-0.5 text-[13px] text-muted">Theo ngày · tuần · tháng · dài hạn</p>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-2.5 px-6 py-5">
                    <a
                      href={telHref(settings.hotline)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-[15px] font-bold text-navy-dark shadow-md shadow-accent/25 transition-all duration-150 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98]"
                    >
                      <PhoneIcon /> Gọi ngay · {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
                    </a>
                    <a
                      href={settings.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-bg py-3.5 text-[15px] font-bold text-navy transition-all duration-150 hover:border-accent/50 hover:text-accent"
                    >
                      <ZaloIcon /> Chat Zalo — báo giá nhanh
                    </a>
                  </div>

                  {/* Quick info */}
                  <div className="border-t border-line px-6 py-5">
                    <dl className="space-y-2.5">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-muted">Thương hiệu</dt>
                        <dd className="font-bold text-navy">{item.brand}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-muted">Công suất</dt>
                        <dd className="font-bold text-navy">{item.power}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-muted">Danh mục</dt>
                        <dd className="font-bold text-navy">{category?.name}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <dt className="text-muted">Khu vực phục vụ</dt>
                        <dd className="font-bold text-navy">Toàn miền Nam</dd>
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
                <h2 className="text-2xl font-extrabold tracking-tight text-navy md:text-[28px]">Thiết bị liên quan</h2>
                {category && (
                  <Link href={categoryHref(category.slug)} className="text-sm font-semibold text-accent transition-colors hover:text-accent-dark">
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
