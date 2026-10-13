import { Button } from './ui/Button';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Reveal } from './motion/Reveal';

export function CtaBand({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />
      {/* Signal edge — top */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-signal" />

      <Reveal className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="eyebrow">
              Phản hồi trong 15 phút
            </div>
            <h2 className="mt-5 font-display text-[28px] font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-[44px]">
              Cần thuê thiết bị cho dự án?
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-white/65">
              Giao lắp tận công trình, hỗ trợ kỹ thuật 24/7.
            </p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:min-w-[300px]">
            <Button href={telHref(settings.hotline)} className="py-4 text-[15px]">
              Gọi {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
            </Button>
            <Button href={settings.zaloUrl} variant="outline-light" className="py-4 text-[15px]">
              Chat Zalo — báo giá nhanh
            </Button>
            <p className="mt-1 text-center font-mono text-[12px] text-white/45">
              Email: {settings.email}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
