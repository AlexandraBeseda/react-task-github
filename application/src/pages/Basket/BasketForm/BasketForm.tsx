import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import { validateBasket } from '../../../utils/validateBasket';
import style from './BasketForm.module.css';
import { setCustomerDataAC } from '../../../bll/reducers/cardReducer';
import { AppStateType } from '../../../bll/store';

type BasketFormPropTypes = {
  totalBasketSum: number;
};

export const BasketForm: React.FC<BasketFormPropTypes> = ({
  totalBasketSum,
  ...props
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orderNum = useSelector<AppStateType, string>(
    (state) => state.cardReducer.orderNum
  );
  return (
    <div className={style.mainBlock}>
      <h2>{t('basket.order.inf')}</h2>
      <div className={style.formBlock}>
        <div className={style.title}>
          <p>{`${t('basket.order.totalAmount')} ${totalBasketSum} $`}</p>
          <div>
            {orderNum.length > 1 &&
              `${t('basket.order.orderNum')} ${orderNum.slice(0, 5)}`}
            <hr />
            {orderNum.length > 1 && t('basket.order.orderProc')}
          </div>
        </div>
        <Formik
          initialValues={{
            surname: '',
            name: '',
            email: '',
            mobile: ''
          }}
          validate={(values) => validateBasket(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(
              setCustomerDataAC(
                values.surname,
                values.name,
                values.email,
                values.mobile,
                v1(),
                totalBasketSum
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
            isSubmitting,
            handleReset
          }) => (
            <form className={style.formik} onSubmit={handleSubmit}>
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
