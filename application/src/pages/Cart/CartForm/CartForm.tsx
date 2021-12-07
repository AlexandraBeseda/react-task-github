import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import style from './CartForm.module.css';
import { setCustomerData } from '../../../bll/reducers/paymentCardReducer';
import { AppStateType } from '../../../bll/store';
import { validateCart } from '../../../utils/validate/validateCart';

type CartFormPropTypes = {
  totalCartSum: number;
};

export const CartForm: React.FC<CartFormPropTypes> = ({
  totalCartSum,
  ...props
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orderNum = useSelector<AppStateType, string>(
    (state) => state.paymentCardReducer.orderNum
  );
  return (
    <div className={style.mainBlock}>
      <h2>{t('cart.order.inf')}</h2>
      <div className={style.formBlock}>
        <div className={style.title}>
          <p>{`${t('cart.order.totalAmount')} ${totalCartSum} $`}</p>
          <div>
            {orderNum.length > 1 &&
              `${t('cart.order.orderNum')} ${orderNum.slice(0, 5)}`}
            <hr />
            {orderNum.length > 1 && t('cart.order.orderProc')}
          </div>
        </div>
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
            dispatch(
              setCustomerData(
                values.surname,
                values.name,
                values.email,
                values.mobile,
                v1(),
                totalCartSum
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
                {errors.name &&
                  touched.name &&
                  t(`cart.form.error.${errors.name}`)}
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
