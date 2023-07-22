import React from "react";
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footerBox border-top border-light col-8 d-flex justify-content-evenly align-items-center">
            <a href="https://github.com/tbohn2" type='button' className="btn btn-lg footerBtn btn-outline-light text-light ">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/tanner-bohn-084060285" type='button' className="btn btn-lg footerBtn btn-outline-light text-light ">
                LinkedIn
            </a>
            <a href="https://www.facebook.com/tanner.bohn.92" type='button' className="btn btn-lg footerBtn btn-outline-light text-light ">
                Facebook
            </a>

        </div>

    )
}

export default Footer;