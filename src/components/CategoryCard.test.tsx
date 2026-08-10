import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';

describe('CategoryCard', () => {
  it('links to the category page and shows name + meta', () => {
    render(
      <CategoryCard
        category={{
          slug: 'may-phat-dien',
          name: 'Máy phát điện',
          meta: '10 – 1500 kVA · 40+ máy',
          image: '/images/categories/may-phat-dien.jpg',
        }}
      />,
    );
    const link = screen.getByRole('link', { name: /máy phát điện/i });
    expect(link).toHaveAttribute('href', '/cho-thue-may-phat-dien/');
    expect(screen.getByText('10 – 1500 kVA · 40+ máy')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Cho thuê Máy phát điện');
  });
});
