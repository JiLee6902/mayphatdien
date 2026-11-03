import { Hero } from '@/components/Hero';
import { ExperienceBand } from '@/components/ExperienceBand';
import { ProjectSpotlight } from '@/components/ProjectSpotlight';
import { Sectors } from '@/components/Sectors';
import { ProofWall } from '@/components/ProofWall';
import { CtaBand } from '@/components/CtaBand';
import { SectionHeader } from '@/components/SectionHeader';
import { CategoryCard } from '@/components/CategoryCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/motion/Reveal';
import { generalFaqs } from '@/config/faqs';
import { graph, faqSchema } from '@/lib/schema';
import { loadCategories, loadProjects, loadSettings } from '@/lib/content';

export default async function Home() {
  const [categories, projects, settings] = await Promise.all([
    loadCategories(),
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

      {/* Proof wall — dense captioned field photos, high up so khách thấy minh chứng ngay */}
      <section className="border-y border-edge bg-graphite-2">
        <div className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10 md:py-16">
          <SectionHeader
            eyebrow="Hình ảnh thực tế"
            title="Thiết bị PMC tại hàng loạt công trình"
            link={{ href: '/hinh-anh-thuc-te/', label: 'Xem tất cả hình ảnh' }}
          />
          <div className="mt-8">
            <ProofWall showFilter={false} limit={44} />
          </div>
        </div>
      </section>

      {/* Cinematic experience band — depth + credibility before the proof grid */}
      <ExperienceBand />

      {/* Featured projects — case studies / social proof */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <SectionHeader eyebrow="Dự án tiêu biểu" title="Công trình đã phục vụ" link={{ href: '/du-an/', label: 'Xem tất cả dự án' }} />
        {projects[0] && (
          <div className="mt-8">
            <ProjectSpotlight project={projects[0]} />
          </div>
        )}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1, 10).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Experience by industry — single "bề dày kinh nghiệm" block (the detailed
          served-works roster lives on /du-an to avoid repeating it here). */}
      <Sectors />
      <Testimonials />
      <Faq items={generalFaqs} />
      <JsonLd data={graph([faqSchema(generalFaqs, '/')])} />
      <CtaBand settings={settings} />
    </>
  );
}
