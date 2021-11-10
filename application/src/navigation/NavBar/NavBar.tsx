import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../PageRoutes/PageRoutes';

export const NavBar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={PATH.CAR}>Car</NavLink>
      </li>
      <li>
        <NavLink to={PATH.CARS}>Cars</NavLink>
      </li>
      <li>
        <NavLink to={PATH.CART}>Cart</NavLink>
      </li>
      <li>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
      </li>
    </ul>
  </nav>
);
