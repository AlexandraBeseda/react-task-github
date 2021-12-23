import { render } from '@testing-library/react';
import { CartHeader } from './CartHeader';
import i18n from '../../../utils/i18next';

function setUp() {
  return <CartHeader />;
}

describe('CartHeader componenet', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(setUp());
    expect(getByText(/cars/i)).toBeInTheDocument();
    expect(getByText(/price/i)).toBeInTheDocument();
    expect(getByText(/amount/i)).toBeInTheDocument();
    expect(getByText(/total/i)).toBeInTheDocument();
    expect(getByText(/delete/i)).toBeInTheDocument();
  });
});
