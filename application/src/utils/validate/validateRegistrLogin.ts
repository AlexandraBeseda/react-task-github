import { FormikErrors } from 'formik';
import { isEmailValid } from './isEmailValid';

type FormValues = {
  email: string;
  password: string;
};

export const validateRegistrLogin = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
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
