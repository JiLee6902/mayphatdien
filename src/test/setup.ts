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
