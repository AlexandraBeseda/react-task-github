import { FormikErrors } from 'formik';

type FormValues = {
  email: string;
  password: string;
};
const VALIDATE_EMAIL = new RegExp(
  '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$',
  'i'
);
export const validateRegistrLogin = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.password) {
    errors.password = 'Required';
  } else if (!VALIDATE_EMAIL.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 5) {
    errors.password = 'Must be 5 characters or less';
  }
  return errors;
};
