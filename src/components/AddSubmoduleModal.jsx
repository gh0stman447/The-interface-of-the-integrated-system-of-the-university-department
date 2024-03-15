import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';

export const AddSubmoduleModal = () => {
  const dispatch = useDispatch();
  const addSubmoduleHandler = (inputData) => {
    // dispatch(postSubmoduleAction(inputData));
  };

  const submoduleFieldsConfig = [
    { label: 'Название подмодуля', name: 'title' },
    { label: 'Описание подмодуля', name: 'description' },
  ];

  return (
    <AddModal
      title='Добавлить подмодуль'
      fieldsConfig={submoduleFieldsConfig}
      actionHandler={addSubmoduleHandler}
    />
  );
};
