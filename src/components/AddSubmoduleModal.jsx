import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';
import { addSubmoduleAction } from '../state/modulesNav/modulesSlice';

export const AddSubmoduleModal = ({ id }) => {
  const dispatch = useDispatch();
  const addSubmoduleHandler = (inputData) => {
    dispatch(addSubmoduleAction({ id, inputData }));
  };

  const submoduleFieldsConfig = [
    { label: 'Название модуля', name: 'title' },
    { label: 'Описание модуля', name: 'description' },
    { label: 'SEO метатег Title', name: 'seoTitle' },
    { label: 'SEO метатег Description', name: 'seoDescription' },
  ];

  return (
    <AddModal
      buttonTitle='Добавить модуль'
      title='Добавление модуля'
      fieldsConfig={submoduleFieldsConfig}
      actionHandler={addSubmoduleHandler}
    />
  );
};
