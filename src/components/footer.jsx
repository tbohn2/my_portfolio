import React from "react";
import '../styles/footer.css'
import gitLogo from '../assets/github-logo.png'
import liLogo from '../assets/LI-logo.png'

function Footer({ mobile }) {
    if (mobile) {
        return (
            <footer className="roboto col-12 px-4 d-flex flex-column align-items-center py-2">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <a href="mailto:tannerbohndev@gmail.com">tannerbohndev@gmail.com</a>
                    <a href="https://github.com/tbohn2" type='button' className="my-3">
                        <img className="footer-icon" src={gitLogo} alt="GitHub Logo" />
                    </a>
                </div>
                <p className="m-0">&copy; 2024 Tanner Bohn</p>
            </footer>);
    } else {
        return (
            <footer className="roboto col-12 px-4 d-flex justify-content-between align-items-center py-2">
                <a className="col-4" href="mailto:tannerbohndev@gmail.com">tannerbohndev@gmail.com</a>
                <p className="m-0 col-4 text-center">&copy; 2024 Tanner Bohn</p>
                <div className="d-flex justify-content-end col-4">
                    {/* <a href="https://www.aedin.com/in/tanner-bohn-084060285" type='button'>
                    <img className="footer-icon" href="https://www.aedin.com/in/tanner-bohn-084060285" src={liLogo} alt="Linked-in Logo" />
                </a> */}
                    <a href="https://github.com/tbohn2" type='button' >
                        <img className="footer-icon" src={gitLogo} alt="GitHub Logo" />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;