import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'accent' | 'outline' | 'outline-light' | 'light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wide px-6 py-3.5 text-[13.5px] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  accent: 'bg-signal text-white hover:bg-signal-dark hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(210,5,30,0.45)]',
  outline: 'border border-edge-strong text-paper hover:border-signal hover:bg-signal/5 hover:text-signal-dark',
  'outline-light': 'border border-white/35 text-white hover:border-signal hover:bg-white/10 hover:text-signal',
  light: 'bg-white text-ink hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(22,24,28,0.3)]',
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

  if (href) {
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return <a href={href} className={cls}>{children}</a>;
    }
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type="button" className={cls}>{children}</button>;
}
