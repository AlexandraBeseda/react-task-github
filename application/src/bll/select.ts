import { AppStateType } from './store';

export const selectReg = (state: AppStateType) => state.registration;
export const selectCar = (state: AppStateType) => state.carReducer;
