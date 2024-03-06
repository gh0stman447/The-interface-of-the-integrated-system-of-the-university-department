import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ icon, children: label, id, isActive }) => {
  const role = useSelector((state) => state.role.role);

  const itemClasses = {
    isActive: 'flex items-center text-white bg-[#282828] px-2 py-2 mx-2 mx-4 rounded',
    notIsActive: 'flex items-center hover:text-white px-2 py-2 mx-2 mx-4 rounded duration-300',
  };

  return (
    <NavLink
      style={{ pointerEvents: role.toLowerCase() === 'admin' ? 'none' : 'auto' }}
      to={`/module/${id}`}
      className={isActive ? itemClasses.isActive : itemClasses.notIsActive}
      onClick={(isActive) => (isActive ? itemClasses.isActive : itemClasses.notIsActive)}
    >
      <span>{icon}</span>
      <span className='ml-4 text-sm font-semibold'>{label}</span>
    </NavLink>
  );
};
