// import { useState } from "react";
// import { useHoveredElementId } from "../../../hooks/Mouse/mouse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

  const handleMouseEnter = (id) => {
    const elements = document.querySelectorAll('.grid-item');
    elements.forEach((element) => {
      if (element.id !== id) {
        element.style.opacity = 0.3;
        element.style.transform = "scale(0.8)";
        element.style.transition = "opacity 0.5s, transform 0.3s";
      }
    });
  };

  const handleMouseLeave = () => {
    const elements = document.querySelectorAll('.grid-item');
    elements.forEach((element) => {
      element.style.opacity = 1;
      element.style.transform = "scale(1)";
    });
  };

    return (
      <section className="w-full max-w-screen-2xl h-fit mx-auto flex flex-col justify-center items-center p-4">
        <div className='w-full h-full'>
          <div className='w-full h-fit mb-4'>
            <h1 className="text-white text-left text-5xl md:text-7xl font-sans font-bold">Experience</h1>
          </div>

          <div className='w-full grid grid-cols-1 grid-rows-4 gap-12 lg:grid-cols-3 md:grid-rows-1'>

            <div className='grid-item' id='item1' onMouseEnter={() => handleMouseEnter('item1')} onMouseLeave={handleMouseLeave}>
              <ul className='list-none mt-4 hover:drop-shadow-sm'>
                <li className='text-white text-left font-sans text-2xl font-bold'>Network Technician, Next Theme.</li>
                <li className='text-white text-left font-sans text-md'>Feb 2022 - May 2022</li>
                <li className='mt-4'>
                  <div className='w-full aspect-video video'>
                    <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/gWEz8ktEuuQ?si=iTuZGnc5L6fzaAQL&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer;"></iframe>
                  </div>
                </li>
                <li className='text-white text-left font-sans text-sm mt-4 text-justify'>
                  I work around the office to ensure the network is setup correctly to cut costs for the owner. I have also setup and installed other systems such as computers to be sold to clients. I worked around the facility to install a File Storage Server and restored Computer Systems to its original integrity.
                </li>
              </ul>
            </div>

            <div className='grid-item' id='item2' onMouseEnter={() => handleMouseEnter('item2')} onMouseLeave={handleMouseLeave}>
              <ul className='list-none mt-4'>
                <li className='text-white text-left font-sans text-2xl font-bold'>Network Technician, Next Theme.</li>
                <li className='text-white text-left font-sans text-md'>Feb 2022 - May 2022</li>
                <li className='mt-4'>
                  <div className='w-full aspect-video video'>
                    <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/gWEz8ktEuuQ?si=iTuZGnc5L6fzaAQL&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer;"></iframe>
                  </div>
                </li>
                <li className='text-white text-left font-sans text-sm mt-4 text-justify'>
                  I work around the office to ensure the network is setup correctly to cut costs for the owner. I have also setup and installed other systems such as computers to be sold to clients. I worked around the facility to install a File Storage Server and restored Computer Systems to its original integrity.
                </li>
              </ul>
            </div>

            <div className='grid-item' id='item3' onMouseEnter={() => handleMouseEnter('item3')} onMouseLeave={handleMouseLeave}>
              <ul className='list-none mt-4'>
                <li className='text-white text-left font-sans text-2xl font-bold'>Network Technician, Next Theme.</li>
                <li className='text-white text-left font-sans text-md'>Feb 2022 - May 2022</li>
                <li className='mt-4'>
                  <div className='w-full aspect-video video'>
                    <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/gWEz8ktEuuQ?si=iTuZGnc5L6fzaAQL&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer;"></iframe>
                  </div>
                </li>
                <li className='text-white text-left font-sans text-sm mt-4 text-justify'>
                  I work around the office to ensure the network is setup correctly to cut costs for the owner. I have also setup and installed other systems such as computers to be sold to clients. I worked around the facility to install a File Storage Server and restored Computer Systems to its original integrity.
                </li>
              </ul>
            </div>

            <div className="w-full h-fit col-span-1 lg:cols-span-3">
              <a href="#" className="text-cyan-500 font-bold text-left">View Resumé <span className=""><FontAwesomeIcon icon={faArrowUp} style={{rotate: "45deg"}}/></span></a>
            </div>

          </div>
        </div>
      </section>
    );
  };


export default Experience;