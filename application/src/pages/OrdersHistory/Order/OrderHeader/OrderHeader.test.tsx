import { render, screen } from '@testing-library/react';
import { OrderHeader } from './OrderHeader';
import i18n from '../../../../utils/i18next';

describe('OrderHeader', () => {
  beforeEach(() => {
    i18n.init();
  });
  test('text', () => {
    render(<OrderHeader />);
    expect(screen.getByText('Order number')).toBeInTheDocument();
    expect(screen.getByText('Customer')).toBeInTheDocument();
    expect(screen.getByText('Mobile phone')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Order date')).toBeInTheDocument();
  });
});
