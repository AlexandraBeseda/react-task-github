import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import { store } from '../../bll/store';
import i18n from '../../utils/i18next';

describe('NavBar', () => {
  beforeEach(() => {
    i18n.init();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );
  });
  test('text links', () => {
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Cars')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Ru')).toBeInTheDocument();
    expect(screen.getByText('En')).toBeInTheDocument();
    expect(screen.getByText('Delete Account')).toBeInTheDocument();
    expect(screen.queryByText(/login/)).toBeNull();
  });
  test('clicked Ru button', () => {
    userEvent.click(screen.getByText('Ru'));
    expect(screen.getByText('Профиль')).toBeInTheDocument();
    expect(screen.getByText('Автомобили')).toBeInTheDocument();
    expect(screen.getByText('Корзина')).toBeInTheDocument();
    expect(screen.getByText('Удалить аккаунт')).toBeInTheDocument();
  });
});
