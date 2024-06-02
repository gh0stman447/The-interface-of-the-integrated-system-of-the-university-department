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
      <DialogContent className={'dark:bg-[#121212] dark:text-white'}>
        <DialogHeader>
          {type === 'user' ? (
            <p className='text-2xl'>Вы действительно хотете удалить пользователя?</p>
          ) : type === 'module' ? (
            <p className='text-2xl'>Вы действительно хотете удалить деятельность?</p>
          ) : (
            <p className='text-2xl'>Вы действительно хотете удалить модуль?</p>
          )}
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <div className='text-end'>
              <Button onClick={() => handler()} variant={'secondary'}>
                Удалить
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
