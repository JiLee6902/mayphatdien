import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'accent' | 'outline' | 'outline-light' | 'light';

const base =
  'relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl font-bold px-6 py-3.5 text-sm transition-colors';
const variants: Record<Variant, string> = {
  accent: 'bg-accent text-navy-dark shadow-md shadow-accent/25 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/35 active:scale-[0.98] transition-all duration-150',
  outline: 'border border-line text-navy hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-all duration-150',
  'outline-light': 'border border-white/35 text-white hover:bg-white/12 hover:border-white/60 transition-all duration-150',
  light: 'bg-white text-navy shadow-md shadow-black/10 hover:bg-white/95 hover:shadow-lg hover:shadow-black/15 active:scale-[0.98] transition-all duration-150',
};

export function Button({
  children,
  href,
  variant = 'accent',
  className = '',
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const shimmer = variant === 'accent' ? (
    <span aria-hidden className="shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  ) : null;

  if (href) {
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return <a href={href} className={cls}>{shimmer}{children}</a>;
    }
    return <Link href={href} className={cls}>{shimmer}{children}</Link>;
  }
  return <button type="button" className={cls}>{shimmer}{children}</button>;
}
