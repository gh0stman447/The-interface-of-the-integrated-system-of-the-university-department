import { useNavigate } from 'react-router-dom';
import { TheButtonLogin } from '../components/UI/TheButtonLogin';
import { getUserListApi } from '../services/User/UserService';
import { Toaster, toast } from 'sonner';
import { useInput } from '../hooks/validation/useInput';

export const Login = () => {
  const navigate = useNavigate();

  const userName = useInput('', { isEmpty: true, minLength: 3, maxLength: 20 });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 25 });

  async function loginHandler(e) {
    e.preventDefault();

    const { data } = await getUserListApi();

    const fetchedUser = data.filter(
      (fetchedUser) =>
        fetchedUser.password === password.value && fetchedUser.login === userName.value,
    );

    if (fetchedUser.length !== 0) {
      localStorage.setItem('currentUser', JSON.stringify(fetchedUser));
      navigate('/');
    } else {
      toast('Пользователь не найден.', {
        action: {
          label: 'Закрыть',
          onClick: () => {},
        },
      });
    }
  }

  return (
    <div className=' dark:text-white h-[100vh] flex items-center justify-center mx-10'>
      <div className='bg-stone-200 dark:bg-slate-800 border border-slate-600 rounded-sm p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative flex-grow max-w-[500px]'>
        <h1 className='text-4xl font-bold text-center'>Авторизация</h1>
        <form action='#' className=''>
          <div className='flex flex-col'>
            <div className='my-4'>
              {userName.isDirty && userName.isEmpty && (
                <div className='text-red-500'>Поле не может быть пустым</div>
              )}
              {userName.isDirty && userName.minLengthError && (
                <div className='text-red-500'>Некорректная длина</div>
              )}
              {userName.isDirty && userName.maxLengthError && (
                <div className='text-red-500'>Превышена допустимая длина</div>
              )}
              <input
                onBlur={(e) => userName.onBlur(e)}
                name='login'
                placeholder='Введите логин...'
                value={userName.value}
                onChange={(e) => userName.onChange(e)}
                type='text'
                className='block py-2.5 text-sm bg-transparent border-b-2 w-[100%] 
              focus:border-blue-500 focus:outline-none rounded-md px-2'
                autocomplete='off'
              />
            </div>
            <div className='my-4'>
              {password.isDirty && password.isEmpty && (
                <div className='text-red-500'>Поле не может быть пустым</div>
              )}
              {password.isDirty && password.minLengthError && (
                <div className='text-red-500'>Некорректная длина</div>
              )}
              {password.isDirty && password.maxLengthError && (
                <div className='text-red-500'>Слишком длинный пароль</div>
              )}
              <input
                onBlur={(e) => password.onBlur(e)}
                name='password'
                placeholder='Введите пароль...'
                value={password.value}
                onChange={(e) => password.onChange(e)}
                type='password'
                className='block py-2.5 text-sm bg-transparent border-b-2 w-[100%] 
                dark:focus:border-blue-500 focus:outline-none rounded-md px-2'
              />
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <TheButtonLogin
              disabled={!password.isInputValid || !userName.isInputValid}
              onClick={(e) => loginHandler(e)}
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};
