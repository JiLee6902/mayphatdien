import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import { createElement } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

// Render next/link as a plain anchor in jsdom so tests assert the exact href
// we pass. The real component normalizes hrefs against the build-time
// `trailingSlash` config (unavailable under vitest), which would strip our
// intentional trailing slashes (e.g. "/thiet-bi/" -> "/thiet-bi").
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...rest
  }: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) =>
    createElement('a', { href, ...rest }, children),
}));
