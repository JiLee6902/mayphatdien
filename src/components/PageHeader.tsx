import type { ReactNode } from 'react';
import Link from 'next/link';

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  crumb: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1b1f26] via-ink to-[#101216]">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" />
      {/* Amber edge accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-signal" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-14 pt-12 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-white/50">
          <Link href="/" className="transition-colors hover:text-signal">Trang chủ</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-display text-[34px] font-extrabold uppercase leading-[1.02] tracking-tight text-white md:text-[52px]">
              {title}
            </h1>
          </div>
          {subtitle ? (
            <p className="max-w-md shrink-0 text-[15px] leading-relaxed text-white/60">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
