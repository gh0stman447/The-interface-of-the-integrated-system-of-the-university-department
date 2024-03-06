import React from 'react';
import { FooterListItem } from './FooterListItem';

export const TheFooterList = () => {
  return (
    <ul className='flex flex-col gap-2'>
      {['Cookies', 'Privacy'].map((label) => (
        <FooterListItem key={label}>{label}</FooterListItem>
      ))}
    </ul>
  );
};
