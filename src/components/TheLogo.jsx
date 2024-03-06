import React from 'react';
import Logo from '../assets/Logo2.svg';

export const TheLogo = () => {
  return (
    <a href='/' className='text-white inline-block my-6 px-6 w-full'>
      <div className='flex items-center gap-2'>
        {/* <img src={Logo} width={'60px'} className='z-10' alt='123'></img> */}
        <p className='font-bold text-4xl text-white'>ИТиВС</p>
      </div>
    </a>
  );
};
