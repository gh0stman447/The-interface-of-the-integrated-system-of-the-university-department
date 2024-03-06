import React from 'react';

export const TheButtonLogin = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='text-[#2e2e2e] bg-white py-3 px-[17px] sm:px-9 rounded-full uppercase leading-5 tracking-widest hover:scale-105'
    >
      Войти
    </button>
  );
};
