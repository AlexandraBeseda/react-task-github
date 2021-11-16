import React from 'react';
import { redirect } from '../../bll/redirect';

export const Cars: React.FC = () => {
  redirect();
  return (
    <div>
      <p>Cars component</p>
    </div>
  );
};
