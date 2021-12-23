import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile';

const setUp = () => (
  <BrowserRouter>
    <Profile />
  </BrowserRouter>
);
describe('Profile component', () => {
  test('check only text render', () => {
    const { getByText } = render(setUp());
    expect(getByText(/Profile component/i)).toBeInTheDocument();
  });
});
