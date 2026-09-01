'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to `value` when scrolled into view. `prefix`/`suffix` wrap the
 * number (e.g. suffix "+" → "70+"). Falls back to the final value instantly
 * when the user prefers reduced motion.
 */
export function CountUp({
  value,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let start = 0;
    const step = () => {
      // Use performance.now() deltas rather than the rAF timestamp arg — the
      // latter can be pinned in some headless/virtual-time environments.
      const now = performance.now();
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    let started = false;
    let safety = 0;
    const start_animation = () => {
      if (started) return;
      started = true;
      if (reduce) {
        setDisplay(value);
        return;
      }
      raf = requestAnimationFrame(step);
      // Safety net: guarantee the final value even if rAF stalls in an
      // unusual environment, so a stat never sticks at 0.
      safety = window.setTimeout(() => setDisplay(value), duration + 250);
    };

    // Fire immediately if the element is already within the viewport on mount
    // (above-the-fold stats), so they never sit stuck at 0.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      start_animation();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          start_animation();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      io.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
