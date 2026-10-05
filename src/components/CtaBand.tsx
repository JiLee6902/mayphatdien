import { Button } from './ui/Button';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Reveal } from './motion/Reveal';

export function CtaBand({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <section className="blueprint relative overflow-hidden bg-navy-dark">
      {/* Accent glows */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-accent/25 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-accent/15 blur-[90px]" />

      <Reveal className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-semibold text-white/80">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              Phản hồi trong 15 phút
            </div>
            <h2 className="mt-5 text-[28px] font-extrabold leading-tight text-white md:text-[40px]">
              Cần thuê thiết bị cho dự án?
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-white/60">
              Giao lắp tận công trình, hỗ trợ kỹ thuật 24/7.
            </p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:min-w-[280px]">
            <Button href={telHref(settings.hotline)} className="py-4 text-[15px]">
              Gọi {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
            </Button>
            <Button href={settings.zaloUrl} variant="outline-light" className="py-4 text-[15px]">
              Chat Zalo — báo giá nhanh
            </Button>
            <p className="mt-1 text-center text-[13px] text-white/40">
              Hoặc email: {settings.email}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
