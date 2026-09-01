'use client';

import { useRef, type ReactNode } from 'react';

/**
 * Subtle 3D tilt that follows the pointer. Sets --rx/--ry CSS vars consumed by
 * the .tilt class in globals.css; resets on leave. Disabled automatically for
 * reduced-motion users (the CSS neutralizes the transform).
 */
export function TiltCard({
  children,
  max = 7,
  className = '',
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty('--rx', `${px * max}deg`);
    node.style.setProperty('--ry', `${-py * max}deg`);
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--rx', '0deg');
    node.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  );
}
