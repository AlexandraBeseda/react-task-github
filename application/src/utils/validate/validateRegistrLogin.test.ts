import { isEmailValid } from './isEmailValid';
import {
  FormValuesRegistrLogin,
  validateRegistrLogin
} from './validateRegistrLogin';

describe('validate Registration and Login inputs', () => {
  let values: FormValuesRegistrLogin = {
    email: '',
    password: ''
  };

  beforeEach(() => {
    values = {
      email: '',
      password: ''
    };
  });
  test('validate empty inputs', () => {
    const result = validateRegistrLogin(values);
    expect(result.email).toBe('required');
    expect(result.password).toBe('required');
  });
  test('validate password length less 6 symbols', () => {
    values = {
      email: '',
      password: '11'
    };
    const result = validateRegistrLogin(values);
    expect(result.password).toBe('passwordLenght');
  });
  test('validate email incorrect', () => {
    values = {
      email: 'sgvsg',
      password: ''
    };
    const result = validateRegistrLogin(values);
    expect(result.email).toBe('invalidEmailAddress');
  });
  test('validate email with isEmailValid() func', () => {
    values = {
      email: 'fvdfvffvfvbfvdf',
      password: ''
    };
    expect(isEmailValid(values.email)).toBeFalsy();
    expect(!isEmailValid(values.email)).toBeTruthy();
  });
});
