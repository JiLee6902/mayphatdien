import Link from 'next/link';
import { mainNav } from '@/config/nav';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Button } from './ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_var(--color-line)]">
      <div className="bg-navy text-[13px] text-[#c3d3e2]">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between px-6 lg:px-8">
          <span className="hidden sm:inline">
            Cho thuê 24/7 · Khảo sát &amp; lắp đặt tận công trình
          </span>
          <span className="ml-auto">
            Hotline:{' '}
            <a className="font-semibold text-white hover:text-accent" href={telHref(settings.hotline)}>
              0936 899 431
            </a>
          </span>
        </div>
      </div>
      <div className="relative mx-auto flex h-[74px] max-w-[1280px] items-center gap-6 border-b border-line px-6 lg:px-8">
        <Link href="/" className="text-[26px] font-extrabold tracking-tight text-navy">
          {settings.brand}
          <span className="ml-0.5 text-accent">.</span>
        </Link>
        <nav
          aria-label="Điều hướng chính"
          className="ml-2 hidden gap-6 font-semibold text-[#2a3742] md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap py-1.5 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2.5 lg:flex">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3-3" strokeLinecap="round" />
          </svg>
          <input
            className="w-56 bg-transparent text-sm outline-none"
            placeholder="Tìm: 100kVA, cummins, máy hàn…"
            aria-label="Tìm thiết bị"
          />
        </div>
        <Button href="/lien-he/" className="hidden md:ml-auto md:inline-flex lg:ml-0">
          Nhận báo giá
        </Button>
        <MobileMenu hotline={settings.hotline} />
      </div>
    </header>
  );
}
