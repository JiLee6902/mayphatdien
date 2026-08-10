import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders as a link when href is provided', () => {
    render(<Button href="tel:0936899431">Gọi ngay</Button>);
    const el = screen.getByRole('link', { name: 'Gọi ngay' });
    expect(el).toHaveAttribute('href', 'tel:0936899431');
  });

  it('renders as a button when no href is provided', () => {
    render(<Button>Gửi</Button>);
    expect(screen.getByRole('button', { name: 'Gửi' })).toBeInTheDocument();
  });

  it('applies the accent variant class', () => {
    render(<Button variant="accent">X</Button>);
    expect(screen.getByRole('button', { name: 'X' }).className).toContain('bg-accent');
  });

  it('renders a native button with type="button" when no href is provided', () => {
    render(<Button>Gửi</Button>);
    expect(screen.getByRole('button', { name: 'Gửi' })).toHaveAttribute('type', 'button');
  });

  it('renders a plain anchor for tel: hrefs', () => {
    render(<Button href="tel:0936899431">Gọi</Button>);
    expect(screen.getByRole('link', { name: 'Gọi' })).toHaveAttribute('href', 'tel:0936899431');
  });
});
