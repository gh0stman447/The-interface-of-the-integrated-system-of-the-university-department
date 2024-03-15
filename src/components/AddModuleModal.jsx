import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';
import { postModuleAction } from '../state/modulesNav/modulesSlice';

export const AddModuleModal = () => {
  const dispatch = useDispatch();
  const addModuleHandler = (inputData) => {
    dispatch(postModuleAction(inputData));
  };

  const moduleFieldsConfig = [
    { label: 'Название модуля', name: 'title' },
    { label: 'Описание модуля', name: 'description' },
  ];

  return (
    <AddModal
      title='Добавить модуль'
      fieldsConfig={moduleFieldsConfig}
      actionHandler={addModuleHandler}
    />
  );
};
