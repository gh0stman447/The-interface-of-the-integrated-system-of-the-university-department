import { Link, useNavigate } from 'react-router-dom';
import { TheButtonLogin } from '../components/UI/TheButtonLogin';
import { useState } from 'react';
import { getUserListApi } from '../services/User/UserService';

export const Login = () => {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  const navigate = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();

    const { data } = await getUserListApi();

    const fetchedUser = data.filter(
      (fetchedUser) =>
        fetchedUser.password === user.password && fetchedUser.login === user.userName,
    );

    if (fetchedUser.length !== 0) {
      localStorage.setItem('currentUser', JSON.stringify(fetchedUser));
      navigate('/');
    }
  }

  return (
    <div className='text-white h-[100vh] flex items-center justify-center mx-10'>
      <div className='bg-slate-800 border border-slate-600 rounded-sm p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative flex-grow max-w-[500px]'>
        <h1 className='text-4xl font-bold text-center '>Войти</h1>
        <form action='#' className=''>
          <div className='flex flex-col'>
            <div className='my-4'>
              <label>Username</label>
              <input
                value={user.userName}
                onChange={(event) => setUser({ ...user, userName: event.target.value })}
                type='text'
                className='block py-2.5 text-sm bg-transparent border-b-2 border-gray-300 w-[100%] 
              dark:focus:border-blue-500 focus:outline-none rounded-md px-2'
                autocomplete='off'
              />
            </div>
            <div className='my-4'>
              <label>Your Password</label>
              <input
                value={user.password}
                onChange={(event) => setUser({ ...user, password: event.target.value })}
                type='password'
                className='block py-2.5 text-sm bg-transparent border-b-2 border-gray-300 w-[100%] 
                dark:focus:border-blue-500 focus:outline-none rounded-md px-2'
              />
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <TheButtonLogin onClick={(e) => loginHandler(e)} />
          </div>
        </form>
      </div>
    </div>
  );
};
