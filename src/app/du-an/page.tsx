import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ProjectList } from '@/components/ProjectList';
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
        <ProjectList projects={projects} />
      </section>
    </>
  );
}
