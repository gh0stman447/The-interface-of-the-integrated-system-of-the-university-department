import React from 'react';
import { TheLogo } from './TheLogo';
import { TheNav } from './TheNav';
import { TheFooter } from './TheFooter';

export const TheSideBar = () => {
  return (
    <aside
      id='sidebar'
      className='bg-gray-100 dark:bg-black w-[256px] text-[#121212] dark:text-white  flex fixed flex-col lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full
        lg:translate-x-0 target:translate-x-0 transition-transform peer overflow-hidden border-r border-r-slate-400 dark:border-r-slate-600'
    >
      <TheLogo />
      <TheNav />
      <TheFooter />
    </aside>
  );
};
