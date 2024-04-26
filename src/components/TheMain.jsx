import React from 'react';
import { Outlet } from 'react-router-dom';

export const TheMain = () => {
  return (
    <main className='dark:text-white relative'>
      <div className='h-[275px] dark:bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full'></div>
      <div className='relative pt-6 pb-[48px] px-8 max-w-screen-5xl'>
        <Outlet />
      </div>
    </main>
  );
};
