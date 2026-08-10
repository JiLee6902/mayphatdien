import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Homepage', () => {
  it('renders exactly one H1 with the rental value proposition', () => {
    render(<Home />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toMatch(/cho thuê/i);
  });

  it('renders all four category cards', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /máy phát điện/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /máy nén khí/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /phun rửa áp lực cao/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /máy hàn/i })).toBeInTheDocument();
  });
});
