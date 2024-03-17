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

export const TheNav = () => {
  const navItems = useSelector((state) => state.modules.modules);
  const [{ role }] = JSON.parse(localStorage.getItem('currentUser'));

  if (navItems.status === STATUS.loading) return <AppLoader />;

  return (
    <nav className='overflow-auto'>
      <Accordion type='single' collapsible>
        {navItems.map(({ title, id, submodules }, i) => (
          <AccordionItem value={`item-${i}`} key={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            {submodules?.map(({ title, id }) => (
              <AccordionContent key={id}>
                <NavItem
                  role={role}
                  // icon={id > itemsDict.size ? itemsDict.get(itemsDict.size) : itemsDict.get(id)}
                  id={id}
                >
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
