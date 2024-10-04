import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/aboutMe.css'
import pic from '../../assets/portrait2.png'

export default function AboutMe({ mobile, setDisplayPage }) {

    return (
        <section id="aboutMeBody" className='fade-in roboto'>
            <div id='aboutMeContent' className='col-12 d-flex justify-content-center align-items-start'>
                <div id="aboutText" className='col-md-7 col-11 me-3'>
                    <h1 className="my-0 work-sans">Tanner Bohn</h1>
                    {mobile &&
                        <img src={pic} alt='' className='myImg my-3 align-self-center'></img>
                    }
                    <h2 className="">FULL-STACK WEB DEVELOPER</h2>
                    <p className='text-light fs-5 col-12'>
                        I bring ideas to life through clean code and responsive design.
                        Whether it's creating interactive interfaces or ensuring backend efficiency,
                        I strive to deliver solutions that balance performance with creativity.
                    </p>
                    <p className='text-light fs-5 col-12'>
                        Feel free to explore my <Link to='/portfolio' onClick={() => setDisplayPage('Portfolio')}>portfolio</Link> and <Link to='/contact' onClick={() => setDisplayPage('Contact')}>get in touch</Link> for collaborations or inquiries!
                    </p>
                </div>
                {!mobile &&
                    <img src={pic} alt='' className='myImg ms-3'></img>
                }
            </div>
        </section>
    );
}
