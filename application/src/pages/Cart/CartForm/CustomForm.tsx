import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';
import style from './CartForm.module.css';
import {
  saveDataOrders,
  setCustomerData
} from '../../../bll/reducers/paymentCardReducer';
import { validateCart } from '../../../utils/validate/validateCart';

export const CustomForm: React.FC<{ total: number }> = ({ total }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        surname: '',
        name: '',
        email: '',
        mobile: ''
      }}
      validate={(values) => validateCart(values)}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        const orderId = v1();
        dispatch(
          setCustomerData(
            values.surname,
            values.name,
            values.email,
            values.mobile,
            orderId,
            total
          )
        );
        dispatch(
          saveDataOrders(
            orderId,
            values.surname,
            values.name,
            values.mobile,
            total
          )
        );
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
        <form className={style.formik} onSubmit={handleSubmit}>
          <input
            placeholder={t('cart.form.surname')}
            type="surname"
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
          />
          <div className={style.error}>
            {errors.surname &&
              touched.surname &&
              t(`cart.form.error.${errors.surname}`)}
          </div>
          <input
            placeholder={t('cart.form.name')}
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <div className={style.error}>
            {errors.name && touched.name && t(`cart.form.error.${errors.name}`)}
          </div>
          <input
            placeholder={t('cart.form.email')}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div className={style.error}>
            {errors.email &&
              touched.email &&
              t(`cart.form.error.${errors.email}`)}
          </div>
          <input
            placeholder={t('cart.form.mobile')}
            type="mobile"
            name="mobile"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobile}
          />
          <div className={style.error}>
            {errors.mobile &&
              touched.mobile &&
              t(`cart.form.error.${errors.mobile}`)}
          </div>
          <div>
            <button
              data-cy="data-cy-app-submitOrder"
              type="submit"
              disabled={isSubmitting}
            >
              {t('common.button.submit')}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
