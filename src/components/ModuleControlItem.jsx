import React from 'react';
import { Button } from './UI/button';
import { useDispatch } from 'react-redux';
import { deleteModule } from '../state/modulesNav/modulesNavSlice';
import { Link } from 'react-router-dom';

export const ModuleControlItem = ({ id, moduleName }) => {
  const dispatch = useDispatch();

  const deleteModuleHandler = (id) => {
    dispatch(deleteModule(id));
  };

  return (
    <div className='flex my-6'>
      <p className='text-xl w-[40%]'>{moduleName}</p>
      <div className='ml-auto space-x-14'>
        <Link to={`/viewModule/${id}`}>
          <Button variant={'secondary'} className={'max-w-min justify-self-end'}>
            Просмореть
          </Button>
        </Link>
        <Link to={`/editModule/${id}`}>
          <Button variant={'secondary'} className={'max-w-min justify-self-end'}>
            Редактировать
          </Button>
        </Link>
        <Button
          onClick={() => deleteModuleHandler(id)}
          variant={'secondary'}
          className={'max-w-min justify-self-end'}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
