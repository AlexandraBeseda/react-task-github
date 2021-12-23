import { render, screen } from '@testing-library/react';
import { v1 } from 'uuid';
import { Order } from './Order';

describe('Order', () => {
  test('text', () => {
    const id = v1();
    render(
      <Order
        orderId={id}
        surname="Holms"
        name="Sherlock"
        mobile="+37529876678"
        totalCartSum={100}
        date="200"
      />
    );
    expect(screen.getByText(id)).toBeInTheDocument();
    expect(screen.getByText('Holms Sherlock')).toBeInTheDocument();
    expect(screen.getByText('+37529876678')).toBeInTheDocument();
    expect(screen.getByText('100 $')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });
});
