import { useNavigate } from 'react-router-dom';
import { menuOptions } from '../constants/menuOptions';
import { useSelector } from 'react-redux';

export const TheContextMenuItem = ({ children: label, onClick: closeContextMenu }) => {
  const navigate = useNavigate();

  const [{ id }] = JSON.parse(localStorage.getItem('currentUser'));

  const handleClick = () => {
    closeContextMenu();

    if (label.toLowerCase() === menuOptions.exit.toLocaleLowerCase()) {
      localStorage.clear();
      navigate('/auth');
    } else if (label.toLowerCase() === menuOptions.adminPanel.toLocaleLowerCase()) {
      navigate('/admin');
    } else if (label.toLowerCase() === menuOptions.profile.toLocaleLowerCase()) {
      navigate(`/profile/:${id}`);
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
