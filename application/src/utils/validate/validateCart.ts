import { FormikErrors } from 'formik';
import { isEmailValid } from './isEmailValid';

export type FormValues = {
  email: string;
  surname: string;
  name: string;
  mobile: string;
};

export const validateCart = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (!isEmailValid(values.email)) {
    errors.email = 'invalidEmailAddress';
  }
  if (!values.surname) {
    errors.surname = 'required';
  }
  if (!values.name) {
    errors.name = 'required';
  }
  if (!values.mobile) {
    errors.mobile = 'required';
  }
  return errors;
};
