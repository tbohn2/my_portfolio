import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/header.css'

// Returns nav at top of each page
function Header({ displayPage, setDisplayPage }) {
    return (
        <header className='col-12 d-flex'>
            <h1 className='col-4 text-light fw-bold text-center'>Tanner Bohn</h1>
            <ul className="myNav roboto fw-lighter col-8 d-flex justify-content-evenly align-items-center">
                <li>
                    <Link to="/" onClick={() => setDisplayPage('AboutMe')} className={displayPage === 'AboutMe' ? ' active' : 'inactive'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={() => setDisplayPage('Portfolio')} className={displayPage === 'Portfolio' ? ' active' : 'inactive'}                >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/resume" onClick={() => setDisplayPage('Resume')} className={displayPage === 'Resume' ? ' active' : 'inactive'}                >
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setDisplayPage('Contact')} className={displayPage === 'Contact' ? ' active' : 'inactive'}                >
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
