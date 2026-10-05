import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const metadata: Metadata = {
  title: { absolute: 'Giới thiệu Công ty TNHH P.M.C — Cho thuê thiết bị công nghiệp' },
  description:
    'Thành lập năm 2007, P.M.C chuyên cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn, phục vụ các tỉnh thành miền Nam.',
  alternates: { canonical: '/gioi-thieu/' },
};

const stats = [
  { value: '18+ năm', label: 'Kinh nghiệm ngành' },
  { value: '70+ thiết bị', label: 'Sẵn kho cho thuê' },
  { value: '10+ tỉnh thành', label: 'Phủ khắp miền Nam' },
  { value: '24/7 hỗ trợ', label: 'Vận hành & sự cố' },
];

const services: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: 'Khảo sát',
    desc: 'Đánh giá tải, mặt bằng và điều kiện thi công tại công trình.',
    icon: <Icon><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Icon>,
  },
  {
    title: 'Vận chuyển',
    desc: 'Điều phối xe chuyên dụng, giao thiết bị đúng tiến độ.',
    icon: <Icon><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></Icon>,
  },
  {
    title: 'Lắp đặt',
    desc: 'Đấu nối, căn chỉnh và kiểm tra an toàn trước khi bàn giao.',
    icon: <Icon><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z" /></Icon>,
  },
  {
    title: 'Vận hành',
    desc: 'Hướng dẫn hoặc cử kỹ thuật viên vận hành theo yêu cầu.',
    icon: <Icon><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></Icon>,
  },
  {
    title: 'Bảo trì',
    desc: 'Bảo dưỡng định kỳ, thay thế vật tư trong suốt thời gian thuê.',
    icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Icon>,
  },
  {
    title: 'Xử lý sự cố',
    desc: 'Đội kỹ thuật cơ động, có mặt nhanh khi phát sinh sự cố.',
    icon: <Icon><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></Icon>,
  },
];

const provinces = [
  'TP. Hồ Chí Minh',
  'Bình Dương',
  'Đồng Nai',
  'Bà Rịa - Vũng Tàu',
  'Long An',
  'Cần Thơ',
];

export default function GioiThieuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Về chúng tôi"
        title="Giới thiệu Công ty TNHH P.M.C"
        subtitle="Đối tác tin cậy trong lĩnh vực cho thuê thiết bị công nghiệp tại miền Nam từ năm 2007."
        crumb="Giới thiệu"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-10 md:py-14 lg:px-12">
        <div className="space-y-6 text-lg leading-relaxed text-ink">
          <p>
            Công ty TNHH P.M.C được thành lập từ năm 2007, chuyên cung cấp dịch vụ cho thuê
            máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn công
            nghiệp. Trải qua hơn 18 năm hoạt động, PMC đã trở thành đối tác tin cậy của nhiều
            nhà thầu, khu công nghiệp và dự án trọng điểm.
          </p>
          <p>
            Chúng tôi phục vụ khách hàng trên khắp khu vực miền Nam, bao gồm TP. Hồ Chí Minh,
            Bình Dương, Vũng Tàu, Đồng Nai, Cần Thơ và nhiều tỉnh thành lân cận. Kho thiết bị
            đa dạng công suất cùng đội ngũ kỹ thuật giàu kinh nghiệm giúp PMC đáp ứng linh hoạt
            mọi quy mô công trình — từ sự kiện ngắn ngày đến các dự án thi công dài hạn.
          </p>
          <p>
            Phương châm của PMC là mang đến giải pháp thuê thiết bị trọn gói, minh bạch về chi
            phí và cam kết tiến độ. Mỗi đơn hàng đều được khảo sát kỹ lưỡng để tư vấn đúng công
            suất, tối ưu chi phí vận hành và bảo đảm an toàn tuyệt đối cho công trình của khách
            hàng.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
            >
              <p className="flex flex-1 items-center text-3xl font-extrabold tracking-tight text-accent md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20">
          <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Dịch vụ trọn gói</p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            Đồng hành từ khảo sát đến vận hành
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv) => (
              <div
                key={sv.title}
                className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-1 hover:ring-accent/20"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark transition-colors group-hover:bg-accent group-hover:text-navy-dark">
                  {sv.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{sv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{sv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service area */}
        <div className="mt-20 rounded-2xl border border-line bg-white p-8 shadow-sm md:p-10">
          <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Khu vực phục vụ</p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            Phủ khắp các tỉnh thành miền Nam
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {provinces.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-line bg-bg px-4 py-2 text-sm font-semibold text-navy"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
