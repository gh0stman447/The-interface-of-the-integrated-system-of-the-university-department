import React, { useEffect, useState } from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './dialog';
import { roles } from '../../constants/roles';
import { toast } from 'sonner';

export const RoleModal = ({ selectedRole, setSelectedRole }) => {
  const [tempSelectedRole, setTempSelectedRole] = useState(selectedRole);

  const handleRoleSelection = (role) => {
    setTempSelectedRole(role);
  };

  useEffect(() => {
    setTempSelectedRole(selectedRole);
  }, [selectedRole]);

  const assignRoleHandler = () => {
    if (!tempSelectedRole) {
      alert('Вы не назначили роль');
      return;
    }
    setSelectedRole(tempSelectedRole);

    toast(
      `Роль пользователя назначена на "${tempSelectedRole}". Нажмите "Сохранить" для назначения роли`,
      {
        action: {
          label: 'Закрыть',
          onClick: () => {},
        },
      },
    );
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6'}>
        <Button variant={'secondary'}>Назначить роль</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader className='mb-6'>
          <p className='text-2xl'>Какую роль вы хотите назначить?</p>
        </DialogHeader>
        <div className='flex flex-col gap-4'>
          {Object.keys(roles).map((roleKey) => (
            <Button
              key={roleKey}
              variant='secondary'
              className={tempSelectedRole === roles[roleKey] ? 'bg-teal-600 hover:bg-teal-700' : ''}
              onClick={() => handleRoleSelection(roles[roleKey])}
            >
              {roles[roleKey]}
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={assignRoleHandler} className={'justify-center'} variant={'secondary'}>
            Назначить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
