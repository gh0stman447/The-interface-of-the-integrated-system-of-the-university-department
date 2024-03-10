import { NavItem } from './NavItem';
import { useDispatch, useSelector } from 'react-redux';
import { getModuleListAction, itemsDict } from '../state/modulesNav/modulesNavSlice';
import { useEffect } from 'react';

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);

  

  return (
    <nav className='overflow-auto'>
      {navItems.map(({ label, id }) => (
        <NavItem
          key={label}
          icon={id > itemsDict.size ? itemsDict.get(itemsDict.size) : itemsDict.get(id)}
          id={id}
        >
          {label}
        </NavItem>
      ))}
    </nav>
  );
};
