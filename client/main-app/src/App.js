// COMPONENTS
import Advertisement from './components/common/Ads/advert';
import Header from './components/common/Header/Header';
import Landing from './components/features/Landing/Landing';
import Experience from './components/features/Experience/Experience';
import Footer from './components/common/Footer/Footer';

// HOOKS
import useMousePosition from './hooks/Mouse/useMousePosition';
import useMouseShadow from './hooks/Mouse/useMouseShadow';
import { MouseShadow } from './hooks/Mouse/mouse';

// CSS
import './assets/styles/App.scss';
import './assets/styles/tailwind.scss';

// Update these constants on production
// eslint-disable-next-line no-restricted-globals
const port = location.port;
const env_mode = (port !== "5000") ? "development" : "production"; // The environments current state
const tkinterLink = (env_mode === "production") ? `http://tkinter.localhost` : `http://tkinter.localhost:${port}`;
// const apiTkinterLink = `http://api.tkinter.localhost`;


const Main = () => {
  const { mousePosition } = useMousePosition();
  const { showShadow } = useMouseShadow(); // We don't need the toggle function here

  return (
    <main id="main" role='main' className='relative min-h-screen overflow-hidden bg-black'>
      <div className='absolute w-full h-full pointer-events-none' style={{ zIndex:  0 }}>
        {showShadow && <MouseShadow mousePosition={mousePosition}/>}
      </div>

      <div className='w-full h-full' style={{ zIndex: 1 }}>
        <Landing />
        <Experience />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="app">
        <Advertisement advertLink={tkinterLink} />
        <Header />
        <Main />
        <Footer />
    </div>
  );
};

export default App;
