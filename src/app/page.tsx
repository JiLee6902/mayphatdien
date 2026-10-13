import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { CategoryCard } from '@/components/CategoryCard';
import { EquipmentCard } from '@/components/EquipmentCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/motion/Reveal';
import { generalFaqs } from '@/config/faqs';
import { graph, faqSchema } from '@/lib/schema';
import { loadCategories, loadFeaturedEquipment, loadProjects, loadSettings } from '@/lib/content';

const sectors = [
  'Khu công nghiệp',
  'Cảng & Dầu khí',
  'Nhà máy sản xuất',
  'Công trình xây dựng',
  'Sự kiện & Thương mại',
];

export default async function Home() {
  const [categories, featured, projects, settings] = await Promise.all([
    loadCategories(),
    loadFeaturedEquipment(),
    loadProjects(),
    loadSettings(),
  ]);

  return (
    <>
      <Hero settings={settings} />

      {/* Category section */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-edge pb-6">
          <div>
            <p className="eyebrow">Danh mục</p>
            <h2 className="mt-3 font-display text-[30px] font-extrabold uppercase tracking-tight text-paper md:text-[44px]">
              Chọn nhóm thiết bị
            </h2>
          </div>
          <Link href="/thiet-bi/" className="group inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-paper-dim transition-colors hover:text-signal">
            Xem tất cả thiết bị
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70} className="h-full">
              <CategoryCard category={c} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors served — trust / scope */}
      <section className="border-y border-edge bg-ink on-dark">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
          <p className="eyebrow shrink-0">Lĩnh vực phục vụ</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {sectors.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/85">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-signal" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured equipment */}
      <section className="border-b border-edge bg-graphite-2">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-edge pb-6">
            <div>
              <p className="eyebrow">Nổi bật</p>
              <h2 className="mt-3 font-display text-[30px] font-extrabold uppercase tracking-tight text-paper md:text-[44px]">
                Thiết bị được thuê nhiều
              </h2>
            </div>
            <Link href="/thiet-bi/" className="group inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-paper-dim transition-colors hover:text-signal">
              Xem tất cả
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((item, i) => (
              <Reveal key={item.slug} delay={i * 70} className="h-full">
                <EquipmentCard item={item} hotline={settings.hotline} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Features />

      {/* Featured projects — case studies / social proof */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-edge pb-6">
          <div>
            <p className="eyebrow">Dự án tiêu biểu</p>
            <h2 className="mt-3 font-display text-[30px] font-extrabold uppercase tracking-tight text-paper md:text-[44px]">
              Công trình đã phục vụ
            </h2>
          </div>
          <Link href="/du-an/" className="group inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-paper-dim transition-colors hover:text-signal-dark">
            Xem tất cả dự án
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <Testimonials />
      <Faq items={generalFaqs} />
      <JsonLd data={graph([faqSchema(generalFaqs, '/')])} />
      <CtaBand settings={settings} />
    </>
  );
}
