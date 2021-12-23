import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { v1 } from 'uuid';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { redirect } from '../../bll/redirect';
import { PATH } from '../PageRoutes/PageRoutes';
import styles from './NavBar.module.css';
import { setCustomerData } from '../../bll/reducers/paymentCardReducer';
import { deleteAccount } from '../../bll/reducers/registrationReducer';
import { cleanCart } from '../../bll/reducers/cartReducer';

export const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlerDeleteAccount = () => {
    dispatch(deleteAccount());
    dispatch(setCustomerData('', '', '', '', '', 0));
    dispatch(cleanCart());
    navigate(PATH.REGISTRATION);
  };

  const NAV_BAR_ARRAY = [
    { id: v1(), pageName: 'cars', path: PATH.CARS },
    { id: v1(), pageName: 'cart', path: PATH.CART },
    { id: v1(), pageName: 'profile', path: PATH.PROFILE }
  ];

  const handleENG = () => {
    i18n.changeLanguage('en');
  };
  const handleRU = () => {
    i18n.changeLanguage('ru');
  };
  redirect();
  return (
    <nav className={styles.main}>
      <ul className={styles.menu}>
        <button type="button" onClick={handleENG}>
          {t('common.language.english')}
        </button>
        <button type="button" onClick={handleRU}>
          {t('common.language.russian')}
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
              {t(`header.links.${elem.pageName}`)}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className={styles.button}
        type="button"
        onClick={handlerDeleteAccount}
      >
        {t('common.button.deleteAccount')}
      </button>
    </nav>
  );
};
