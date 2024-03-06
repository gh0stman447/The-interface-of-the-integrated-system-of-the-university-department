import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: 'user',
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    assignRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { assignRole } = roleSlice.actions;

export default roleSlice.reducer;
