import Link from 'next/link';
import { mainNav } from '@/config/nav';
import { site, telHref } from '@/config/site';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_var(--color-line)]">
      <div className="bg-navy text-[13px] text-[#c3d3e2]">
        <div className="mx-auto flex h-10 max-w-[1180px] items-center justify-between px-5">
          <span>Cho thuê 24/7 · Khảo sát &amp; lắp đặt tận công trình</span>
          <span>
            Hotline:{' '}
            <a className="font-semibold text-white" href={telHref(site.hotline)}>
              0936 899 431
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center gap-7 px-5">
        <Link href="/" className="text-2xl font-extrabold text-navy">
          {site.brand}
          <span className="ml-1 text-accent">.</span>
        </Link>
        <nav className="ml-2 hidden gap-6 font-semibold text-[#2a3742] md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="py-1.5 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2.5 md:flex">
          <span aria-hidden>🔍</span>
          <input
            className="w-56 bg-transparent text-sm outline-none"
            placeholder="Tìm: 100kVA, cummins, máy hàn…"
            aria-label="Tìm thiết bị"
          />
        </div>
        <Button href="/lien-he/" className="hidden md:inline-flex">
          Nhận báo giá
        </Button>
      </div>
    </header>
  );
}
