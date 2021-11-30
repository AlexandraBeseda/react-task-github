import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {
  BasketPropTypes,
  addAmountAC,
  deleteCarAC
} from '../../bll/reducers/basketReducer';
import style from './Basket.module.css';

export const CarInBasket: React.FC<BasketPropTypes> = ({ ...props }) => {
  const dispatch = useDispatch();

  const setNewAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addAmountAC(props.id, Number(e.currentTarget.value)));
  };

  const deleteCar = () => {
    dispatch(deleteCarAC(props.id));
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
      <p className={`${style.basket} ${style.icon}`}>
        <FontAwesomeIcon icon={faTrashAlt} onClick={deleteCar} />
      </p>
    </div>
  );
};
