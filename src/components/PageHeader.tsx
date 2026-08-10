import type { ReactNode } from 'react';

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
    <section className="border-b border-line bg-gradient-to-b from-white to-bg">
      <div className="mx-auto max-w-[1280px] px-8 py-16 md:py-20 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <span className="transition-colors hover:text-accent">Trang chủ</span>
          <span className="mx-2 text-line">›</span>
          <span className="font-semibold text-navy">{crumb}</span>
        </nav>
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h1 className="mt-4 text-[34px] font-extrabold tracking-tight text-navy md:text-[48px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
