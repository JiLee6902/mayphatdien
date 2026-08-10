import type { ReactNode } from 'react';

const iconClass = 'h-6 w-6';
const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const features: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    ),
    title: 'Sẵn kho, giao nhanh',
    desc: 'Hơn 70 thiết bị luôn sẵn sàng, điều động và giao lắp trong ngày.',
  },
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Thương hiệu chính hãng',
    desc: 'Cummins, Mitsubishi, Denyo, MTU — máy chuẩn, bảo dưỡng định kỳ.',
  },
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.4 2.4-2.6-.7-.7-2.6 2.4-2.5Z" />
      </svg>
    ),
    title: 'Kỹ thuật túc trực 24/7',
    desc: 'Đội kỹ thuật ứng trực liên tục, xử lý sự cố nhanh mọi thời điểm.',
  },
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M1 3h13v12H1z" />
        <path d="M14 8h5l3 3v4h-8V8Z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
    title: 'Khảo sát & lắp đặt tận nơi',
    desc: 'Khảo sát công trình miễn phí, vận chuyển và lắp đặt đến tận chân công trình.',
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-8 bg-accent" />
        Cam kết dịch vụ
      </p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
        Vì sao chọn PMC
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Đối tác cho thuê thiết bị công nghiệp uy tín — từ thiết bị chính hãng đến dịch vụ
        kỹ thuật tận nơi.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(18,49,79,0.25)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-accent">
              {f.icon}
            </div>
            <h3 className="mt-4 font-bold text-navy">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
