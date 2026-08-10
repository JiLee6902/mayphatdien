import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders brand and the main navigation links', () => {
    render(<Header />);
    expect(screen.getByText('PMC')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Thiết bị' })).toHaveAttribute(
      'href',
      '/thiet-bi/',
    );
    expect(screen.getByRole('link', { name: 'Liên hệ' })).toHaveAttribute(
      'href',
      '/lien-he/',
    );
  });

  it('renders a search input', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText(/tìm/i)).toBeInTheDocument();
  });
});
