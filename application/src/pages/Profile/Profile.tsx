import React from 'react';
import { redirect } from '../../bll/redirect';

export const Profile: React.FC = () => {
  redirect();
  return (
    <div>
      <p>Profile component</p>
    </div>
  );
};
