import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/aboutMe.css'
import pic from '../../assets/portrait4.jpg'

export default function AboutMe({ setDisplayPage, handleLoadedPage }) {

    const [medScreen, setmedScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setmedScreen(true);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 992) {
                setmedScreen(true);
            } else {
                setmedScreen(false);
            }
        });
    }, []);

    return (
        <section id="aboutMeBody" className='fade-in roboto'>
            <div id='aboutMeContent' className='col-12 d-flex justify-content-center align-items-start'>
                <div id="aboutText" className='col-md-7 col-11'>
                    <h1 className="work-sans">Tanner Bohn</h1>
                    {medScreen &&
                        <img src={pic} alt='' className='myImg my-3 align-self-center' onLoad={() => handleLoadedPage('AboutMe')}></img>
                    }
                    <h2 className="my-4">FULL-STACK WEB DEVELOPER</h2>
                    <p className='text-light fs-5 col-12'>
                        I bring ideas to life through clean code and responsive design.
                        Whether it's creating interactive interfaces or ensuring backend efficiency,
                        I strive to deliver solutions that balance performance with creativity.
                    </p>
                    <p className='text-light fs-5 col-12'>
                        Feel free to explore my <Link to='/portfolio' onClick={() => setDisplayPage('Portfolio')}>portfolio</Link> and <Link to='/contact' onClick={() => setDisplayPage('Contact')}>get in touch</Link> for collaborations or inquiries!
                    </p>
                </div>
                {!medScreen &&
                    <img src={pic} alt='' className='myImg ms-3' onLoad={() => handleLoadedPage('AboutMe')}></img>
                }
            </div>
        </section>
    );
}
