import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
