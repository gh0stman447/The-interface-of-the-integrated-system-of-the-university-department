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

export const AddModal = ({ buttonTitle, title, fieldsConfig, actionHandler, showCheckboxes }) => {
  const [inputData, setInputData] = useState({});
  const [selectedRoles, setSelectedRoles] = useState({});

  const handleAction = () => {
    actionHandler({ ...inputData, roles: selectedRoles });
    setInputData({});
    setSelectedRoles({});
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
      <DialogContent className={'bg-[#121212] text-white'}>
        <DialogHeader>
          <p className='text-2xl'>{title}</p>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          {fieldsConfig.map((field, index) => (
            <div key={index} className='grid grid-cols-4 items-center gap-4'>
              <p className='text-right'>{field.label}</p>
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
            <p className='text-xl'>Настройка доступа:</p>
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
