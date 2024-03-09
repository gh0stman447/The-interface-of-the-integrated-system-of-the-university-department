import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './UI/dialog';
import { Button } from './UI/button';
import { Input } from './UI/input';
import { useDispatch } from 'react-redux';
import { addUser } from '../state/users/usersSlice';

export const AddUserModal = () => {
  const [inputUser, setInputUser] = useState({
    firstName: '',
    lastName: '',
    surName: '',
  });
  const dispatch = useDispatch();
  const addUserHandler = (_inputUser) => {
    dispatch(addUser(_inputUser));
    setInputUser({
      firstName: '',
      lastName: '',
      surName: '',
    });
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6'}>
        <Button variant={'secondary'}>Добавить Пользователя</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader>
          <p className='text-2xl'>Добавление пользователя</p>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='name' className='text-right'>
              Фамилия
            </p>
            <Input
              value={inputUser.lastName}
              onChange={(e) => setInputUser({ ...inputUser, lastName: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Имя</p>
            <Input
              value={inputUser.firstName}
              onChange={(e) => setInputUser({ ...inputUser, firstName: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='name' className='text-right'>
              Отчество
            </p>
            <Input
              value={inputUser.surName}
              onChange={(e) => setInputUser({ ...inputUser, surName: e.target.value })}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              onClick={() => addUserHandler(inputUser)}
              className={'justify-center'}
              variant={'secondary'}
            >
              Добавить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
