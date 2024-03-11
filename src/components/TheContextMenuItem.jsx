import { useNavigate } from 'react-router-dom';
import { menuOptions } from '../constants/menuOptions';

export const TheContextMenuItem = ({ children: label, onClick: closeContextMenu }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    closeContextMenu();

    if (label.toLowerCase() === menuOptions.exit.toLocaleLowerCase()) {
      navigate('/auth');
    } else if (label.toLowerCase() === menuOptions.adminPanel.toLocaleLowerCase()) {
      navigate('/admin');
    } else if (label.toLowerCase() === menuOptions.profile.toLocaleLowerCase()) {
      navigate('/profile/');
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
