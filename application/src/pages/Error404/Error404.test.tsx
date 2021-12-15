import { render, screen } from '@testing-library/react';
import { Error404 } from './Error404';
import '@testing-library/jest-dom';

describe('Error404 test componenet', () => {
  test('testing Error404 component', () => {
    render(<Error404 />);
    expect(screen.getByText(/Error404 component/i)).toBeInTheDocument();
  });
});
