import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {
  CartPropTypes,
  addAmount,
  deleteCar
} from '../../bll/reducers/cartReducer';
import style from './Cart.module.css';

export const CarInCart: React.FC<CartPropTypes> = ({ ...props }) => {
  const dispatch = useDispatch();

  const setNewAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addAmount(props.id, Number(e.currentTarget.value)));
  };

  const handleDeleteCar = () => {
    dispatch(deleteCar(props.id));
  };

  return (
    <div className={style.card}>
      <p className={style.carName}>{`${props.brand} ${props.model}`}</p>
      <p className={style.carPrice}>{`${props.price} $`}</p>
      <input
        min={1}
        max={5}
        value={props.amount}
        className={style.input}
        type="number"
        onChange={setNewAmount}
      />
      <p className={style.totalPrice}>{`${props.total} $`}</p>
      <p className={`${style.cart} ${style.icon}`}>
        <FontAwesomeIcon icon={faTrashAlt} onClick={handleDeleteCar} />
      </p>
    </div>
  );
};
