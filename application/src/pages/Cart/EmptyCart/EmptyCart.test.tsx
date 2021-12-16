import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EmptyCart } from './EmptyCart';
import { store } from '../../../bll/store';
import i18n from '../../../utils/i18next';

describe('EmptyCart', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <EmptyCart />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Your shopping cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Start shopping')).toBeInTheDocument();
    expect(screen.getByText('View order history')).toBeInTheDocument();
  });
});
