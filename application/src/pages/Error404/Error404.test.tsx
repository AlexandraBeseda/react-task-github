import { render } from '@testing-library/react';
import { Error404 } from './Error404';
import '@testing-library/jest-dom';

const setUp = () => <Error404 />;
describe('Error404 componenet', () => {
  test('sheck only test render', () => {
    const { getByText } = render(setUp());
    expect(getByText(/Error404 component/i)).toBeInTheDocument();
  });
});
