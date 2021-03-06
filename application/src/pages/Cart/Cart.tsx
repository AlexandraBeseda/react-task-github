import React from 'react';
import { useSelector } from 'react-redux';
import { redirect } from '../../bll/redirect';
import { CartPropTypes } from '../../bll/reducers/cartReducer';
import { AppStateType } from '../../bll/store';
import { formatTotalAmount } from '../../utils/formatTotalAmount';
import { CarInCart } from './CarInCart/CarInCart';
import style from './Cart.module.css';
import { CartForm } from './CartForm/CartForm';
import { CartFormHeader } from './CartForm/CartFormHeader/CartFormHeader';
import { CartHeader } from './CartHeader/CartHeader';
import { EmptyCart } from './EmptyCart/EmptyCart';

export const Cart: React.FC = () => {
  const cartReducer = useSelector<AppStateType, CartPropTypes[]>(
    (state) => state.cartReducer
  );
  const paymentCarDReducerTotal = useSelector<AppStateType, number>(
    (state) => state.paymentCardReducer.total
  );
  const orderNum = useSelector<AppStateType, string>(
    (state) => state.paymentCardReducer.orderNum
  );
  redirect();

  let cartTotalSum = 0;
  cartReducer.forEach((car) => {
    cartTotalSum += car.total;
  });

  const totalCarPrice = formatTotalAmount(cartTotalSum);
  const isCartEmpty = cartReducer.length < 1;
  if (isCartEmpty) {
    return <EmptyCart />;
  }
  const isCartFull = cartReducer.length > 0;
  const isPaymentCardFull = paymentCarDReducerTotal > 0;
  if (isCartFull && isPaymentCardFull) {
    return <CartFormHeader total={totalCarPrice} orderNum={orderNum} />;
  }
  return (
    <div className={style.mainBlock}>
      <CartHeader />
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
      <CartForm total={totalCarPrice} orderNum={orderNum} />
    </div>
  );
};
