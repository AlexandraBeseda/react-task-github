import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './Login';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

describe('Login', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
