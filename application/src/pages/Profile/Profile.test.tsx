import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile';

describe('Profile', () => {
  test('text', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    expect(screen.getByText('Profile component')).toBeInTheDocument();
  });
});
