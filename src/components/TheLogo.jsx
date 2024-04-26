import React from 'react';
import Logo from '../assets/Logo2.svg';
import { Link } from 'react-router-dom';

export const TheLogo = () => {
  return (
    <div className='flex justify-center'>
      <Link
        to='/'
        className='text-[#121212] dark:text-white inline-block h-[64px] py-3 grow text-center'
      >
        <p className='font-bold text-4xl'>ИТиВС</p>
      </Link>
    </div>
  );
};
