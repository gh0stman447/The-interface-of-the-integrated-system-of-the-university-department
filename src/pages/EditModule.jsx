import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/UI/input';
import { Toaster } from '../components/UI/sonner';
import { toast } from 'sonner';
import { changeModuleData } from '../state/modulesNav/modulesNavSlice';

export const EditModule = () => {
  const { id } = useParams();

  const module = useSelector((state) =>
    state.modules.modules.find((module) => module.id === Number(id)),
  );

  const dispatch = useDispatch();

  const [moduleData, setModuleData] = useState({
    ...module,
  });

  const saveModuleHandler = (moduleData) => {
    toast('Изменения сохранены', {
      action: {
        label: 'Закрыть',
        onClick: () => { },
      },
    });
    dispatch(
      changeModuleData({
        id: Number(id),
        moduleData: moduleData,
      }),
    );
  };

  return (
    <>
      <h1 className='text-2xl'>Изменение модуля "{module.label}"</h1>
      <div className='flex flex-col max-w-screen-lg space-y-6'>
        <div className='flex flex-col gap-y-2 mt-8'>
          <p>Название модуля</p>
          <Input
            value={moduleData.label}
            onChange={(e) => setModuleData({ ...moduleData, label: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Описание модуля</p>
          <Input
            value={moduleData.description}
            onChange={(e) => setModuleData({ ...moduleData, description: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>SEO метатег Title</p>
          <Input
            value={moduleData.seoTitle}
            onChange={(e) => setModuleData({ ...moduleData, seoTitle: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>SEO метатег Description</p>
          <Input
            value={moduleData.seoDescription}
            onChange={(e) => setModuleData({ ...moduleData, seoDescription: e.target.value })}
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Link to='/admin/modules'>
          <Button className={'my-10 w-fit'} variant={'secondary'}>
            Назад
          </Button>
        </Link>
        <Link>
          <Button
            onClick={() => saveModuleHandler(moduleData)}
            className={'w-fit'}
            variant={'secondary'}
          >
            Сохранить
          </Button>
        </Link>
        <Toaster />
      </div>
    </>
  );
};
