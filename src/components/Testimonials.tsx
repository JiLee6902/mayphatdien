import { Reveal } from '@/components/motion/Reveal';

function Stars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 trên 5 sao">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-accent" aria-hidden>
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
    <section className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">

        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-widest text-accent">Đánh giá</p>
          <h2 className="mt-2 text-[30px] font-extrabold tracking-tight text-navy md:text-[38px]">Khách hàng nói gì về PMC</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[3fr_2fr]">

          {/* Featured quote — large */}
          <Reveal>
            <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-dark p-8 md:p-10">
              {/* Accent glow + quote mark */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[70px]" />
              <span className="pointer-events-none absolute right-6 top-2 select-none text-[130px] font-black leading-none text-white/[0.06]">&rdquo;</span>

              <Stars className="relative" />
              <blockquote className="relative mt-6 text-[21px] font-medium leading-relaxed text-white/90 md:text-[24px]">
                {featured.quote}
              </blockquote>
              <figcaption className="relative mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent text-[15px] font-extrabold text-navy-dark">
                  {featured.author.split(' ').pop()?.[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{featured.author}</p>
                  <p className="text-sm text-white/50">{featured.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Secondary quotes — stacked */}
          <div className="flex flex-col gap-6">
            {others.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="flex flex-1 flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <Stars />
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-4">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/10 text-[13px] font-extrabold text-accent">
                      {t.author.split(' ').pop()?.[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{t.author}</p>
                      <p className="text-[12px] text-muted">{t.role}</p>
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
