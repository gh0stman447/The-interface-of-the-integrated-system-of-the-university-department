import { STATUS } from '../../constants/status';
import {
  deleteModuleApi,
  getModuleListApi,
  postModuleApi,
  putModuleApi,
} from '../../services/modules/ModulesService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GiBookshelf } from 'react-icons/gi';
import { HiAcademicCap } from 'react-icons/hi2';
import { IoBookSharp } from 'react-icons/io5';

const initialState = {
  modules: [],
  listStatus: STATUS.ideal,
};

// export const itemsDict = new Map([
//   [1, <IoBookSharp className='h-8 w-8' />],
//   [2, <HiAcademicCap className='h-8 w-8' />],
//   [3, <GiBookshelf className='h-8 w-8' />],
// ]);

export const getModuleListAction = createAsyncThunk('module/getModuleListAction', async () => {
  const response = await getModuleListApi();
  return response.data;
});

export const postModuleAction = createAsyncThunk(
  'module/postModuleListAction',
  async (payload, { dispatch }) => {
    const { description, title } = payload;
    const newModule = {
      title,
      description,
      seoTitle: '',
      seoDescription: '',
    };

    await postModuleApi(newModule);
    dispatch(getModuleListAction());
  },
);

export const deleteModuleAction = createAsyncThunk(
  'module/deleteModuleListAction',
  async (payload, { dispatch }) => {
    await deleteModuleApi(payload);
    dispatch(getModuleListAction());
  },
);

export const updateModuleAction = createAsyncThunk(
  'module/updateModuleListAction',
  async ({ id, moduleData }, { dispatch }) => {
    await putModuleApi(id, moduleData);
    dispatch(getModuleListAction());
  },
);

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
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
