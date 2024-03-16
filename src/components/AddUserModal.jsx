import { useDispatch } from 'react-redux';
import { postUserAction } from '../state/users/usersSlice';
import { AddModal } from './UI/AddModal';

export const AddUserModal = () => {
  const dispatch = useDispatch();
  const addUserHandler = (inputData) => {
    dispatch(postUserAction(inputData));
  };

  const userFieldsConfig = [
    { label: 'Логин', name: 'login' },
    { label: 'Пароль', name: 'password' },
    { label: 'Почта', name: 'email' },
    { label: 'Фамилия', name: 'lastName' },
    { label: 'Имя', name: 'firstName' },
    { label: 'Отчество', name: 'surName' },
    { label: 'Номер договора', name: 'contractNumber' },
    { label: 'Должность', name: 'position' },
    { label: 'Статус', name: 'status' },
    // Другие поля по желанию
  ];

  return (
    <AddModal
      buttonTitle='Добавить пользователя'
      title='Добавление пользователя'
      fieldsConfig={userFieldsConfig}
      actionHandler={addUserHandler}
    />
  );
};
