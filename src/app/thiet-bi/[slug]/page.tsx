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
import { JsonLd } from '@/components/JsonLd';
import { graph, productSchema, breadcrumbSchema } from '@/lib/schema';

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

function Check({ className = 'text-accent' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`h-5 w-5 flex-none ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
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
  const highlights = item.specs.slice(0, 3);

  const canonical = equipmentHref(item.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Thiết bị', path: '/thiet-bi/' },
    ...(category ? [{ name: category.name, path: categoryHref(category.slug) }] : []),
    { name: item.name, path: canonical },
  ];

  return (
    <div className="bg-bg pb-24 pt-10 md:pb-32">
      <JsonLd
        data={graph([productSchema(item, canonical), breadcrumbSchema(crumbs)])}
      />
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-accent">Trang chủ</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/thiet-bi/" className="hover:text-accent">Thiết bị</Link></li>
            {category && (
              <>
                <li aria-hidden>›</li>
                <li><Link href={`/cho-thue-${category.slug}/`} className="hover:text-accent">{category.name}</Link></li>
              </>
            )}
            <li aria-hidden>›</li>
            <li className="font-semibold text-navy">{item.name}</li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {category?.name} · Cho thuê
        </p>
        <h1 className="mt-3 max-w-3xl text-[32px] font-extrabold leading-tight tracking-tight text-navy md:text-[42px]">
          {item.name}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <EquipmentGallery images={item.images} name={item.name} featured={item.featured} />

            {/* highlight spec tiles */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-line bg-white p-4 text-center">
                  <div className="text-xs text-muted">{h.label}</div>
                  <div className="mt-1 font-bold text-navy">{h.value}</div>
                </div>
              ))}
            </div>

            {/* description */}
            <div className="mt-12">
              <h2 className="text-xl font-extrabold tracking-tight text-navy">Mô tả</h2>
              <p className="mt-4 leading-8 text-ink/80">{item.description}</p>
            </div>

            {/* full spec table */}
            <div className="mt-10">
              <h2 className="text-xl font-extrabold tracking-tight text-navy">Thông số kỹ thuật</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-line">
                    {item.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 ? 'bg-bg/50' : ''}>
                        <th scope="row" className="w-1/2 px-5 py-3.5 text-left font-medium text-muted">{spec.label}</th>
                        <td className="px-5 py-3.5 text-right font-bold text-navy">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT — sticky CTA card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_24px_60px_-28px_rgba(14,58,102,0.4)]">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-navy px-3 py-1.5 text-sm font-bold text-white">{item.power}</span>
                  <span className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-navy">{item.brand}</span>
                </div>
                <div className="mt-6 border-t border-line pt-5">
                  <div className="text-sm text-muted">Giá thuê</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-navy">Liên hệ</span>
                    <span className="text-sm text-muted">· theo ngày / tháng</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={telHref(settings.hotline)} className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-accent-dark">
                    <PhoneIcon /> Gọi thuê ngay · 0936 899 431
                  </a>
                  <a href={settings.zaloUrl} className="flex items-center justify-center gap-2 rounded-xl border border-line bg-bg px-6 py-3.5 text-base font-bold text-navy transition hover:border-steel">
                    Chat Zalo báo giá nhanh
                  </a>
                </div>
                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {trust.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-ink/80">
                      <Check /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-center text-xs text-muted">
                Khảo sát &amp; báo giá miễn phí trong ngày · {settings.brand}
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy md:text-3xl">Thiết bị liên quan</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <EquipmentCard key={rel.slug} item={rel} hotline={settings.hotline} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
