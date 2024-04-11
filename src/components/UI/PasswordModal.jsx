import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Toaster, toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { updateUserAction } from '../../state/users/usersSlice';

export const PasswordModal = () => {
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const dispatch = useDispatch();

  const changePasswordHandler = () => {
    const [user] = JSON.parse(localStorage.getItem('currentUser'));
    if (passwordForm.oldPassword === user.password || passwordForm.oldPassword === '') {
      if (
        passwordForm.newPassword.trim() === '' ||
        passwordForm.confirmNewPassword.trim() === '' ||
        passwordForm.oldPassword.trim() === ''
      ) {
        alert('Введите данные.');
      } else if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
        alert('Введите одинаковые данные для нового пароля.');
      } else {
        localStorage.setItem(
          'currentUser',
          JSON.stringify([{ ...user, password: passwordForm.newPassword }]),
        );

        dispatch(
          updateUserAction({
            id: user.id,
            userData: { ...user, password: passwordForm.newPassword },
          }),
        );

        toast('Пароль успешно изменён.', {
          action: {
            label: 'Закрыть',
            onClick: () => {},
          },
        });
      }
    } else {
      alert('Старый пароль неверный.');
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6 text-left'}>
        <Button variant={'secondary'}>Изменить пароль</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader className={'mb-4'}>Изменение пароля</DialogHeader>
        <div className='flex gap-4'>
          <span className='w-1/2'>Старый пароль</span>
          <Input
            value={passwordForm.oldPassword}
            onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
          />
        </div>
        <div className='flex gap-4'>
          <span className='w-1/2'>Новый пароль</span>
          <Input
            value={passwordForm.newPassword}
            onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
          />
        </div>
        <div className='flex gap-4'>
          <span className='w-1/2'>Подтвердите новый пароль</span>
          <Input
            value={passwordForm.confirmNewPassword}
            onChange={(e) =>
              setPasswordForm({ ...passwordForm, confirmNewPassword: e.target.value })
            }
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => changePasswordHandler()}
            className={'justify-center'}
            variant={'secondary'}
          >
            Изменить
          </Button>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
};
