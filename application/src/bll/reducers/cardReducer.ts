const cardState = {
  surname: '',
  name: '',
  email: '',
  mobile: '',
  orderNum: '',
  total: 0
};

export type CardPropTypes = {
  surname: string;
  name: string;
  email: string;
  mobile: string;
  orderNum: string;
  total: number;
};
export const cardReducer = (
  state: typeof cardState = cardState,
  action: ActionType
): typeof cardState => {
  switch (action.type) {
    case 'SET-CUSTOMER-DATA': {
      return {
        ...state,
        surname: action.surname,
        name: action.name,
        email: action.email,
        mobile: action.mobile,
        orderNum: action.orderNum,
        total: action.total
      };
    }
    default:
      return state;
  }
};

export const setCustomerDataAC = (
  surname: string,
  name: string,
  email: string,
  mobile: string,
  orderNum: string,
  total: number
) =>
  ({
    type: 'SET-CUSTOMER-DATA',
    surname,
    name,
    email,
    mobile,
    orderNum,
    total
  } as const);

// type
export type ActionType = ReturnType<typeof setCustomerDataAC>;
