import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../pages/PageRoutes/PageRoutes';
import { store } from './store';

export const redirect = () => {
  let password;
  let email;
  let passwordRegistrReducer;
  let emailRegistrReducer;

  const navigate = useNavigate();

  useEffect(() => {
    password = localStorage.getItem('password');
    email = localStorage.getItem('email');
    passwordRegistrReducer = store.getState().registration.password;
    emailRegistrReducer = store.getState().registration.email;

    const isUserREgistered = passwordRegistrReducer && emailRegistrReducer;
    const isUserAuthorized = password && email;
    if (!isUserAuthorized) {
      navigate(PATH.REGISTRATION);
    } else if (isUserAuthorized && !isUserREgistered) {
      navigate(PATH.LOGIN);
    }
  }, [password, email, passwordRegistrReducer, emailRegistrReducer]);
};
