import { isEmailValid } from './isEmailValid';

describe('isEmailValid', () => {
  test('is email 11111sun$@mail.ru valid', () => {
    const email = isEmailValid('11111sun$@mail.ru');
    expect(email).toBeFalsy();
  });
  test('is  email jbjhbbhbba@mail.ru valid', () => {
    const email = isEmailValid('jbjhbbhbba@mail.ru');
    expect(email).toBeTruthy();
  });
  test('is  email 111111111@gmail.com valid', () => {
    const email = isEmailValid('111111111@gmail.com');
    expect(email).toBeTruthy();
  });
});
