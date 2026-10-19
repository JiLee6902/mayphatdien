import { Img } from './ui/Img';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { CountUp } from './motion/CountUp';

const stats = [
  { value: 18, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 70, suffix: '+', label: 'Thiết bị sẵn kho' },
  { value: 1000, suffix: '+', label: 'Công trình phục vụ' },
  { value: 24, suffix: '/7', label: 'Hỗ trợ kỹ thuật' },
];

const brands = ['CUMMINS', 'MITSUBISHI', 'DENYO', 'MTU', 'AIRMAN', 'KOMATSU', 'INGERSOLL RAND'];

export function Hero({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const phone = settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
  return (
    <section>
      {/* Red hero band (Hilti) */}
      <div className="relative overflow-hidden bg-signal">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid items-center gap-10 py-14 lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:py-20">
            {/* Left */}
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/85">
                Sẵn kho · Giao 24–48h · Toàn miền Nam
              </p>
              <h1 className="mt-5 font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-ink md:text-[58px]">
                Cho thuê thiết bị<br />công nghiệp.
              </h1>
              <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink/80">
                Máy phát điện, máy nén khí, thiết bị UHP &amp; máy hàn — khảo sát,
                giao lắp và vận hành tận công trình, kỹ thuật túc trực 24/7.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={telHref(settings.hotline)}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-signal transition-transform duration-150 hover:-translate-y-0.5"
                >
                  Gọi báo giá · {phone}
                </a>
                <a
                  href="/thiet-bi/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-signal"
                >
                  Xem thiết bị
                </a>
              </div>
            </div>

            {/* Right — equipment image */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg border-4 border-white/20 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
                <Img
                  src="/images/showcase-genset-yard.jpg"
                  alt="Máy phát điện PMC lắp đặt tại công trình"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats band — light */}
      <div className="border-b border-edge bg-white">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-edge px-5 py-7 first:border-l-0 md:px-6">
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-[30px] font-extrabold leading-none tracking-tight text-signal md:text-[38px]"
                />
                <p className="mt-2 text-[12.5px] font-medium text-paper-dim">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-b border-edge bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 lg:px-10">
          {brands.map((b) => (
            <span key={b} className="whitespace-nowrap text-[13px] font-bold tracking-[0.1em] text-paper-mute">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
