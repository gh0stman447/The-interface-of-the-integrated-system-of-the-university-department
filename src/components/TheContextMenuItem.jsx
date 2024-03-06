import { useNavigate } from 'react-router-dom';

export const TheContextMenuItem = ({ children: label, onClick: closeContextMenu }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    closeContextMenu();

    if (label.toLowerCase() === 'выйти') {
      navigate('/auth');
    } else if (label.toLowerCase() === 'админ панель') {
      navigate('/admin');
    } else if (label.toLowerCase() === 'мой профиль') {
      navigate('/profile');
    }
  };

  return (
    <>
      <li onClick={handleClick}>
        <button className='w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default hover:cursor-pointer'>
          {label}
        </button>
      </li>
    </>
  );
};
