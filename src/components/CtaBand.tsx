import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Reveal } from './motion/Reveal';

export function CtaBand({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const phone = settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3');
  return (
    <section className="bg-signal">
      <Reveal className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/85">
              Phản hồi trong 15 phút
            </p>
            <h2 className="mt-4 font-display text-[28px] font-extrabold leading-[1.08] tracking-tight text-ink md:text-[42px]">
              Cần thuê thiết bị cho dự án?
            </h2>
            <p className="mt-3 text-[16.5px] leading-relaxed text-ink/80">
              Giao lắp tận công trình, hỗ trợ kỹ thuật 24/7.
            </p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:min-w-[300px]">
            <a
              href={telHref(settings.hotline)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-[15px] font-bold uppercase tracking-wide text-signal transition-transform duration-150 hover:-translate-y-0.5"
            >
              Gọi {phone}
            </a>
            <a
              href={settings.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-4 text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-signal"
            >
              Chat Zalo — báo giá nhanh
            </a>
            <p className="mt-1 text-center text-[12px] text-ink/70">
              Email: {settings.email}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
