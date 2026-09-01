import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { CategoryCard } from '@/components/CategoryCard';
import { EquipmentCard } from '@/components/EquipmentCard';
import { Reveal } from '@/components/motion/Reveal';
import { loadCategories, loadFeaturedEquipment, loadSettings } from '@/lib/content';

export default async function Home() {
  const [categories, featured, settings] = await Promise.all([
    loadCategories(),
    loadFeaturedEquipment(),
    loadSettings(),
  ]);

  return (
    <>
      <Hero settings={settings} />

      <section className="mx-auto max-w-[1320px] px-8 py-24 lg:px-12 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Thiết bị cho thuê
            <span className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mt-5 text-[36px] font-extrabold tracking-tight text-navy md:text-[52px]">
            Chọn nhóm thiết bị bạn cần
          </h2>
          <p className="mt-5 text-lg text-muted">
            4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
            tận công trình.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <CategoryCard category={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* featured equipment */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1320px] px-8 py-24 lg:px-12 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-8 bg-accent" />
                Nổi bật
              </p>
              <h2 className="mt-5 text-[36px] font-extrabold tracking-tight text-navy md:text-[52px]">
                Thiết bị được thuê nhiều
              </h2>
              <p className="mt-5 text-lg text-muted">
                Các máy phổ biến, sẵn kho, giao lắp nhanh cho công trình của bạn.
              </p>
            </div>
            <Link
              href="/thiet-bi/"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 font-bold text-navy transition hover:border-steel hover:-translate-y-0.5"
            >
              Xem tất cả thiết bị
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <EquipmentCard item={item} hotline={settings.hotline} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <CtaBand settings={settings} />
    </>
  );
}
