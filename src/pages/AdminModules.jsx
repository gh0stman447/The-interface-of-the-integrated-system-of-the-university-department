import React, { useEffect, useState } from 'react';
import { Button } from '../components/UI/button';
import { ModuleControlItem } from '../components/ModuleControlItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddModuleModal } from '../components/AddModuleModal';
import { getModuleListAction } from '../state/modulesNav/modulesNavSlice';
import { STATUS } from '../constants/status';

export const AdminModules = () => {
  const { listStatus, modules } = useSelector((state) => state.modules);

  return (
    <div className='max-w-4xl text-2xl'>
      <h1>Панель администратора - МОДУЛИ</h1>

      <AddModuleModal />

      {modules.length === 0 ? (
        <div className='text-3xl mb-4'>Нет модулей</div>
      ) : (
        <>
          <div className='grid grid-cols-2'>
            <p>Наименование модуля</p>
            <p className=''>Действия</p>
          </div>

          {listStatus === STATUS.loading && <div>Загрузка...</div>}

          {listStatus === STATUS.error && <div>Ошибка загрузки списка пользователей</div>}

          {listStatus === STATUS.ideal &&
            modules.map((module) => (
              <ModuleControlItem key={module.id} moduleName={module.label} id={module.id} />
            ))}
        </>
      )}
      <Link to='/admin'>
        <Button variant={'secondary'}>Назад</Button>
      </Link>
    </div>
  );
};
