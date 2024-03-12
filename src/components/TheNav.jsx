import { NavItem } from './NavItem';
import { useDispatch, useSelector } from 'react-redux';
import { getModuleListAction, itemsDict } from '../state/modulesNav/modulesSlice';
import { useEffect } from 'react';
import { AppLoader } from './UI/loader';
import { STATUS } from '../constants/status';

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);
  const [{ role }] = JSON.parse(localStorage.getItem('currentUser'));

  if (navItems.status === STATUS.loading) return <AppLoader />;

  return (
    <nav className='overflow-auto'>
      {navItems.map(({ title, id }) => (
        <NavItem
          role={role} //убрать
          key={title}
          // icon={id > itemsDict.size ? itemsDict.get(itemsDict.size) : itemsDict.get(id)}
          id={id}
        >
          {title}
        </NavItem>
      ))}
    </nav>
  );
};
