import React from 'react';

export const TheSideBarOverlay = () => {
  return (
    <a
      href='#'
      className='fixed inset-0 bg-black z-20 cursor-default opacity-0 peer-target:opacity-50 lg:hidden transition-opacity pointer-events-none peer-target:pointer-events-auto'
    ></a>
  );
};
