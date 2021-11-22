import React from 'react';
import { useTranslation } from 'react-i18next';
import { redirect } from '../../bll/redirect';
import style from './Car.module.css';

type CarPropTypes = {
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

  redirect();
  return (
    <div className={style.car}>
      <img className={style.img} src={`${picture}`} alt="car" />
      <div className={style.description}>
        <h2>{`${t('Model')}: ${brand} ${model}`}</h2>
        <h3>{`${t('Price')}: ${price}$`}</h3>
        <p>{`${t('Colour')}: ${t(colour)}`}</p>
        <p>
          {`${t('Length')} x ${t('Width')} x ${t(
            'Height'
          )}: ${length} x ${width} x ${height}`}
        </p>
        <p className={style.text}>{`${t('Description')}: ${description}`}</p>
      </div>
    </div>
  );
};
