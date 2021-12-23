import { FormikErrors } from 'formik';
import { FormValues, validateCart } from './validateCart';

describe('validateCart function', () => {
  let values: FormValues = { surname: '', name: '', email: '', mobile: '' };
  let errors: FormikErrors<FormValues> = {
    surname: '',
    name: '',
    email: '',
    mobile: ''
  };

  beforeEach(() => {
    values = {
      surname: '',
      name: '',
      email: '',
      mobile: ''
    };
    errors = {
      surname: '',
      name: '',
      email: '',
      mobile: ''
    };
  });
  test('validate with empty inputs', () => {
    errors = validateCart(values);
    expect(errors.email).toBe('required');
    expect(errors.mobile).toBe('required');
    expect(errors.name).toBe('required');
    expect(errors.surname).toBe('required');
  });
  test('validate with invalid email', () => {
    values = {
      surname: '',
      name: '',
      email: '111',
      mobile: ''
    };
    errors = validateCart(values);
    expect(errors.email).toBe('invalidEmailAddress');
    expect(errors.mobile).toBe('required');
    expect(errors.name).toBe('required');
    expect(errors.surname).toBe('required');
  });
  test('validate with correct parametres', () => {
    values = {
      surname: 'Burak',
      name: 'Leva',
      email: 'pararam@gmail.com',
      mobile: '+375291586324'
    };
    errors = validateCart(values);
    expect(errors.email).toBeUndefined();
    expect(errors.mobile).toBeUndefined();
    expect(errors.name).toBeUndefined();
    expect(errors.surname).toBeUndefined();
  });
});
