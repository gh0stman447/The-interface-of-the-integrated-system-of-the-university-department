import React from 'react';
import { Button } from './UI/button';
import { useDispatch } from 'react-redux';
import { deleteModule } from '../state/modulesNav/modulesSlice';
import { Link } from 'react-router-dom';
import { deleteUser, deleteUserAction } from '../state/users/usersSlice';

export const UserControlItem = ({ id, firstName, lastName, userEmail }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between'>
      <p className='text-xl'>{firstName}</p>
      <p className='text-xl'>{lastName}</p>
      <p className='text-xl'>{userEmail}</p>
      <div className=''>
        <Link to={`/admin/user/${id}`}>
          <Button variant={'secondary'} className={'max-w-min justify-self-end'}>
            Просмореть
          </Button>
        </Link>
        <Link to={`/admin/editUser/${id}`}>
          <Button variant={'secondary'} className={'max-w-min justify-self-end'}>
            Редактировать
          </Button>
        </Link>
        <Button
          onClick={() => dispatch(deleteUserAction(id))}
          variant={'secondary'}
          className={'max-w-min justify-self-end'}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
