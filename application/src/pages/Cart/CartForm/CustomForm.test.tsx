import { CustomForm } from './CustomForm';
import i18n from '../../../utils/i18next';
import { render } from '../../../utils/test-utils/test-utils';

const setUp = (props: { total: number }) => <CustomForm {...props} />;
describe('CustomForm component', () => {
  test('search by text surname, mobile phone, submit', () => {
    i18n.init();
    const total = 20188333;
    const { getByText, getByPlaceholderText } = render(setUp({ total }));
    expect(getByPlaceholderText(/Surname/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/mobile phone/i)).toBeInTheDocument();
    expect(getByText(/Submit/i)).toBeInTheDocument();
  });
});
