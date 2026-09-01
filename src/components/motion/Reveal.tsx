'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/**
 * Scroll-reveal wrapper. Fades + slides its children into view once when they
 * first enter the viewport. Pure IntersectionObserver — no dependencies.
 *
 * `delay` staggers siblings (ms). `as` picks the rendered tag (default div).
 * Honors prefers-reduced-motion via the .reveal CSS rules in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reveal = () => setVisible(true);

    // If IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      const t = window.setTimeout(reveal, 0);
      return () => clearTimeout(t);
    }

    // IO fires asynchronously — including for elements already in view on
    // observe() — so above-the-fold content reveals right away too.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(node);

    // Safety net: never leave content permanently hidden if the observer
    // fails to fire for any reason.
    const safety = window.setTimeout(reveal, 2500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
