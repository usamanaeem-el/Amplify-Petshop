import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-20 px-8'>
      <div className='logo'>
        <h1>PetStore</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>New Arrival</li>
        <li>Contact</li>
        <li>About Us</li>
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
          <h1>PetStore</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>New Arrival</li>
          <li className='border-b'>Contact</li>
          <li className='border-b'>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
