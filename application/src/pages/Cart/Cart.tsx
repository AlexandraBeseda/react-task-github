import React from 'react';
import { redirect } from '../../bll/redirect';

export const Cart: React.FC = () => {
  redirect();
  return (
    <div>
      <p>Cart component</p>
    </div>
  );
};
