import { CarPropTypes } from '../../pages/Car/Car';

const carStateType: Array<CarPropTypes> = [];

export const carReducer = (
  state: typeof carStateType = carStateType,
  action: ActionType
): typeof carStateType => {
  switch (action.type) {
    case 'ADD-TO-CARD': {
      return [{ ...action.car }, ...state];
    }

    default:
      return state;
  }
};
export const addToCardAC = (car: CarPropTypes) =>
  ({ type: 'ADD-TO-CARD', car } as const);

// type
export type ActionType = ReturnType<typeof addToCardAC>;
