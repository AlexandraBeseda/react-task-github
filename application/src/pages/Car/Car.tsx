import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { redirect } from '../../bll/redirect';
import style from './Car.module.css';
import { addToCart } from '../../bll/reducers/cartReducer';
import store from '../../bll/store';

export type CarPropTypes = {
  id: number;
  brand: string;
  model: string;
  color: string;
  picture: string;
  description: string;
  price: number;
  length: number;
  height: number;
  width: number;
};
export const Car: React.FC<CarPropTypes> = ({
  picture,
  brand,
  model,
  price,
  color,
  length,
  height,
  width,
  description,
  id
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    const existingCar = store.getState().cartReducer.filter((car) => {
      if (car.id === id) return car;
    });
    if (existingCar.length < 1) {
      dispatch(
        addToCart({
          id,
          brand,
          model,
          color,
          picture,
          description,
          price,
          length,
          height,
          width
        })
      );
    } else {
      setMessage(t('messages.addedCarToCart'));
    }
  };

  redirect();
  return (
    <div className={style.car}>
      <img className={style.img} src={`${picture}`} alt="car" />
      <div className={style.description}>
        <h2>{`${t('car.param.model')}: ${brand} ${model}`}</h2>
        <h3>{`${t('car.param.price')}: ${price}$`}</h3>
        <p>{`${t('car.param.color')}: ${t(`car.property.color.${color}`)}`}</p>
        <p>
          {`${t('car.param.length')} x ${t('car.param.width')} x ${t(
            'car.param.height'
          )}: ${length} x ${width} x ${height}`}
        </p>
        <p className={style.text}>
          {`${t('car.param.description')}: ${description}`}
        </p>
      </div>
      <div>
        <button
          className={style.addButton}
          onClick={handleAddToCart}
          type="button"
        >
          {t('common.button.addToCart')}
        </button>
        <div className={style.message}>{message}</div>
      </div>
    </div>
  );
};
