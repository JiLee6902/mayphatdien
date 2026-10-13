'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mainNav } from '@/config/nav';
import { defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Button } from './ui/Button';
import { HeaderSearch } from './HeaderSearch';
import { MobileMenu } from './MobileMenu';

export function Header({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="on-dark sticky top-0 z-40 border-b border-white/10 bg-ink"
    >
      {/* Main bar */}
      <div
        className={`relative mx-auto flex max-w-[1320px] items-center gap-6 px-6 transition-all duration-300 lg:px-10 ${
          scrolled ? 'h-[62px]' : 'h-[76px]'
        }`}
      >
        <Link
          href="/"
          className={`font-display font-extrabold tracking-tight text-white transition-all duration-300 ${
            scrolled ? 'text-[22px]' : 'text-[25px]'
          }`}
        >
          {settings.brand}
          <span className="text-signal">.</span>
        </Link>
        <nav
          aria-label="Điều hướng chính"
          className="ml-3 hidden gap-7 text-[13px] font-bold uppercase tracking-wide text-white/70 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap py-1.5 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
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
    </header>
  );
}
