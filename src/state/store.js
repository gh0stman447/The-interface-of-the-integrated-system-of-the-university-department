import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './role/roleSlice';
import modulesReducer from './modulesNav/modulesSlice';
import usersReducer from './users/usersSlice';

export const store = configureStore({
  reducer: {
    role: roleReducer,
    modules: modulesReducer,
    users: usersReducer,
  },
});
