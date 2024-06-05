import { NavItem } from './NavItem';
import { useSelector } from 'react-redux';
import { AppLoader } from './UI/loader';
import { STATUS } from '../constants/status';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/UI/accordion';
import { roles } from '../constants/roles';
import { useEffect, useState } from 'react';

// todo: mov to lib
const getRoleFromPersistant = () => {
  const currentUser = localStorage.getItem('currentUser');

  if (!currentUser) return null;

  try {
    const user = JSON.parse(currentUser);
    return user?.[0].role ?? null;
  } catch (e) {
    console.warn('Error occured in getRoleFromPersistant: ', e);
    return null;
  }
};

class PersistantValue {
  /**
   * make control of value that store in some persistant storage
   * @param {Storage} storage entity that realize storage interface
   * @param {string} key key for value
   */
  constructor(storage = typeof window !== 'undefined' ? localStorage : {}, key) {
    this.storage = storage;
    this.key = key;
  }

  async getValue() {
    try {
      return JSON.parse(this.storage.getItem?.(this.key));
    } catch (e) {
      return null;
    }
  }

  async setValue(value) {
    this.storage.setItem?.(this.key, JSON.stringify(value));
  }
}

class CurrentUserPersistant extends PersistantValue {
  constructor(storage) {
    super(storage, 'currentUser');
  }
}

export const usePersistantCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    (async () => {
      const persistantCurrentUser = new CurrentUserPersistant();
      const currentUser = await persistantCurrentUser.getValue();
      setCurrentUser(currentUser?.[0] ?? null);
    })();
  }, []);
  return currentUser;
};

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);
  const role = usePersistantCurrentUser()?.role;

  if (!role) {
    return <AppLoader />;
  }

  const isAdmin = role === roles.admin;

  if (navItems.status === STATUS.loading || navItems.status === null) return <AppLoader />;

  let itemsToDisplay = isAdmin ? navItems : filterItemsForRole(navItems, role);

  return (
    <nav className='overflow-auto border-t border-slate-400 dark:border-slate-600'>
      <Accordion type='single' collapsible>
        {itemsToDisplay.map(({ title, id, submodules }, i) => (
          <AccordionItem value={`item-${i}`} key={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            {submodules.map(({ title, id }) => (
              <AccordionContent key={id}>
                <NavItem role={role} id={id}>
                  {title}
                </NavItem>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

const filterItemsForRole = (navItems, userRole) => {
  const roleEng = Object.keys(roles).find((key) => roles[key] === userRole);
  return navItems.filter((navItem) => {
    const { roleAccess } = navItem;
    if (roleAccess) return roleAccess[roleEng];
    return null;
  });
};
