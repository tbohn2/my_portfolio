import React from 'react';
import '../../styles/resume.css'
import headshot from '../../assets/portrait3.jpg'
import resume from '../../assets/resume.pdf'

export default function Resume({ handleLoadedPage }) {
    return (
        <section className='fade-in col-12 d-flex flex-column align-items-center'>
            <a id='pdf-download' href={resume} download='Tanner Bohn Resume' className='my-3'>
                <button className='custom-btn col-12'>Download Resume</button>
            </a>
            <div id='resume' className='d-flex flex-column work-sans bg-dark-blue border border-light p-2'>
                <div id='resume-header' className='bg-dark-blue border border-light d-flex justify-content-between align-items-center col-12'>
                    <img src={headshot} alt='Tanner Bohn' onLoad={() => handleLoadedPage('Resume')} />
                    <div className='d-flex flex-column align-items-start px-2 text-light'>
                        <h1>Tanner Bohn</h1>
                        <h2>Full-Stack Web Developer</h2>
                        <p>Results-driven developer skilled in building dynamic, responsive web applications using ASP.NET Core, React, Node.js, MySQL, and MongoDB.
                            Proven success in enhancing user experiences, streamlining scheduling systems, and integrating secure authentication.
                            Experienced in delivering projects from concept to deployment with a focus on efficient data management and frontend-backend integration.
                        </p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 bg-light col-12'>
                    <div id='left-column' className='mx-2 pt-2'>
                        <ul id='contact' className='list-unstyled'>
                            <li><i className="bi bi-envelope"></i> tannerbohndev@gmail.com</li>
                            <li><i className="bi bi-window"></i> Porfolio URL</li>
                            <li><i className="bi bi-geo-alt"></i> Mesa, AZ</li>
                            <li><i className="bi bi-github"></i> https://github.com/tbohn2</li>
                        </ul>
                        <h2>Languages</h2>
                        <div className='skills d-flex flex-wrap '>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>C#</p>
                            <p>SQL</p>
                        </div>
                        <h2>Technologies</h2>
                        <div className='skills d-flex flex-wrap '>
                            <p>REACT</p>
                            <p>Node.JS</p>
                            <p>ASP.NET Core</p>
                            <p>MySQL</p>
                            <p>MongoDB</p>
                            <p>GraphQL</p>
                            <p>Entity Framework Core</p>
                            <p>jQuery</p>
                            <p>Git/GitHub</p>
                            <p>Bootstrap</p>
                            <p>Vite</p>
                            <p>JWT</p>
                            <p>EmailJS</p>
                        </div>
                        <h2>Other Skills</h2>
                        <div className='skills d-flex flex-wrap '>
                            <p>Spanish</p>
                            <p>Adaptability</p>
                            <p>Communication</p>
                            <p>Analytical thinking</p>
                            <p>Attention to detail</p>
                        </div>
                        <h2>Education</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <h4 className='my-0'>Bachelor of Science </h4>
                                <p className='my-0'>Biochemistry</p>
                                <p className='my-0'> Arizona State University </p>
                                <p className='my-0 fst-italic'>2016-2018, 2020-2022</p>
                                <p className='my-0 fst-italic'>GPA: 4.00</p>
                            </li>
                            <li className='mt-1'>
                                <h4 className='my-0'>ASU Coding Bootcamp </h4>
                                <p className='my-0'> Arizona State University </p>
                                <p className='my-0 fst-italic'>Feb 2023-Aug 2023</p>
                            </li>
                        </ul>
                    </div>
                    <div className='border-start border-dark px-2'>
                        <h2>Experience</h2>
                        <h3>Full-Stack Web Developer</h3>
                        <h4>Solid Ground AZ (April 2024 - Present)</h4>
                        <ul>
                            <li>Developed a scheduling system using ASP.NET Core, Razor Pages, and MySQL for yoga instructors and clients</li>
                            <li>Implemented JWT-based authentication and BCrypt password hashing</li>
                            <li>Designed a responsive admin dashboard with jQuery for real-time schedule management and booking</li>
                        </ul>

                        <h3 className='mt-2'>Full-Stack Web Developer</h3>
                        <h4>Plate Planner (October 2023 - Present)</h4>
                        <ul>
                            <li>Built a meal planning and grocery app with the MERN stack and GraphQL for flexible querying</li>
                            <li>Integrated JWT for secure authentication and developed recipe management with dynamic shopping lists</li>
                            <li>Utilized Vite + React for efficient development and designed a responsive interface</li>
                        </ul>

                        <h3 className='mt-2'>Front-End Web Developer</h3>
                        <h4>Ashley Bohn Photography (October 2023 - Present)</h4>
                        <ul>
                            <li>Created a photography portfolio site using React and Bootstrap, featuring responsive layouts and an optimized image gallery</li>
                            <li>Implemented contact form submissions via EmailJS to send messages directly to the photographer</li>
                        </ul>

                        <h2>Other Experience</h2>
                        <h3>Dental Assistant</h3>
                        <h4>My Dental Dentistry and Implants (April 2021 - April 2024)</h4>
                        <ul>
                            <li><strong>Effective Communication:</strong> Coordinated communication between doctors and patients, ensuring clarity in technical details</li>
                            <li><strong>Team Collaboration:</strong> Worked with a team to meet tight deadlines</li>
                            <li><strong>Case Tracking & Coordination:</strong> Managed and tracked cases, maintaining correspondence with labs for timely deliveries</li>
                        </ul>

                        <h3 className='mt-2'>Sign Installation</h3>
                        <h4>SpellItOut Company (May 2020 - April 2021)</h4>
                        <ul>
                            <li><strong>Client-Centered Design:</strong> Designed sign layouts based on client requests</li>
                            <li><strong>Attention to Detail:</strong> Ensured meticulous installation of signs</li>
                        </ul>

                        {/* <h3>Missionary</h3>
                        <h4>The Church of Jesus Christ of Latter-Day Saints in Paraguay (February 2018 - February 2020)</h4>
                        <ul>
                            <li><strong>Continuous Learning:</strong> Constantly learned a new language (Spanish), showing adaptability and the ability to quickly pick up new skills—valuable in web development for learning new frameworks or technologies.</li>
                            <li><strong>Leadership & Coordination:</strong> Led and managed up to 16 volunteers, reflecting project management and leadership in coordinating development teams or tasks.</li>
                            <li><strong>Public Outreach:</strong> Delivered clear, concise messages to communities, similar to presenting project progress or communicating technical solutions to clients.</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
