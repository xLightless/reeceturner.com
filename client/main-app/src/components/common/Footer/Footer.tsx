import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';


import './Footer.scss';


const ContentFrame = () => {
  const [text, setText] = useState('Click to copy!');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('business@reeceturner.com');
    setText('Copied!');
    setTimeout(() => setText('Click to copy!'), 2000); // Reset text after 2 seconds
  };


  return (
  <div className='content-frame flex flex-col justify-center items-center md:flex-row justify-center mx-auto'>
    <div className='w-full md:w-8/12 my-12 mx-24 sm:mx-12 max-w-fit'>
      <div className='grid w-full grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:grid-cols-3'>
        <div className='w-full text-center md:text-left'>
          <p className="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-white">
            Get Started
          </p>
          <ul className="space-y-1">
              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  Account
                </a>
              </li>

              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  Pricing
                </a>
              </li>

              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  Documentation
                </a>
              </li>
          </ul>
        </div>

        <div className='w-full text-center md:text-left'>
          <p className="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-white">
            Products
          </p>
          <ul className="space-y-1">
              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  GUI Designer
                </a>
              </li>
              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  AlgoTrading
                </a>
              </li>
              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                <a href="https://heavynode.com/" className="inline-block py-1 transition-transform hover:scale-105">
                  HeavyNode
                </a>
              </li>
          </ul>
        </div>

        <div className='w-full text-center md:text-left'>
          <p className="block mb-4 font-sans text-sm antialiased font-bold leading-normal uppercase opacity-50 text-white">
            Legal Information
          </p>
          <ul className="space-y-1">
              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  License
                </a>
              </li>

              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a href="#" className="inline-block py-1 transition-transform">
                    <p className="inline-block hover:scale-105">Privacy </p>
                    <span className='opacity-50 text-white antialiased inline-block mx-1'>/</span>
                    <p className="inline-block hover:scale-105"> Security</p>
                </a>
              </li>

              <li className="block font-sans text-base antialiased font-normal leading-relaxed text-white">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" className="inline-block py-1 transition-transform hover:scale-105">
                  Terms of service
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='w-full md:w-4/12 my-12 mx-24 sm:mx-12 max-w-fit'>
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='block transition-transform'>
          <div className="flex gap-4 text-white sm:justify-center">
            <a
              href="https://github.com/xLightless"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100  hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
            </a>
            <a
              href="https://www.instagram.com/reeceturner35/"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100  hover:scale-105"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
            </a>
            <a
              href="https://x.com/enter_handle"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100 hover:scale-105"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9"/>
            </a>
            <a
              href="https://www.linkedin.com/in/reeceturner/"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100  hover:scale-105"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 text-white"/>
            </a>
          </div>
        </div>
        <div id="contact" className="flex flex-col justify-center items-center transition-transform text-white" onClick={copyToClipboard}>
            <p className='block font-sans hover:scale-105'>business@reeceturner.com</p>
            <p className='block font-sans text-sm antialiased leading-normal opacity-50 text-white'>{text}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

const Copyright = () => {
  return (
    <div className='copyright-frame'>
    <p>&copy; 2021-2024, ReeceTurner.com.</p>
   </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer relative w-full mx-auto">
      <ContentFrame />
      <Copyright />
    </footer>
  );
};

export default Footer;
