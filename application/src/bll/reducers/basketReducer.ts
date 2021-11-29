const basketState: Array<BasketPropTypes> = [];

export type BasketPropTypes = {
  id: number;
  brand: string;
  model: string;
  price: number;
  amount: number;
  total: number;
};
export const basketReducer = (
  state: typeof basketState = basketState,
  action: ActionType
): typeof basketState => {
  switch (action.type) {
    case 'SET-BASKET': {
      return [
        {
          id: action.id,
          brand: action.brand,
          model: action.model,
          price: action.price,
          amount: action.amount,
          total: action.total
        },
        ...state
      ];
    }
    case 'ADD-AMOUNT': {
      return state.map((c) => {
        if (c.id === action.id) {
          return {
            ...c,
            amount: action.amount,
            total: action.amount * c.price
          };
        }
        return c;
      });
    }
    case 'DELETE-CAR': {
      return state.filter((c) => c.id !== action.id);
    }
    default:
      return state;
  }
};

export const setBasketAC = (
  id: number,
  brand: string,
  model: string,
  price: number,
  amount: number,
  total: number
) => ({ type: 'SET-BASKET', id, brand, model, price, amount, total } as const);

export const addAmountAC = (id: number, amount: number) =>
  ({ type: 'ADD-AMOUNT', id, amount } as const);
export const deleteCarAC = (id: number) =>
  ({ type: 'DELETE-CAR', id } as const);
// type
export type ActionType =
  | ReturnType<typeof addAmountAC>
  | ReturnType<typeof setBasketAC>
  | ReturnType<typeof deleteCarAC>;
