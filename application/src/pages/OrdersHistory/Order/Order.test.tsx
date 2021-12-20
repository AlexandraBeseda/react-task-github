import { render } from '@testing-library/react';
import { v1 } from 'uuid';
import { Order } from './Order';

describe('Order component', () => {
  test('check only text render', () => {
    const id = v1();
    const { getByText } = render(
      <Order
        orderId={id}
        surname="Holms"
        name="Sherlock"
        mobile="+37529876678"
        totalCartSum={100}
        date="200"
      />
    );
    expect(getByText(id)).toBeInTheDocument();
    expect(getByText(/Holms Sherlock/i)).toBeInTheDocument();
    expect(getByText(/\+37529876678/i)).toBeInTheDocument();
    expect(getByText(/100 \$/i)).toBeInTheDocument();
    expect(getByText(/200/i)).toBeInTheDocument();
  });
});
