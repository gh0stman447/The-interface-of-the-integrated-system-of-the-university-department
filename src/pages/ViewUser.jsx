import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useSelector } from 'react-redux';

export const ViewUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.users.find((user) => user.id === Number(id)));

  return (
    <div>
      <h1 className='text-2xl mb-8'>Информация о пользователе</h1>
      <div className='flex flex-col gap-y-4'>
        <p>Имя: {user.firstName}</p>
        <p>Фамилия: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Логин: {user.login}</p>
        <p>Пароль: {user.password}</p>
      </div>
      <Link to='/admin/users'>
        <Button className={'my-10'} variant={'secondary'}>
          Назад
        </Button>
      </Link>
    </div>
  );
};
