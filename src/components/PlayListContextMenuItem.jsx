import React from 'react';

export const PlayListContextMenuItem = ({ children: label }) => {
  return (
    <>
      <li>
        <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default'>
          {label}
        </button>
      </li>
    </>
  );
};
