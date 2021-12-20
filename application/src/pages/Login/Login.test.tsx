import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './Login';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

function setup() {
  const { getByPlaceholderText, getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  return [getByPlaceholderText, getByText];
}
describe('Login component', () => {
  test('check only text render', () => {
    i18n.init();
    const [getByPlaceholderText, getByText] = setup();
    expect(getByText(/Login/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
});
