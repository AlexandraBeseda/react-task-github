import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from './Cart';
import cars from '../../data/database.json';
import { store } from '../../bll/store';
import { cartReducer } from '../../bll/reducers/cartReducer';
import i18n from '../../utils/i18next';

describe('Cart component', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
});
