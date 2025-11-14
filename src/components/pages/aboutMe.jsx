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
            <div id='aboutMeContent' className='col-12 d-flex justify-content-evenly align-items-center'>
                {!medScreen &&
                    <img src={pic} alt='' className='myImg me-4' onLoad={() => handleLoadedPage('AboutMe')}></img>
                }
                <div id="aboutText" className='col-md-7 col-10'>
                    {medScreen &&
                        <img src={pic} alt='' className='myImg my-4 align-self-center' onLoad={() => handleLoadedPage('AboutMe')}></img>
                    }
                    <h1 className="work-sans">Tanner Bohn</h1>
                    <h2 className="my-4">FULL-STACK DEVELOPER</h2>
                    <p className='text-light fs-5 col-12'>
                        I transform concepts into reality through clean code and intuitive design.
                        From crafting engaging user experiences to building robust server-side systems,
                        I focus on creating solutions that seamlessly blend innovation with reliability.
                    </p>
                    <div className='col-12 d-flex gap-3 mt-3'>
                        <Link to='/portfolio' onClick={() => setDisplayPage('Portfolio')} className='btn btn-outline-primary btn-lg'>View Portfolio</Link>
                        <Link to='/resume' onClick={() => setDisplayPage('Resume')} className='btn btn-outline-primary btn-lg'>View Resume</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
