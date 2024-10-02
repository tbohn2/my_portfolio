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

  return (
    <Router basename='/my_portfolio'>
      <div className='d-flex align-items-center flex-column bg-2'>
        <Header displayPage={displayPage} setDisplayPage={(page) => setDisplayPage(page)} mobile={mobile} />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<AboutMe mobile={mobile} />} />
            <Route path="/contact" element={<Contact mobile={mobile} />} />
            <Route path="/portfolio" element={<Portfolio mobile={mobile} />} />
            <Route path="/resume" element={<Resume mobile={mobile} />} />
          </Routes>
        </div>
        <Footer mobile={mobile} />
      </div>
    </Router>
  )
}

export default App
