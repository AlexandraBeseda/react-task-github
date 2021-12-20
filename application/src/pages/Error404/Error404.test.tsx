import { render } from '@testing-library/react';
import { Error404 } from './Error404';
import '@testing-library/jest-dom';

describe('Error404 componenet', () => {
  test('only text', () => {
    const { getByText } = render(<Error404 />);
    expect(getByText(/Error404 component/i)).toBeInTheDocument();
  });
});
