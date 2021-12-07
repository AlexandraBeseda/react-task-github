import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { redirect } from '../../bll/redirect';
import { CartPropTypes } from '../../bll/reducers/cartReducer';
import { AppStateType } from '../../bll/store';
import { PATH } from '../PageRoutes/PageRoutes';
import { CarInCart } from './CarInCart';
import style from './Cart.module.css';
import { CartForm } from './CartForm/CartForm';

export const Cart: React.FC = () => {
  const cartReducer = useSelector<AppStateType, CartPropTypes[]>(
    (state) => state.cartReducer
  );
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (cartReducer.length === 0) {
      navigate(PATH.CART);
    }
  }, [cartReducer]);
  redirect();
  if (cartReducer.length < 1) {
    return (
      <div className={style.mainBlock}>
        <h1>{t('cart.cartIsEmpty')}</h1>
        <h3>
          <NavLink className={style.link} to={PATH.CARS}>
            {t('messages.startShopping')}
          </NavLink>
        </h3>
      </div>
    );
  }

  let cartTotalSum = 0;
  cartReducer.forEach((car) => {
    cartTotalSum += car.total;
  });

  return (
    <div className={style.mainBlock}>
      <div className={style.card}>
        <div className={style.carName}>{t('header.links.cars')}</div>
        <div className={style.carPrice}>{t('car.param.price')}</div>
        <div className={style.input}>{t('cart.amount')}</div>
        <div className={style.totalPrice}>{t('cart.total')}</div>
        <div className={style.deleteButton}>{t('common.button.delete')}</div>
      </div>
      {cartReducer.map((car) => (
        <CarInCart
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          color={car.color}
          picture={car.picture}
          description={car.description}
          price={car.price}
          length={car.length}
          height={car.height}
          width={car.width}
          amount={car.amount}
          total={car.total}
        />
      ))}
      <CartForm totalCartSum={cartTotalSum} />
    </div>
  );
};
