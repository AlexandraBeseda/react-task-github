import { EmptyCart } from './EmptyCart';
import i18n from '../../../utils/i18next';
import { render } from '../../../utils/test-utils/test-utils';

describe('EmptyCart component', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(<EmptyCart />);
    expect(getByText(/Your shopping cart is empty/i)).toBeInTheDocument();
    expect(getByText(/Start shopping/i)).toBeInTheDocument();
    expect(getByText(/View order history/i)).toBeInTheDocument();
  });
});
