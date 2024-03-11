import React, { useEffect, useState } from 'react';
import { Button } from '../components/UI/button';
import { ModuleControlItem } from '../components/ModuleControlItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddModuleModal } from '../components/AddModuleModal';
import { getModuleListAction } from '../state/modulesNav/modulesSlice';
import { STATUS } from '../constants/status';
import { AppLoader } from '../components/UI/loader';

export const AdminModules = () => {
  const { status, modules, error } = useSelector((state) => state.modules);

  if (status === STATUS.loading) return <AppLoader />;

  return (
    <div className='max-w-4xl text-2xl'>
      <h1>Панель администратора - Модули</h1>

      <AddModuleModal />
      {error ? (
        <div className='mb-4'>Ошибка на стороне сервера: {error}</div>
      ) : modules.length === 0 ? (
        <div className='text-3xl mb-4'>Нет модулей</div>
      ) : (
        <>
          <div className='grid grid-cols-2'>
            <p>Наименование модуля</p>
            <p className=''>Действия</p>
          </div>

          {status === STATUS.success &&
            modules.map((module) => (
              <ModuleControlItem key={module.id} moduleName={module.title} id={module.id} />
            ))}
        </>
      )}
      <Link to='/admin'>
        <Button variant={'secondary'}>Назад</Button>
      </Link>
    </div>
  );
};
