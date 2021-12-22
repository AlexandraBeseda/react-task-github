/* eslint-disable jest/expect-expect */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { OrdersHistory } from './OrdersHistory';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

describe('OrdersHistory component', () => {
  test('text', () => {
    i18n.init();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrdersHistory />
        </Provider>
      </BrowserRouter>
    );
  });
});
