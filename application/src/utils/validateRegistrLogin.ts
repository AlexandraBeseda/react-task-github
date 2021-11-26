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
    errors.email = 'required';
  } else if (!VALIDATE_EMAIL.test(values.email)) {
    errors.email = 'invalidEmailAddress';
  }
  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'passwordLenght';
  }
  return errors;
};
