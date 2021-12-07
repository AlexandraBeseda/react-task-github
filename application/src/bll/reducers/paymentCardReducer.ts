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
        total: Math.floor(action.total * 100) / 100
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

export const saveDataOrders = (
  orderId: string,
  surname: string,
  name: string,
  mobile: string,
  totalCartSum: number
) => {
  const email = localStorage.getItem('email');
  const time = new Date();
  const day = time.getUTCDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const date = `${day}.${month}.${year}`;
  const newData = { orderId, surname, name, mobile, totalCartSum, date };
  if (email) {
    let allData = [];
    const oldData = localStorage.getItem(email);
    if (oldData) {
      allData = JSON.parse(oldData);
      allData.push(newData);
      localStorage.setItem(email, JSON.stringify(allData));
    } else {
      localStorage.setItem(email, JSON.stringify([newData]));
    }
  }
};

export type ActionType = ReturnType<typeof setCustomerData>;
