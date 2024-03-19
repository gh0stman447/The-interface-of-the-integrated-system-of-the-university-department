import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';
import { addModuleAction } from '../state/modulesNav/modulesSlice';

export const AddModuleModal = () => {
  const dispatch = useDispatch();
  const addModuleHandler = (inputData) => {
    dispatch(addModuleAction(inputData));
  };

  const moduleFieldsConfig = [
    { label: 'Название модуля', name: 'title' },
    { label: 'Описание модуля', name: 'description' },
  ];

  return (
    <AddModal
      buttonTitle='Добавить модуль'
      title='Добавление модуля'
      fieldsConfig={moduleFieldsConfig}
      actionHandler={addModuleHandler}
    />
  );
};