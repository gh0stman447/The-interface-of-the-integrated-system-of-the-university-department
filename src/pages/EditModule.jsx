import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/UI/input';
import { Toaster } from '../components/UI/sonner';
import { toast } from 'sonner';
import { updateModuleAction } from '../state/modulesNav/modulesSlice';
import { AppLoader } from '../components/UI/loader';
import { roles } from '../constants/roles';

export const EditModule = () => {
  const { id } = useParams();
  const module = useSelector((state) => state.modules.modules.find((module) => module.id == id));

  const dispatch = useDispatch();

  const [moduleData, setModuleData] = useState({
    ...module,
  });

  useEffect(() => {
    setModuleData({
      ...module,
    });
  }, [module]);

  const saveModuleHandler = (moduleData) => {
    toast('Изменения сохранены', {
      action: {
        label: 'Закрыть',
        onClick: () => {},
      },
    });
    dispatch(
      updateModuleAction({
        id: id,
        moduleData: moduleData,
      }),
    );
  };

  if (!module) return <AppLoader />;

  return (
    <>
      <h1 className='text-2xl'>Изменение деятельности "{module.title}"</h1>
      <div className='flex flex-col max-w-screen-lg space-y-6'>
        <div className='flex flex-col gap-y-2 mt-8'>
          <p>Название деятельности</p>
          <Input
            value={moduleData.title}
            onChange={(e) => setModuleData({ ...moduleData, title: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Описание деятельности</p>
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
      <p className='text-xl mt-8 mb-2'>Настройка доступа:</p>
      {Object.entries(roles).map(([roleKey, roleLabel]) => {
        if (roleLabel !== roles.admin) {
          return (
            <div key={roleLabel} className='mb-2 flex gap-2'>
              <input
                type='checkbox'
                checked={moduleData.roleAccess && moduleData.roleAccess[roleKey]}
                onChange={(e) =>
                  setModuleData({
                    ...moduleData,
                    roleAccess: {
                      ...moduleData.roleAccess,
                      [roleKey]: e.target.checked,
                    },
                  })
                }
              ></input>
              <label>{roleLabel}</label>
            </div>
          );
        }
      })}
      <div className='flex items-center gap-4'>
        <Link to='/admin/modules'>
          <Button variant={'secondary'} className='my-10 w-fit'>
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
