import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Footer from './components/footer';
import './styles/app.css';

function App() {

  const [displayPage, setDisplayPage] = useState('AboutMe');

  return (
    <Router basename='/my_portfolio'>
      <div className='d-flex align-items-center flex-column bg-2'>
        <Header displayPage={displayPage} setDisplayPage={(page) => setDisplayPage(page)} />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
