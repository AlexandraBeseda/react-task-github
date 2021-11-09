import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../PageRoutes/PageRoutes';

export const NavBar: React.FC = () => (
  <div>
    <div>
      <NavLink to={PATH.CAR}>Car</NavLink>
    </div>
    <div>
      <NavLink to={PATH.CARS}>Cars</NavLink>
    </div>
    <div>
      <NavLink to={PATH.CART}>Cart</NavLink>
    </div>
    <div>
      <NavLink to={PATH.PROFILE}>Profile</NavLink>
    </div>
  </div>
);
