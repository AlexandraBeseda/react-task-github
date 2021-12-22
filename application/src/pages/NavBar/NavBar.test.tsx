import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

const setUp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <NavBar />
    </Provider>
  </BrowserRouter>
);

describe('NavBar component', () => {
  test('check only English text render', () => {
    i18n.init();
    const { getByText, queryByText } = render(setUp());
    expect(getByText(/Profile/i)).toBeInTheDocument();
    expect(getByText(/Cars/i)).toBeInTheDocument();
    expect(getByText(/Cart/i)).toBeInTheDocument();
    expect(getByText(/Ru/i)).toBeInTheDocument();
    expect(getByText(/En/i)).toBeInTheDocument();
    expect(getByText(/Delete Account/i)).toBeInTheDocument();
    expect(queryByText(/login/i)).toBeNull();
  });
  test('check only Russian text render', () => {
    const { getByText } = render(setUp());
    userEvent.click(getByText(/Ru/i));
    expect(getByText(/Профиль/i)).toBeInTheDocument();
    expect(getByText(/Автомобили/i)).toBeInTheDocument();
    expect(getByText(/Корзина/i)).toBeInTheDocument();
    expect(getByText(/Удалить аккаунт/i)).toBeInTheDocument();
  });
});
