import { Reveal } from './motion/Reveal';

const steps = [
  {
    n: '01',
    title: 'Liên hệ & tư vấn',
    desc: 'Gọi hotline hoặc gửi yêu cầu — kỹ sư tư vấn công suất phù hợp trong 15 phút.',
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
    ),
  },
  {
    n: '02',
    title: 'Khảo sát & báo giá',
    desc: 'Khảo sát công trình miễn phí, báo giá minh bạch theo ngày · tuần · tháng.',
    icon: (
      <>
        <path d="M9 11H3v10h6M9 11V3h6v18H9M9 11h6m6 10V7h-6" />
      </>
    ),
  },
  {
    n: '03',
    title: 'Giao lắp tận nơi',
    desc: 'Vận chuyển và lắp đặt đến chân công trình trong 24–48h, hướng dẫn vận hành.',
    icon: (
      <>
        <path d="M10 17h4V5H2v12h3M20 17h2v-5l-3-4h-4v9h2M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
      </>
    ),
  },
  {
    n: '04',
    title: 'Vận hành & hỗ trợ',
    desc: 'Kỹ thuật túc trực 24/7, bảo dưỡng định kỳ, xử lý sự cố trong ngày.',
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5z" />
      </>
    ),
  },
];

export function Process() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-14 lg:px-12 md:py-18">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Quy trình</p>
          <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-navy md:text-[40px]">
            Thuê thiết bị chỉ với 4 bước
          </h2>
          <p className="mt-3 text-base text-muted">
            Nhanh gọn, minh bạch — từ cuộc gọi đầu tiên đến khi máy vận hành tại công trình.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative">
                {/* Icon node */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-dark text-white shadow-lg shadow-navy/20 transition-all duration-300 group-hover:bg-accent group-hover:text-navy-dark group-hover:shadow-accent/30 group-hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-extrabold text-navy-dark ring-2 ring-white">
                    {s.n.replace('0', '')}
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
