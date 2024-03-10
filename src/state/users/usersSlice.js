import {
  deleteUserApi,
  getUserListApi,
  postUserApi,
  putUserApi,
} from '../../../src/services/User/UserService';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUS = {
  ideal: 'ideal',
  error: 'error',
  loading: 'loading',
  success: 'success',
};

const initialState = {
  users: [],
  currentUser: null,
  listStatus: STATUS.ideal,
};

export const getUserListAction = createAsyncThunk('user/getUserListAction', async () => {
  const response = await getUserListApi();
  return response.data;
});

export const postUserAction = createAsyncThunk(
  'user/postUserAction',
  async (payload, { dispatch }) => {
    const { firstName, lastName, surName } = payload;

    const newUser = {
      login: '',
      password: '',
      email: '',
      phoneNumber: '',
      role: 'user',
      firstName,
      lastName,
      surName,
    };

    await postUserApi(newUser);
    dispatch(getUserListAction());
  },
);

export const deleteUserAction = createAsyncThunk(
  'user/deleteUserAction',
  async (id, { dispatch }) => {
    await deleteUserApi(id);
    dispatch(getUserListAction());
  },
);

export const updateUserAction = createAsyncThunk(
  'user/updateUserAction',
  async ({ id, userData }, { dispatch }) => {
    await putUserApi(id, userData);
    dispatch(getUserListAction());
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserListAction.pending, (state) => {
      state.listStatus = STATUS.loading;
    });

    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      state.listStatus = STATUS.ideal;
      state.users = action.payload;
    });

    builder.addCase(getUserListAction.rejected, (state) => {
      state.listStatus = STATUS.error;
    });
  },
});

export const { changeUser, deleteUser, changeUserData, addUser } = usersSlice.actions;

export default usersSlice.reducer;
