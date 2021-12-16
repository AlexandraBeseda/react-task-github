import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { OrdersHistory } from './OrdersHistory';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

describe('OrdersHistory', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrdersHistory />
        </Provider>
      </BrowserRouter>
    );
  });
});
