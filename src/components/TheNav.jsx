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

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);
  const [{ role }] = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = role === roles.admin;

  if (navItems.status === STATUS.loading || navItems.status === null) return <AppLoader />;

  let itemsToDisplay = isAdmin ? navItems : filterItemsForRole(navItems, role);

  return (
    <nav className='overflow-auto'>
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
