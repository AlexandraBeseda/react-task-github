import React from 'react';
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
  redirect();
  return (
    <div className={style.car}>
      <img className={style.img} src={`${picture}`} alt="car" />
      <div className={style.description}>
        <h2>{`Model: ${brand} ${model}`}</h2>
        <h3>{`Price: ${price}$`}</h3>
        <p>{`Colour: ${colour}`}</p>
        <p>{`Length x Width x Height: ${length} x ${width} x ${height}`}</p>
        <p className={style.text}>{`Description: ${description}`}</p>
      </div>
    </div>
  );
};
