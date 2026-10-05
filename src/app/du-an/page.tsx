import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { projectHref } from '@/config/projects';
import { Img } from '@/components/ui/Img';
import { loadProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'Dự án tiêu biểu — PMC cho thuê thiết bị công nghiệp' },
  description:
    'Các dự án tiêu biểu PMC đã triển khai: cho thuê máy phát điện, máy nén khí và hệ thống phun rửa áp lực cao (UHP) cho khu công nghiệp và nhà máy lớn.',
  alternates: { canonical: '/du-an/' },
};

export default async function DuAnPage() {
  const projects = await loadProjects();

  return (
    <>
      <PageHeader
        eyebrow="Dự án"
        title="Dự án tiêu biểu"
        subtitle="Một số công trình và nhà máy PMC đã đồng hành với giải pháp thuê thiết bị trọn gói."
        crumb="Dự án"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-10 md:py-14 lg:px-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 90}
              as="article"
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(20,36,59,0.22)] hover:ring-accent/30"
            >
              <Link href={projectHref(p.slug)} className="relative block h-52 overflow-hidden bg-navy-dark">
                <Img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy shadow">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {p.location}
                </span>
              </Link>
              <div className="p-6">
                <h2 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-accent">
                  <Link href={projectHref(p.slug)}>{p.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <Link
                  href={projectHref(p.slug)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                >
                  Xem chi tiết
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
