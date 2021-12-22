import { Login } from './Login';
import i18n from '../../utils/i18next';
import { render } from '../../utils/test-utils/test-utils';

const setUp = () => <Login />;

describe('Login component', () => {
  test('check only text render', () => {
    i18n.init();
    const { getByPlaceholderText, getByText } = render(setUp());
    expect(getByText(/Login/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
});
