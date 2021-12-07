import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './CartForm.module.css';
import { CustomForm } from './CustomForm';
import { CartFormHeader } from './CartFormHeader/CartFormHeader';

export type CartFormPropTypes = {
  total: number;
  orderNum: string;
};

export const CartForm: React.FC<CartFormPropTypes> = ({ total, orderNum }) => {
  const { t } = useTranslation();

  return (
    <div className={style.mainBlock}>
      <h2>{t('cart.order.inf')}</h2>
      <div className={style.formBlock}>
        <CartFormHeader orderNum={orderNum} total={total} />
        <CustomForm total={total} />
      </div>
    </div>
  );
};
