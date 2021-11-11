import React from 'react';
import { redirect } from '../../../bll/redirect';

export const Car: React.FC = () => {
  redirect();
  return (
    <div>
      <p>Car component</p>
    </div>
  );
};
