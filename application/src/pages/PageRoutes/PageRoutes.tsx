import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cars } from '../Cars/Cars';
import { Cart } from '../Cart/Cart';
import { Error404 } from '../Error404/Error404';
import { Login } from '../Login/Login';
import { OrdersHistory } from '../OrdersHistory/OrdersHistory';
import { Profile } from '../Profile/Profile';
import { Registration } from '../Registration/Registration';

export const PATH = {
  REGISTRATION: '/regist',
  LOGIN: '/login',
  CARS: '/cars',
  CART: '/cart',
  PAY_CARD: '/paycard',
  PROFILE: '/profile',
  ORDERS_HISTORY: '/ordershistory',
  ERROR404: '*'
};
export const PageRoutes: React.FC = () => (
  <Routes>
    <Route path={PATH.PROFILE} element={<Profile />} />
    <Route path={PATH.REGISTRATION} element={<Registration />} />
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.CARS} element={<Cars />} />
    <Route path={PATH.CART} element={<Cart />} />
    <Route path={PATH.ORDERS_HISTORY} element={<OrdersHistory />} />

    <Route path={PATH.ERROR404} element={<Error404 />} />
  </Routes>
);
