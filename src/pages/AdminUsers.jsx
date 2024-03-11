import React, { useEffect } from 'react';
import { Button } from '../components/UI/button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserModal } from '../components/AddUserModal';
import { UserControlItem } from '../components/UserControlItem';
import { getUserListAction } from '../state/users/usersSlice';
import { STATUS } from '../constants/status';
import { AppLoader } from '../components/UI/loader';

export const AdminUsers = () => {
  const { users, status, error } = useSelector((state) => state.users);

  if (status === STATUS.loading) return <AppLoader />;

  return (
    <>
      <div className='max-w-5xl text-2xl'>
        <h1>Панель администратора - Пользователи</h1>

        <AddUserModal />
        {error ? (
          <div>Ошибка на стороне сервера: {error}</div>
        ) : users.length === 0 ? (
          <div className='text-3xl mb-4'>Нет пользователей</div>
        ) : (
          <>
            <div className='grid grid-cols-4'>
              <p>Фамилия</p>
              <p className=''>Имя</p>
              <p className=''>Почта</p>
              <p className=''>Действия</p>
            </div>

            {status === STATUS.success &&
              users.map((user) => (
                <UserControlItem
                  key={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  userEmail={user.email}
                  id={user.id}
                />
              ))}
          </>
        )}

        <Link to='/admin'>
          <Button variant={'secondary'} className='mt-10'>
            Назад
          </Button>
        </Link>
      </div>
    </>
  );
};
