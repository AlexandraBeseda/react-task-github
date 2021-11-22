import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { redirect } from '../../bll/redirect';
import { checkEmailPassword } from '../../bll/reducers/registrationReducer';
import { select } from '../../bll/select';
import { validateRegistrLogin } from '../../utils/validateRegistrLogin';
import { PATH } from '../PageRoutes/PageRoutes';

import styles from './Login.module.css';

export const Login: React.FC = () => {
  redirect();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { password, email, error } = useSelector(select);

  useEffect(() => {
    if (password && email) {
      navigate(PATH.PROFILE);
    }
  }, [password, email]);
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className={styles.table}>
        <h1>{t('Login')}</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => validateRegistrLogin(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(checkEmailPassword(values.email, values.password));
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
                placeholder={t('Email')}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={styles.error}>
                {errors.email && touched.email && t(errors.email)}
              </div>
              <input
                placeholder={t('Password')}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className={styles.error}>
                {errors.password && touched.password && t(errors.password)}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  {t('Submit')}
                </button>
              </div>
            </form>
          )}
        </Formik>
        {error}
      </div>
    </div>
  );
};
