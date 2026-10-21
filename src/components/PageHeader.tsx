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
    <section className="relative overflow-hidden border-b border-edge bg-white">
      {/* Red accent edge (Hilti) */}
      <div className="absolute inset-y-0 left-0 w-1 bg-signal" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-12 pt-10 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-paper-mute">
          <Link href="/" className="transition-colors hover:text-signal">Trang chủ</Link>
          <span className="mx-2 text-paper-mute/60">/</span>
          <span className="text-paper">{crumb}</span>
        </nav>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-display text-[34px] font-extrabold leading-[1.02] tracking-tight text-paper md:text-[52px]">
              {title}
            </h1>
          </div>
          {subtitle ? (
            <p className="max-w-md shrink-0 text-[15px] leading-relaxed text-paper-dim">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
