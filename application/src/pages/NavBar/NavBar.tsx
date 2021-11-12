import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { redirect } from '../../bll/redirect';
import { deleteEmailPassword } from '../../bll/reducers/registrationReducer';
import { PATH } from '../PageRoutes/PageRoutes';
import s from './NavBar.module.css';

export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteAccount = () => {
    dispatch(deleteEmailPassword());
    navigate(PATH.REGISTRATION);
  };
  redirect();

  return (
    <nav className={s.main}>
      <ul className={s.menu}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.CAR}
          >
            Car
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.CARS}
          >
            Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.CART}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.PROFILE}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.LOGIN}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.REGISTRATION}
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.activeNavLink : '')}
            to={PATH.ERROR404}
          >
            Error404
          </NavLink>
        </li>
      </ul>
      <button type='button' onClick={deleteAccount}>
        Delete Account
      </button>
    </nav>
  );
};
