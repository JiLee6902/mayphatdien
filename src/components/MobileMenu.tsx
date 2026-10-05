'use client';
import { useState } from 'react';
import Link from 'next/link';
import { mainNav } from '@/config/nav';
import { telHref, defaultSiteSettings } from '@/config/site';

export function MobileMenu({ hotline = defaultSiteSettings.hotline }: { hotline?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative ml-auto md:hidden">
      <button
        type="button"
        aria-label={open ? 'Đóng menu' : 'Mở menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-navy"
      >
        <span aria-hidden className="text-xl leading-none">{open ? '✕' : '☰'}</span>
      </button>
      {open && (
        <nav
          aria-label="Điều hướng di động"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-15px_rgba(18,49,79,0.3)]"
        >
          <ul className="flex flex-col p-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 font-semibold text-ink hover:bg-bg hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <a href={telHref(hotline)} className="block rounded-lg bg-accent px-4 py-3 text-center font-bold text-navy-dark">
                Gọi ngay 0936 899 431
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
