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
  status: null,
  error: null,
};

// export const itemsDict = new Map([
//   [1, <IoBookSharp className='h-8 w-8' />],
//   [2, <HiAcademicCap className='h-8 w-8' />],
//   [3, <GiBookshelf className='h-8 w-8' />],
// ]);

export const getModuleListAction = createAsyncThunk(
  'module/getModuleListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getModuleListApi();
      if (response.status !== 200) {
        throw new Error('ServerError!');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addModuleAction = createAsyncThunk(
  'module/postModuleListAction',
  async (payload, { dispatch }) => {
    const { description, title } = payload;
    const newModule = {
      title,
      description,
      seoTitle: '',
      seoDescription: '',
      submodules: [],
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

export const addSubmoduleAction = createAsyncThunk(
  'module/updateModuleListAction',
  async ({ id, inputData }, { dispatch, getState }) => {
    const { modules } = getState().modules;

    const allSubmodules = modules.reduce((acc, module) => {
      acc.push(...module.submodules);
      return acc;
    }, []);
    
    const newSubmoduleId =
      allSubmodules.length > 0
        ? Math.max(...allSubmodules.map((submodule) => submodule.id)) + 1
        : 1;

    const findedModule = modules.find((module) => module.id == id);

    const updatedModule = {
      ...findedModule,
      submodules: [
        ...findedModule.submodules,
        {
          ...inputData,
          id: allSubmodules.length > 0 ? newSubmoduleId : 1,
          seoTitle: '',
          seoDescription: '',
        },
      ],
    };

    await putModuleApi(id, updatedModule);
    dispatch(getModuleListAction());
  },
);

export const deleteSubmoduleAction = createAsyncThunk(
  'module/updateModuleListAction',
  async ({ submoduleId, moduleId }, { dispatch, getState }) => {
    const { modules } = getState().modules;

    const module = modules.find((module) => module.id == moduleId);

    const submodules = module.submodules.filter((submodule) => submodule.id != submoduleId);

    const updatedModule = {
      ...module,
      submodules: submodules,
    };

    await putModuleApi(moduleId, updatedModule);
    dispatch(getModuleListAction());
  },
);
const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getModuleListAction.fulfilled, (state, action) => {
      state.modules = action.payload;
      state.status = STATUS.success;
    });

    builder.addCase(getModuleListAction.pending, (state) => {
      state.status = STATUS.loading;
    });

    builder.addCase(getModuleListAction.rejected, (state, action) => {
      state.error = action.payload;
      state.status = STATUS.error;
    });
  },
});

export const { modify, deleteModule, addModule, changeModuleData } = modulesSlice.actions;

export default modulesSlice.reducer;
