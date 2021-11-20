import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { v1 } from 'uuid';
import { redirect } from '../../bll/redirect';
import { deleteEmailPassword } from '../../bll/reducers/registrationReducer';
import { PATH } from '../PageRoutes/PageRoutes';
import styles from './NavBar.module.css';
import i18n from '../../utils/i18next';

export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteAccount = () => {
    dispatch(deleteEmailPassword());
    navigate(PATH.REGISTRATION);
  };
  redirect();

  const NAV_BAR_ARRAY = [
    { id: v1(), pageName: 'Cars', path: PATH.CARS },
    { id: v1(), pageName: 'Card', path: PATH.CARD },
    { id: v1(), pageName: 'Profile', path: PATH.PROFILE },
    { id: v1(), pageName: 'Login', path: PATH.LOGIN },
    { id: v1(), pageName: 'Registration', path: PATH.REGISTRATION },
    { id: v1(), pageName: 'Error404', path: PATH.ERROR404 }
  ];
  const handleENG = () => {
    i18n.changeLanguage('en');
  };
  const handleRU = () => {
    i18n.changeLanguage('ru');
  };
  return (
    <nav className={styles.main}>
      <ul className={styles.menu}>
        <button type="button" onClick={handleENG}>
          ENG
        </button>
        <button type="button" onClick={handleRU}>
          RU
        </button>
        {NAV_BAR_ARRAY.map((elem) => (
          <li key={elem.id}>
            <NavLink
              key={elem.id}
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : ' '
              }
              to={elem.path}
            >
              {elem.pageName}
            </NavLink>
          </li>
        ))}
      </ul>
      <button type="button" onClick={deleteAccount}>
        Delete Account
      </button>
    </nav>
  );
};
