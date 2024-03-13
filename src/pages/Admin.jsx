import React from 'react';
import { Button } from '../components/UI/button';
import { Link } from 'react-router-dom';

export const Admin = () => {
  return (
    <>
      <h1 className='text-2xl'>Панель администратора</h1>
      <div className='flex gap-4 mt-8'>
        <Link to='/admin/modules'>
          <Button variant={'secondary'}>Модули</Button>
        </Link>
        <Link to={'/admin/users'}>
          <Button variant={'secondary'}>Пользователи</Button>
        </Link>
      </div>
    </>
  );
};