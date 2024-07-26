import React from 'react';
import '../../styles/aboutMe.css'
import pic from '../../assets/portrait2.png'

// Returns About Me page
export default function AboutMe() {
    return (
        <section id="aboutMeBody" className='d-flex justify-content-between roboto col-11 pt-5'>
            <div id='home-left' className="col-6 d-flex flex-column">
                <h1 className="">Hi, I'm <span>Tanner</span></h1>
                <h2 className="">FULL-STACK WEB DEVELOPER</h2>
                <p className='text-light fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolor quidem magni provident rerum. Odio nulla illo, voluptates soluta, placeat fuga cumque autem, aperiam quos ratione exercitationem excepturi? Maiores, velit!</p>
                <img src={pic} alt='' className='myImg align-self-center'></img>
            </div>
        </section>
    );
}
