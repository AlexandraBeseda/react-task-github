import { render } from '@testing-library/react';
import { OrderHeader } from './OrderHeader';
import i18n from '../../../../utils/i18next';

const setUp = () => <OrderHeader />;
describe('OrderHeader component', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText } = render(setUp());
    expect(getByText('Order number')).toBeInTheDocument();
    expect(getByText('Customer')).toBeInTheDocument();
    expect(getByText('Mobile phone')).toBeInTheDocument();
    expect(getByText('Total')).toBeInTheDocument();
    expect(getByText('Order date')).toBeInTheDocument();
  });
});
