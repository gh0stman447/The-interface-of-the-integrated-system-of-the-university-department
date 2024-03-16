import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';
import { addSubmoduleAction } from '../state/modulesNav/modulesSlice';

export const AddSubmoduleModal = ({ id }) => {
  const dispatch = useDispatch();
  const addSubmoduleHandler = (inputData) => {
    dispatch(addSubmoduleAction({ id, inputData }));
  };

  const submoduleFieldsConfig = [
    { label: 'Название подмодуля', name: 'title' },
    { label: 'Описание подмодуля', name: 'description' },
  ];

  return (
    <AddModal
      buttonTitle='Добавить подмодуль'
      title='Добавление подмодуля'
      fieldsConfig={submoduleFieldsConfig}
      actionHandler={addSubmoduleHandler}
    />
  );
};
