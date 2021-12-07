const defaultPaymentCardState = {
  surname: '',
  name: '',
  email: '',
  mobile: '',
  orderNum: '',
  total: 0
};

export type PaymentCardPropTypes = {
  surname: string;
  name: string;
  email: string;
  mobile: string;
  orderNum: string;
  total: number;
};
export const paymentCardReducer = (
  state: typeof defaultPaymentCardState = defaultPaymentCardState,
  action: ActionType
): typeof defaultPaymentCardState => {
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

export const setCustomerData = (
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

export type ActionType = ReturnType<typeof setCustomerData>;
