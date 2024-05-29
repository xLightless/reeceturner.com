import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// CSS
import './styles/App.scss';
import './styles/Landing.scss';
import './styles/tailwind.scss';
import { Cube } from './components/Cube';

// Update these constants on production
// eslint-disable-next-line no-restricted-globals
const port = location.port;
const env_mode = (port !== "5000") ? "development" : "production"; // The environments current state
const tkinterLink = (env_mode === "production") ? `http://tkinter.localhost` : `http://tkinter.localhost:${port}`;
// const apiTkinterLink = `http://api.tkinter.localhost`;


const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 20); // Adjust the debounce delay as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const maxTranslateY = 100; // Adjust the maximum translateY value
  const minScaleFactor = 0.5; // Adjust the minimum scale factor

  const scaleFactor = Math.max(minScaleFactor, 1 - scrollY * 0.0015);
  const translateY = Math.min(Math.max(0, scrollY * 0.25), maxTranslateY);

  const cubeSize = 128;

  return (
    // max-w-screen-2xl mx-auto
    <div className=''>

      <div id='landing' className='h-fit w-full relative flex flex-col items-center justify-center p-4'>
        {/* <div
          className='absolute inset-opacity-0'
          style={{
            zIndex: -1,
          }}
        /> */}
        <div className='relative z-10 w-full flex flex-col justify-center items-center mx-auto'
          style={{
            transform: `scale(${scaleFactor}) translateY(${translateY}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >

          <div className='w-full grid grid-rows-2 grid-cols-1 h-screen max-w-screen-2xl'>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className='text-4xl md:text-8xl font-bold text-white text-center'>Reece Turner</h1>
              <h3 className="text-sm md:text-2xl mt-4 text-white font-sans text-center">I build cool things for Games,<br></br> Web and Software.</h3>
              <input
                  type="text"
                  placeholder="Search the website..."
                  className="w-9/12 h-12 px-4 py-2 max-w-screen-xl mt-24 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

            </div>

            <div className='w-full '>
              <div id="landing-cubes" className='h-full relative flex flex-col justify-center items-center'>

                <Cube cubeSize={cubeSize} rotationX={-15} rotationY={-35} offsetX={0} offsetY={0} offsetZ={0} color='white' shadow={true}/>
                <Cube cubeSize={cubeSize/2} rotationX={-15} rotationY={-35} offsetX={-cubeSize/2} offsetY={cubeSize/2} offsetZ={cubeSize - (cubeSize/2)} color='white' shadow={true}/>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='m-12'>
        <div id="landing-cubes" className='h-full relative flex flex-col justify-center items-center'>

          <Cube cubeSize={cubeSize} rotationX={-15} rotationY={-35} offsetX={0} offsetY={0} offsetZ={0} color='white' shadow={true}/>
          <Cube cubeSize={cubeSize/2} rotationX={-15} rotationY={-35} offsetX={-cubeSize/2} offsetY={cubeSize/2} offsetZ={cubeSize - (cubeSize/2)} color='white' shadow={true}/>

        </div>
      </div> */}

    </div>
  );
};

const Main = () => {

  return (
    <main role='main' className='relative bg-black min-h-screen'>
      <Landing />
    </main>
  );
};

const Advertisement = ({advertLink}) => {

  return (
  <div className='w-full h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 flex justify-center items-center advert p-4'>
    <p className='text-sm md:text-base lg:text-lg xl:text-xl text-center'>
      Unlock the full potential of your software by building intuitive GUI applications with our
      <span> <a href={ advertLink } className='font-bold underline'>Python GUI Designer!</a></span>
    </p>
  </div>
  );
};

const App = () => {

  return (
    <div className="app">
        {/* <Advertisement advertLink={tkinterLink} /> */}
        <Header />
        <Main />
        <Footer />
    </div>
  );
};

export default App;
