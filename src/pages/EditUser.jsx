import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/UI/input';
import { Toaster } from '../components/UI/sonner';
import { toast } from 'sonner';
import { updateUserAction } from '../state/users/usersSlice';
import { AppLoader } from '../components/UI/loader';
import { RoleModal } from '../components/UI/RoleModal';
import { AddModal } from '../components/UI/AddModal';

export const EditUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users.users.find((user) => user.id == id));

  const [userData, setUserData] = useState({
    ...user,
  });
  const [selectedRole, setSelectedRole] = useState(null);

  const dispatch = useDispatch();

  const saveUserHandler = (userData) => {
    toast('Изменения сохранены', {
      action: {
        label: 'Закрыть',
        onClick: () => {},
      },
    });

    dispatch(
      updateUserAction({
        id: id,
        userData: { ...userData, role: selectedRole },
      }),
    );
  };

  useEffect(() => {
    setUserData({
      ...user,
    });
    if (user) setSelectedRole(user.role);
  }, [user]);

  if (!user) return <AppLoader />;

  return (
    <>
      <h1 className='text-2xl'>Изменение пользователя {user?.firstName}</h1>
      <div className='flex flex-col max-w-screen-lg space-y-6 mt-8'>
        <div className='flex flex-col gap-y-2'>
          <p>Фамилия</p>
          <Input
            value={userData.lastName}
            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Имя</p>
          <Input
            value={userData.firstName}
            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Отчество</p>
          <Input
            value={userData.surName}
            onChange={(e) => setUserData({ ...userData, surName: e.target.value })}
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
        <div className='flex flex-col gap-y-2'>
          <p>Номер договора</p>
          <Input
            value={userData.contractNumber}
            onChange={(e) => setUserData({ ...userData, contractNumber: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Должность</p>
          <Input
            value={userData.position}
            onChange={(e) => setUserData({ ...userData, position: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Статус</p>
          <Input
            value={userData.status}
            onChange={(e) => setUserData({ ...userData, status: e.target.value })}
          />
        </div>
      </div>

      <RoleModal selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

      <div className='flex items-center gap-4'>
        <Link to='/admin/users'>
          <Button className={'my-10'} variant={'secondary'}>
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
