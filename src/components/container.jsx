import React, { useState } from 'react';
// Imports all pages with nav and footer
import Nav from './nav';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Footer from './footer';
import '../styles/container.css'

// Returns Container of portfolio pages
export default function Container() {
    // Defines currentPage variable using useState hook with default as AboutMe page
    const [currentPage, setDisplayPage] = useState('AboutMe');

    // Function that checks which is the current page and renders the corresponding page
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

    // Function to change page
    const changePage = (page) => setDisplayPage(page);

    // Renders page between Nav and Footer
    return (
        <div className='d-flex align-items-center flex-column'>
            <Nav currentPage={currentPage} changePage={changePage} />
            {renderPage()}
            <Footer />
        </div>
    );
}
