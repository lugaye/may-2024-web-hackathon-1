import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex z-10 fixed bg-[#1a202c] top-0 items-center shadow-md justify-around py-3 h-16 w-full">
        <div>
          <h1 className="text-[#00df9a] font-bold text-3xl">Sherile</h1>
        </div>
        <div>
          <ul className="list-none flex text-white gap-8 font-medium text-lg">
            <li>
              <a href="#" className="hover:text-[#00df9a]">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00df9a]">About</a>
            </li>
            {/* <li>
              <a href="#skills" className="hover:text-[#00df9a]">Skills</a>
            </li> */}
            <li>
              <a href="#education" className="hover:text-[#00df9a]">Education</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#00df9a]">Projects</a>
            </li>            
            <li>
              <a href="#experience" className="hover:text-[#00df9a]">Experience</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00df9a]">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
