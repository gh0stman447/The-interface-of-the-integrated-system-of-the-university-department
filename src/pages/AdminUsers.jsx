import React from 'react';
import { Button } from '../components/UI/button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserModal } from '../components/AddUserModal';
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
import { deleteUserAction } from '../state/users/usersSlice';
import { QuestionModal } from '../components/UI/QuestionModal';

export const AdminUsers = () => {
  const { users, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (status === STATUS.loading || status === null) return <AppLoader />;

  const [currentUser] = JSON.parse(localStorage.getItem('currentUser'));

  const deleteUserHandlerAction = (id) => {
    dispatch(deleteUserAction(id));
  };

  return (
    <>
      <div className='max-w-5xl text-2xl'>
        <h1>Панель администратора - Пользователи</h1>
        {error ? (
          <div>Ошибка на стороне сервера: {error}</div>
        ) : users.length === 0 ? (
          <div className='text-3xl mb-4'>Нет пользователей</div>
        ) : (
          <>
            {status === STATUS.success && (
              <>
                <AddUserModal />
                <Table>
                  <TableHeader className='text-xl'>
                    <TableRow>
                      <TableHead>Фамилия</TableHead>
                      <TableHead>Имя</TableHead>
                      <TableHead>Почта</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map(({ id, firstName, lastName, email }) => (
                      <TableRow className='text-lg' key={id}>
                        <>
                          <TableCell className='font-medium'>{lastName}</TableCell>
                          <TableCell className='font-medium'>{firstName}</TableCell>
                          <TableCell className='font-medium'>{email}</TableCell>
                          <TableCell>
                            <Link to={`/admin/user/${id}`}>
                              <Button variant={'secondary'}>Просмотреть</Button>
                            </Link>
                          </TableCell>
                          <TableCell>
                            <Link to={`/admin/editUser/${id}`}>
                              <Button variant={'secondary'}>Редактировать</Button>
                            </Link>
                          </TableCell>
                          {currentUser.id !== id && (
                            <TableCell>
                              <QuestionModal action={deleteUserHandlerAction} id={id} type='user' />
                            </TableCell>
                          )}
                        </>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </>
        )}

        <Link to='/admin'>
          <Button variant={'secondary'} className='mt-10'>
            Назад
          </Button>
        </Link>
      </div>
    </>
  );
};
