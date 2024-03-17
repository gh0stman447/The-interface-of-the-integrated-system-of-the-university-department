import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/button';

export const Profile = () => {
  const [{ firstName, lastName, surName, contractNumber, status, position, role }] = JSON.parse(
    localStorage.getItem('currentUser'),
  );
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-2xl'>Профиль пользователя</h1>
      <div className='flex gap-4 mt-6'>
        <div className='w-[250px] h-[256px]'>Image</div>
        <div className='flex flex-col gap-6'>
          <div className='font-semibold text-xl'>
            {firstName} {lastName} {surName}
          </div>
          <div>Номер договора: {contractNumber}</div>
          <div>Должность: {position}</div>
          <div>Статус: {status}</div>
          <div>Роль: {role}</div>
          <Button className='w-fit' variant={'secondary'}>
            Изменить пароль
          </Button>
        </div>
      </div>

      <Button onClick={() => navigate(-1)} variant={'secondary'} className='mt-6'>
        Назад
      </Button>
    </div>
  );
};
