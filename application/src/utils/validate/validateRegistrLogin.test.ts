import { isEmailValid } from './isEmailValid';
import { validateRegistrLogin } from './validateRegistrLogin';

describe('validate Registration and Login inputs', () => {
  test('validate empty inputs', () => {
    const values = {
      email: '',
      password: ''
    };
    const result = validateRegistrLogin(values);
    expect(result.email).toBe('required');
    expect(result.password).toBe('required');
  });
  test('validate password length less 6 symbols', () => {
    const values = {
      email: '',
      password: '11'
    };
    const result = validateRegistrLogin(values);
    expect(result.password).toBe('passwordLenght');
  });
  test('validate email incorrect', () => {
    const values = {
      email: 'sgvsg',
      password: ''
    };
    const result = validateRegistrLogin(values);
    expect(result.email).toBe('invalidEmailAddress');
  });
  test('validate email with isEmailValid() func', () => {
    const values = {
      email: 'fvdfvffvfvbfvdf',
      password: ''
    };
    expect(isEmailValid(values.email)).toBeFalsy();
    expect(!isEmailValid(values.email)).toBeTruthy();
  });
});
