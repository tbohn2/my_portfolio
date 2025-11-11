import React, { useEffect } from 'react';
import '../../styles/resume.css'
import resume from '../../assets/Tanner_Bohn_Resume.pdf'

export default function Resume({ handleLoadedPage }) {
    useEffect(() => {
        handleLoadedPage('Resume');
    }, [handleLoadedPage]);

    return (
        <section className='fade-in col-12 d-flex flex-column align-items-center'>
            <a id='pdf-download' href={resume} download='Tanner_Bohn_Resume' className='my-3'>
                <button className='custom-btn col-12'>Download Resume</button>
            </a>
            <div id='resume' className='d-flex flex-column work-sans'>
                <div className='d-flex flex-grow-1 col-12'>
                    <div id='left-column' className='d-flex flex-column flex-grow-1 mx-2'>

                        <div id='resume-header' className='bg-dark-blue text-light text-center py-2'>
                            <h1 className='mb-0'>Tanner Bohn</h1>
                            <h2 className='fw-light mb-2'>Software Engineer</h2>
                            <ul id='contact' className='list-unstyled mb-0'>
                                <li><i className="bi bi-envelope"></i> tannerjbohn@gmail.com</li>
                                <li><a className='text-light' href="https://www.tannerbohn.com/"><i className="bi bi-globe"></i>
                                    tannerbohn.com</a></li>
                                <li><a className='text-light' href="https://github.com/tbohn2"><i className="bi bi-github"></i>
                                    github.com/tbohn2</a></li>
                                <li><i className="bi bi-geo-alt"></i> Mesa, AZ</li>
                            </ul>
                        </div>

                        <h2>Programming Languages</h2>
                        <ul className='skills'>
                            <li>JavaScript / TypeScript / Python</li>
                            <li>C# / HTML5 / CSS3</li>
                        </ul>

                        <h2>Frameworks & Tools</h2>
                        <ul className='skills'>
                            <li>React / Next.js / Node.js / Express.js</li>
                            <li>Django / ASP.NET Core / Vite</li>
                            <li>GraphQL / jQuery</li>
                            <li>Bootstrap / Tailwind CSS</li>
                            <li>Git / GitHub</li>
                        </ul>

                        <h2>Databases</h2>
                        <ul className='skills'>
                            <li>MySQL / PostgreSQL / MongoDB</li>
                        </ul>

                        <h2>Additional Skills</h2>
                        <ul className='skills'>
                            <li>ORM (Entity Framework / Mongoose)</li>
                            <li>Authentication & Security (JWT / OAuth / BCrypt)</li>
                            <li>CI/CD (Vercel / Render / AWS)</li>
                            <li>Payment Integration (Stripe)</li>
                            <li>Agile Development</li>
                        </ul>

                        <h2>Education</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <h4 className='my-0'>ASU Coding Bootcamp</h4>
                                <p className='my-0'>Arizona State University</p>
                                <p className='my-0 fst-italic'>Feb 2023 – Aug 2023</p>
                            </li>
                            <li className='mt-2'>
                                <h4 className='my-0'>Bachelor of Science, Biochemistry</h4>
                                <p className='my-0'>Arizona State University</p>
                                <p className='my-0 fst-italic'>2016–2018, 2020–2022</p>
                                <p className='my-0 fst-italic'>GPA: 4.00</p>
                            </li>
                        </ul>

                    </div>

                    <div id='right-column' className='d-flex flex-column justify-content-between flex-grow-1 px-2 pb-2'>

                        <h2 className='bg-dark-blue text-light text-center'>Professional Experience</h2>
                        <h3>Software Engineer Intern | TruNeighbor</h3>
                        <h4>May 2025 – Aug 2025</h4>
                        <ul>
                            <li>Engineered 10+ <strong>REST API endpoints</strong> and backend modules
                                (<strong>Node.js</strong>) within a 7-person <strong>Agile</strong> team, powering core platform
                                functionality</li>
                            <li>Implemented a <strong>CI/CD pipeline</strong> to run a <strong>Python</strong>
                                data ingestion script, streamlining updates to <strong>AWS EC2</strong> servers</li>
                            <li>Optimized data workflows through automation, increasing update frequency to bi-daily and
                                reducing redundancy by 25%</li>
                        </ul>

                        <h2 className='mt-3 bg-dark-blue text-light text-center'>Freelance Experience</h2>

                        <h3>Full-Stack Developer | Hentges Dental</h3>
                        <h4>Aug 2025 – Present | <a href="https://www.hentgesdental.com/">hentgesdental.com</a></h4>
                        <ul>
                            <li>Developed clinic website (<strong>Next.js</strong>, <strong>Tailwind CSS</strong>) with SEO
                                optimization and validated appointment forms</li>
                            <li>Built secure authentication and admin dashboard for appointment management</li>
                        </ul>

                        <h3>Full-Stack Developer | Bohn Voyage</h3>
                        <h4>Aug 2025 – Present | <a href="https://bohn-voyage.vercel.app/">bohn-voyage.vercel.app</a> (WIP)</h4>
                        <ul>
                            <li>Architected booking platform (<strong>Next.js</strong>, <strong>Django REST API</strong>,
                                <strong>PostgreSQL</strong>, <strong>Tailwind</strong>)
                            </li>
                            <li>Implemented multi-step booking, magic link authentication, <strong>Stripe</strong> payments, and
                                <strong>OpenAI</strong> integration
                            </li>
                            <li>Deployed to <strong>Vercel</strong> and <strong>Render</strong> with secure account management
                            </li>
                        </ul>

                        <h3>Full-Stack Developer | Solid Ground AZ</h3>
                        <h4>Feb 2024 – Jun 2025 | <a href="https://www.solidgroundaz.site/">solidgroundaz.site</a></h4>
                        <ul>
                            <li>Built scheduling system (<strong>C#</strong>, <strong>ASP.NET Core</strong>, <strong>Razor
                                Pages</strong>, <strong>MySQL</strong>) with normalized schemas and <strong>LINQ</strong>
                                queries</li>
                            <li>Implemented authentication (<strong>BCrypt</strong>) and responsive admin dashboard
                                (<strong>jQuery</strong>, <strong>SMTP</strong>)</li>
                        </ul>

                        <h2 className='mt-3 bg-dark-blue text-light text-center'>Personal Projects</h2>

                        <h3>Full-Stack Developer | Plate Planner</h3>
                        <h4>Oct 2023 – Mar 2024 | <a href="https://www.plateplanner.site/">plateplanner.site</a></h4>
                        <ul>
                            <li>Built meal-planning app (<strong>MERN</strong>, <strong>GraphQL</strong>) with
                                <strong>MongoDB</strong> schemas for recipes and shopping lists
                            </li>
                            <li>Developed responsive frontend (<strong>Vite</strong>, <strong>React</strong>) with dynamic
                                recipe and list management</li>
                        </ul>

                        <h3>Front-End Developer | Ashley Bohn Photography</h3>
                        <h4>Oct 2023 – Oct 2024 | <a href="https://www.ashleybohnphoto.site/">ashleybohnphoto.site</a></h4>
                        <ul>
                            <li>Developed responsive photography portfolio (<strong>React</strong>, <strong>Bootstrap</strong>)
                                with optimized image gallery and <strong>EmailJS</strong> contact form</li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    );
}
