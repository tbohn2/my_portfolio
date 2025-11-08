import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Footer from './components/footer';
import './styles/app.css';

function AppContent() {
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [displayPage, setDisplayPage] = useState('AboutMe');
  const [loadedPages, setLoadedPages] = useState({
    AboutMe: false,
    Portfolio: false,
    Resume: false,
    Contact: true
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  // Reset loaded state when navigating to a page
  useEffect(() => {
    const pathToPage = {
      '/': 'AboutMe',
      '/portfolio': 'Portfolio',
      '/resume': 'Resume',
      '/contact': 'Contact'
    };
    const currentPage = pathToPage[location.pathname];
    if (currentPage) {
      setDisplayPage(currentPage);
      // Reset loaded state for the current page so spinner shows
      setLoadedPages(prev => ({ ...prev, [currentPage]: false }));
    }
  }, [location.pathname]);

  const handleLoadedPage = (page) => {
    setTimeout(() => {
      setLoadedPages(prev => ({ ...prev, [page]: true }));
    }, 500);
  }

  return (
    <div className='d-flex align-items-center flex-column bg-2'>
      <Header displayPage={displayPage} setDisplayPage={(page) => setDisplayPage(page)} handleLoadedPage={(page) => handleLoadedPage(page)} mobile={mobile} />
      {!loadedPages[displayPage] &&
        <div className='col-12 text-center'>
          <div className='spinner-border'></div>
        </div>}
      <div className={`${loadedPages[displayPage] && 'loaded'} page-container`}>
        <Routes>
          <Route path="/" element={<AboutMe setDisplayPage={(page) => setDisplayPage(page)} handleLoadedPage={(page) => handleLoadedPage(page)} />} />
          <Route path="/portfolio" element={<Portfolio mobile={mobile} handleLoadedPage={(page) => handleLoadedPage(page)} />} />
          <Route path="/resume" element={<Resume mobile={mobile} handleLoadedPage={(page) => handleLoadedPage(page)} />} />
          {/* <Route path="/contact" element={<Contact mobile={mobile} />} /> */}
        </Routes>
      </div>
      <Footer mobile={mobile} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
