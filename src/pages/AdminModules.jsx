import React, { Fragment } from 'react';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddModuleModal } from '../components/AddModuleModal';
import { deleteModuleAction } from '../state/modulesNav/modulesSlice';
import { STATUS } from '../constants/status';
import { AppLoader } from '../components/UI/loader';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/UI/table';
export const AdminModules = () => {
  const { status, modules, error } = useSelector((state) => state.modules);

  const dispatch = useDispatch();

  const deleteModuleHandler = (id) => {
    dispatch(deleteModuleAction(id));
  };

  if (status === STATUS.loading || status === null) return <AppLoader />;

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
          {status === STATUS.success && (
            <Table>
              <TableHeader className='text-xl'>
                <TableRow>
                  <TableHead className='w-full'>Наименование модуля</TableHead>
                  <TableHead className=''>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modules.map(({ title, id }) => (
                  <TableRow className='text-lg' key={id}>
                    <Fragment key={id}>
                      <TableCell className='font-medium'>{title}</TableCell>
                      <TableCell>
                        <Link to={`/viewModule/${id}`}>
                          <Button variant={'secondary'}>Просмотреть</Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/editModule/${id}`}>
                          <Button variant={'secondary'}>Редактировать</Button>
                        </Link>
                      </TableCell>
                      <TableCell className=''>
                        <Button onClick={() => deleteModuleHandler(id)} variant={'secondary'}>
                          Удалить
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Link to={`/admin/submodules/${id}`}>
                          <Button variant={'secondary'}>Перейти к подмодулям</Button>
                        </Link>
                      </TableCell>
                    </Fragment>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}
      <Link to='/admin'>
        <Button variant={'secondary'} className='mt-4'>
          Назад
        </Button>
      </Link>
    </div>
  );
};
