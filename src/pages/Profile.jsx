import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const role = useSelector((state) => state.role.role);
  return <div>Profile</div>;
};
