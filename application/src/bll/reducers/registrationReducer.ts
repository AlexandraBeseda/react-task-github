import { Dispatch } from 'redux';

export type RegistratonInitStateTypes = {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
};
const defaultRegistrationState = {
  email: '',
  password: '',
  isLoading: false,
  error: ''
};

export const registrationReducer = (
  state: RegistratonInitStateTypes = defaultRegistrationState,
  action: ActionType
): RegistratonInitStateTypes => {
  switch (action.type) {
    case 'REGISTER-SET-EMAIL':
      return { ...state, email: action.email };
    case 'REGISTER-SET-PASSWORD':
      return { ...state, password: action.password };
    case 'REGISTER-SET-LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'REGISTER-SET-ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setEmail = (email: string) =>
  ({ type: 'REGISTER-SET-EMAIL', email } as const);
export const setPassword = (password: string) =>
  ({ type: 'REGISTER-SET-PASSWORD', password } as const);
export const setLoading = (isLoading: boolean) =>
  ({ type: 'REGISTER-SET-LOADING', isLoading } as const);
export const setError = (error: string) =>
  ({ type: 'REGISTER-SET-ERROR', error } as const);

export type ActionType =
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setError>;

export const setRegistration =
  (email: string, password: string) => (dispatch: Dispatch) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    dispatch(setEmail(email));
    dispatch(setPassword(password));
  };

export const checkLogin =
  (email: string, password: string) => (dispatch: Dispatch) => {
    const passwordLocal = localStorage.getItem('password');
    const emailLocal = localStorage.getItem('email');
    if ((passwordLocal && passwordLocal) === password) {
      dispatch(setPassword(password));
      dispatch(setError(''));
    } else {
      dispatch(setError('Password is not correct'));
    }
    if ((emailLocal && emailLocal) === email) {
      dispatch(setEmail(email));
    } else {
      dispatch(setError('Email is not correct'));
    }
  };

export const deleteAccount = () => (dispatch: Dispatch) => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  dispatch(setEmail(''));
  dispatch(setPassword(''));
};
