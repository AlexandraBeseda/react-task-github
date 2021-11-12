import { Formik, FormikErrors } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { redirect } from '../../bll/redirect';
import { setEmailPassword } from '../../bll/reducers/registrationReducer';
import { select } from '../../bll/select';
import { PATH } from '../PageRoutes/PageRoutes';
import s from './Registration.module.css';

type FormValues = {
  email: string;
  password: string;
};
export const Registration: React.FC = () => {
  redirect();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { password, email } = useSelector(select);

  useEffect(() => {
    if (password && email) {
      navigate(PATH.PROFILE);
    }
  }, [password, email]);

  return (
    <div className={s.main}>
      <div className={s.table}>
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
            } else if (!values.password) {
              errors.password = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length > 5) {
              errors.password = 'Must be 5 characters or less';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(setEmailPassword(values.email, values.password));
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
                placeholder='Email'
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div>{errors.email && touched.email && errors.email}</div>
              <input
                placeholder='Password'
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div>
                {errors.password && touched.password && errors.password}
              </div>
              <div>
                <button type='submit' disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
