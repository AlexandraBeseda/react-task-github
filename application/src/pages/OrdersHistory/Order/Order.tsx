import React from 'react';
import style from './Order.module.css';

export type OrderPropTypes = {
  orderId: string;
  surname: string;
  name: string;
  mobile: string;
  totalCartSum: number;
  date: string;
};
export const Order: React.FC<OrderPropTypes> = (props) => {
  const { orderId, surname, name, mobile, totalCartSum, date } = props;
  return (
    <div className={style.mainBlock}>
      <div className={style.card}>
        <div className={style.orderId}>{orderId}</div>
        <div className={style.user}>{`${surname} ${name}`}</div>
        <div className={style.mobile}>{mobile}</div>
        <div className={style.totalPrice}>{`${totalCartSum} $`}</div>
        <div className={style.date}>{date}</div>
      </div>
    </div>
  );
};
