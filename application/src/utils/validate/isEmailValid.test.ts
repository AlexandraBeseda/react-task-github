import { isEmailValid } from './isEmailValid';

describe('isEmailValid function', () => {
  let email;
  beforeEach(() => {
    email = 0;
  });
  test('is email 11111sun$@mail.ru valid', () => {
    email = isEmailValid('11111sun$@mail.ru');
    expect(email).toBeFalsy();
  });
  test('is  email jbjhbbhbba@mail.ru valid', () => {
    email = isEmailValid('jbjhbbhbba@mail.ru');
    expect(email).toBeTruthy();
  });
  test('is  email 111111111@gmail.com valid', () => {
    email = isEmailValid('111111111@gmail.com');
    expect(email).toBeTruthy();
  });
});
