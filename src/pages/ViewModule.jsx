import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useSelector } from 'react-redux';
import { AppLoader } from '../components/UI/loader';

export const ViewModule = () => {
  const { id } = useParams();

  const module = useSelector((state) => state.modules.modules.find((module) => module.id == id));

  if (!module) return <AppLoader />;
  return (
    <div>
      <h1 className='text-2xl mb-8'>Информация о деятельности</h1>
      <div className='flex flex-col gap-y-4'>
        <p>Название деятельности: {module.title}</p>
        <p>Описание деятельности: {module.description}</p>
        <p>SEO метатег title: {module.seoTitle}</p>
        <p>SEO метатег description: {module.seoDescription}</p>
        <p>Количество модулей: {module.submodules.length}</p>
        {module.submodules.length ? (
          <p>
            Модули:
            {module.submodules.map((submodule) => (
              <span key={submodule.id}> {submodule.title},</span>
            ))}
          </p>
        ) : (
          ''
        )}
      </div>
      <Link to='/admin/modules'>
        <Button variant={'secondary'} className='mt-10'>
          Назад
        </Button>
      </Link>
    </div>
  );
};
