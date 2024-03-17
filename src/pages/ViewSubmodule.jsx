import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useSelector } from 'react-redux';
import { AppLoader } from '../components/UI/loader';

export const ViewSubmodule = () => {
  const { id } = useParams();

  const modules = useSelector((state) => state.modules.modules);

  if (modules.length === 0) return <AppLoader />;

  let submodule,
    _module = null;

  for (const module of modules) {
    submodule = module.submodules.find((submodule) => submodule.id == id);
    if (submodule) {
      _module = module;
      break;
    }
  }

  return (
    <>
      <div>Submodule "{submodule.title}"</div>
      <Link to={`/admin/submodules/${_module.id}`}>
        <Button variant={'secondary'} className='mt-10'>
          Назад
        </Button>
      </Link>
    </>
  );
};
