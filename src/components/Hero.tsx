import { Button } from './ui/Button';
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
  return (
    <section className="relative isolate">
      {/* Cinematic image band with a dark scrim (the one dark moment up top) */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img
            src="/images/showcase-genset-yard.jpg"
            alt="Máy phát điện PMC lắp đặt tại nhà máy công nghiệp"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        </div>

        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="on-dark flex min-h-[560px] max-w-[760px] flex-col justify-center py-24 md:min-h-[660px]">
            <div className="eyebrow mb-7">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />
              Sẵn kho · Giao 24–48h · Toàn miền Nam
            </div>

            <h1 className="font-display text-[46px] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-[76px]">
              Cho thuê<br />
              thiết bị<br />
              công nghiệp<span className="text-signal">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/80 md:text-[18px]">
              Máy phát điện, máy nén khí, thiết bị UHP &amp; máy hàn — khảo sát, giao lắp
              và vận hành tận công trình, kỹ thuật túc trực 24/7 trên khắp miền Nam.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={telHref(settings.hotline)} className="px-8 py-4 text-[15px]">
                Gọi báo giá → {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
              </Button>
              <Button href="/thiet-bi/" variant="outline-light" className="px-8 py-4 text-[15px]">
                Xem thiết bị
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust / stats band — black strip (heavy-equipment) */}
      <div className="bg-ink">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/10 px-5 py-7 first:border-l-0 md:px-6">
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-[30px] font-extrabold leading-none tracking-tight text-signal md:text-[38px]"
                />
                <p className="mt-2 text-[12.5px] font-medium text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand strip — static row */}
      <div className="border-b border-edge bg-graphite">
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
