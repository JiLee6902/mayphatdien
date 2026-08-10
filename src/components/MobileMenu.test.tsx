import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileMenu } from './MobileMenu';

describe('MobileMenu', () => {
  it('reveals the navigation links only after the toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    expect(screen.queryByRole('link', { name: 'Thiết bị' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /mở menu/i }));

    expect(screen.getByRole('link', { name: 'Thiết bị' })).toBeInTheDocument();
  });
});
