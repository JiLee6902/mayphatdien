import type { Metadata } from 'next';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { PageHeader } from '@/components/PageHeader';
import { ProjectList } from '@/components/ProjectList';
import { projectHref } from '@/config/projects';
import { loadProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'Dự án tiêu biểu — PMC cho thuê thiết bị công nghiệp' },
  description:
    'Các dự án tiêu biểu PMC đã triển khai: cho thuê máy phát điện, máy nén khí và hệ thống phun rửa áp lực cao (UHP) cho khu công nghiệp và nhà máy lớn.',
  alternates: { canonical: '/du-an/' },
};

export default async function DuAnPage() {
  const projects = await loadProjects();
  const [featured, ...rest] = projects;

  return (
    <>
      <PageHeader
        eyebrow="Dự án"
        title="Dự án tiêu biểu"
        subtitle="Hình ảnh thực tế từ công trường: sân bay, cảng nước sâu, lọc hóa dầu, giàn khoan ngoài khơi, nhà máy và bệnh viện — những nơi PMC đã cấp nguồn và thiết bị."
        crumb="Dự án"
      />

      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { num: `${projects.length}+`, label: 'Công trình tiêu biểu' },
            { num: '15+', label: 'Năm kinh nghiệm' },
            { num: '50+', label: 'Tổ máy sẵn sàng' },
            { num: '24/7', label: 'Hỗ trợ kỹ thuật' },
          ].map((s) => (
            <div key={s.label} className="surface rounded-lg p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-signal-dark md:text-4xl">{s.num}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-paper-mute">{s.label}</p>
            </div>
          ))}
        </div>
        {/* Featured project — magazine lead */}
        {featured && (
          <Link
            href={projectHref(featured.slug)}
            className="group mb-12 grid overflow-hidden rounded-xl border border-edge bg-graphite-2 md:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <Img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-[400px]"
              />
              <span className="label absolute left-5 top-5 inline-flex items-center rounded-lg bg-signal px-3 py-1 text-white">
                Dự án nổi bật
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              {featured.location && (
                <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal-dark">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {featured.location}
                </p>
              )}
              <h2 className="mt-3 font-display text-[24px] font-extrabold leading-tight tracking-tight text-paper transition-colors group-hover:text-signal-dark md:text-[32px]">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-paper-dim line-clamp-4">{featured.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-signal-dark">
                Xem chi tiết dự án <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        )}

        <ProjectList projects={rest} />
      </section>
    </>
  );
}
