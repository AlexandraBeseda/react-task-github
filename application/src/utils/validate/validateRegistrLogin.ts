import { FormikErrors } from 'formik';
import { isEmailValid } from './isEmailValid';

export type FormValuesRegistrLogin = {
  email: string;
  password: string;
};

export const validateRegistrLogin = (values: FormValuesRegistrLogin) => {
  const errors: FormikErrors<FormValuesRegistrLogin> = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (!isEmailValid(values.email)) {
    errors.email = 'invalidEmailAddress';
  }
  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'passwordLenght';
  }
  return errors;
};
