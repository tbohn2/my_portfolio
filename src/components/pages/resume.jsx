import React from 'react';
import '../../styles/resume.css'
import headshot from '../../assets/portrait5small.jpg'
import resume from '../../assets/resume.pdf'

export default function Resume({ handleLoadedPage }) {
    return (
        <section className='fade-in col-12 d-flex flex-column align-items-center'>
            <a id='pdf-download' href={resume} download='Tanner Bohn Resume' className='my-3'>
                <button className='custom-btn col-12'>Download Resume</button>
            </a>
            <div className='bg-light p-1'>
                <div id='resume' class='d-flex flex-column work-sans p-1 border-dark-blue'>
                    <div id='resume-header' class='bg-dark-blue d-flex justify-content-between align-items-center col-12'>
                        <img src={headshot} alt='Tanner Bohn' onLoad={() => handleLoadedPage('Resume')} />

                        <div class='d-flex flex-column justify-content-center flex-grow-1 align-items-start px-2 pt-2 text-light'>
                            <h1>Tanner Bohn</h1>
                            <h2>Full-Stack Web Developer</h2>
                            <p>Results-driven developer skilled in dynamic web applications using ASP.NET Core, React, Node.js,
                                MySQL, and MongoDB.
                                Proven success in enhancing user experiences and streamlining scheduling systems, implementing
                                secure authentication, and delivering projects from concept to deployment.
                                Focused on efficient data management and effective frontend-backend integration.
                            </p>
                        </div>
                    </div>
                    <div class='d-flex flex-grow-1 col-12'>
                        <div id='left-column' class='d-flex flex-column flex-grow-1 mx-2'>
                            <ul id='contact' class='list-unstyled'>
                                <li><i class="bi bi-envelope"></i> tannerjbohn@gmail.com</li>
                                <li><a href="https://www.tannerbohn.me/"><i class="bi bi-globe"></i> tannerbohn.me</a></li>
                                <li><a href="https://github.com/tbohn2"><i class="bi bi-github"></i> github.com/tbohn2</a></li>
                                <li><i class="bi bi-geo-alt"></i> Mesa, AZ</li>
                            </ul>
                            <h2 class=''>Programming Languages</h2>
                            <ul class='skills'>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                                <li>SQL (Structured Query Language)</li>
                            </ul>
                            <h2>Frameworks and Tools</h2>
                            <ul class='skills'>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>ASP.NET Core</li>
                                <li>Entity Framework Core</li>
                                <li>Vite</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>EmailJS</li>
                                <li>Git/GitHub</li>
                                <li>BCrypt</li>
                                <li>JSON Web Tokens (JWT)</li>
                            </ul>
                            <h2>Databases</h2>
                            <ul class='skills'>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                            <h2>Core Technical Concepts</h2>
                            <ul class='skills'>
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>Functional Programming</li>
                                <li>RESTful APIs</li>
                                <li>MVC (Model-View-Controller)</li>
                            </ul>
                            <h2>Education</h2>
                            <ul class='list-unstyled'>
                                <li>
                                    <h4 class='my-0'>ASU Coding Bootcamp </h4>
                                    <p class='my-0'> Arizona State University </p>
                                    <p class='my-0 fst-italic'>Feb 2023-Aug 2023</p>
                                </li>
                                <li class='mt-2'>
                                    <h4 class='my-0'>Bachelor of Science </h4>
                                    <p class='my-0'>Biochemistry</p>
                                    <p class='my-0'> Arizona State University </p>
                                    <p class='my-0 fst-italic'>2016-2018, 2020-2022</p>
                                    <p class='my-0 fst-italic'>GPA: 4.00</p>
                                </li>
                            </ul>
                        </div>
                        <div id='right-column' class='d-flex flex-column flex-grow-1 px-2'>
                            <h2>Experience</h2>
                            <h3>Full-Stack Web Developer</h3>
                            <h4>Solid Ground AZ (February 2024 - Present)</h4>
                            <ul>
                                <li>Developed a scheduling system using ASP.NET Core, Razor Pages, and MySQL for yoga instructors
                                    and clients</li>
                                <li>Implemented JWT-based authentication and BCrypt password hashing</li>
                                <li>Designed a responsive admin dashboard with jQuery for real-time schedule management and booking
                                </li>
                            </ul>

                            <h3 class='right-column-margins'>Full-Stack Web Developer</h3>
                            <h4>Plate Planner (October 2023 - Present)</h4>
                            <ul>
                                <li>Built a meal planning and grocery app with the MERN stack and GraphQL for flexible querying</li>
                                <li>Integrated JWT for secure authentication and developed recipe management with dynamic shopping
                                    lists</li>
                                <li>Utilized Vite + React for efficient development and designed a responsive interface</li>
                            </ul>

                            <h3 class='right-column-margins'>Front-End Web Developer</h3>
                            <h4>Ashley Bohn Photography (October 2023 - Present)</h4>
                            <ul>
                                <li>Created a photography portfolio site using React and Bootstrap, featuring responsive layouts and
                                    an optimized image gallery</li>
                                <li>Implemented contact form submissions via EmailJS to send messages directly to the photographer
                                </li>
                            </ul>

                            {/* <h2 class="other-exp">Other Experience</h2> */}
                            <h3>Dental Assistant</h3>
                            <h4>My Dental Dentistry & Implants (April 2021 - April 2024)</h4>
                            <ul>
                                <li><strong>Effective Communication:</strong> Coordinated communication between doctors and
                                    patients, ensuring clarity in technical details</li>
                                <li><strong>Team Collaboration:</strong> Worked with a team to meet tight deadlines</li>
                                <li><strong>Case Tracking & Coordination:</strong> Managed and tracked cases, maintaining
                                    correspondence with labs for timely deliveries</li>
                            </ul>

                            <h3 class='right-column-margins'>Sign Installation</h3>
                            <h4>SpellItOut Company (May 2020 - April 2021)</h4>
                            <ul>
                                <li><strong>Client-Centered Design:</strong> Designed sign layouts based on client requests</li>
                                <li><strong>Attention to Detail:</strong> Ensured meticulous installation of signs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
