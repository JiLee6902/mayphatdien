import type { ElementType, ReactNode } from 'react';

/**
 * Static layout wrapper. Previously a scroll-reveal animation; now a no-op
 * pass-through (renders immediately) to keep pages fast and snappy — no
 * client JS, no hidden-until-observed flash. Keeps the `as`/`className`/`delay`
 * props so existing call sites stay unchanged (`delay` is ignored).
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  return <Tag className={className}>{children}</Tag>;
}
