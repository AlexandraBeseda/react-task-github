import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomForm } from './CustomForm';
import { store } from '../../../bll/store';
import i18n from '../../../utils/i18next';

const setUp = (props: { total: number }) => (
  <BrowserRouter>
    <Provider store={store}>
      <CustomForm {...props} />
    </Provider>
  </BrowserRouter>
);
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
