import { render } from '@testing-library/react';
import { CartHeader } from './CartHeader';
import i18n from '../../../utils/i18next';

function setup() {
  const { getByText } = render(<CartHeader />);
  return getByText;
}
describe('CartHeader componenet', () => {
  test('only text', () => {
    i18n.init();
    const getByText = setup();
    expect(getByText(/cars/i)).toBeInTheDocument();
    expect(getByText(/price/i)).toBeInTheDocument();
    expect(getByText(/amount/i)).toBeInTheDocument();
    expect(getByText(/total/i)).toBeInTheDocument();
    expect(getByText(/delete/i)).toBeInTheDocument();
  });
});
