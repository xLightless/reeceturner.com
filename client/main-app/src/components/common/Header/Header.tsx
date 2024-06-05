import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import '../../../assets/styles/tailwind.scss';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isNavLinkClicked, setElementFlashState] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://reeceturner.com/" className="flex items-center space-x-3">
          {/* <span className="self-center text-2xl font-semibold text-white">&lt;/&gt;</span> */}
          <FontAwesomeIcon icon={faCode} className='text-white text-3xl'/>
        </a>

        <div className="flex md:order-1 space-x-3">
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> */}
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`pt-4 md:pt-0 items-center justify-between w-full md:flex md:w-auto md:order-1 mt-4 border-t border-t-3px border-gray-900 md:border-none md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col md:flex-row font-medium md:space-x-8 md:mt-0" onClick={toggleMenu}>
            <li className='hover:bg-indigo-500' id="nav-experience">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#experience" className="block py-2 px-3 text-white rounded font-sans" aria-current="page">Experience</a>
            </li>
            <li className='hover:bg-indigo-500'>
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="block py-2 px-3 text-white rounded font-sans">Projects</a>
            </li>
            <li className='hover:bg-indigo-500'>
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#contact" className="block py-2 px-3 text-white rounded font-sans">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header id="header" className='sticky top-0 shadow-md z-9 w-full'>
      <Nav />
    </header>
  );
};

export default Header;
