import { isEmailValid } from './isEmailValid';

describe('isEmailValid function', () => {
  let email;
  beforeEach(() => {
    email = 0;
  });
  test('should check invalid email', () => {
    email = isEmailValid('11111sun$@mail.ru');
    expect(email).toBeFalsy();
  });
  test('should check valid email', () => {
    email = isEmailValid('jbjhbbhbba@mail.ru');
    expect(email).toBeTruthy();
  });
});
