import React from 'react';
import '../../styles/resume.css'

export default function AboutMe() {
    return (
        <section className='mt-5 p-1 col-8 border border-light d-flex flex-column align-items-center'>
            <div className='d-flex flex-column align-items-center text-light border border-light col-12'>
                <h1 className='resName'>Tanner Bohn</h1>
                <h2>Full-Stack Web Developer</h2>
            </div>
            <div className='d-flex bg-light col-12'>
                <div className='border-end border-dark ms-3 px-3 col-3'>
                    <h2>Contact</h2>
                    <ul>
                        <li>tanner.bohn@yahoo.com</li>
                        <li>(480)-294-3030</li>
                        <li>https://github.com/tbohn2</li>
                    </ul>
                    <h2>Skills</h2>
                    <ul>
                        <li>tanner.bohn@yahoo.com</li>
                        <li>480-294-3030</li>
                        <li>https://github.com/tbohn2</li>
                    </ul>
                    <h2>Education</h2>
                    <ul>
                        <li>tanner.bohn@yahoo.com</li>
                        <li>480-294-3030</li>
                        <li>https://github.com/tbohn2</li>
                    </ul>
                </div>

            </div>

        </section>
    );
}
