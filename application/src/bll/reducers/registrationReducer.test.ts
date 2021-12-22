import {
  setEmail,
  setPassword,
  setError,
  setLoading,
  registrationReducer,
  RegistratonInitStateTypes,
  ActionType
} from './registrationReducer';

describe('registration reducer tests', () => {
  let defaultRegistrationState: RegistratonInitStateTypes;
  let newState: RegistratonInitStateTypes;
  let action: ActionType;
  beforeEach(() => {
    defaultRegistrationState = {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    };
  });
  test('set new email', () => {
    action = setEmail('coo.kies@gmail.com');
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.email.length).toBeGreaterThan(5);
  });

  test('set new password', () => {
    action = setPassword('123098');
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.password.length).toBeGreaterThan(5);
  });
  test('set loading true', () => {
    action = setLoading(true);
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.isLoading).toBeTruthy();
  });

  test('set error', () => {
    action = setError('some text must be here');
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.error).toContain('some');
  });
});
