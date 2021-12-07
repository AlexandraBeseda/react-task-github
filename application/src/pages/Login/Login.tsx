import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { redirect } from '../../bll/redirect';
import { PATH } from '../PageRoutes/PageRoutes';

import style from './Login.module.css';
import { checkLogin } from '../../bll/reducers/registrationReducer';
import { selectRegistration } from '../../bll/select';
import { validateRegistrLogin } from '../../utils/validate/validateRegistrLogin';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { password, email, error } = useSelector(selectRegistration);
  const { t } = useTranslation();

  redirect();

  useEffect(() => {
    if (password && email) {
      navigate(PATH.PROFILE);
    }
  }, [password, email]);

  return (
    <div className={style.main}>
      <div className={style.table}>
        <h1>{t('header.links.login')}</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => validateRegistrLogin(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(checkLogin(values.email, values.password));
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
                placeholder={t('form.field.email')}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={style.error}>
                {errors.email &&
                  touched.email &&
                  t(`form.error.${errors.email}`)}
              </div>
              <input
                placeholder={t('form.field.password')}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <div className={style.error}>
                {errors.password &&
                  touched.password &&
                  t(`form.error.${errors.password}`)}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  {t('common.button.submit')}
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
