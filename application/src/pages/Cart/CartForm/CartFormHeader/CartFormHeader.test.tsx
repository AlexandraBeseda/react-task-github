import { CartFormHeader } from './CartFormHeader';
import i18n from '../../../../utils/i18next';
import { render } from '../../../../utils/test-utils/test-utils';

const setUp = (props: { total: number; orderNum: string }) => (
  <CartFormHeader {...props} />
);

describe('CartFormHeader', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(setUp({ total: 100, orderNum: '1234567890' }));
    expect(
      getByText(/The total amount of the order: 100 \$/i)
    ).toBeInTheDocument();
    expect(getByText(/Your order num: 12345/i)).toBeInTheDocument();
    expect(getByText(/your order has been processed/i)).toBeInTheDocument();
    expect(getByText(/view order history/i)).toBeInTheDocument();
  });
});
