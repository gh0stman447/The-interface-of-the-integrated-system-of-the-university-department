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
import { addModule } from '../state/modulesNav/modulesNavSlice';
import { useDispatch } from 'react-redux';

export const AddModuleModal = () => {
  const [inputModule, setInputModule] = useState({ title: '', description: '' });

  const dispatch = useDispatch();

  const addModuleHandler = (_inputModule) => {
    dispatch(addModule(_inputModule));
    setInputModule({
      title: '',
      description: '',
    });
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6'}>
        <Button variant={'secondary'}>Добавить модуль</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader>
          <p className='text-2xl'>Добавление модуля</p>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Название модуля</p>
            <Input
              value={inputModule.title}
              onChange={(e) => setInputModule({ ...inputModule, title: e.target.value })}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='description' className='text-right'>
              Описание модуля
            </p>
            <Input
              value={inputModule.description}
              onChange={(e) => setInputModule({ ...inputModule, description: e.target.value })}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              onClick={() => addModuleHandler(inputModule)}
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
