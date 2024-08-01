import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/header.css'
import logo from '../assets/logo.png'

// Returns nav at top of each page
function Header({ displayPage, setDisplayPage }) {
    return (
        <header className='col-12 ps-5 d-flex justify-content-between'>
            <img src={logo} alt="Logo" className='col-1' />
            <ul className="myNav roboto fw-lighter col-8 d-flex justify-content-evenly align-items-center">
                <li>
                    <Link to="/" onClick={() => setDisplayPage('AboutMe')} className={displayPage === 'AboutMe' ? ' active' : 'inactive'}>
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={() => setDisplayPage('Portfolio')} className={displayPage === 'Portfolio' ? ' active' : 'inactive'}                >
                        portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/resume" onClick={() => setDisplayPage('Resume')} className={displayPage === 'Resume' ? ' active' : 'inactive'}                >
                        resume
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setDisplayPage('Contact')} className={displayPage === 'Contact' ? ' active' : 'inactive'}                >
                        contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
