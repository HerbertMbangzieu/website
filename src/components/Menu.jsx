import React, { useState } from "react";

import { FaBars, FaWindowClose } from "react-icons/fa";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full text-white font-quicksand grid grid-cols-2 p-2 md:p-4 rounded-lg bg-gradient-to-tr from-[#001] to-[#003] shadow-inner shadow-slate-800">
        <div id="logo" className="text-2xl text-left font-bold">
          <span className="text-3xl text-red-400">H</span>erbert
          <span className="text-3xl text-red-400">M</span>bangzieu
        </div>

        <div>
          <div id="menu" className="hidden lg:flex justify-end pt-2">
            <a
              href="#home"
              className="mx-2 lg:mx-6 font-semibold hover:text-red-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="mx-2 lg:mx-6 font-semibold hover:text-red-400"
            >
              About me
            </a>
            <a
              href="#home"
              className="mx-2 lg:mx-6 font-semibold hover:text-red-400"
            >
              Skills
            </a>
            <a
              href="#works"
              className="mx-2 lg:mx-6 font-semibold hover:text-red-400"
            >
              My Works
            </a>
            <a
              href="#contact"
              className="mx-2 lg:mx-6 font-semibold hover:text-red-400"
            >
              Contact
            </a>
          </div>
          <div className="lg:hidden w-full flex justify-end text-xl pt-2">
            <button
              className="text-3xl active:scale-95"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              {showMenu ? <FaWindowClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          showMenu
            ? `transition ease-in-out duration-500 relative text-lg translate-x-0`
            : `transition ease-in-out duration-500 -translate-x-full`
        }
      >
        <ul
          className="absolute bg-gradient-to-tr from-blue-950 to-sky-950 text-white font-bold p-3 rounded-r-lg mt-2 w-1/2
        "
        >
          <li className="my-4 hover:text-red-400">
            <a href="#home">Home</a>
          </li>
          <li className="my-4 hover:text-red-400">
            <a href="#about">About me</a>
          </li>
          <li className="my-4 hover:text-red-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="my-4 hover:text-red-400">
            <a href="#works">My Works</a>
          </li>
          <li className="my-4 hover:text-red-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
