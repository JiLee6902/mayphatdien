import { Button } from './ui/Button';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Reveal } from './motion/Reveal';

export function CtaBand({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora absolute right-[8%] top-[-40%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.30),transparent_60%)] blur-2xl" />
        <div className="aurora-slow absolute left-[-6%] bottom-[-50%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.20),transparent_60%)] blur-2xl" />
      </div>
      <Reveal className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Cần thuê thiết bị gấp?
          </h2>
          <p className="mt-2 text-white/70">
            Gọi ngay để được khảo sát và báo giá trong ngày.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={telHref(settings.hotline)}>Gọi 0936 899 431</Button>
          <Button href={settings.zaloUrl} variant="outline-light">
            Chat Zalo
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
