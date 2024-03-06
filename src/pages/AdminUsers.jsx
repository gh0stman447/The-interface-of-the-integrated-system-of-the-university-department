import React from 'react';
import { Button } from '../components/UI/button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddUserModal } from '../components/AddUserModal';
import { UserControlItem } from '../components/UserControlItem';

export const AdminUsers = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <>
      <div className='max-w-5xl text-2xl'>
        <h1>Панель администратора - Пользователи</h1>
        <AddUserModal />
        {users.length === 0 ? (
          <div className='text-3xl mb-4'>Нет пользователей</div>
        ) : (
          <>
            <div className='grid grid-cols-4'>
              <p>Фамилия</p>
              <p className=''>Имя</p>
              <p className=''>Логин</p>
              <p className=''>Действия</p>
            </div>
            {users.map((user) => (
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
          <Button variant={'secondary'}>Назад</Button>
        </Link>
      </div>
    </>
  );
};
