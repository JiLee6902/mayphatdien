import { Img } from './ui/Img';
import { Hero3D } from './Hero3D';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';

const brands = ['CUMMINS', 'MITSUBISHI', 'DENYO', 'MTU', 'AIRMAN', 'KOMATSU'];

export function Hero({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const phone = settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
  return (
    <section className="relative isolate -mt-[72px] overflow-hidden bg-ink">
      {/* Ambient dark backdrop (blurred machine) */}
      <div className="absolute inset-0 -z-10">
        <Img
          src="/images/showcase-genset-yard.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover blur-2xl brightness-[0.32]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/55" />
        <div className="pointer-events-none absolute -right-24 top-20 h-[560px] w-[560px] rounded-full bg-signal/30 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid min-h-[88vh] items-center gap-12 pb-24 pt-36 lg:grid-cols-[1fr_0.92fr]">
          {/* Left — copy */}
          <div>
            <p className="mb-7 text-[13px] font-medium uppercase tracking-[0.3em] text-white/70">
              Cho thuê thiết bị công nghiệp · Miền Nam
            </p>
            <h1 className="max-w-[16ch] font-display text-[44px] font-semibold leading-[1.0] tracking-tight text-white md:text-[72px]">
              Nguồn điện &amp; thiết bị cho <span className="font-extrabold">mọi công trình</span><span className="text-signal">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[18px] font-light leading-relaxed text-white/75">
              Máy phát điện, máy nén khí, UHP &amp; máy hàn — khảo sát, giao lắp
              và vận hành tận nơi, kỹ thuật túc trực 24/7.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={telHref(settings.hotline)}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 text-[15.5px] font-semibold text-white shadow-lg shadow-signal/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-dark"
              >
                Gọi báo giá · {phone}
              </a>
              <a href="/thiet-bi/" className="group inline-flex items-center gap-3 text-[15.5px] font-medium text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Xem thiết bị
              </a>
            </div>
          </div>

          {/* Right — real 3D genset (drag to rotate) */}
          <div className="relative hidden h-[520px] lg:block">
            <Hero3D />
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-xl bg-white px-5 py-3 shadow-xl">
              <div className="font-display text-[22px] font-extrabold leading-none text-ink">550 kVA</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-paper-mute">Cummins · sẵn kho</div>
            </div>
            <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-[11px] font-medium text-white/70">
              ↻ Kéo để xoay
            </div>
          </div>
        </div>
      </div>

      {/* Brand trust row */}
      <div className="relative border-t border-white/12">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-9 gap-y-3 px-6 py-5 lg:px-10">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/45">Tin dùng</span>
          {brands.map((b) => (
            <span key={b} className="text-[13px] font-semibold tracking-wide text-white/60">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
