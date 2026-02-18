import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar (basic)', () => {
  it('shows main nav links and toggles hamburger', async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // basic links
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Map/i)).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /open menu|close menu/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
