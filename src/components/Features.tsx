import type { ReactNode } from 'react';
import { Reveal } from './motion/Reveal';

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

const features: { icon: ReactNode; title: string; desc: string; points: string[] }[] = [
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    ),
    title: 'Sẵn kho, giao nhanh',
    desc: 'Hơn 70 thiết bị luôn sẵn sàng, điều động trong ngày.',
    points: ['Kho lớn tại HCM & Vũng Tàu', 'Giao lắp 24–48h', 'Thiết bị dự phòng'],
  },
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Thương hiệu chính hãng',
    desc: 'Cummins, Mitsubishi, Denyo, MTU — máy chuẩn.',
    points: ['Nhập khẩu chính hãng', 'Bảo dưỡng định kỳ', 'Vận hành ổn định'],
  },
  {
    icon: (
      <svg {...svgProps} className={iconClass}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.4 2.4-2.6-.7-.7-2.6 2.4-2.5Z" />
      </svg>
    ),
    title: 'Kỹ thuật túc trực 24/7',
    desc: 'Đội kỹ thuật ứng trực, xử lý sự cố mọi thời điểm.',
    points: ['Hotline 24/7', 'Kỹ thuật viên tận nơi', 'Xử lý sự cố nhanh'],
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
    desc: 'Khảo sát miễn phí, vận chuyển đến chân công trình.',
    points: ['Khảo sát miễn phí', 'Vận chuyển tận nơi', 'Hướng dẫn vận hành'],
  },
];

function Dot() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-mint" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Features() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1320px] px-8 py-28 lg:px-12 md:py-36">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Cam kết dịch vụ
            <span className="h-px w-8 bg-accent" />
          </p>
          <h2 className="mt-4 text-[36px] font-extrabold tracking-tight text-navy md:text-[52px]">
            Vì sao chọn PMC
          </h2>
          <p className="mt-4 text-muted">
            Đối tác cho thuê thiết bị công nghiệp uy tín — từ thiết bị chính hãng đến dịch vụ
            kỹ thuật tận nơi, đồng hành trọn vòng đời dự án.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 90}
              className="group flex h-full flex-col rounded-[20px] bg-[linear-gradient(160deg,#0c463f,#083832)] p-7 text-white ring-1 ring-white/10 shadow-[0_24px_60px_-32px_rgba(5,46,42,0.85)] transition duration-300 hover:-translate-y-1.5 hover:ring-mint/30 hover:shadow-[0_34px_70px_-30px_rgba(16,185,129,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint/12 text-mint ring-1 ring-mint/20">
                {f.icon}
              </div>
              <h3 className="mt-6 min-h-[3.25rem] text-lg font-bold leading-snug text-white">{f.title}</h3>
              <p className="mt-1 min-h-[2.75rem] text-sm leading-relaxed text-white/60">{f.desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-white/80">
                    <Dot />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
