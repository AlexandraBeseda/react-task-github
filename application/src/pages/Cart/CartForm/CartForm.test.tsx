import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CartForm } from './CartForm';
import i18n from '../../../utils/i18next';
import { store } from '../../../bll/store';

const setUp = (props: { total: number; orderNum: string }) => (
  <Provider store={store}>
    <BrowserRouter>
      <CartForm {...props} />
    </BrowserRouter>
  </Provider>
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
