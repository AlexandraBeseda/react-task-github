import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartFormHeader } from './CartFormHeader';
import i18n from '../../../../utils/i18next';

function setup(orderNum: string) {
  const { getByText } = render(
    <BrowserRouter>
      <CartFormHeader total={100} orderNum={orderNum} />
    </BrowserRouter>
  );
  return getByText;
}

describe('CartFormHeader', () => {
  test('text', () => {
    const orderNum = '1234567890';
    i18n.init();
    const getByText = setup(orderNum);
    expect(
      getByText(/The total amount of the order: 100 \$/i)
    ).toBeInTheDocument();
    expect(getByText(/Your order num: 12345/i)).toBeInTheDocument();
    expect(getByText(/your order has been processed/i)).toBeInTheDocument();
    expect(getByText(/view order history/i)).toBeInTheDocument();
  });
});
