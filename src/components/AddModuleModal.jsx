import { useDispatch } from 'react-redux';
import { AddModal } from './UI/AddModal';
import { addModuleAction } from '../state/modulesNav/modulesSlice';

export const AddModuleModal = () => {
  const dispatch = useDispatch();
  const addModuleHandler = (inputData) => {
    dispatch(addModuleAction(inputData));
  };

  const moduleFieldsConfig = [
    { label: 'Название деятельности', name: 'title' },
    { label: 'Описание деятельности', name: 'description' },
    { label: 'SEO метатег title', name: 'seoTitle' },
    { label: 'SEO метатег description', name: 'SeoDescription' },
  ];

  return (
    <AddModal
      showCheckboxes={true}
      buttonTitle='Добавить деятельность'
      title='Добавление деятельности'
      fieldsConfig={moduleFieldsConfig}
      actionHandler={addModuleHandler}
    />
  );
};
