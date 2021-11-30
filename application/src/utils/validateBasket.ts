import { FormikErrors } from 'formik';

type FormValues = {
  email: string;
  surname: string;
  name: string;
  mobile: string;
};
const VALIDATE_EMAIL = new RegExp(
  '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$',
  'i'
);
export const validateBasket = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (!VALIDATE_EMAIL.test(values.email)) {
    errors.email = 'invalidEmailAddress';
  }
  if (!values.surname) {
    errors.surname = 'required';
  } /* else if (values.password.length < 5) {
    errors.password = 'passwordLenght';
  } */
  if (!values.name) {
    errors.name = 'required';
  }
  if (!values.mobile) {
    errors.mobile = 'required';
  }
  return errors;
};
