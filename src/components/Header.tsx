import Link from 'next/link';
import { mainNav } from '@/config/nav';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Button } from './ui/Button';
import { HeaderSearch } from './HeaderSearch';
import { MobileMenu } from './MobileMenu';

export function Header({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <header className="sticky top-0 z-40">
      {/* Red utility bar */}
      <div className="bg-signal text-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-1.5 text-[12.5px] font-medium lg:px-10">
          <span className="hidden sm:block">Sẵn kho · Giao 24–48h · Kỹ thuật túc trực 24/7 — toàn miền Nam</span>
          <div className="ml-auto flex items-center gap-5">
            <a href={telHref(settings.hotline)} className="font-bold transition-opacity hover:opacity-80">☎ 0936 899 431</a>
            <a href={settings.zaloUrl} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">Zalo</a>
          </div>
        </div>
      </div>

      {/* Main white header */}
      <div className="border-b border-edge bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1320px] items-center gap-6 px-6 lg:px-10">
          <Link href="/" aria-label={`${settings.brand} trang chủ`} className="flex items-center">
            <span className="bg-signal px-3 py-1.5 font-display text-[22px] font-extrabold tracking-tight text-white">
              {settings.brand}
            </span>
          </Link>
          <nav
            aria-label="Điều hướng chính"
            className="ml-2 hidden gap-7 text-[14px] font-bold text-paper md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative whitespace-nowrap py-1.5 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:text-signal hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <HeaderSearch />
          <Button href="/lien-he/" className="hidden md:ml-auto md:inline-flex lg:ml-0">
            Nhận báo giá
          </Button>
          <MobileMenu hotline={settings.hotline} />
        </div>
      </div>
    </header>
  );
}
