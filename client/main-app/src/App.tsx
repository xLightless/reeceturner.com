import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// COMPONENTS
import Advertisement from './components/common/Ads/advert';
import Header from './components/common/Header/Header';
import Landing from './components/features/Landing/Landing';
import Experience from './components/features/Experience/Experience';
import Footer from './components/common/Footer/Footer';
import Archive from "./components/features/Archive/Archive";

// HOOKS
import useMousePosition from './hooks/Mouse/useMousePosition';
import useScrollPosition from './hooks/Mouse/useScrollPosition';
import useMouseShadow from './hooks/Mouse/useMouseShadow';
import MouseShadow from './hooks/Mouse/mouse';

// CSS
import './assets/styles/App.scss';
import './assets/styles/tailwind.scss';
import Projects from "./components/features/Projects/Projects";

// Update these constants on production
// eslint-disable-next-line no-restricted-globals
const port = location.port;
const env_mode = (port !== "5000") ? "development" : "production"; // The environments current state
const tkinterLink = (env_mode === "production") ? `http://tkinter.localhost` : `http://tkinter.localhost:${port}`;
// const apiTkinterLink = `http://api.tkinter.localhost`;

interface MainProps {
  mouseShadow?: React.ReactNode;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ mouseShadow, children }) => {
  return (
    <main id="main" role="main" className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        {mouseShadow}
      </div>

      <div className="w-full h-full" style={{ zIndex: 1 }}>
        {children}
      </div>
    </main>
  );
};

// const Main: React.FC = () => {
//   const { mousePosition } = useMousePosition();
//   const { showShadow } = useMouseShadow();

//   return (
//     <main id="main" role='main' className='relative min-h-screen overflow-hidden bg-black'>
//       <div className='absolute w-full h-full pointer-events-none' style={{ zIndex:  0 }}>
//         {showShadow && <MouseShadow mousePosition={mousePosition}/>}
//       </div>

//       <div className='w-full h-full' style={{ zIndex: 1 }}>
//         <Landing />
//         <Experience />
//         <Projects />

//         {/* <span className='text-sm'>This website was designed in Figma, developed with VSCode and put together in React.</span> */}
//       </div>
//     </main>
//   );
// };

const Index: React.FC = () => {
  const { mousePosition } = useMousePosition();
  const { showShadow } = useMouseShadow();

  return (
    <>
      <Advertisement advertLink={tkinterLink} />
      <Header />
      <Main mouseShadow={showShadow ? <MouseShadow mousePosition={mousePosition} /> : null}>
        <Landing />
        <Experience />
        <Projects />
        {/* <span className='text-sm'>This website was designed in Figma, developed with VSCode and put together in React.</span> */}
      </Main>
      <Footer />
    </>
  );
};

const ArchiveIndex: React.FC = () => {
  const { mousePosition } = useMousePosition();
  const { showShadow } = useMouseShadow();

  return (
    <>
      <Advertisement advertLink={tkinterLink} />
      <Header />
      <Main mouseShadow={showShadow ? <MouseShadow mousePosition={mousePosition} /> : null}>
        <></>
      </Main>
      <Footer />
    </>
  );
};

const PageNotFound: React.FC = () => {
  const { mousePosition } = useMousePosition();
  const { showShadow } = useMouseShadow();
  const urlPathName = window.location.pathname;
  const location = useLocation();

  // Function to go back to the previous page
  const goBack = () => {
      window.history.back();
  };

  return (
    <>
      <Advertisement advertLink={tkinterLink} />
      <Header />
      <Main mouseShadow={showShadow ? <MouseShadow mousePosition={mousePosition} /> : null}>
        <div className="relative h-screen">
          <div className="w-full h-full">
            <img className="object-cover opacity-5 bg-blend-lighten md:bg-blend-darken w-full h-screen" src="https://img.freepik.com/free-photo/robot-decorating-with-wallpaper_1048-12084.jpg?t=st=1718558462~exp=1718562062~hmac=9bcb0227832ccf88abacf49dda0f5ebb769b5f7ca4907b7c1f6e662408ed4c94&w=1380"></img>
          </div>
          <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center p-4">
            <p className="text-5xl text-white font-bold mb-24 text-center">404</p>
            <p className="text-3xl text-white font-bold mb-12 text-center">'{urlPathName}' does not exist on this server.</p>
            <p className="text-neutral-600 text-lg text-center">Lets take you back to the <strong className="underline underline-offset-8 hover:text-white">
              <a onClick={goBack}>previous page</a>
              </strong>.
            </p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  )
}

const App: React.FC = () => {

  const scrollPosition = useScrollPosition();
  const getScrollPosition = () => {
    return scrollPosition;
  };

  useEffect(() => {

    document.addEventListener('scroll', getScrollPosition);

    return () => {
      document.removeEventListener('scroll', getScrollPosition);
    }
  }, []);

  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/archive" element={<ArchiveIndex />} />
            <Route path="/auth/linkedin/callback"/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
