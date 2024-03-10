import { createSlice } from '@reduxjs/toolkit';
import { Stethoscope } from 'lucide-react';
import { CiHeart, CiHome, CiSearch } from 'react-icons/ci';
import { GiBookshelf } from 'react-icons/gi';
import { GoPlus } from 'react-icons/go';
import { HiAcademicCap } from 'react-icons/hi2';
import { IoBookSharp } from 'react-icons/io5';

const initialState = {
  modules: [
    {
      id: 1,
      label: 'Модуль по управлению организацией учебной деятельности',
      isActive: false,
      description: 'Я модуль',
      seoTitle: '',
      seoDescription: '',
    },
    {
      id: 2,
      label: 'Модуль по управлению научными работами',
      isActive: false,
      description: 'Я модуль',
      seoTitle: '',
      seoDescription: '',
    },
    {
      id: 3,
      label: 'Модуль по управлению методическими работами',
      isActive: false,
      description: 'Я модуль',
      seoTitle: '',
      seoDescription: '',
    },
    {
      id: 4,
      label: 'Модуль 4',
      isActive: false,
      description: 'Я модуль',
      seoTitle: '',
      seoDescription: '',
    },
    {
      id: 5,
      label: 'Модуль 5',
      isActive: false,
      description: 'Я модуль',
      seoTitle: '',
      seoDescription: '',
    },
  ],
};

export const itemsDict = new Map([
  [1, <IoBookSharp className='h-8 w-8' />],
  [2, <HiAcademicCap className='h-8 w-8' />],
  [3, <GiBookshelf className='h-8 w-8' />],
]);

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
      const indexToReplace = state.modules.findIndex((item) => item.id === id);
      state.modules[indexToReplace] = moduleData;
    },
  },
});

export const { modify, deleteModule, addModule, changeModuleData } = modulesSlice.actions;

export default modulesSlice.reducer;
