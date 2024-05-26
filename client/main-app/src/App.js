import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// CSS
import './styles/App.scss';
import './styles/tailwind.scss';


const Main = () => {
   return (
    <main role='main'>

    </main>
   );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
