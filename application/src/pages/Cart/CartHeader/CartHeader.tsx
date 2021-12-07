import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './CartHeader.module.css';

export const CartHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.card}>
      <div className={style.carName}>{t('header.links.cars')}</div>
      <div className={style.carPrice}>{t('car.param.price')}</div>
      <div className={style.input}>{t('cart.amount')}</div>
      <div className={style.totalPrice}>{t('cart.total')}</div>
      <div className={style.deleteButton}>{t('common.button.delete')}</div>
    </div>
  );
};
