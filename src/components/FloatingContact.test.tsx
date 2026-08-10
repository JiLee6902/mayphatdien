import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FloatingContact } from './FloatingContact';

describe('FloatingContact', () => {
  it('renders a clean tel: link (no spaces) and a Zalo link', () => {
    render(<FloatingContact />);
    expect(screen.getByRole('link', { name: /gọi ngay/i })).toHaveAttribute(
      'href',
      'tel:0936899431',
    );
    expect(screen.getByRole('link', { name: /zalo/i })).toHaveAttribute(
      'href',
      'https://zalo.me/0936899431',
    );
  });
});
