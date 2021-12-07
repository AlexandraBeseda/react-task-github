import React from 'react';
import { redirect } from '../../bll/redirect';
import cars from '../../data/database.json';
import { Car } from '../Car/Car';
import style from './Cars.module.css';

export const Cars: React.FC = () => {
  redirect();
  return (
    <div className={style.mainBlock}>
      {cars.map((car) => (
        <Car
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
        />
      ))}
    </div>
  );
};
