import React from 'react';
import { Button } from '../components/UI/button';
import { Link, useParams } from 'react-router-dom';
import { AddSubmoduleModal } from '../components/AddSubmoduleModal';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/UI/table';
import { useSelector } from 'react-redux';
import { STATUS } from '../constants/status';
import { AppLoader } from '../components/UI/loader';

export const AdminSubmodules = () => {
  const { modules, status, error } = useSelector((state) => state.modules);
  const { id } = useParams();

  if (status === STATUS.loading) return <AppLoader />;

  const module = modules.find((module) => module.id === id);

  return (
    <>
      <div className='max-w-4xl text-2xl '>
        <h1>Панель администратора - Подмодули модуля "{module?.title}"</h1>
        {error ? (
          <div className='mb-4'>Ошибка на стороне сервера: {error}</div>
        ) : modules.length === 0 ? (
          <div className='text-3xl mb-4'>Нет модулей</div>
        ) : (
          <>
            <AddSubmoduleModal id={id} />
            {status === STATUS.success && (
              <Table>
                <TableHeader className='text-xl'>
                  <TableRow>
                    <TableHead className='w-full'>Наименование подмодуля</TableHead>
                    <TableHead className=''>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {module.submodules.map((submodule) => (
                    <TableRow className='text-lg' key={id}>
                      <TableCell className='font-medium'>{submodule.title}</TableCell>
                      <TableCell>
                        <Button variant={'secondary'}>Посмотреть</Button>
                      </TableCell>
                      <TableCell>
                        <Button variant={'secondary'}>Редактировать</Button>
                      </TableCell>
                      <TableCell className='text-right'>
                        <Button variant={'secondary'}>Удалить</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </>
        )}
        <Link to='/admin/modules'>
          <Button variant={'secondary'} className='mt-6'>
            Назад
          </Button>
        </Link>
      </div>
    </>
  );
};
