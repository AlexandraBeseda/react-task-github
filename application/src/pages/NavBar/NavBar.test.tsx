import userEvent from '@testing-library/user-event';
import { NavBar } from './NavBar';
import i18n from '../../utils/i18next';
import { render } from '../../utils/test-utils/test-utils';

const setUp = () => <NavBar />;

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
    const { getByText } = render(<NavBar />);
    userEvent.click(getByText(/Ru/i));
    expect(getByText(/Профиль/i)).toBeInTheDocument();
    expect(getByText(/Автомобили/i)).toBeInTheDocument();
    expect(getByText(/Корзина/i)).toBeInTheDocument();
    expect(getByText(/Удалить аккаунт/i)).toBeInTheDocument();
  });
});
