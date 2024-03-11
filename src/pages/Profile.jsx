import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  const role = useSelector((state) => state.role.role);
  const { id } = useParams();
  return <div>Profile {id}</div>;
};
