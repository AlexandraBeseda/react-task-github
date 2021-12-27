import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Order, OrderPropTypes } from './Order/Order';
import { OrderHeader } from './Order/OrderHeader/OrderHeader';
import style from './OrdersHistory.module.css';

export const OrdersHistory: React.FC = () => {
  const { t } = useTranslation();
  let email;

  const [orderHistory, setOrderHistory] = useState<Array<OrderPropTypes>>();
  useEffect(() => {
    email = localStorage.getItem('email');
    if (email) {
      const isDataExist = localStorage.getItem(email);
      if (isDataExist) {
        setOrderHistory(JSON.parse(isDataExist));
      }
    }
  }, []);

  if (!orderHistory) {
    return (
      <div data-cy="data-cy-app-emptyOrderHistory" className={style.mainBlock}>
        {t('messages.orderHistoryIsEmpty')}
      </div>
    );
  }
  return (
    <>
      <OrderHeader />
      {orderHistory.map((e) => (
        <Order
          key={e.orderId}
          orderId={e.orderId}
          surname={e.surname}
          name={e.name}
          mobile={e.mobile}
          totalCartSum={e.totalCartSum}
          date={e.date}
        />
      ))}
    </>
  );
};
