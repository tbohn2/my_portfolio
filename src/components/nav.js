import React from 'react'
import '../styles/nav.css'

// const styles = {
//     navbarStyle: {
//         
//     },
// };

function Nav({ currentPage, changePage }) {
    return (
        <ul className="myNav col-8 nav nav-tabs d-flex justify-content-around align-items-center mt-4">
            <li className="nav-item ">
                <a
                    href="#AboutMe"
                    onClick={() => changePage('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Contact"
                    onClick={() => changePage('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Portfolio"
                    onClick={() => changePage('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => changePage('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;
