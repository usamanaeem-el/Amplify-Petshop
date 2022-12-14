import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { ADMIN_ACTION, PETSTORE } from '../../shared/constants/pageRoutes';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ signOut }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-20 px-8'>
      <div className='logo'>
        <h1>PetStore</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>
          <button
            onClick={() => {
              navigate(PETSTORE);
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(ADMIN_ACTION);
            }}
          >
            Admin
          </button>
        </li>
        <li>Contact</li>
        <li>About Us</li>
        <li>
          <button onClick={signOut}>Sign Out</button>
        </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      <div
        onClick={handleClick}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-lightGrey px-4 py-7 flex flex-col md:hidden'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>Pet Store</h1>
          <li className='border-b'>
            <button
              onClick={() => {
                navigate(PETSTORE);
              }}
            >
              Home
            </button>
          </li>
          <li className='border-b'>
            <button
              onClick={() => {
                navigate(ADMIN_ACTION);
              }}
            >
              Admin
            </button>
          </li>
          <li className='border-b'>Contact</li>
          <li className='border-b'>About Us</li>
          <li>
            <button onClick={signOut}>Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withAuthenticator(Navbar);
