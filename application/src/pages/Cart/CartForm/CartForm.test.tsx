import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CartForm } from './CartForm';
import i18n from '../../../utils/i18next';
import { store } from '../../../bll/store';

function setup(orderNum: string) {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <CartForm total={100} orderNum={orderNum} />
      </BrowserRouter>
    </Provider>
  );
  return getByText;
}
describe('CartForm component', () => {
  test('check only text render', () => {
    i18n.init();
    const orderNum = '1234567789900';
    const getByText = setup(orderNum);
    expect(getByText(/Information about order:/i)).toBeInTheDocument();
  });
});
