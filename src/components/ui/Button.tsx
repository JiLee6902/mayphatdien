import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'accent' | 'outline' | 'outline-light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-bold px-6 py-3.5 text-sm transition-colors';
const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md',
  outline: 'border border-line text-navy hover:border-steel hover:text-navy',
  'outline-light': 'border border-white/40 text-white hover:bg-white/10',
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
