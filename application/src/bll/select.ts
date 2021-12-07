import { AppStateType } from './store';

export const selectRegistration = (state: AppStateType) =>
  state.registrationReducer;
