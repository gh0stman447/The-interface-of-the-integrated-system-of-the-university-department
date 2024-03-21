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
  ];

  return (
    <AddModal
      buttonTitle='Добавить модуля'
      title='Добавление модуля'
      fieldsConfig={submoduleFieldsConfig}
      actionHandler={addSubmoduleHandler}
    />
  );
};
