import React from 'react';
import { TheLogo } from './TheLogo';
import { TheNav } from './TheNav';
import { TheFooter } from './TheFooter';

export const TheSideBar = () => {
  return (
    <aside
      id='sidebar'
      className='bg-black w-[256px] text-[#b2b2b2] flex fixed flex-col lg:sticky top-0 z-30 h-screen lg:h-auto -translate-x-full
        lg:translate-x-0 target:translate-x-0 transition-transform peer overflow-hidden'
    >
      <TheLogo />
      <TheNav />
      <TheFooter />
    </aside>
  );
};
