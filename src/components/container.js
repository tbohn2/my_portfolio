import React, { useState } from 'react';
import Nav from './nav';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import '../styles/container.css'


export default function Container() {
    const [currentPage, setDisplayPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    const changePage = (page) => setDisplayPage(page);

    return (
        <div className='d-flex align-items-center flex-column'>
            <Nav currentPage={currentPage} changePage={changePage} />
            {renderPage()}
        </div>
    );
}