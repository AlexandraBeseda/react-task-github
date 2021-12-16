import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartFormHeader } from './CartFormHeader';
import i18n from '../../../../utils/i18next';

describe('CartFormHeader', () => {
  beforeEach(() => {
    i18n.init();
  });

  test('text', () => {
    const orderNum = '1234567890';
    render(
      <BrowserRouter>
        <CartFormHeader total={100} orderNum={orderNum} />
      </BrowserRouter>
    );
    const newOrderNum = orderNum.slice(0, 5);
    expect(
      screen.getByText('The total amount of the order: 100 $')
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Your order num: ${newOrderNum}`)
    ).toBeInTheDocument();

    expect(
      screen.getByText('Your order has been processed')
    ).toBeInTheDocument();

    expect(screen.getByText('View order history')).toBeInTheDocument();
  });
});
