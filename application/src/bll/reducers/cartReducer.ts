import { CarPropTypes } from '../../pages/Car/Car';

const defaultCartState: Array<CartPropTypes> = [];

export type CartPropTypes = {
  id: number;
  brand: string;
  model: string;
  color: string;
  picture: string;
  description: string;
  price: number;
  length: number;
  height: number;
  width: number;
  amount: number;
  total: number;
};
export const cartReducer = (
  state: typeof defaultCartState = defaultCartState,
  action: ActionType
): typeof defaultCartState => {
  switch (action.type) {
    case 'ADD-TO-CART': {
      const defaultAmount = 1;
      return [
        {
          ...action.payload,
          amount: defaultAmount,
          total: action.payload.price
        },
        ...state
      ];
    }
    case 'ADD-AMOUNT': {
      const stateCopy = state.map((car) => {
        if (car.id === action.id) {
          return {
            ...car,
            amount: action.amount,
            total: action.amount * car.price
          };
        }
        return car;
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

export const addToCart = (payload: CarPropTypes) =>
  ({ type: 'ADD-TO-CART', payload } as const);
export const addAmount = (id: number, amount: number) =>
  ({ type: 'ADD-AMOUNT', id, amount } as const);
export const deleteCar = (id: number) => ({ type: 'DELETE-CAR', id } as const);

export type ActionType =
  | ReturnType<typeof addAmount>
  | ReturnType<typeof addToCart>
  | ReturnType<typeof deleteCar>;
