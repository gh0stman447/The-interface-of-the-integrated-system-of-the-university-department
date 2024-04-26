import React from 'react';
import { NavLink } from 'react-router-dom';
import { roles } from '../constants/roles';

export const NavItem = ({ children: title, id, role }) => {
  const itemClasses = {
    isActive: 'flex items-center bg-[#111111]/15 dark:bg-[#282828] px-2 py-2 mx-2 mx-4 rounded',
    notIsActive:
      'flex items-center hover:bg-[#111111]/5 dark:hover:bg-[#28282880] dark:text-white px-2 py-2 mx-2 mx-4 rounded duration-300',
  };

  return (
    <NavLink
      style={{ pointerEvents: role === roles.admin ? 'none' : 'auto' }}
      to={`/submodule/${id}`}
      className={({ isActive }) => (isActive ? itemClasses.isActive : itemClasses.notIsActive)}
    >
      <span className='font-semibold'>{title}</span>
    </NavLink>
  );
};
