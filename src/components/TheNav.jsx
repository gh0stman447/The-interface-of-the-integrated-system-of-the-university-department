import { NavItem } from './NavItem';
import { useSelector } from 'react-redux';
import { itemsDict } from '../state/modulesNav/modulesNavSlice';

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);

  return (
    <nav className='overflow-auto'>
      {navItems.map(({ label, id, isActive }) => (
        <NavItem
          key={label}
          icon={id > itemsDict.size ? itemsDict.get(itemsDict.size) : itemsDict.get(id)}
          id={id}
          isActive={isActive}
        >
          {label}
        </NavItem>
      ))}
    </nav>
  );
};
