import { Img } from './ui/Img';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';

const stats = [
  { v: '18+', l: 'Năm kinh nghiệm' },
  { v: '70+', l: 'Thiết bị sẵn kho' },
  { v: '1000+', l: 'Công trình' },
  { v: '24/7', l: 'Kỹ thuật túc trực' },
];

const brands = ['CUMMINS', 'MITSUBISHI', 'DENYO', 'MTU', 'AIRMAN', 'KOMATSU', 'INGERSOLL RAND'];

export function Hero({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const phone = settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
  return (
    <section>
      {/* Immersive photo hero with a red-to-dark brand wash */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img
            src="/images/showcase-genset-yard.jpg"
            alt="Máy phát điện PMC tại công trình công nghiệp"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* dark base for legibility + red brand wash from the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/75 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-signal/55 via-signal/10 to-transparent mix-blend-multiply" />
        </div>

        {/* red accent edge */}
        <div className="absolute inset-y-0 left-0 z-10 w-1.5 bg-signal" />

        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="flex min-h-[600px] max-w-[760px] flex-col justify-center py-20 md:min-h-[680px]">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-signal drop-shadow">
              <span className="text-white/90">Sẵn kho</span> · Giao 24–48h · Toàn miền Nam
            </p>

            <h1 className="mt-5 font-display text-[46px] font-extrabold leading-[0.98] tracking-tight text-white drop-shadow-sm md:text-[72px]">
              Cho thuê thiết bị<br />công nghiệp<span className="text-signal">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/85">
              Máy phát điện, máy nén khí, thiết bị UHP &amp; máy hàn — khảo sát,
              giao lắp và vận hành tận công trình, kỹ thuật túc trực 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={telHref(settings.hotline)}
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-white shadow-lg shadow-signal/30 transition-transform duration-150 hover:-translate-y-0.5"
              >
                Gọi báo giá · {phone}
              </a>
              <a
                href="/thiet-bi/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/70 px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink"
              >
                Xem thiết bị
              </a>
            </div>

            {/* Trust chips */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-lg border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-sm">
                  <div className="font-display text-[24px] font-extrabold leading-none text-white">{s.v}</div>
                  <div className="mt-1 text-[11px] font-medium leading-tight text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-b border-edge bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-9 gap-y-3 px-6 py-5 lg:justify-between lg:px-10">
          <span className="text-[12px] font-bold uppercase tracking-wide text-paper-mute">Thương hiệu phân phối</span>
          {brands.map((b) => (
            <span key={b} className="whitespace-nowrap text-[13px] font-bold tracking-[0.08em] text-paper-dim">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
