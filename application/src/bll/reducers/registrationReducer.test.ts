import {
  setEmail,
  setPassword,
  setError,
  setLoading,
  registrationReducer
} from './registrationReducer';

const defaultRegistrationState = {
  email: '',
  password: '',
  isLoading: false,
  error: ''
};

describe('registration reducer tests', () => {
  test('set new email', () => {
    const action = setEmail('coo.kies@gmail.com');
    const newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.email.length).toBeGreaterThan(5);
  });

  test('set new password', () => {
    const action = setPassword('123098');
    const newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.password.length).toBeGreaterThan(5);
  });
  test('set loading true', () => {
    const action = setLoading(true);
    const newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.isLoading).toBeTruthy();
  });

  test('set error', () => {
    const action = setError('some text must be here');
    const newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.error).toContain('some');
  });
});
