import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TheAvatar } from './TheAvatar';

export const TheHeader = ({ toggleScrolling }) => {
  const [{ firstName, lastName }] = JSON.parse(localStorage.getItem('currentUser'));
  const userName = `${firstName} ${lastName}`;
  return (
    <header className='bg-[#070707] flex flex-1 py-3 px-8 justify-between sticky top-0 z-20'>
      <div className='flex gap-4 items-center'>
        <a href='#sidebar' className='text-[#969696] p-1 inline-block lg:hidden -ml-1.5'>
          <RxHamburgerMenu className='w-7 h-7' />
        </a>
      </div>
      <div className='flex items-center gap-x-4'>
        <span className='text-white'>{userName}</span>
        <div className='gap-2 font-semibold text-xs flex'>
          <TheAvatar toggleScrolling={toggleScrolling} />
        </div>
      </div>
    </header>
  );
};
