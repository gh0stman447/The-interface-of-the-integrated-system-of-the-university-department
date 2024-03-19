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
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../constants/status';
import { AppLoader } from '../components/UI/loader';
import { deleteSubmoduleAction } from '../state/modulesNav/modulesSlice';
import { QuestionModal } from '../components/UI/QuestionModal';

export const AdminSubmodules = () => {
  const { modules, status, error } = useSelector((state) => state.modules);

  const { id } = useParams();

  const module = modules.find((module) => module.id == id);

  const dispatch = useDispatch();

  if (status === STATUS.loading || status === null) return <AppLoader />;

  function deleteSubmoduleHandlerAction(data) {
    dispatch(deleteSubmoduleAction(data));
  }

  return (
    <>
      <div className='max-w-4xl text-2xl '>
        <h1>Панель администратора - Подмодули модуля "{module.title}"</h1>
        <AddSubmoduleModal id={id} />
        {error ? (
          <div className='mb-4'>Ошибка на стороне сервера: {error}</div>
        ) : module.submodules.length === 0 ? (
          <div className='text-2xl mb-4'>Нет подмодулей</div>
        ) : (
          <>
            {status === STATUS.success && (
              <Table>
                <TableHeader className='text-xl'>
                  <TableRow>
                    <TableHead className='w-full'>Наименование подмодуля</TableHead>
                    <TableHead className=''>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {module?.submodules.map((submodule) => (
                    <TableRow className='text-lg' key={id}>
                      <TableCell className='font-medium'>{submodule.title}</TableCell>
                      <TableCell>
                        <Link to={`/admin/viewSubmodule/${submodule.id}`}>
                          <Button variant={'secondary'}>Посмотреть</Button>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/admin/editSubmodule/${submodule.id}`}>
                          <Button variant={'secondary'}>Редактировать</Button>
                        </Link>
                      </TableCell>
                      <TableCell className='text-right'>
                        <QuestionModal
                          action={deleteSubmoduleHandlerAction}
                          id={{
                            submoduleId: submodule.id,
                            moduleId: module.id,
                          }}
                          type='submodule'
                        />
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
