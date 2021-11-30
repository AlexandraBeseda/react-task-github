import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { redirect } from '../../bll/redirect';
import { BasketPropTypes } from '../../bll/reducers/basketReducer';
import { AppStateType } from '../../bll/store';
import style from './Basket.module.css';
import { BasketForm } from './BasketForm/BasketForm';
import { CarInBasket } from './CarInBasket';

export const Basket: React.FC = () => {
  const { t } = useTranslation();
  const basketReducer = useSelector<AppStateType, BasketPropTypes[]>(
    (state) => state.basketReducer
  );
  redirect();
  if (basketReducer.length < 1) {
    return (
      <div className={style.mainBlock}>
        <h1>{t('basket.basketIsEmpty')}</h1>
      </div>
    );
  }
  return (
    <div className={style.mainBlock}>
      <div className={style.card}>
        <div className={style.carName}>{t('header.links.cars')}</div>
        <div className={style.carPrice}>{t('car.param.price')}</div>
        <div className={style.input}>{t('basket.amount')}</div>
        <div className={style.totalPrice}>{t('basket.total')}</div>
        <div className={style.basket}>{t('common.button.delete')}</div>
      </div>
      {basketReducer.map((car) => (
        <CarInBasket
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          colour={car.colour}
          picture={car.picture}
          description={car.description}
          price={car.price}
          length={car.length}
          height={car.height}
          width={car.width}
          // plus
          amount={car.amount}
          total={car.total}
        />
      ))}
      <BasketForm />
    </div>
  );
};
