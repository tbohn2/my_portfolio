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
                <div className='ms-3 col-3'>
                    <h2>Contact</h2>
                    <ul>
                        <li>tanner.bohn@yahoo.com</li>
                        <li>(480)-294-3030</li>
                        <li>https://github.com/tbohn2</li>
                    </ul>
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Node.JS</li>
                        <li>REACT</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                    <h2>Education</h2>
                    <ul>
                        <li>Bachelor of Science <br></br> Biochemistry <br></br> Arizona State University <br></br> 2016-2018, 2020-2022 </li>
                    </ul>
                </div>
                <div className='mx-3 ps-3 border-start border-dark'>
                    <h2>Work Experience</h2>
                    <h3>Dental Assistant</h3>
                    <p>My Dental Dentistry and Implants (April 2021-Current)</p>
                    <ul>
                        <li>Effectively communicated needs and/or issues between doctors and patients</li>
                        <li>Worked in a team to ensure patients leave in a timely manner</li>
                        <li>Assisted in general dentisty including fillings, crowns, extractions, and impant placement</li>
                        <li>Tracked incoming dental cases and maintained correspondence with dental labs to coordinate puntual delivery</li>
                    </ul>
                    <h3>Sign Installation</h3>
                    <p>SpellItOut Company (May 2020-April 2021)</p>
                    <ul>
                        <li>Meticulously installed signs in clients' yards for celebrations such as birthdays or graduations</li>
                        <li>Designed layout of signs to best match the requests of the client</li>
                    </ul>
                    <h3>Missionary</h3>
                    <p>The Church of Jesus Christ of Latter-Day Saints in Paraguay (February 2018-February 2020)</p>
                    <ul>
                        <li>Constantly studied to increase knowledge of local language (Spanish) to improve ability for public outreach</li>
                        <li>Developed relationships with local community members and organizations</li>
                        <li>Worked in pairs to deliver clear, concise messages and invitations</li>
                        <li>Directed, oversaw, and coordinated the service of up to 16 volunteers</li>
                    </ul>
                    <h3>Delivery Driver</h3>
                    <p>Jimmy John’s Gourmet Sandwiches (June 2016-Februrary 2018)</p>
                    <ul>
                        <li>Answered phones and recorded customer orders</li>
                        <li>Coordinated with team members to deliver product in a timely manner</li>
                    </ul>
                </div>

            </div>

        </section>
    );
}
