import { Button } from './ui/Button';
import { Img } from './ui/Img';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { CountUp } from './motion/CountUp';

const stats = [
  { value: 18, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 70, suffix: '+', label: 'Thiết bị sẵn kho' },
  { value: 1000, suffix: '+', label: 'Công trình phục vụ' },
];

const brands = ['Cummins', 'Mitsubishi', 'Denyo', 'MTU', 'Airman', 'Komatsu', 'Ingersoll Rand'];

export function Hero({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle blue radial — depth without distraction */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent/[0.055] blur-[80px]" />

      <div className="mx-auto w-full max-w-[1240px] px-6 pt-14 pb-10 lg:px-10">
        <div className="grid items-stretch gap-x-14 gap-y-10 lg:grid-cols-[1fr_1.1fr]">

          {/* Left */}
          <div className="reveal is-visible flex flex-col justify-center">
            {/* Trust badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/6 px-3.5 py-1.5">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              <span className="text-[13px] font-semibold text-accent">Sẵn kho · Giao trong 24–48h</span>
            </div>

            <h1 className="text-[44px] font-extrabold leading-[1.04] tracking-tight text-navy md:text-[60px]">
              Cho thuê thiết bị<br />
              công nghiệp<span className="text-accent-dark">.</span>
            </h1>
            <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-muted">
              Giao lắp tận công trình — khắp miền Nam.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={telHref(settings.hotline)} className="px-7 py-4 text-[15px]">
                Gọi ngay · 0936 899 431
              </Button>
              <Button href="/lien-he/" variant="outline" className="px-7 py-4 text-[15px]">
                Nhận báo giá
              </Button>
            </div>

            {/* Stats — divided row */}
            <div className="mt-10 flex divide-x divide-line border-t border-line pt-8">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 px-5 first:pl-0">
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="text-[32px] font-extrabold leading-none tracking-tight text-navy md:text-[38px]"
                  />
                  <p className="mt-2 text-[12.5px] font-medium leading-tight text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image fills column height */}
          <div className="reveal is-visible flex lg:py-4">
            <div className="group relative w-full overflow-hidden rounded-[20px] shadow-[0_24px_64px_-16px_rgba(20,36,59,0.22)] ring-1 ring-black/[0.06] transition-all duration-500 hover:ring-accent/25" style={{ minHeight: '320px' }}>
              <Img
                src="/images/showcase-genset-yard.jpg"
                alt="Máy phát điện PMC lắp đặt tại nhà máy công nghiệp"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Live status badge — top */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                <span className="pulse-dot h-2 w-2 rounded-full bg-ok" />
                Đang cho thuê
              </div>

              {/* Floating glass spec card — bottom */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/20">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/60">Máy phát điện</p>
                  <p className="text-[17px] font-extrabold text-white">550 kVA · Cummins</p>
                </div>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/30">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy-dark" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1240px] px-6 py-5 lg:px-10">
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track items-center gap-x-14">
              {[...brands, ...brands].map((b, i) => (
                <span key={`${b}-${i}`} className="whitespace-nowrap text-[14px] font-semibold tracking-wide text-navy/25">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
