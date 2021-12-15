import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Profile } from './Profile';

describe('Profile test componenet', () => {
  test('testing Profile component', () => {
    const { container } = render(<Profile />);
    expect(container).toBeInTheDocument();
  });
});
