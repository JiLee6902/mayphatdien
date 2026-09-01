import { Button } from './ui/Button';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { CountUp } from './motion/CountUp';

const stats = [
  { value: 18, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 70, suffix: '+', label: 'Thiết bị sẵn kho' },
  { value: 1000, suffix: '+', label: 'Công trình phục vụ' },
];

const tags = ['Máy phát điện', 'Máy nén khí', 'Phun rửa UHP', 'Máy hàn'];
const brands = ['Cummins', 'Mitsubishi', 'Denyo', 'MTU', 'Airman', 'Komatsu', 'Ingersoll Rand'];

export function Hero({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0c463f_0%,#083832_55%,#052e2a_100%)] text-white">
      {/* subtle line-art curves */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 700">
        <defs>
          <linearGradient id="hl" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#6ee7b7" stopOpacity="0.16" />
            <stop offset="1" stopColor="#6ee7b7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-40 210 C 300 120 620 300 900 210 S 1380 120 1520 220" fill="none" stroke="url(#hl)" strokeWidth="1.5" />
        <path d="M-40 300 C 320 200 640 380 940 280 S 1400 200 1520 300" fill="none" stroke="url(#hl)" strokeWidth="1.5" />
        <path d="M-40 400 C 340 300 680 470 1000 360 S 1420 300 1520 400" fill="none" stroke="url(#hl)" strokeWidth="1.5" />
      </svg>
      <div aria-hidden className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.16),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-16 pb-14 md:pt-20 lg:px-10">
        {/* tag pills */}
        <div className="reveal is-visible flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-mint/90 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {t}
            </span>
          ))}
        </div>

        {/* two-column: text + prominent equipment image, same row */}
        <div className="mt-8 grid items-center gap-x-12 gap-y-10 lg:grid-cols-2">
          {/* left — text + stats */}
          <div className="reveal is-visible">
            <h1 className="text-[38px] font-extrabold leading-[1.07] tracking-tight md:text-[54px]">
              Cho thuê thiết bị công nghiệp.
              <span className="mt-1 block text-mint">Sẵn kho, giao ngay.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/70">
              Máy phát điện, máy nén khí, phun rửa áp lực cao &amp; máy hàn — công suất 10–1500 kVA,
              thương hiệu lớn. Khảo sát, vận chuyển, lắp đặt tận công trình khắp miền Nam.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/lien-he/" variant="light" className="px-7 py-4 text-[15px]">
                Nhận báo giá
              </Button>
              <Button href={telHref(settings.hotline)} variant="outline-light" className="px-7 py-4 text-[15px]">
                Gọi 0936 899 431
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="block text-[32px] font-extrabold leading-none tracking-tight text-white"
                  />
                  <div className="mt-2 text-[13px] text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right — clean equipment image */}
          <div className="reveal is-visible">
            <div className="overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.04] p-2 shadow-[0_50px_120px_-55px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-[18px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/showcase-genset-yard.jpg"
                  alt="Máy phát điện PMC lắp đặt tại nhà máy công nghiệp"
                  className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
                  fetchPriority="high"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-3 py-3">
                <div className="min-w-0 truncate text-[13px] text-white/70">
                  <span className="font-bold text-white">Máy phát điện 550 kVA</span> · Lắp đặt tận nhà máy
                </div>
                <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-mint/15 px-3 py-1.5 text-[12px] font-bold text-mint">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" /> Sẵn sàng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* brand strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-6 py-7 lg:px-10">
          <div className="marquee-mask overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="marquee-track items-center gap-x-14">
              {[...brands, ...brands].map((b, i) => (
                <span key={`${b}-${i}`} className="whitespace-nowrap text-lg font-bold tracking-wide text-white/35">
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
