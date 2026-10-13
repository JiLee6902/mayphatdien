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

      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 90}
              as="article"
              className="group surface surface-hover flex flex-col overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={projectHref(p.slug)} className="relative block h-52 overflow-hidden bg-graphite">
                <Img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover brightness-[0.92] contrast-[1.07] saturate-[1.05] transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/10 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-ink/80 px-3 py-1 text-xs font-bold text-white">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-signal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {p.location}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-paper transition-colors group-hover:text-signal">
                  <Link href={projectHref(p.slug)}>{p.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{p.desc}</p>
                <Link
                  href={projectHref(p.slug)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-signal-dark"
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
