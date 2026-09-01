import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import { createElement } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

// Render next/link as a plain anchor in jsdom, preserving the `href` verbatim,
// so tests can assert the exact hrefs we pass (including their trailing
// slashes, e.g. "/thiet-bi/") without wiring the Next router into jsdom.
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...rest
  }: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) =>
    createElement('a', { href, ...rest }, children),
}));

// jsdom has no IntersectionObserver; our scroll-reveal motion components rely on
// it. Provide a no-op stub so components mount in tests (they render their
// content regardless of whether the observer ever fires).
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

// jsdom has no matchMedia; motion components query prefers-reduced-motion.
// Default to "no preference" (matches: false) in tests.
vi.stubGlobal(
  'matchMedia',
  vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })),
);
