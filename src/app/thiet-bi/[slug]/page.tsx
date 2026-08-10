import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  equipment,
  equipmentByCategory,
  getEquipment,
} from '@/config/equipment';
import { categories } from '@/config/categories';
import { site, telHref } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { EquipmentCard } from '@/components/EquipmentCard';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipment.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) {
    return { title: 'Không tìm thấy thiết bị | PMC' };
  }
  return {
    title: `${item.name} — Cho thuê | PMC`,
    description: item.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) notFound();

  const category = categories.find((c) => c.slug === item.categorySlug);
  const related = equipmentByCategory(item.categorySlug)
    .filter((e) => e.slug !== item.slug)
    .slice(0, 3);

  return (
    <section className="bg-bg py-24 md:py-32">
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
            {category && (
              <>
                <li aria-hidden>›</li>
                <li>
                  <Link
                    href={`/cho-thue-${category.slug}/`}
                    className="hover:text-navy"
                  >
                    {category.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden>›</li>
            <li className="font-semibold text-navy">{item.name}</li>
          </ol>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={`Cho thuê ${item.name}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-[30px] font-extrabold tracking-tight text-navy md:text-[38px]">
              {item.name}
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-navy px-3.5 py-1.5 text-sm font-bold text-white">
                {item.power}
              </span>
              <span className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-navy">
                {item.brand}
              </span>
            </div>

            <table className="mt-8 w-full text-sm">
              <tbody className="divide-y divide-line">
                {item.specs.map((spec) => (
                  <tr key={spec.label}>
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left font-semibold text-muted"
                    >
                      {spec.label}
                    </th>
                    <td className="py-3 text-right font-semibold text-navy">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-6 font-bold text-navy">
              Giá thuê: Liên hệ · theo ngày / tháng
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={telHref(site.hotline)}>Gọi thuê ngay</Button>
              <Button href={site.zaloUrl} variant="outline">
                Chat Zalo
              </Button>
            </div>

            <p className="mt-8 text-muted">{item.description}</p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[34px] font-extrabold tracking-tight text-navy md:text-[44px]">
              Thiết bị liên quan
            </h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <EquipmentCard key={rel.slug} item={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
