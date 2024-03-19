import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/UI/button';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/UI/input';
import { Toaster } from '../components/UI/sonner';
import { toast } from 'sonner';
import { updateModuleAction, updateSubmoduleAction } from '../state/modulesNav/modulesSlice';
import { AppLoader } from '../components/UI/loader';

export const EditSubmodule = () => {
  const { id } = useParams();
  const modules = useSelector((state) => state.modules.modules);

  let modifiableSubmodule;
  let inThisModule;
  for (const module of modules) {
    modifiableSubmodule = module.submodules.find((submodule) => submodule.id == id);
    if (modifiableSubmodule) {
      inThisModule = module;
      break;
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [submoduleData, setSubmoduleData] = useState({
    ...modifiableSubmodule,
  });

  useEffect(() => {
    setSubmoduleData({
      ...modifiableSubmodule,
    });
  }, [modifiableSubmodule]);

  const saveSubmoduleHandler = (submoduleData) => {
    toast('Изменения сохранены', {
      action: {
        label: 'Закрыть',
        onClick: () => {},
      },
    });
    dispatch(
      updateSubmoduleAction({
        submoduleId: id,
        moduleData: inThisModule,
        submoduleData: submoduleData,
      }),
    );
  };

  if (!modifiableSubmodule) return <AppLoader />;

  return (
    <>
      <h1 className='text-2xl'>Изменение подмодуля "{modifiableSubmodule.title}"</h1>
      <div className='flex flex-col max-w-screen-lg space-y-6'>
        <div className='flex flex-col gap-y-2 mt-8'>
          <p>Название подмодуля</p>
          <Input
            value={submoduleData.title}
            onChange={(e) => setSubmoduleData({ ...submoduleData, title: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>Описание подмодуля</p>
          <Input
            value={submoduleData.description}
            onChange={(e) => setSubmoduleData({ ...submoduleData, description: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>SEO метатег Title</p>
          <Input
            value={submoduleData.seoTitle}
            onChange={(e) => setSubmoduleData({ ...submoduleData, seoTitle: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <p>SEO метатег Description</p>
          <Input
            value={submoduleData.seoDescription}
            onChange={(e) => setSubmoduleData({ ...submoduleData, seoDescription: e.target.value })}
          />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant={'secondary'} className='my-10 w-fit' onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Link>
          <Button
            onClick={() => saveSubmoduleHandler(submoduleData)}
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
