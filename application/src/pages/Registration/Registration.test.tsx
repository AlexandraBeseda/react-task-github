import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Registration } from './Registration';
import i18n from '../../utils/i18next';
import { render } from '../../utils/test-utils/test-utils';

const setUp = () => <Registration />;
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
