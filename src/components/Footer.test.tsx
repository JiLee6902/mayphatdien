import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { site } from '@/config/site';

describe('Footer', () => {
  it('renders the legal company name', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(site.companyName))).toBeInTheDocument();
  });

  it('renders both location addresses', () => {
    render(<Footer />);
    for (const loc of site.locations) {
      expect(screen.getByText(new RegExp(loc.address.slice(0, 15)))).toBeInTheDocument();
    }
  });
});
