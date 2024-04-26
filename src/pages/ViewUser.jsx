import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useSelector } from 'react-redux';
import { AppLoader } from '../components/UI/loader';

export const ViewUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users.users.find((user) => user.id == id));
  if (!user) return <AppLoader />;

  return (
    <div>
      <h1 className='text-2xl mb-8'>
        Информация о пользователе {user.firstName} {user.lastName}
      </h1>
      <div className='flex flex-col gap-y-4'>
        <p>Имя: {user.firstName}</p>
        <p>Фамилия: {user.lastName}</p>
        <p>Отчество: {user.surName}</p>
        <p>Почта: {user.email}</p>
        <p>Логин: {user.login}</p>
        <p>Пароль: {user.password}</p>
        <p>Номер договора: {user.contractNumber}</p>
        <p>Должность: {user.position}</p>
        <p>Роль: {user.role}</p>
      </div>
      <Link to='/admin/users'>
        <Button variant={'secondary'} className='mt-10'>
          Назад
        </Button>
      </Link>
    </div>
  );
};
