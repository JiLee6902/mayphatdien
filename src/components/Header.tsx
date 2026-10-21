'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNav } from '@/config/nav';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { HeaderSearch } from './HeaderSearch';
import { MobileMenu } from './MobileMenu';

export function Header({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Transparent overlay only at the top of the home page (over the dark hero).
  const solid = scrolled || pathname !== '/';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-edge bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center gap-6 px-6 lg:px-10">
        <Link href="/" aria-label={`${settings.brand} trang chủ`} className="flex items-center">
          <span className="rounded-md bg-signal px-2.5 py-1 font-display text-[20px] font-extrabold tracking-tight text-white">
            {settings.brand}
          </span>
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className={`ml-2 hidden gap-7 text-[14px] font-semibold transition-colors md:flex ${
            solid ? 'text-paper' : 'text-white/90'
          }`}
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap py-1.5 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {solid && <HeaderSearch />}
          <a
            href={telHref(settings.hotline)}
            className={`hidden text-[14px] font-bold transition-colors lg:block ${
              solid ? 'text-paper hover:text-signal' : 'text-white'
            }`}
          >
            ☎ {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
          </a>
          <Link
            href="/lien-he/"
            className="hidden rounded-full bg-signal px-5 py-2.5 text-[13.5px] font-bold text-white transition-colors hover:bg-signal-dark md:inline-flex"
          >
            Nhận báo giá
          </Link>
          <MobileMenu hotline={settings.hotline} dark={!solid} />
        </div>
      </div>
    </header>
  );
}
