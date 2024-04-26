import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';

export const SubModule = () => {
  const { id } = useParams();
  return (
    <div>
      <div className='w-full max-w-5xl border border-black dark:border-white/50 pt-4 pl-4 h-[75vh] mb-4'>
        Module {id}
      </div>
      <Link to='/'>
        <Button variant={'secondary'}>На главную</Button>
      </Link>
    </div>
  );
};
