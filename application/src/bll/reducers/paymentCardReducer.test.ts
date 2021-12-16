import { v1 } from 'uuid';
import {
  paymentCardReducer,
  setCustomerData,
  saveDataOrders
} from './paymentCardReducer';

describe('payment card reducer', () => {
  test('set customer data', () => {
    const defaultPaymentCardState = {
      surname: '',
      name: '',
      email: '',
      mobile: '',
      orderNum: '',
      total: 0
    };
    const orderNum = v1();
    const action = setCustomerData(
      'Hoks',
      'Lola',
      'catsliveforeverr@gmil.com',
      '+373557654444',
      orderNum,
      203040
    );
    const newState = paymentCardReducer(defaultPaymentCardState, action);
    expect(newState.total).toBeGreaterThan(0);
    expect(newState.email.length).not.toBeLessThan(1);
  });

  test('thunk', () => {
    const orderID = '09876123546572';
    const thunk = saveDataOrders(
      orderID,
      'Anders',
      'Mops',
      '+80232347766',
      100500
    );
    const email = localStorage.getItem('email');
    expect(email).toBeNull();
  });
});
