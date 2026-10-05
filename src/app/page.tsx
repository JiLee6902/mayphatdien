import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { CategoryCard } from '@/components/CategoryCard';
import { EquipmentCard } from '@/components/EquipmentCard';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/motion/Reveal';
import { generalFaqs } from '@/config/faqs';
import { graph, faqSchema } from '@/lib/schema';
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

      {/* Category section */}
      <section className="mx-auto max-w-[1320px] px-8 py-14 lg:px-12 md:py-18">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Danh mục</p>
            <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-navy md:text-[40px]">
              Chọn nhóm thiết bị bạn cần
            </h2>
          </div>
          <Link href="/thiet-bi/" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Xem tất cả thiết bị
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <CategoryCard category={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured equipment */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1320px] px-8 py-14 lg:px-12 md:py-18">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Nổi bật</p>
              <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-navy md:text-[40px]">
                Thiết bị được thuê nhiều
              </h2>
            </div>
            <Link href="/thiet-bi/" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              Xem tất cả
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((item, i) => (
              <Reveal key={item.slug} delay={i * 70}>
                <EquipmentCard item={item} hotline={settings.hotline} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Features />
      <Testimonials />
      <Faq items={generalFaqs} />
      <JsonLd data={graph([faqSchema(generalFaqs, '/')])} />
      <CtaBand settings={settings} />
    </>
  );
}
