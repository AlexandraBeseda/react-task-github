import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from '../Card/Card';
import { Cars } from '../Cars/Cars';
import { Error404 } from '../Error404/Error404';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Registration } from '../Registration/Registration';

export const PATH = {
  REGISTRATION: '/regist',
  LOGIN: '/login',
  CARS: '/cars',
  CARD: '/card',
  PROFILE: '/profile',
  ERROR404: '*'
};
export const PageRoutes: React.FC = () => (
  <Routes>
    <Route path={PATH.PROFILE} element={<Profile />} />
    <Route path={PATH.REGISTRATION} element={<Registration />} />
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.CARS} element={<Cars />} />
    <Route path={PATH.CARD} element={<Card />} />
    <Route path={PATH.ERROR404} element={<Error404 />} />
  </Routes>
);
