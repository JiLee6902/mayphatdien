import { Reveal } from './motion/Reveal';

const items = [
  { n: '01', title: 'Sẵn kho — giao 24–48h', desc: '70+ thiết bị tại kho HCM & Vũng Tàu.' },
  { n: '02', title: 'Thương hiệu chính hãng', desc: 'Cummins, Mitsubishi, Denyo, MTU, Airman.' },
  { n: '03', title: 'Kỹ thuật túc trực 24/7', desc: 'Sự cố nhỏ xử lý trong ngày, không trễ tiến độ.' },
  { n: '04', title: 'Khảo sát & lắp đặt miễn phí', desc: 'Đến chân công trình, hướng dẫn vận hành tại chỗ.' },
];

export function Features() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">

          {/* Left — statement */}
          <Reveal>
            <p className="eyebrow">Tại sao chọn PMC</p>
            <h2 className="mt-4 font-display text-[32px] font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-[42px]">
              18 năm cho thuê thiết bị công nghiệp
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/60">
              Từ khảo sát đến tháo dỡ — PMC đồng hành toàn bộ dự án.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-2.5 text-[13px] font-bold text-ink">
              <span className="pulse-dot h-2 w-2 rounded-full bg-ink" />
              Hỗ trợ kỹ thuật 24/7
            </div>
          </Reveal>

          {/* Right — solid cards on dark */}
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.n} delay={i * 80} className="h-full">
                <div className="group flex h-full gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-signal/50 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-signal font-display text-[18px] font-extrabold text-ink">{item.n}</span>
                  <div>
                    <h3 className="font-display text-[15px] font-extrabold uppercase tracking-tight text-white">{item.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/55">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
