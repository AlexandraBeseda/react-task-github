import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Registration } from './Registration';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

const setUp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Registration />
    </Provider>
  </BrowserRouter>
);
describe('Registration component', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByText, getByPlaceholderText } = render(setUp());
    expect(getByText('Registration')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
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
