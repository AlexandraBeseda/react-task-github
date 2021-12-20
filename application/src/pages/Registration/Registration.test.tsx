import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Registration } from './Registration';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

describe('Registration component', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Registration')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('input onchange', () => {
    const onchange = jest.fn();
    render(
      <input
        placeholder="Email"
        type="email"
        name="email"
        onChange={onchange}
      />
    );
    const input = screen.getByPlaceholderText('Email');
    userEvent.type(input, 'react');
    expect(onchange).toHaveBeenCalledTimes(5);
  });
});
