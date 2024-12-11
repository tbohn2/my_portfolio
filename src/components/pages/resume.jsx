import React from 'react';
import '../../styles/resume.css'
import headshot from '../../assets/portrait5small.jpg'
import resume from '../../assets/Tanner_Bohn_Resume.pdf'

export default function Resume({ handleLoadedPage }) {
    return (
        <section className='fade-in col-12 d-flex flex-column align-items-center'>
            <a id='pdf-download' href={resume} download='Tanner_Bohn_Resume' className='my-3'>
                <button className='custom-btn col-12'>Download Resume</button>
            </a>
            <div className='bg-light p-1'>
                <div id='resume' className='d-flex flex-column work-sans p-1 border-dark-blue'>
                    <div id='resume-header' className='bg-dark-blue d-flex justify-content-between align-items-center col-12'>
                        <img src={headshot} alt='Tanner Bohn' onLoad={() => handleLoadedPage('Resume')} />
                        <div className='d-flex flex-column justify-content-center flex-grow-1 align-items-start px-2 pt-2 text-light'>
                            <h1>Tanner Bohn</h1>
                            <h2>Sofware Engineer</h2>
                            <p>Results-driven full-stack developer with expertise in building dynamic
                                web applications using <strong>ASP.NET Core</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>.
                                Proficient in enhancing user experiences and implementing secure authentication solutions. Experienced in delivering projects from concept to deployment, with a
                                focus on efficient data management and seamless <strong>frontend-backend integration</strong>.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-grow-1 col-12'>
                        <div id='left-column' className='d-flex flex-column flex-grow-1 mx-2'>
                            <ul id='contact' className='list-unstyled'>
                                <li><i className="bi bi-envelope"></i> tannerjbohn@gmail.com</li>
                                <li><a href="https://www.tannerbohn.me/"><i className="bi bi-globe"></i> tannerbohn.me</a></li>
                                <li><a href="https://github.com/tbohn2"><i className="bi bi-github"></i> github.com/tbohn2</a></li>
                                <li><i className="bi bi-geo-alt"></i> Mesa, AZ</li>
                            </ul>
                            <h2 className=''>Programming Languages</h2>
                            <ul className='skills'>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                                <li>SQL (Structured Query Language)</li>
                            </ul>
                            <h2>Frameworks and Tools</h2>
                            <ul className='skills'>
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
                            <ul className='skills'>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                            <h2>Core Technical Concepts</h2>
                            <ul className='skills'>
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>Functional Programming</li>
                                <li>ORM (Object-Relational Mapping)</li>
                                <li>RESTful APIs</li>
                                <li>MVC (Model-View-Controller)</li>
                            </ul>
                            <h2>Education</h2>
                            <ul className='list-unstyled'>
                                <li>
                                    <h4 className='my-0'>ASU Coding Bootcamp </h4>
                                    <p className='my-0'> Arizona State University </p>
                                    <p className='my-0 fst-italic'>Feb 2023-Aug 2023</p>
                                </li>
                                <li className='mt-2'>
                                    <h4 className='my-0'>Bachelor of Science </h4>
                                    <p className='my-0'>Biochemistry</p>
                                    <p className='my-0'> Arizona State University </p>
                                    <p className='my-0 fst-italic'>2016-2018, 2020-2022</p>
                                    <p className='my-0 fst-italic'>GPA: 4.00</p>
                                </li>
                            </ul>
                        </div>
                        <div id='right-column' className='d-flex flex-column flex-grow-1 px-2'>
                            <h2>Experience</h2>
                            <h3>Software Engineer</h3>
                            <h4>Solid Ground AZ (February 2024 - Present)</h4>
                            <ul>
                                <li>Developed a secure scheduling system using <strong>C#</strong>, <strong>ASP.NET
                                    Core</strong>, <strong>Razor Pages</strong>, and <strong>MySQL</strong>, leveraging <strong>Entity Framework Core</strong> for
                                    efficient and <strong>scalable database operations</strong>
                                </li>
                                <li>Designed normalized <strong> database schemas</strong>, created and executed <strong>LINQ</strong> queries
                                    for <strong>dynamic data manipulation</strong>, and managed <strong>database migrations</strong> to
                                    ensure <strong>data integrity</strong>
                                </li>
                                <li>Implemented <strong>JWT-based authentication</strong> and <strong>BCrypt password
                                    hashing</strong> for user data <strong>security</strong>
                                </li>
                                <li>Designed a <strong>responsive</strong> admin dashboard with <strong>jQuery</strong> for
                                    real-time schedule management,booking, and appointment notifications via <strong>SMTP
                                        integration</strong>
                                </li>
                                <li>Currently <strong>manage and maintain</strong> this project, ensuring <strong>ongoing
                                    improvements</strong> and <strong>smooth operation</strong> for the client</li>
                            </ul>


                            <h3 className='right-column-margins'>Front-End Web Developer</h3>
                            <h4>Ashley Bohn Photography (October 2023 - Present)</h4>
                            <ul>
                                <li>Created a photography portfolio site using <strong>React</strong> and <strong>Bootstrap</strong>,
                                    featuring <strong>responsive layouts</strong> and an <strong>optimized image gallery</strong>
                                </li>
                                <li>Implemented <strong>contact form submissions</strong> via <strong>EmailJS</strong> to send
                                    messages directly to the photographer</li>
                                <li><strong>Actively manage</strong> and update the website, ensuring it remains functional
                                    and <strong>visually appealing</strong> for the client
                                </li>
                            </ul>

                            <h3 className='right-column-margins'>Software Engineer</h3>
                            <h4>Plate Planner (October 2023 - March 2024)</h4>
                            <ul>
                                <li>Built a meal planning and grocery app using the <strong>MERN
                                    stack</strong> and <strong>GraphQL</strong> for flexible querying and efficient data
                                    fetching</li>
                                <li>Designed <strong>database schemas</strong> for managing recipes,
                                    ingredients, and shopping lists, ensuring <strong>data
                                        integrity</strong> and optimizing <strong>MongoDB</strong> queries with <strong>aggregation
                                            pipelines</strong></li>
                                <li>Integrated <strong>JWT</strong> for <strong>secure authentication</strong> and developed
                                    dynamic <strong>recipe management</strong> with shopping lists
                                </li>
                                <li>Utilized <strong>Vite</strong> + <strong>React</strong> for efficient development and designed
                                    a <strong>responsive interface</strong>
                                </li>
                                <li>Built as a <strong>personal project</strong> to enhance <strong>full-stack
                                    development</strong> and <strong>database management</strong> skills</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
