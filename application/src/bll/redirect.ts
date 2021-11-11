import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../pages/components/navigation/PageRoutes/PageRoutes';

export const redirect = () => {
  let password;
  let email;
  const navigate = useNavigate();

  useEffect(() => {
    password = localStorage.getItem('password');
    email = localStorage.getItem('email');

    if (!password || !email) {
      navigate(PATH.LOGIN);
    }
  }, []);
};
