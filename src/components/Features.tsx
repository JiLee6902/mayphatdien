import { Reveal } from './motion/Reveal';

const items = [
  { n: '01', title: 'Sẵn kho — giao 24–48h', desc: '70+ thiết bị tại kho HCM & Vũng Tàu.' },
  { n: '02', title: 'Thương hiệu chính hãng', desc: 'Cummins, Mitsubishi, Denyo, MTU, Airman.' },
  { n: '03', title: 'Kỹ thuật túc trực 24/7', desc: 'Sự cố nhỏ xử lý trong ngày, không trễ tiến độ.' },
  { n: '04', title: 'Khảo sát & lắp đặt miễn phí', desc: 'Đến chân công trình, hướng dẫn vận hành tại chỗ.' },
];

export function Features() {
  return (
    <section className="blueprint relative overflow-hidden bg-navy-dark">
      {/* Accent glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1280px] px-8 py-14 lg:px-12 md:py-18">
        <div className="grid gap-14 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:items-start">

          {/* Left — statement */}
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Tại sao chọn PMC</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-white md:text-[40px]">
              18 năm cho thuê thiết bị công nghiệp tại miền Nam.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Từ khảo sát đến tháo dỡ — PMC đồng hành toàn bộ dự án.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white/80">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              Hỗ trợ kỹ thuật 24/7
            </div>
          </Reveal>

          {/* Right — numbered list */}
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06]">
                  <span className="text-[26px] font-extrabold tabular-nums text-accent/70 transition-colors duration-300 group-hover:text-accent">{item.n}</span>
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/50">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
