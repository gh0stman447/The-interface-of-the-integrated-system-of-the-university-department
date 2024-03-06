import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Menu = () => {
  return (
    <a href='#sidebar' className='text-[#969696] p-1 inline-block lg:hidden -ml-1.5'>
      <RxHamburgerMenu className='w-7 h-7' />
    </a>
  );
};
