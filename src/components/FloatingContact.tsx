import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';

export function FloatingContact({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={telHref(settings.hotline)}
        className="flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-bold text-white shadow-lg hover:bg-accent-dark"
      >
        <span aria-hidden>📞</span>
        <span>Gọi ngay</span>
      </a>
      <a
        href={settings.zaloUrl}
        className="flex items-center gap-2 rounded-full bg-navy px-4 py-3 font-bold text-white shadow-lg hover:bg-navy-dark"
      >
        <span aria-hidden>💬</span>
        <span>Zalo</span>
      </a>
    </div>
  );
}
