import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../PageRoutes/PageRoutes';
import { CartFormPropTypes } from '../CartForm';
import style from './CartFormHeader.module.css';

export const CartFormHeader: React.FC<CartFormPropTypes> = ({
  orderNum,
  total
}) => {
  const { t } = useTranslation();
  return (
    <div
      data-cy="data-cy-app-link-cart-after-order-form"
      className={style.title}
    >
      <p>{`${t('cart.order.totalAmount')} ${total} $`}</p>
      <div>
        {orderNum && `${t('cart.order.orderNum')} ${orderNum.slice(0, 5)}`}
      </div>
      <div>{orderNum && t('cart.order.orderProc')}</div>

      <h4>
        <NavLink className={style.link} to={PATH.ORDERS_HISTORY}>
          {t('messages.orderHistory')}
        </NavLink>
      </h4>
    </div>
  );
};
