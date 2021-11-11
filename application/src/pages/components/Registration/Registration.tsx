import { Formik, FormikErrors } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setPassword
} from '../../../bll/reducers/registrationReducer';

type FormValues = {
  email: string;
  password: string;
};
export const Registration: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Registration page</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch(setEmail(values.email));
          dispatch(setPassword(values.password));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
