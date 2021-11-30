import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { validateBasket } from '../../../utils/validateBasket';
import style from './BasketForm.module.css';

export const BasketForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.mainBlock}>
      <h2>information for ordering</h2>
      <div className={style.formBlock}>
        <div>more information</div>
        <Formik
          initialValues={{
            email: '',
            surname: '',
            name: '',
            mobile: ''
          }}
          validate={(values) => validateBasket(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            /* dispatch(checkEmailPassword(values.email, values.password)); */
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
                placeholder={t('basket.form.surname')}
                type="surname"
                name="surname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
              />
              <div className={style.error}>
                {errors.surname &&
                  touched.surname &&
                  t(`basket.form.error.${errors.surname}`)}
              </div>
              <input
                placeholder={t('basket.form.name')}
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <div className={style.error}>
                {errors.name &&
                  touched.name &&
                  t(`basket.form.error.${errors.name}`)}
              </div>
              <input
                placeholder={t('basket.form.email')}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className={style.error}>
                {errors.email &&
                  touched.email &&
                  t(`basket.form.error.${errors.email}`)}
              </div>
              <input
                placeholder={t('basket.form.mobile')}
                type="mobile"
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
              />
              <div className={style.error}>
                {errors.mobile &&
                  touched.mobile &&
                  t(`basket.form.error.${errors.mobile}`)}
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
