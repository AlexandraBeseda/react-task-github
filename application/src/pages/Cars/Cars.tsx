import React from 'react';
import { redirect } from '../../bll/redirect';
import cars from '../../data/database.json';
import style from './Cars.module.css';

export const Cars: React.FC = () => {
  redirect();
  return (
    <div className={style.main}>
      {cars.map((car) => (
        <div className={style.car} key={car.id}>
          <img className={style.img} src={`${car.picture}`} alt="car" />
          <div className={style.description}>
            <h2>{`Model: ${car.brand} ${car.model}`}</h2>
            <h3>{`Price: ${car.price}$`}</h3>
            <p>{`Colour: ${car.colour}`}</p>
            <p>{`Length x Width x Height: ${car.length} x ${car.width} x ${car.height}`}</p>
            <p className={style.text}>{`Description: ${car.description}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
