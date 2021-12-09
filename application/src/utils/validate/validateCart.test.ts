import { validateCart } from './validateCart';

describe('validateCart', () => {
  test('validate with empty inputs', () => {
    const values = {
      surname: '',
      name: '',
      email: '',
      mobile: ''
    };
    const errors = validateCart(values);
    expect(errors.email).toBe('required');
    expect(errors.mobile).toBe('required');
    expect(errors.name).toBe('required');
    expect(errors.surname).toBe('required');
  });
  test('validate with email 1111', () => {
    const values = {
      surname: '',
      name: '',
      email: '111',
      mobile: ''
    };
    const errors = validateCart(values);
    expect(errors.email).toBe('invalidEmailAddress');
    expect(errors.mobile).toBe('required');
    expect(errors.name).toBe('required');
    expect(errors.surname).toBe('required');
  });
  test('validate with correct parametres', () => {
    const values = {
      surname: 'Burak',
      name: 'Leva',
      email: 'pararam@gmail.com',
      mobile: '+375291586324'
    };
    const errors = validateCart(values);
    expect(errors.email).toBeUndefined();
    expect(errors.mobile).toBeUndefined();
    expect(errors.name).toBeUndefined();
    expect(errors.surname).toBeUndefined();
  });
});
