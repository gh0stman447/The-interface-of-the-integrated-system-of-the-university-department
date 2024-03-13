import { roles } from '../../constants/roles';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: roles.user,
};

const roleslice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    // assignRole: (state, action) => {
    //   action.payload === roles.admin ? (state.role = roles.admin) : (state.role = roles.user);
    // },
  },
});

// export const { assignRole } = roleslice.actions;

export default roleslice.reducer;
