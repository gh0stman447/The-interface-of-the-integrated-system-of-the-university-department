import React, { useEffect, useRef, useState } from 'react';
import { TheContextMenu } from './TheContextMenu';
import { Person } from './Icons/Person';
import { useSelector } from 'react-redux';

const clickPosition = { x: null, y: null };

const menuUserItems = [
  {
    label: 'Мой профиль',
  },
  {
    label: 'Выйти',
  },
];

const menuAdminItems = [
  {
    label: 'Мой профиль',
  },
  {
    label: 'Админ панель',
  },
  {
    label: 'Выйти',
  },
];
export const TheAvatar = ({ toggleScrolling }) => {
  const role = useSelector((state) => state.role.role);

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const colorClasses = isContextMenuOpen ? 'text-[#272727]' : 'text-white hover:text-[#272727]';
  const menuClasses = `bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl fixed z-20
    cursor-default whitespace-nowrap divide-y divide-[#3e3e3e]`;

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
    <a
      href='/'
      onContextMenu={openContextMenu}
      onClick={(e) => e.preventDefault()}
      className='rounded-full'
    >
      <Person className={`${colorClasses}`} />
      {isContextMenuOpen && (
        <TheContextMenu
          onClick={closeContextMenu}
          ref={contextMenuRef}
          classes={menuClasses}
          menuItems={role === 'admin'.toLocaleLowerCase() ? menuAdminItems : menuUserItems}
        />
      )}
    </a>
  );
};
