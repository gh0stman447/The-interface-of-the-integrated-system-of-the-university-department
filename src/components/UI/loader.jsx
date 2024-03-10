import { Loader } from 'lucide-react';
import React from 'react';

export const AppLoader = () => {
  return (
    <span className='text-3xl flex items-center justify-center '>
      <Loader className='w-10 h-10 animate-ping' />
    </span>
  );
};
