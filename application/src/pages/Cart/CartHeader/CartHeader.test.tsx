import { render, screen } from '@testing-library/react';
import { CartHeader } from './CartHeader';
import i18n from '../../../utils/i18next';

describe('CartHeader', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(<CartHeader />);
    expect(screen.getByText('Cars')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});
