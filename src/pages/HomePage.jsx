import React from 'react';
import { TheSideBar } from '../components/TheSideBar';
import { TheHeader } from '../components/TheHeader';
import { TheMain } from '../components/TheMain';
import { TheSideBarOverlay } from '../components/TheSideBarOverlay';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getModuleListAction } from '../state/modulesNav/modulesSlice';
import { assignCurrentUser, getUserListAction } from '../state/users/usersSlice';
import { assignRole } from '../state/role/roleSlice';

export const HomePage = () => {
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;
    event.preventDefault();
    event.stopPropagation();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModuleListAction());
    dispatch(getUserListAction());
  }, []);

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener('wheel', handleScrolling);

    return () => contentWrapper.removeEventListener('wheel', handleScrolling);
  }, []);

  useEffect(() => {
    const currentUserJson = localStorage.getItem('currentUser');
    const [currentUser] = JSON.parse(currentUserJson);
    dispatch(assignCurrentUser(currentUser));
  }, []);

  return (
    <>
      <div className='flex overflow-auto flex-grow'>
        <TheSideBar />
        <TheSideBarOverlay />
        <div className='flex-1 overflow-auto' ref={contentWrapperRef}>
          <TheHeader toggleScrolling={toggleScrolling} />
          <TheMain />
        </div>
      </div>
    </>
  );
};
