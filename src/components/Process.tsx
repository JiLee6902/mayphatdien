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
    icon: <path d="M9 11H3v10h6M9 11V3h6v18H9M9 11h6m6 10V7h-6" />,
  },
  {
    n: '03',
    title: 'Giao lắp tận nơi',
    desc: 'Vận chuyển và lắp đặt đến chân công trình trong 24–48h, hướng dẫn vận hành.',
    icon: <path d="M10 17h4V5H2v12h3M20 17h2v-5l-3-4h-4v9h2M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />,
  },
  {
    n: '04',
    title: 'Vận hành & hỗ trợ',
    desc: 'Kỹ thuật túc trực 24/7, bảo dưỡng định kỳ, xử lý sự cố trong ngày.',
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5z" />,
  },
];

export function Process() {
  return (
    <section className="border-b border-edge bg-graphite">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Quy trình</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold uppercase tracking-tight text-paper md:text-[44px]">
            Thuê thiết bị · 4 bước
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-paper-dim">
            Nhanh gọn, minh bạch — từ cuộc gọi đầu tiên đến khi máy vận hành tại công trình.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="h-full">
              <div className="surface surface-hover group relative flex h-full flex-col overflow-hidden rounded-sm p-6">
                {/* Big faded step number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-3 font-display text-[88px] font-extrabold leading-none text-signal/[0.08] transition-colors group-hover:text-signal/[0.14]">{s.n}</span>
                {/* Filled icon badge */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-sm bg-ink text-white transition-colors duration-300 group-hover:bg-signal group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="relative mt-6 font-display text-[16px] font-extrabold uppercase tracking-tight text-paper">{s.title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-relaxed text-paper-dim">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
