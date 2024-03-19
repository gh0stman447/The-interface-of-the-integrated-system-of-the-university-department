import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './dialog';
import { Button } from './button';

export const QuestionModal = ({ action, id, type }) => {
  const handler = () => {
    action(id);
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6'}>
        <Button variant={'secondary'}>Удалить</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader>
          {type === 'user' ? (
            <p className='text-2xl'>Вы действительно хотете удалить пользователя?</p>
          ) : type === 'module' ? (
            <p className='text-2xl'>Вы действительно хотете удалить модуль?</p>
          ) : (
            <p className='text-2xl'>Вы действительно хотете удалить подмодуль?</p>
          )}
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button onClick={() => handler()} className={'justify-center'} variant={'secondary'}>
              Удалить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
