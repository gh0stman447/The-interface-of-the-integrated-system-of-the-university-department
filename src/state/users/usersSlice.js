import { STATUS } from '../../constants/status';
import {
  deleteUserApi,
  getUserListApi,
  postUserApi,
  putUserApi,
} from '../../../src/services/User/UserService';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  status: null,
  error: null,
};

export const getUserListAction = createAsyncThunk(
  'user/getUserListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserListApi();
      if (response.status !== 200) {
        throw new Error('ServerError!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const postUserAction = createAsyncThunk(
  'user/postUserAction',
  async (payload, { dispatch }) => {
    const newUser = {
      ...payload,
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
    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      state.status = STATUS.success;
      state.users = action.payload;
    });

    builder.addCase(getUserListAction.pending, (state) => {
      state.status = STATUS.loading;
    });

    builder.addCase(getUserListAction.rejected, (state, action) => {
      state.status = STATUS.error;
      state.error = action.payload;
    });
  },
});

export const { changeUser, deleteUser, changeUserData, addUser } = usersSlice.actions;

export default usersSlice.reducer;
