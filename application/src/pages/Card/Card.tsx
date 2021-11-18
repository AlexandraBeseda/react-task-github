import React from 'react';
import { redirect } from '../../bll/redirect';

export const Card: React.FC = () => {
  redirect();
  return (
    <div>
      <p>Card component</p>
    </div>
  );
};
