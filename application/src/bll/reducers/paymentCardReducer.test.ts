import { v1 } from 'uuid';

import { paymentCardReducer, setCustomerData } from './paymentCardReducer';

describe('Payment card reducer', () => {
  test('should set customer data', () => {
    const initTotal = 0;
    const defaultPaymentCardState = {
      surname: '',
      name: '',
      email: '',
      mobile: '',
      orderNum: '',
      total: initTotal
    };
    const orderNum = v1();
    const newTotal = 203040;
    const surName = 'Hoks';
    const name = 'Lola';
    const email = 'catsliveforeverr@gmil.com';
    const mobile = '+373557654444';
    const action = setCustomerData(
      surName,
      name,
      email,
      mobile,
      orderNum,
      newTotal
    );
    const newState = paymentCardReducer(defaultPaymentCardState, action);
    expect(newState.total).toBe(newTotal);
    const lenght = 1;
    expect(newState.email.length).not.toBeLessThan(lenght);
  });

  test('should check empty localStorage', () => {
    const email = localStorage.getItem('email');
    expect(email).toBeNull();
  });
});
