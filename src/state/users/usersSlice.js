import { getUserList, postUser } from '../../../src/services/User/UserService';
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
  const response = await getUserList();
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
      firstName: firstName,
      lastName: lastName,
      surName: surName,
    };

    await postUser(newUser);
    dispatch(getUserListAction());
  },
);

export const deleteUserAction = createAsyncThunk(
  'user/deleteUserAction',
  async (/**payload, { dispatch } */) => {
    // await deleteUser(payload.id);
    // dispatch(getUserListAction());
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeUser: (state, action) => {
      const { id, user } = action.payload;
      const indexToReplace = state.users.findIndex((user) => user.id === id);
      if (indexToReplace === -1) return;
      state.users[indexToReplace] = {
        ...state.users[indexToReplace],
        ...user,
      };
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    changeUserData: (state, action) => {
      const { id, userData } = action.payload;
      const indexToReplace = state.users.findIndex((item) => item.id === id);
      state.users[indexToReplace] = userData;
    },

    addUser: (state, action) => {
      const { firstName, lastName, surName } = action.payload;

      const newUser = {
        id: state.users.length + 1,
        firstName: firstName,
        lastName: lastName,
        surName: surName,
      };

      state.users.push(newUser);
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
  },
});

export const { changeUser, deleteUser, changeUserData, addUser } = usersSlice.actions;

export default usersSlice.reducer;
