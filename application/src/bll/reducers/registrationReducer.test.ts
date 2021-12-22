import {
  setEmail,
  setPassword,
  setError,
  setLoading,
  registrationReducer,
  RegistratonInitStateTypes,
  ActionType
} from './registrationReducer';

describe('Registration reducer tests', () => {
  let defaultRegistrationState: RegistratonInitStateTypes;
  let newState: RegistratonInitStateTypes;
  let action: ActionType;
  let newLenght;
  beforeEach(() => {
    defaultRegistrationState = {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    };
    newLenght = 0;
  });
  test('should set new email', () => {
    action = setEmail('coo.kies@gmail.com');
    newState = registrationReducer(defaultRegistrationState, action);
    newLenght = 5;
    expect(newState.email.length).toBeGreaterThan(newLenght);
  });

  test('should set new password', () => {
    action = setPassword('123098');
    newState = registrationReducer(defaultRegistrationState, action);
    newLenght = 5;
    expect(newState.password.length).toBeGreaterThan(newLenght);
  });
  test('should set loading true', () => {
    action = setLoading(true);
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.isLoading).toBeTruthy();
  });

  test('should set error', () => {
    action = setError('some text must be here');
    newState = registrationReducer(defaultRegistrationState, action);
    expect(newState.error).toContain('some');
  });
});
