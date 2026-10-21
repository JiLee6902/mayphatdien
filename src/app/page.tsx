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

const usps = [
  {
    title: 'Thương hiệu chính hãng',
    desc: 'Cummins · Mitsubishi · Denyo · Airman',
    icon: <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Zm-1.2 13.2L7.6 12l1.4-1.4 1.8 1.8 4-4L16.2 10l-5.4 5.2Z" />,
  },
  {
    title: 'Giao lắp tận công trình',
    desc: 'Trong 24–48h khắp miền Nam',
    icon: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  },
  {
    title: 'Kỹ thuật túc trực 24/7',
    desc: 'Xử lý sự cố nhanh trong ngày',
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 4 2.3-1 1.7-5-2.9V6h2v6.6Z" />,
  },
  {
    title: '18+ năm · 1000+ công trình',
    desc: 'Uy tín miền Nam từ 2006',
    icon: <path d="M12 2 9.2 7.6 3 8.5l4.5 4.4L6.4 19 12 16.1 17.6 19l-1.1-6.1L21 8.5l-6.2-.9L12 2Z" />,
  },
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

      {/* USP / credentials band */}
      <section className="border-y border-edge bg-graphite">
        <div className="mx-auto grid max-w-[1320px] gap-px bg-edge px-0 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.title} className="flex items-start gap-4 bg-graphite px-6 py-7 lg:px-7">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-signal/10 text-signal">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">{u.icon}</svg>
              </span>
              <div>
                <p className="font-display text-[15px] font-extrabold tracking-tight text-paper">{u.title}</p>
                <p className="mt-1 text-[13px] leading-snug text-paper-dim">{u.desc}</p>
              </div>
            </div>
          ))}
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
