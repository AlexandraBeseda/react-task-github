import React from 'react';
import { useTranslation } from 'react-i18next';

import { redirect } from '../../bll/redirect';
import store from '../../bll/store';
import style from './Basket.module.css';
import { CarInBasket } from './CarInBasket';

export const Basket: React.FC = () => {
  const { t } = useTranslation();

  redirect();
  if (store.getState().basketReducer.length < 1) {
    return (
      <div className={style.mainBlock}>
        <h1>{t('card.basketIsEmpty')}</h1>
      </div>
    );
  }
  return (
    <div className={style.mainBlock}>
      <div className={style.card}>
        <div className={style.carName}>{t('header.links.cars')}</div>
        <div className={style.carPrice}>{t('car.param.price')}</div>
        <div className={style.input}>{t('card.amount')}</div>
        <div className={style.totalPrice}>{t('card.total')}</div>
        <div className={style.basket}>{t('common.button.delete')}</div>
      </div>
      {store.getState().basketReducer.map((car) => (
        <CarInBasket
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          price={car.price}
          amount={car.amount}
          total={car.total}
        />
      ))}
    </div>
  );
};
