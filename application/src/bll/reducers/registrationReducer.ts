const initRegState = {
  email: '',
  password: '',
  isLoading: false
};

export const registReducer = (
  state: typeof initRegState = initRegState,
  action: ActionType
): typeof initRegState => {
  switch (action.type) {
    case 'REGISTER-SET-EMAIL':
      return { ...state, email: action.email };
    case 'REGISTER-SET-PASSWORD':
      return { ...state, password: action.password };
    case 'REGISTER-SET-LOADING':
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

// actions
export const setEmail = (email: string) =>
  ({ type: 'REGISTER-SET-EMAIL', email } as const);
export const setPassword = (password: string) =>
  ({ type: 'REGISTER-SET-PASSWORD', password } as const);
export const setLoading = (isLoading: boolean) =>
  ({ type: 'REGISTER-SET-LOADING', isLoading } as const);

// type
export type ActionType =
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setLoading>;
