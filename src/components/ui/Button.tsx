import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'accent' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-bold px-5 py-3 text-sm transition-colors';
const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white hover:bg-accent-dark',
  outline: 'border border-line text-navy hover:border-steel',
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
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
