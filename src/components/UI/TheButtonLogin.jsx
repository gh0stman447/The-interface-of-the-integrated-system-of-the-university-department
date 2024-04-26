import React from 'react';
import { Button } from './button';

export const TheButtonLogin = ({ onClick, disabled }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      variant={'secondary'}
      className='text-[#2e2e2e] text-lg py-6 px-[17px] sm:px-9 uppercase leading-5 tracking-widest'
    >
      Войти
    </Button>
  );
};
