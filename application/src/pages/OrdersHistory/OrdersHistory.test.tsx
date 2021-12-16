import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { OrdersHistory } from './OrdersHistory';
import { store } from '../../bll/store';

describe('OrdersHistory', () => {
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
