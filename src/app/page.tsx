import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Features } from '@/components/Features';
import { CtaBand } from '@/components/CtaBand';
import { SectionHeader } from '@/components/SectionHeader';
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
        <SectionHeader eyebrow="Danh mục" title="Chọn nhóm thiết bị" link={{ href: '/thiet-bi/', label: 'Xem tất cả thiết bị' }} />
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
          <SectionHeader eyebrow="Nổi bật" title="Thiết bị được thuê nhiều" link={{ href: '/thiet-bi/', label: 'Xem tất cả' }} />
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
        <SectionHeader eyebrow="Dự án tiêu biểu" title="Công trình đã phục vụ" link={{ href: '/du-an/', label: 'Xem tất cả dự án' }} />
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
