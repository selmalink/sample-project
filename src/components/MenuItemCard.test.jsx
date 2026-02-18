import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';

describe('MenuItemCard (basic)', () => {
  it('renders name, price and link href', () => {
    const item = { name: 'Cortado', price: 3.25, slug: 'cortado' };

    render(
      <MemoryRouter>
        <MenuItemCard item={item} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Cortado/i)).toBeInTheDocument();
    expect(screen.getByText(/3.25 dollars/i)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /view details/i });
    expect(link).toHaveAttribute('href', '/menu/cortado');
  });
});
