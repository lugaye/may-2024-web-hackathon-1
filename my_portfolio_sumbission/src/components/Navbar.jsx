// import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex sticky top-0 z-999 shadow-sm shadow-black justify-between items-center sm:px-10 px-5 text-lg bg-[#363636]'>
      <div className='font-semibold text-blue-500 sm:text-2xl text-lg'>MosiCodes</div>
      <div className='md:flex hidden '>
        <div>
          <ul className='flex gap-5 '>
            <a href='home'>
              <li className="hover:bg-blue-600 p-2">Home</li>
            </a>
            <a href='home'>
              <li className="hover:bg-blue-600 p-2">About</li>
            </a>
            <a href='home'>
              <li className="hover:bg-blue-600 p-2">Tech Stack</li>
            </a>
            <a href='home'>
              <li className="hover:bg-blue-600 p-2">Projects</li>
            </a>
            <a href='home'>
              <li className="hover:bg-blue-600 p-2">Contact</li>
            </a>
          </ul>
        </div>

        <div className='flex gap-3 mx-10 items-center text-xl'>
          <FaGithub />
          <FaXTwitter />
          <FaLinkedin />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
