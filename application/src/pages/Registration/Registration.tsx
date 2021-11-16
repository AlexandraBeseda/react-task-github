import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { redirect } from '../../bll/redirect';
import { setEmailPassword } from '../../bll/reducers/registrationReducer';
import { select } from '../../bll/select';
import { validateRegistrLogin } from '../../utils/validateRegistrLogin';
import { PATH } from '../PageRoutes/PageRoutes';
import styles from './Registration.module.css';

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
    <div className={styles.main}>
      <div className={styles.table}>
        <h1>Registration page</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => {
            validateRegistrLogin(values);
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
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={styles.error}>
                {errors.email && touched.email && errors.email}
              </div>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className={styles.error}>
                {errors.password && touched.password && errors.password}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
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
