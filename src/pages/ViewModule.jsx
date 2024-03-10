import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useSelector } from 'react-redux';
import { AppLoader } from '../components/UI/loader';

export const ViewModule = () => {
  const { id } = useParams();
  const module = useSelector((state) => state.modules.modules.find((module) => module.id == id));

  if (!module) return <AppLoader />;

  return (
    <div>
      <h1 className='text-2xl mb-8'>Информация о модуле</h1>
      <div className='flex flex-col gap-y-4'>
        <p>Название модуля: {module.title}</p>
        <p>Описание модуля: {module.description}</p>
      </div>
      <Link to='/admin/modules'>
        <Button className={'my-10'} variant={'secondary'}>
          Назад
        </Button>
      </Link>
    </div>
  );
};
