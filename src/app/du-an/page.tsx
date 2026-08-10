import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Dự án tiêu biểu — PMC cho thuê thiết bị công nghiệp',
  description:
    'Các dự án tiêu biểu PMC đã triển khai: cho thuê máy phát điện, máy nén khí và hệ thống phun rửa áp lực cao (UHP) cho khu công nghiệp và nhà máy lớn.',
};

interface Project {
  title: string;
  location: string;
  image: string;
  desc: string;
}

const projects: Project[] = [
  {
    title: 'Cho thuê máy phát điện KCN Đại Quang Minh',
    location: 'TP. Thủ Đức, TP.HCM',
    image: '/images/categories/may-phat-dien.jpg',
    desc: 'Cấp nguồn dự phòng công suất lớn phục vụ thi công hạ tầng khu đô thị.',
  },
  {
    title: 'Máy nén khí dự án PVD6',
    location: 'Vũng Tàu, BR-VT',
    image: '/images/categories/may-nen-khi.jpg',
    desc: 'Cung cấp khí nén ổn định cho công đoạn phun cát và làm sạch bề mặt.',
  },
  {
    title: 'Hệ thống UHP nhà máy lọc dầu',
    location: 'Đồng Nai',
    image: '/images/categories/phun-rua-uhp.jpg',
    desc: 'Thiết bị phun rửa áp lực siêu cao xử lý cáu cặn đường ống và bồn bể.',
  },
  {
    title: 'Máy hàn công trình cầu cảng',
    location: 'Cần Thơ',
    image: '/images/categories/may-han.jpg',
    desc: 'Bố trí dàn máy hàn di động phục vụ thi công kết cấu thép cầu cảng.',
  },
  {
    title: 'Nguồn dự phòng sự kiện quy mô lớn',
    location: 'Bình Dương',
    image: '/images/hero-genset.jpg',
    desc: 'Máy phát điện cách âm bảo đảm điện liên tục cho sự kiện ngoài trời.',
  },
  {
    title: 'Cụm máy nén khí nhà máy sản xuất',
    location: 'Long An',
    image: '/images/categories/may-nen-khi.jpg',
    desc: 'Thuê dài hạn máy nén khí công nghiệp cho dây chuyền sản xuất liên tục.',
  },
];

export default function DuAnPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dự án"
        title="Dự án tiêu biểu"
        subtitle="Một số công trình và nhà máy PMC đã đồng hành với giải pháp thuê thiết bị trọn gói."
        crumb="Dự án"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-24 md:py-32 lg:px-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-bg px-3 py-1 text-xs font-semibold text-navy">
                  {p.location}
                </span>
                <h2 className="mt-3 text-lg font-bold leading-snug text-navy">{p.title}</h2>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
