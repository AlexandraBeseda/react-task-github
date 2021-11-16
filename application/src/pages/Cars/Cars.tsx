import React from 'react';
import { redirect } from '../../bll/redirect';
import cars from '../../data/database.json';
import s from './Cars.module.css';

export const Cars: React.FC = () => {
  redirect();
  return (
    <div className={s.main}>
      {cars.map((car) => (
        <div className={s.car} key={car.id}>
          <img className={s.img} src={`${car.picture}`} alt="car" />
          <div className={s.description}>
            <h2>{`Model: ${car.brand} ${car.model}`}</h2>
            <h3>{`Price: ${car.price}$`}</h3>
            <p>{`Colour: ${car.colour}`}</p>
            <p>{`Length x Width x Height: ${car.length} x ${car.width} x ${car.height}`}</p>
            <p className={s.text}>{`Description: ${car.description}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
