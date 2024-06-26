import React, { useEffect, useRef, useState } from 'react';
import { TheContextMenu } from './TheContextMenu';
import { Person } from './Icons/Person';
import { menuOptions } from '../constants/menuOptions';
import { roles } from '../constants/roles';
import { usePersistantCurrentUser } from './TheNav';

const clickPosition = { x: null, y: null };

const menuUserItems = [
  {
    label: menuOptions.profile,
  },
  {
    label: menuOptions.exit,
  },
];

const menuAdminItems = [
  {
    label: menuOptions.profile,
  },
  {
    label: menuOptions.adminPanel,
  },
  {
    label: menuOptions.exit,
  },
];

export const TheAvatar = ({ toggleScrolling }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const colorClasses = isContextMenuOpen
    ? 'text-stone-400 dark:text-[#272727]'
    : 'dark:text-white hover:text-stone-400 dark:hover:text-[#272727]';

  const menuClasses = `bg-white dark:bg-[#282828] dark:text-[#eaeaea] text-sm p-1 rounded shadow-xl fixed z-20
  cursor-default whitespace-nowrap divide-y dark:divide-[#3e3e3e]`;

  function updateContextMenuHorizontalPosition() {
    const menuWidth = contextMenuRef.current.offsetWidth;
    const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;

    contextMenuRef.current.style.left = shouldMoveLeft
      ? `${clickPosition.x - menuWidth}px`
      : `${clickPosition.x}px`;
  }

  function updateContextMenuVerticalPosition() {
    const menuHeight = contextMenuRef.current.offsetHeight;
    const shouldMoveTop = menuHeight > window.innerHeight - clickPosition.y;

    contextMenuRef.current.style.top = shouldMoveTop
      ? `${clickPosition.y - menuHeight}px`
      : `${clickPosition.y}px`;
  }

  function updateContextMenuPosition() {
    updateContextMenuVerticalPosition();
    updateContextMenuHorizontalPosition();
  }

  useEffect(() => {
    toggleScrolling(!isContextMenuOpen);
    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  });

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway(event) {
      if (!contextMenuRef.current.contains(event.target) && closeContextMenu) {
        closeContextMenu();
      }
    }

    function handleEsc(event) {
      if (event.keyCode === 27) {
        closeContextMenu();
      }
    }

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('keydown', handleEsc);
    };
  });

  const role = usePersistantCurrentUser()?.role;
  if (!role) return null;

  const openContextMenu = (event) => {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;

    setIsContextMenuOpen(true);
  };

  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }

  return (
    <a href='/' onClick={openContextMenu} className='rounded-full'>
      <Person className={`${colorClasses}`} />
      {isContextMenuOpen && (
        <TheContextMenu
          onClick={closeContextMenu}
          ref={contextMenuRef}
          classes={menuClasses}
          menuItems={role === roles.admin ? menuAdminItems : menuUserItems}
        />
      )}
    </a>
  );
};
