'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { mainNav } from '@/config/nav';
import { defaultSiteSettings, type SiteSettings } from '@/config/site';
import { Button } from './ui/Button';
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] backdrop-blur-xl'
          : 'bg-white shadow-[0_1px_0_var(--color-line)]'
      }`}
    >
      {/* Main bar */}
      <div
        className={`relative mx-auto flex max-w-[1280px] items-center gap-6 px-6 transition-all duration-300 lg:px-8 ${
          scrolled ? 'h-[62px]' : 'h-[74px]'
        }`}
      >
        <Link
          href="/"
          className={`font-extrabold tracking-tight text-navy transition-all duration-300 ${
            scrolled ? 'text-[22px]' : 'text-[26px]'
          }`}
        >
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
              className="relative whitespace-nowrap py-1.5 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2.5 transition-colors focus-within:border-accent/50 focus-within:bg-white lg:flex">
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
