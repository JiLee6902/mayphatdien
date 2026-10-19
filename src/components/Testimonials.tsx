import { Reveal } from '@/components/motion/Reveal';

function Stars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 trên 5 sao">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-signal" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

const featured = {
  quote: 'PMC giao máy đúng hạn, đội kỹ thuật lắp đặt chuyên nghiệp. Máy phát điện Cummins 550kVA chạy ổn định suốt 6 tháng thi công — không có bất kỳ sự cố nào ảnh hưởng đến tiến độ.',
  author: 'Anh Minh Tuấn',
  role: 'Chỉ huy trưởng công trình, Đồng Nai',
};

const others = [
  {
    quote: 'Thuê máy nén khí Airman cho dự án cảng. PMC hỗ trợ 24/7, khi có sự cố nhỏ kỹ thuật viên có mặt trong vòng 2 tiếng.',
    author: 'Kỹ sư Bảo Châu',
    role: 'Quản lý dự án, PTSC Vũng Tàu',
  },
  {
    quote: 'Đã hợp tác nhiều dự án ở miền Nam. Giá cạnh tranh, thiết bị đúng công suất như cam kết. Sẽ tiếp tục hợp tác dài hạn.',
    author: 'Chị Hồng Ngọc',
    role: 'Giám đốc mua hàng, Nhà máy Bình Dương',
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-edge bg-graphite">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">

        <Reveal className="border-b border-edge pb-6">
          <p className="eyebrow">Đánh giá</p>
          <h2 className="mt-3 font-display text-[30px] font-extrabold uppercase tracking-tight text-paper md:text-[44px]">Khách hàng nói gì</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[3fr_2fr]">

          {/* Featured quote — large */}
          <Reveal>
            <figure className="relative flex h-full flex-col border border-edge bg-graphite-2 p-8 md:p-10">
              <span className="pointer-events-none absolute right-6 top-2 select-none font-display text-[130px] font-black leading-none text-paper/[0.05]">&rdquo;</span>

              <Stars className="relative" />
              <blockquote className="relative mt-6 text-[21px] font-medium leading-relaxed text-paper md:text-[24px]">
                {featured.quote}
              </blockquote>
              <figcaption className="relative mt-auto flex items-center gap-4 border-t border-edge pt-6">
                <div className="flex h-11 w-11 flex-none items-center justify-center bg-signal font-display text-[15px] font-extrabold text-white">
                  {featured.author.split(' ').pop()?.[0]}
                </div>
                <div>
                  <p className="font-bold text-paper">{featured.author}</p>
                  <p className="text-sm text-paper-dim">{featured.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Secondary quotes — stacked */}
          <div className="flex flex-col gap-4">
            {others.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="flex flex-1 flex-col border border-edge bg-graphite-2 p-6 transition-colors duration-300 hover:border-edge-strong">
                  <Stars />
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-paper-dim">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-edge pt-4">
                    <div className="flex h-9 w-9 flex-none items-center justify-center border border-signal/40 font-display text-[13px] font-extrabold text-signal">
                      {t.author.split(' ').pop()?.[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-paper">{t.author}</p>
                      <p className="text-[12px] text-paper-mute">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
