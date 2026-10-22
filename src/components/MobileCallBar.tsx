import Link from 'next/link';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';

/** Sticky bottom action bar on mobile — the key B2B conversion shortcut. */
export function MobileCallBar({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-edge bg-white/95 backdrop-blur-md md:hidden">
      <a
        href={telHref(settings.hotline)}
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-signal-dark"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
        <span className="text-[11px] font-bold">Gọi ngay</span>
      </a>
      <a
        href={settings.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 border-x border-edge py-2.5 text-[#0068ff]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2C6.5 2 2 6 2 11c0 2.7 1.4 5.1 3.6 6.7-.1.9-.5 2.1-1.2 2.9-.2.3 0 .7.4.6 1.7-.3 3-1 3.9-1.5.9.2 1.9.3 2.9.3 5.5 0 10-4 10-9S17.5 2 12 2z" /></svg>
        <span className="text-[11px] font-bold">Zalo</span>
      </a>
      <Link
        href="/lien-he/"
        className="flex flex-col items-center justify-center gap-0.5 bg-signal py-2.5 text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12H5.2L4 17.2z" /></svg>
        <span className="text-[11px] font-bold">Báo giá</span>
      </Link>
    </div>
  );
}
