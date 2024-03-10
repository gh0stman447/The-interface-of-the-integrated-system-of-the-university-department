import { STATUS } from '../../constants/status';
import { getModuleListApi } from '../../services/modules/ModulesService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GiBookshelf } from 'react-icons/gi';
import { HiAcademicCap } from 'react-icons/hi2';
import { IoBookSharp } from 'react-icons/io5';

const initialState = {
  modules: [],
  listStatus: STATUS.ideal,
};

export const itemsDict = new Map([
  [1, <IoBookSharp className='h-8 w-8' />],
  [2, <HiAcademicCap className='h-8 w-8' />],
  [3, <GiBookshelf className='h-8 w-8' />],
]);

export const getModuleListAction = createAsyncThunk('module/getModuleListAction', async () => {
  const response = await getModuleListApi();
  return response.data;
});

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    deleteModule: (state, action) => {
      state.modules = state.modules.filter((element) => element.id !== action.payload);
    },

    addModule: (state, action) => {
      const newModule = {
        id: state.modules.length + 1,
        description: action.payload.description,
        label: action.payload.title,
      };
      state.modules.push(newModule);
    },

    changeModuleData: (state, action) => {
      const { id, moduleData } = action.payload;
      const indexToReplace = state.modules.findIndex((item) => item.id == id);
      state.modules[indexToReplace] = moduleData;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getModuleListAction.fulfilled, (state, action) => {
      state.listStatus = STATUS.ideal;
      state.modules = action.payload;
    });

    builder.addCase(getModuleListAction.pending, (state) => {
      state.listStatus = STATUS.loading;
    });
  },
});

export const { modify, deleteModule, addModule, changeModuleData } = modulesSlice.actions;

export default modulesSlice.reducer;
