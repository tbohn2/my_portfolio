import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Footer from './components/footer';
import './styles/app.css';

function App() {

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

  const handleLoadedPage = (page) => {
    setTimeout(() => {
      setLoadedPages({ ...loadedPages, [page]: true });
    }, 500);
  }

  return (
    <Router>
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
    </Router>
  )
}

export default App
