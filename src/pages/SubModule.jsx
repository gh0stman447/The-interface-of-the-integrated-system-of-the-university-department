import React from 'react';
import { useParams } from 'react-router-dom';

export const SubModule = () => {
  const { id } = useParams();
  return <div>Module {id}</div>;
};
