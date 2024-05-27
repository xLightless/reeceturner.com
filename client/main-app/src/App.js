import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// CSS
import './styles/App.scss';
import './styles/tailwind.scss';

// Disable linting rule for the next line
// eslint-disable-next-line no-restricted-globals
const port = location.port
const tkinterLink = (port === "") ? "http://tkinter.localhost" : `http://tkinter.localhost:${port}`;
// const apiTkinterLink = `http://api.tkinter.localhost`;

const Landing = () => {
  return (
    <section className=''></section>
  );
}

const Main = () => {

    window.addEventListener('scroll', function () {
      let scrollPosition = window.scrollY;
      let sections = document.querySelectorAll('.scroll-overlay-section');

      sections.forEach(function(section, index) {
          let offsetTop = section.offsetTop;

          // Calculate the new top position based on the scroll position
          let newPosition = offsetTop - scrollPosition;

          // Set the new top position for each section
          section.style.top = newPosition + 'px';
      });
  });

  return (
    <main role='main' className='min-h-screen bg-black py-12'>
      <div id="scroll-overlay-container" class="relative overflow-hidden h-screen">
          <section class="scroll-overlay-section section-one z-30 flex items-center justify-center bg-gray-200 text-3xl">Section 1</section>
          <section class="scroll-overlay-section section-two z-20 flex items-center justify-center bg-gray-400 text-3xl">Section 2</section>
          <section class="scroll-overlay-section section-three z-10 flex items-center justify-center bg-gray-600 text-3xl">Section 3</section>
      </div>
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
}

const App = () => {

  return (
    <div className="app">
        <Advertisement advertLink={tkinterLink}/>
        <Header />
        <Main />
        <Footer />
    </div>
  );
};

export default App;
