import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/UI/input';
import { Toaster } from '../components/UI/sonner';
import { toast } from 'sonner';
import { changeUserData } from '../state/users/usersSlice';

export const EditUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users.users.find((user) => user.id == id));

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    ...user,
  });

  const saveUserHandler = (userData) => {
    toast('Изменения сохранены', {
      action: {
        label: 'Закрыть',
        onClick: () => {},
      },
    });
    dispatch(
      changeUserData({
        id: id,
        userData: userData,
      }),
    );
  };

  return (
    <>
      <h1 className='text-2xl'>Изменение пользователя {user?.firstName}</h1>
      <div className='flex flex-col max-w-screen-lg space-y-6'>
        <div className='flex flex-col gap-y-2 mt-8'>
          <p>Имя</p>
          <Input
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Фамилия</p>
          <Input
            value={userData.lastName}
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Почта</p>
          <Input
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Логин</p>
          <Input
            value={userData.login}
            onChange={(e) => setUserData({ ...userData, login: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Пароль</p>
          <Input
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Link to='/admin/users'>
          <Button className={'my-10 w-fit'} variant={'secondary'}>
            Назад
          </Button>
        </Link>
        <Link>
          <Button
            onClick={() => saveUserHandler(userData)}
            className={'w-fit'}
            variant={'secondary'}
          >
            Сохранить
          </Button>
        </Link>
        <Toaster />
      </div>
    </>
  );
};
