import { Reveal } from './motion/Reveal';

const items = [
  { n: '01', title: 'Sẵn kho — giao 24–48h', desc: '70+ thiết bị tại kho HCM & Vũng Tàu.' },
  { n: '02', title: 'Thương hiệu chính hãng', desc: 'Cummins, Mitsubishi, Denyo, MTU, Airman.' },
  { n: '03', title: 'Kỹ thuật túc trực 24/7', desc: 'Sự cố nhỏ xử lý trong ngày, không trễ tiến độ.' },
  { n: '04', title: 'Khảo sát & lắp đặt miễn phí', desc: 'Đến chân công trình, hướng dẫn vận hành tại chỗ.' },
];

export function Features() {
  return (
    <section className="border-b border-edge bg-graphite">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">

          {/* Left — statement */}
          <Reveal>
            <p className="eyebrow">Tại sao chọn PMC</p>
            <h2 className="mt-4 font-display text-[32px] font-extrabold leading-[1.05] tracking-tight text-paper md:text-[42px]">
              Cam kết dịch vụ trọn gói
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-paper-dim">
              Từ khảo sát đến tháo dỡ — PMC đồng hành toàn bộ dự án.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-2.5 text-[13px] font-bold text-white">
              <span className="pulse-dot h-2 w-2 rounded-full bg-white" />
              Khảo sát &amp; báo giá trong ngày
            </div>
          </Reveal>

          {/* Right — hairline-divided rows, no boxes */}
          <div className="divide-y divide-edge border-t border-edge">
            {items.map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <div className="group flex items-start gap-6 py-6">
                  <span className="font-display text-[34px] font-extrabold leading-none text-signal/25 transition-colors group-hover:text-signal/50">{item.n}</span>
                  <div className="flex-1 border-l border-edge pl-6">
                    <h3 className="font-display text-[17px] font-extrabold tracking-tight text-paper">{item.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-paper-dim">{item.desc}</p>
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
