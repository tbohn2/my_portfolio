import React from "react";
import '../styles/footer.css'
import gitLogo from '../assets/github-logo.png'
import liLogo from '../assets/LI-logo.png'

function Footer({ mobile }) {
    if (mobile) {
        return (
            <footer className="roboto col-12 px-4 d-flex flex-column align-items-center pt-5 pb-2">
                <div className="col-12 d-flex align-items-center justify-content-between">
                    <a href="mailto:tannerjbohn@gmail.com">tannerjbohn@gmail.com</a>
                    <div className="d-flex align-items-center">
                        <a id="linkedin" href="https://www.linkedin.com/in/tanner-bohn-084060285" className="footer-icon" type='button'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a id="github" href="https://github.com/tbohn2" type='button' className="footer-icon">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
                <p className="my-4">&copy; 2024 Tanner Bohn</p>
            </footer>);
    } else {
        return (
            <footer className="roboto col-12 px-4 d-flex justify-content-between align-items-center py-2">
                <div className="col-4">
                    <a href="mailto:tannerjbohn@gmail.com">tannerjbohn@gmail.com</a>
                </div>
                <p className="m-0 col-4 text-center">&copy; 2024 Tanner Bohn</p>
                <div className="d-flex justify-content-end col-4">
                    <a id="linkedin" href="https://www.linkedin.com/in/tanner-bohn-084060285" className="footer-icon" type='button'>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a id="github" href="https://github.com/tbohn2" className="footer-icon" type='button'>
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;