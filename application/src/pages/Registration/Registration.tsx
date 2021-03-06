import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { redirect } from '../../bll/redirect';
import { setRegistration } from '../../bll/reducers/registrationReducer';
import { selectRegistration } from '../../bll/select';
import { validateRegistrLogin } from '../../utils/validate/validateRegistrLogin';
import { PATH } from '../PageRoutes/PageRoutes';
import style from './Registration.module.css';

export const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { password, email } = useSelector(selectRegistration);

  redirect();

  useEffect(() => {
    if (password && email) {
      navigate(PATH.PROFILE);
    }
  }, [password, email]);

  return (
    <div className={style.main}>
      <div className={style.table}>
        <h1>{t('header.links.registration')}</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => validateRegistrLogin(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(setRegistration(values.email, values.password));
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
      </div>
    </div>
  );
};
