import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

function setup() {
  const { getByText, queryByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  return [getByText, queryByText];
}
describe('NavBar component', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('check only English text render', () => {
    const [getByText, queryByText] = setup();
    expect(getByText(/Profile/i)).toBeInTheDocument();
    expect(getByText(/Cars/i)).toBeInTheDocument();
    expect(getByText(/Cart/i)).toBeInTheDocument();
    expect(getByText(/Ru/i)).toBeInTheDocument();
    expect(getByText(/En/i)).toBeInTheDocument();
    expect(getByText(/Delete Account/i)).toBeInTheDocument();
    expect(queryByText(/login/i)).toBeNull();
  });
  test('check only Russian text render', () => {
    const [getByText] = setup();
    userEvent.click(screen.getByText(/Ru/i));
    expect(getByText(/Профиль/i)).toBeInTheDocument();
    expect(getByText(/Автомобили/i)).toBeInTheDocument();
    expect(getByText(/Корзина/i)).toBeInTheDocument();
    expect(getByText(/Удалить аккаунт/i)).toBeInTheDocument();
  });
});
