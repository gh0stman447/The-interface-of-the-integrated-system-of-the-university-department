import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './modulesNav/modulesSlice';
import usersReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    users: usersReducer,
  },
});
