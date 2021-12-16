import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CartForm } from './CartForm';
import i18n from '../../../utils/i18next';
import { store } from '../../../bll/store';

describe('CartForm', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    const orderNum = '1234567789900';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartForm total={100} orderNum={orderNum} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Information about order:')).toBeInTheDocument();
  });
});
