import React from 'react';
import '../../styles/aboutMe.css'
import pic from '../../assets/portrait.jpg'

// Returns About Me page
export default function AboutMe() {
    return (
        <section id="aboutMeBody" className='d-flex justify-content-evenly col-10 pt-5'>
            <div id='home-left' className="col-5 d-flex flex-column justify-content-evenly pt-5 px-3">
                <h1 className="name">Hi, I'm <span className='fw-normal text-light'>Tanner</span></h1>
                <h2 className="">FULL-STACK WEB DEVELOPER</h2>
                <p className='text-light fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolor quidem magni provident rerum. Odio nulla illo, voluptates soluta, placeat fuga cumque autem, aperiam quos ratione exercitationem excepturi? Maiores, velit!</p>
            </div>
            <img src={pic} alt='' className='myImg'></img>
        </section>
    );
}
