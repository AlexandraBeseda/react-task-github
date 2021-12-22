import { CartForm } from './CartForm';
import i18n from '../../../utils/i18next';
import { render } from '../../../utils/test-utils/test-utils';

const setUp = (props: { total: number; orderNum: string }) => (
  <CartForm {...props} />
);

describe('CartForm component', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(
      setUp({ total: 100, orderNum: '1234567789900' })
    );
    expect(getByText(/Information about order:/i)).toBeInTheDocument();
  });
});
