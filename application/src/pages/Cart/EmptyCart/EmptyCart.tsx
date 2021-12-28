import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../PageRoutes/PageRoutes';
import style from './EmptyCart.module.css';

export const EmptyCart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.mainBlock}>
      <h1>{t('cart.cartIsEmpty')}</h1>
      <h3>
        <NavLink
          className={style.link}
          to={PATH.CARS}
          data-cy="data-cy-app-link-start-shopping"
        >
          {t('messages.startShopping')}
        </NavLink>
      </h3>
      <h3>
        <NavLink
          className={style.link}
          to={PATH.ORDERS_HISTORY}
          data-cy="data-cy-app-link-order-history"
        >
          {t('messages.orderHistory')}
        </NavLink>
      </h3>
    </div>
  );
};
