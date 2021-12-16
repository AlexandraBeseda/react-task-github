import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomForm } from './CustomForm';
import { store } from '../../../bll/store';
import i18n from '../../../utils/i18next';

describe('CustomForm', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CustomForm total={20188333} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText('Surname')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mobile phone')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
