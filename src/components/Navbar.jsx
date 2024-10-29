import { NavLink, useNavigate } from 'react-router-dom';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between mx-4 md:mx-36">
      <div className="flex items-center gap-36 text-sm py-4 mb-5 md:mx-36">
        <img 
          onClick={() => navigate('/')} 
          className="w-20 cursor-pointer" 
          src={logo} 
          alt="Logo" 
        />
        <ul className="hidden md:flex items-start gap-10 font-medium text-lg text-[#12305B]">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
          >
            <li className="py-1">Home</li>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
          >
            <li className="py-1">About</li>
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
          >
            <li className="py-1">Shop</li>
          </NavLink>
          <NavLink 
            to="/faqs" 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
          >
            <li className="py-1">FAQS</li>
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <img 
          onClick={() => setShowMenu(true)} 
          className="w-6 md:hidden" 
          src={menu_icon} 
          alt="Menu Icon" 
        />
        
        {/********** Mobile Menu **********/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-24" src={logo} alt="Logo" />
            <img 
              className="w-7" 
              onClick={() => setShowMenu(false)} 
              src={cross_icon} 
              alt="Close Icon" 
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink 
              to="/" 
              onClick={() => setShowMenu(false)} 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              <p className="px-4 py-2 rounded-full inline-block">Home</p>
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setShowMenu(false)} 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              <p className="px-4 py-2 rounded-full inline-block">About</p>
            </NavLink>
            <NavLink 
              to="/faqs" 
              onClick={() => setShowMenu(false)} 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              <p className="px-4 py-2 rounded-full inline-block">Shop</p>
            </NavLink>
            <NavLink 
              to="/faqs" 
              onClick={() => setShowMenu(false)} 
              className={({ isActive }) => isActive ? 'font-bold' : ''}
            >
              <p className="px-4 py-2 rounded-full inline-block">FAQS</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
