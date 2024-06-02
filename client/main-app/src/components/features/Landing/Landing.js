import { useState, useEffect } from "react";
import { Cube } from "../../shared/Cube/Cube";


const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [landingPageHeight, setLandingPageHeight] = useState('100vh');

  const getLandingPageHeight = () => {
    const header = document.getElementById('header');
    const advert = document.getElementById('advert');
    let headerHeight = (header) ? window.getComputedStyle(header).height : "0px";
    let advertHeight = (advert) ? window.getComputedStyle(header).height : "0px";

    return `${headerHeight} - ${advertHeight}`;
  };

  useEffect(() => {
    const updateHeight = () => {

      // Fixes page height on smaller screens
      // vertically to center the landing pag
      if (window.screenY > 768) {
        setLandingPageHeight(`calc(100vh - ${getLandingPageHeight()})`);
      } else {
        setLandingPageHeight('100vh');
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    updateHeight();
    window.addEventListener('load', updateHeight);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', updateHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxTranslateY = 30; // Adjust the maximum translateY value
  const minScaleFactor = 0.5; // Adjust the minimum scale factor

  const scaleFactor = Math.max(minScaleFactor, 1 - scrollY * 0.0015);
  const translateY = Math.min(Math.max(0, scrollY * 0.25), maxTranslateY);

  const cubeSize = 128;

  return (
    <section className='flex items-center justify-center' style={{ height: landingPageHeight }}>
      <div id='landing' className='w-full'>
        <div
          className='relative z-10 w-full h-full flex flex-col justify-center items-center mx-auto'
          style={{
            transform: `scale(${scaleFactor}) translateY(${translateY}px)`,
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <div className='w-full grid gap-12 grid-rows-2 grid-cols-1 max-w-screen-2xl'>
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <h1 className='text-5xl md:text-8xl font-bold text-white text-center'>Reece Turner</h1>
              <h3 className="text-sm md:text-2xl mt-4 text-white font-sans text-center">
                I build cool things for Games,<br />Web and Software.
              </h3>
              <input
                type="text"
                placeholder="Search the website..."
                className="w-9/12 md:w-2/6 h-12 px-4 py-2 max-w-screen-xl mt-24 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className='w-full h-full max-w-screen-2xl'>
              <div id="landing-cubes" className='h-full relative flex flex-col justify-center items-center'>
                <Cube cubeSize={cubeSize} rotationX={-15} rotationY={-35} offsetX={0} offsetY={0} offsetZ={0} color='white' shadow={true} />
                <Cube cubeSize={cubeSize / 2} rotationX={-15} rotationY={-35} offsetX={-cubeSize / 2} offsetY={cubeSize / 2} offsetZ={cubeSize - (cubeSize / 2)} color='white' shadow={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Landing;