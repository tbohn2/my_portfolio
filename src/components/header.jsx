import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/header.css'
import logo from '../assets/logo.png'

// Returns nav at top of each page
function Header({ displayPage, setDisplayPage, mobile }) {
    return (
        <header className='col-12 d-flex justify-content-between'>
            <Link to='/' className='logo' onClick={() => setDisplayPage('AboutMe')}>
                <h1 id='TB' className='col-12 work-sans text-center'>TB</h1>
            </Link>
            {mobile ?
                <nav className='fs-2 d-flex justify-content-evenly'>
                    <div className="dropdown">
                        <span data-bs-toggle="dropdown" aria-expanded="false">&#9776;</span>
                        <ul className="col-12 fs-3 dropdown-menu m-0 p-0">
                            <li className='col-12'>
                                <Link to='/'>home</Link>
                            </li>
                            <li className='col-12'>
                                <Link to='/portfolio'>portfolio</Link>
                            </li>
                            <li className='col-12'>
                                <Link to='/resume'>resume</Link>
                            </li>
                            {/* <li className='col-12'>
                                <Link to='/contact'>contact</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                :
                <nav className='col-8'>
                    <ul className="roboto col-12 d-flex justify-content-evenly align-items-center">
                        <li>
                            <Link to="/" onClick={() => setDisplayPage('AboutMe')} className={displayPage === 'AboutMe' ? 'active' : 'inactive'}>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={() => setDisplayPage('Portfolio')} className={displayPage === 'Portfolio' ? 'active' : 'inactive'}                >
                                portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" onClick={() => setDisplayPage('Resume')} className={displayPage === 'Resume' ? 'active' : 'inactive'}                >
                                resume
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/contact" onClick={() => setDisplayPage('Contact')} className={displayPage === 'Contact' ? 'active' : 'inactive'}                >
                                contact
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            }
        </header>
    );
}

export default Header;
