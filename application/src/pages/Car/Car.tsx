import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { redirect } from '../../bll/redirect';
import style from './Car.module.css';
import cars from '../../data/database.json';
import { addToCardAC } from '../../bll/reducers/carReducer';
import { setBasketAC } from '../../bll/reducers/basketReducer';

export type CarPropTypes = {
  id: number;
  brand: string;
  model: string;
  colour: string;
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
  colour,
  length,
  height,
  width,
  description,
  ...props
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const addToCard = (carId: number) => {
    const CAR = cars.find((car) => {
      if (car.id === carId) return car;
    });
    if (CAR) {
      dispatch(addToCardAC(CAR));
      dispatch(
        setBasketAC(CAR.id, CAR.brand, CAR.model, CAR.price, 1, CAR.price)
      );
    }
  };
  redirect();
  return (
    <div className={style.car}>
      <img className={style.img} src={`${picture}`} alt="car" />
      <div className={style.description}>
        <h2>{`${t('car.param.model')}: ${brand} ${model}`}</h2>
        <h3>{`${t('car.param.price')}: ${price}$`}</h3>
        <p>
          {`${t('car.param.price')}: ${t(`car.property.colour.${colour}`)}`}
        </p>
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
          onClick={() => addToCard(props.id)}
          type="button"
        >
          {t('common.button.addToCard')}
        </button>
      </div>
    </div>
  );
};
