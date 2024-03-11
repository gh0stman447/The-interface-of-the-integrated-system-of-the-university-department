import { createSlice } from '@reduxjs/toolkit';

const ROLES = {
  admin: 'admin',
  user: 'user',
};

const initialState = {
  role: 'user',
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    assignRole: (state, action) => {
      action.payload === ROLES.admin ? (state.role = ROLES.admin) : (state.role = ROLES.user);
    },
  },
});

export const { assignRole } = roleSlice.actions;

export default roleSlice.reducer;
