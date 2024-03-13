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
import { postUserAction } from '../state/users/usersSlice';

export const AddUserModal = () => {
  const [inputUser, setInputUser] = useState({
    login: '',
    password: '',
    email: '',
    lastName: '',
    firstName: '',
    surName: '',
    contractNumber: '',
    position: '',
    status: '',
  });

  const dispatch = useDispatch();

  const addUserHandler = (_inputUser) => {
    dispatch(postUserAction(_inputUser));

    setInputUser({
      //возможно лишнее
      login: '',
      password: '',
      email: '',
      lastName: '',
      firstName: '',
      surName: '',
      contractNumber: '',
      position: '',
      status: '',
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
            <p className='text-right'>Логин</p>
            <Input
              value={inputUser.login}
              onChange={(e) => setInputUser({ ...inputUser, login: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Пароль</p>
            <Input
              value={inputUser.password}
              onChange={(e) => setInputUser({ ...inputUser, password: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Почта</p>
            <Input
              value={inputUser.email}
              onChange={(e) => setInputUser({ ...inputUser, email: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Фамилия</p>
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
            <p className='text-right'>Отчество</p>
            <Input
              value={inputUser.surName}
              onChange={(e) => setInputUser({ ...inputUser, surName: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Номер договора</p>
            <Input
              value={inputUser.contractNumber}
              onChange={(e) => setInputUser({ ...inputUser, contractNumber: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Должность</p>
            <Input
              value={inputUser.position}
              onChange={(e) => setInputUser({ ...inputUser, position: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Статус</p>
            <Input
              value={inputUser.status}
              onChange={(e) => setInputUser({ ...inputUser, status: e.target.value })}
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
