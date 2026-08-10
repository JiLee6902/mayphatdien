import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import { categories, categoryHref } from '@/config/categories';

describe('Homepage', () => {
  it('renders exactly one H1 with the rental value proposition', () => {
    render(<Home />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toMatch(/cho thuê/i);
  });

  it('renders a link to each of the four category landing pages', () => {
    // Match by href (unambiguous) — the featured-equipment section also contains
    // links whose text includes category names, so name-based queries would clash.
    const { container } = render(<Home />);
    expect(categories).toHaveLength(4);
    for (const c of categories) {
      expect(
        container.querySelector(`a[href="${categoryHref(c.slug)}"]`),
      ).toBeTruthy();
    }
  });
});
