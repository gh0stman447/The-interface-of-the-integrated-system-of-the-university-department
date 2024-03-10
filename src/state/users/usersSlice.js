import {
  deleteUserApi,
  getUserList,
  getUserListApi,
  postUser,
  postUserApi,
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
    return id;
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeUserData: (state, action) => {
      const { id, userData } = action.payload;
      const indexToReplace = state.users.findIndex((item) => item.id === id);
      state.users[indexToReplace] = userData;
    },
  },

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

    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      const filteredList = state.users.filter((user) => user.id !== action.payload);
      state.users = filteredList;
    });
  },
});

export const { changeUser, deleteUser, changeUserData, addUser } = usersSlice.actions;

export default usersSlice.reducer;
