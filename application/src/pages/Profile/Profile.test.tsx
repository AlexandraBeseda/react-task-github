import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile';

describe('Profile component', () => {
  test('check only text render', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    expect(screen.getByText(/Profile component/i)).toBeInTheDocument();
  });
});
