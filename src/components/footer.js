import React from "react";
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footerBox border-top border-light col-8 d-flex justify-content-evenly align-items-center">
            <a href="https://github.com/tbohn2" type='button' className="btn btn-lg footerBtn btn-outline-dark text-light ">
                GitHub
            </a>
            <a href="https://github.com/tbohn2" type='button' className="btn btn-lg footerBtn btn-outline-dark text-light ">
                Facebook
            </a>

        </div>

    )
}

export default Footer;