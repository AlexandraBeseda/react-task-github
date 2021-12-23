import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Cars } from './Cars';
import { store } from '../../bll/store';

describe('Cars', () => {
  test('render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cars />
        </BrowserRouter>
      </Provider>
    );
  });
});
