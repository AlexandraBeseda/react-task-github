import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './OrderHeader.module.css';

export const OrderHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.mainBlock}>
      <div className={style.card}>
        <div className={style.orderId}>{t('cart.order.history.orderId')}</div>
        <div className={style.user}>{t('cart.order.history.user')}</div>
        <div className={style.mobile}>{t('cart.order.history.mobile')}</div>
        <div className={style.totalPrice}>{t('cart.order.history.total')}</div>
        <div className={style.date}>{t('cart.order.history.date')}</div>
      </div>
    </div>
  );
};
