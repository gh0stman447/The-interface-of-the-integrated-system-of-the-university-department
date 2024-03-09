import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/button';

export const NotFoundedPage = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-full'>
      <div className='text-5xl text-white'>404</div>
      <div>
        <Link to='/'>
          <Button variant={'secondary'}>Home</Button>
        </Link>
      </div>
    </div>
  );
};
