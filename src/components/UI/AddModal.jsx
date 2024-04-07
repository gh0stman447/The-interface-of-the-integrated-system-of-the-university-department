import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { roles } from '../../../src/constants/roles';

export const AddModal = ({
  buttonTitle,
  title,
  fieldsConfig,
  actionHandler,
  showCheckboxes,
  showRadioButtons,
}) => {
  const [inputData, setInputData] = useState({});
  const [selectedRoles, setSelectedRoles] = useState({});
  const [selectedRole, setSelectedRole] = useState('');

  const handleAction = () => {
    actionHandler({ ...inputData, role: selectedRole });
    setInputData({});
    setSelectedRoles({});
    setSelectedRole('');
  };

  const handleInputChange = (e, fieldName) => {
    setInputData({ ...inputData, [fieldName]: e.target.value });
  };

  const handleRoleChange = (roleKey, checked) => {
    setSelectedRoles({ ...selectedRoles, [roleKey]: checked });
  };

  return (
    <Dialog>
      <DialogTrigger className={'my-6'}>
        <Button variant={'secondary'}>{buttonTitle}</Button>
      </DialogTrigger>
      <DialogContent className={'bg-[#121212] text-white overflow-y-scroll max-h-screen'}>
        <DialogHeader>
          <p className='text-2xl'>{title}</p>
        </DialogHeader>
        <div className='overflow-y-auto'>
          <div className='grid gap-4 py-4'>
            {fieldsConfig.map((field, index) => (
              <div key={index} className='flex items-center gap-4'>
                <p className='text-left w-1/2'>{field.label}</p>
                <Input
                  value={inputData[field.name]}
                  onChange={(e) => handleInputChange(e, field.name)}
                  className='col-span-3'
                />
              </div>
            ))}
          </div>
          {showCheckboxes && (
            <div>
              <p className='text-xl mb-2'>Настройка доступа:</p>
              {Object.entries(roles).map(([roleKey, roleLabel]) => {
                if (roleLabel !== roles.admin)
                  return (
                    <div key={roleKey}>
                      <input
                        type='checkbox'
                        checked={selectedRoles[roleKey]}
                        onChange={(e) => handleRoleChange(roleKey, e.target.checked)}
                      />
                      <label className='ml-2'>{roleLabel}</label>
                    </div>
                  );
              })}
            </div>
          )}
          {showRadioButtons && (
            <div>
              <p className='text-xl mb-2'>Назначение роли пользователю:</p>
              {Object.entries(roles).map(([roleKey, roleLabel]) => (
                <div key={roleKey}>
                  <input
                    type='radio'
                    checked={selectedRole === roleLabel}
                    onChange={() => setSelectedRole(roleLabel)}
                  />
                  <label className='ml-2'>{roleLabel}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button onClick={handleAction} className={'justify-center'} variant={'secondary'}>
              Добавить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
