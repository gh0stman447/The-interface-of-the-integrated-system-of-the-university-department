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
      <h1 className='text-2xl mb-8'>Информация о модуле</h1>
      <div className='flex flex-col gap-4'>
        <p>Название: {submodule.title}</p>
        <p>Описание: {submodule.description}</p>
        <p>SEO метатег title: {submodule.seoTitle}</p>
        <p>SEO метатег description: {submodule.seoDescription}</p>
      </div>
      <Link to={`/admin/submodules/${_module.id}`}>
        <Button variant={'secondary'} className='mt-10'>
          Назад
        </Button>
      </Link>
    </>
  );
};
