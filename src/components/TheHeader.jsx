import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TheAvatar } from './TheAvatar';
import { usePersistantCurrentUser } from './TheNav';

export const TheHeader = ({ toggleScrolling }) => {
  const currentUser = usePersistantCurrentUser();
  const firstName = currentUser?.firstName ?? '';
  const lastName = currentUser?.lastName ?? '';
  const userName = `${firstName} ${lastName}`;

  return (
    <header className='bg-gray-100 dark:bg-black flex flex-1 py-3 px-8 justify-between sticky top-0 z-20 border-b border-b-slate-400 border-l-0 dark:border-slate-600'>
      <div className='flex gap-4 items-center'>
        <a href='#sidebar' className='text-[#969696] p-1 inline-block lg:hidden -ml-1.5'>
          <RxHamburgerMenu className='w-7 h-7' />
        </a>
        <span className='italic opacity-35 hidden lg:block dark:text-white'>
          Интегрированная система кафедры
        </span>
      </div>
      <div className='flex items-center gap-x-4'>
        <span className='dark:text-white'>{userName}</span>
        <div className='gap-2 font-semibold text-xs flex'>
          <TheAvatar toggleScrolling={toggleScrolling} />
        </div>
      </div>
    </header>
  );
};
