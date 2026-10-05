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
    <section className="relative overflow-hidden border-b border-line bg-white">
      {/* Subtle accent depth */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-accent/[0.06] blur-[80px]" />

      <div className="relative mx-auto max-w-[1280px] px-8 pb-8 pt-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-muted">
          <Link href="/" className="transition-colors hover:text-navy">Trang chủ</Link>
          <span className="mx-2 text-muted/40">›</span>
          <span className="font-semibold text-ink">{crumb}</span>
        </nav>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
            <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-navy md:text-[46px]">
              {title}
            </h1>
          </div>
          {subtitle ? (
            <p className="max-w-md shrink-0 text-[15px] leading-relaxed text-muted">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
