import { v1 } from 'uuid';
import { paymentCardReducer, setCustomerData } from './paymentCardReducer';

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
});
