import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Car } from '../../pages/components/Car/Car';
import { Cars } from '../../pages/components/Cars/Cars';
import { Cart } from '../../pages/components/Cart/Cart';
import { Error404 } from '../../pages/components/Error404/Error404';
import { Profile } from '../../pages/components/Profile/Profile';

export const PATH = {
  CAR: '/car',
  CARS: '/cars',
  CART: '/cart',
  PROFILE: '/profile',
  ERROR404: '/error404'
};
export const PageRoutes: React.FC = () => (
  <div>
    <Routes>
      <Route path={PATH.CAR} element={<Car />} />
      <Route path={PATH.CARS} element={<Cars />} />
      <Route path={PATH.CART} element={<Cart />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.ERROR404} element={<Error404 />} />
    </Routes>
  </div>
);
