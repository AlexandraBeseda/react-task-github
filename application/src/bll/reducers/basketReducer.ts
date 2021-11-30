import { CarPropTypes } from '../../pages/Car/Car';

const basketState: Array<BasketPropTypes> = [];

export type BasketPropTypes = {
  id: number;
  brand: string;
  model: string;
  colour: string;
  picture: string;
  description: string;
  price: number;
  length: number;
  height: number;
  width: number;
  // plus
  amount: number;
  total: number;
};
export const basketReducer = (
  state: typeof basketState = basketState,
  action: ActionType
): typeof basketState => {
  switch (action.type) {
    case 'ADD-TO-BASKET': {
      return [
        {
          ...action.payload,
          // plus
          amount: 1,
          total: action.payload.price
        },
        ...state
      ];
    }
    case 'ADD-AMOUNT': {
      const stateCopy = state.map((c) => {
        if (c.id === action.id) {
          return {
            ...c,
            amount: action.amount,
            total: action.amount * c.price
          };
        }
        return c;
      });
      return stateCopy;
    }
    case 'DELETE-CAR': {
      const stateCopy = state.filter((c) => c.id !== action.id);
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addToBasketAC = (payload: CarPropTypes) =>
  ({ type: 'ADD-TO-BASKET', payload } as const);

export const addAmountAC = (id: number, amount: number) =>
  ({ type: 'ADD-AMOUNT', id, amount } as const);
export const deleteCarAC = (id: number) =>
  ({ type: 'DELETE-CAR', id } as const);
// type
export type ActionType =
  | ReturnType<typeof addAmountAC>
  | ReturnType<typeof addToBasketAC>
  | ReturnType<typeof deleteCarAC>;
