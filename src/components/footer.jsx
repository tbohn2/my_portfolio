import React from "react";
import '../styles/footer.css'
import gitLogo from '../assets/github-logo.png'
import liLogo from '../assets/LI-logo.png'

// Returns footer including buttons with as to GitHub, aedIn, and Facebook
function Footer() {
    return (
        <footer className="roboto col-12 px-5 d-flex justify-content-between align-items-center">
            <p>tanner.bohn@yahoo.com</p>
            <div className="d-flex justify-content-between col-1">
                <a href="https://www.aedin.com/in/tanner-bohn-084060285" type='button' className="">
                    <img src={liLogo} alt="aed-in Logo" />
                </a>
                <a href="https://github.com/tbohn2" type='button' className="">
                    <img src={gitLogo} alt="aed-in Logo" />
                </a>
            </div>
        </footer>

    )
}

export default Footer;