import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomForm } from './CustomForm';
import { store } from '../../../bll/store';
import i18n from '../../../utils/i18next';

function setup(total: number) {
  const { getByText, getByPlaceholderText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <CustomForm total={total} />
      </Provider>
    </BrowserRouter>
  );
  return [getByText, getByPlaceholderText];
}
describe('CustomForm component', () => {
  test('search by text surname, mobile phone, submit', () => {
    i18n.init();
    const total = 20188333;
    const [getByText, getByPlaceholderText] = setup(total);
    expect(getByPlaceholderText(/Surname/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/mobile phone/i)).toBeInTheDocument();
    expect(getByText(/Submit/i)).toBeInTheDocument();
  });
});
