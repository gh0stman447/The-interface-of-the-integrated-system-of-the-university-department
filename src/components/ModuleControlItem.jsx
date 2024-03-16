import React from 'react';
import { Button } from './UI/button';
import { useDispatch } from 'react-redux';
import { deleteModule, deleteModuleAction } from '../state/modulesNav/modulesSlice';
import { Link } from 'react-router-dom';
import { AddSubmoduleModal } from './AddSubmoduleModal';

export const ModuleControlItem = ({ id, moduleName }) => {
  const dispatch = useDispatch();

  const deleteModuleHandler = (id) => {
    dispatch(deleteModuleAction(id));
  };

  return (
    <div className='flex my-6'>
      <p className='text-xl w-[40%]'>{moduleName}</p>
      <div className='ml-auto space-x-3'>
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
        <AddSubmoduleModal id={id} />
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
