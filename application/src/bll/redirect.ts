import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../pages/PageRoutes/PageRoutes';
import { store } from './store';

export const redirect = () => {
  let passwordLocal;
  let emailLocal;
  let passwordRegistrReducer;
  let emailRegistrReducer;

  const navigate = useNavigate();

  useEffect(() => {
    passwordLocal = localStorage.getItem('password');
    emailLocal = localStorage.getItem('email');
    passwordRegistrReducer = store.getState().registration.password;
    emailRegistrReducer = store.getState().registration.email;

    if (!passwordLocal && !emailLocal) {
      navigate(PATH.REGISTRATION);
    } else if (
      passwordLocal &&
      emailLocal &&
      !passwordRegistrReducer &&
      !emailRegistrReducer
    ) {
      navigate(PATH.LOGIN);
    }
  }, [passwordLocal, emailLocal, passwordRegistrReducer, emailRegistrReducer]);
};
