import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      {/* White speech bubble */}
      <path
        fill="#fff"
        d="M24 7C13.85 7 5.5 14.4 5.5 23.6c0 5.2 2.66 9.83 6.86 12.9-.24 1.98-1.02 4.02-2.38 5.7-.46.57.02 1.42.74 1.28 3.3-.62 5.96-1.86 7.9-3.1 1.72.4 3.53.62 5.38.62 10.15 0 18.5-7.4 18.5-16.6S34.15 7 24 7z"
      />
      {/* Zalo wordmark */}
      <text
        x="24"
        y="28.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#0068ff"
      >
        Zalo
      </text>
    </svg>
  );
}

export function FloatingContact({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3">
      <a
        href={telHref(settings.hotline)}
        aria-label="Gọi ngay"
        className="group flex items-center gap-0 overflow-hidden rounded-full bg-signal text-ink shadow-[0_4px_20px_rgba(255,90,31,0.45)] transition-all duration-300 hover:gap-2 hover:px-4 hover:shadow-[0_6px_28px_rgba(255,90,31,0.55)] active:scale-95"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center">
          <PhoneIcon />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[6rem]">
          Gọi ngay
        </span>
      </a>

      <a
        href={settings.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="group flex items-center gap-0 overflow-hidden rounded-full bg-[#0068ff] text-white shadow-[0_4px_20px_rgba(0,104,255,0.4)] transition-all duration-300 hover:gap-2 hover:px-4 hover:shadow-[0_6px_28px_rgba(0,104,255,0.5)] active:scale-95"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center">
          <ZaloIcon />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[5rem]">
          Zalo
        </span>
      </a>
    </div>
  );
}
