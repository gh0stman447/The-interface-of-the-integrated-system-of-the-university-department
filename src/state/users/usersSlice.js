import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    // {
    //   login: 'OlegAdmin',
    //   password: 'OlegAdmin123',
    //   id: 1,
    //   firstName: 'Oleg',
    //   lastName: 'Malygin',
    //   surName: 'Romanovich',
    //   email: 'o_malyin@bk.ru',
    //   phoneNumber: '+7(962)-947-03-25',
    //   role: 'admin',
    // },
    // {
    //   login: 'User2',
    //   password: 'User2pass',
    //   id: 2,
    //   firstName: 'User 2',
    //   lastName: 'Userov 2',
    //   surName: 'Userovish 2',
    //   email: 'User_2@bk.ru',
    //   phoneNumber: '+7(962)-947-03-24',
    // },
    // {
    //   login: 'User3',
    //   password: 'User3pass',
    //   id: 3,
    //   firstName: 'User 3',
    //   lastName: 'Userov 3',
    //   surName: 'Userovish 3',
    //   email: 'User_2@bk.ru',
    //   phoneNumber: '+7(962)-947-03-23',
    // },
  ],
  currentUser: null,
  listStatus: 'ideal',
};

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
});

export const { changeUser, deleteUser, changeUserData, addUser } = usersSlice.actions;

export default usersSlice.reducer;
