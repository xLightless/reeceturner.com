import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom'
import Home from './pages';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col mx-auto max-w-7xl items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold text-center'>404</h1>
      <p className='text-lg text-center'>The page you are looking for does not exist.</p>

      <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded' onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  )
};

const Resume: React.FC = () => {
  return (
    <object
      data="/files/resume.pdf"
      type="application/pdf"
      className="w-full h-screen"
      onError={(e) => {
        // Hide the object if it fails to load
        (e.currentTarget as HTMLElement).style.display = 'none';
        // Show the fallback div
        const fallback = document.getElementById('resume-fallback');
        if (fallback) fallback.style.display = 'block';
      }}
    >
      <div id="resume-fallback" style={{ display: 'none' }}>
        <p>
          The PDF could not be loaded.{' '}
          <a href="/files/resume.pdf" download>
            Click here to download the resume.
          </a>
        </p>
      </div>
      <p>
        If the PDF did not load{' '}
        <a href="/files/resume.pdf" download>
          click here to download
        </a>
        .
      </p>
    </object>
  )
};

function App() {

  return (
    <Router>
      <Routes>
        {/* Main site page */}
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={ <Resume /> } />

        {/* Pages not found when changing paths */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
