import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  const [user] = JSON.parse(localStorage.getItem('currentUser'));
  console.log(user);
  return <div> </div>;
};
