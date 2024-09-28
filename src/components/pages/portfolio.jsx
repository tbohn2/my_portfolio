import React, { useState, useEffect, useRef } from 'react';
import '../../styles/portfolio.css'
import ashleyPhoto from '../../assets/ashley-photo.png'
import ashleyPhoto2 from '../../assets/ashley-photo2.png'
import platePlannerImage from '../../assets/plate-planner.png'
import platePlannerImage2 from '../../assets/plate-planner2.png'
import solidGroundImage from '../../assets/solid-g.png'
import solidGroundImage2 from '../../assets/solid-g2.png'

export default function Portfolio() {

    const [details, setDetails] = useState(null);

    const detailsRefs = useRef({});

    useEffect(() => {
        const handleClickOutside = (event) => {
            let targetElement = event.target;

            let isClickOutside = true;
            while (targetElement) {
                if (targetElement.id === details?.id?.toString()) {
                    isClickOutside = false;
                    break;
                }
                targetElement = targetElement.parentElement;
            }

            if (isClickOutside) {
                setDetails(null);
            }
        };

        if (details) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [details]);

    const projects = [
        {
            id: 1,
            title: 'Ashley Bohn Photography',
            description: 'Ashley Photography is a web application created for photographer Ashley Bohn. It showcases her work, including her biography, pricing, and portfolio. The application allows users to contact her through a form submission using EmailJS, which sends their message directly to her email.',
            features: [`View the photographer's biography`,
                'Browse through the photography portfolio.',
                'Check pricing for various services.',
                'Contact form submission via EmailJS.'],
            languages: 'JavaScript, HTML, CSS',
            tech: 'Vite, React, Bootstrap, EmailJS',
            challenges: ['Creating a responsive design that looks good on all devices',
                'Implementing form submission to directly email the photographer via EmailJS',
                'Ensuring the gallery loads efficiently while maintaining high-quality image displays'],
            role: 'Full-stack developer: Designed and developed the frontend using React and Vite, integrated EmailJS for form handling, and coordinated with the photographer to meet design needs.',
            imgURL: ashleyPhoto,
            imgURL2: ashleyPhoto2,
            siteURL: 'https://tbohn2.github.io/ashley-photo/',
            gitURL: 'https://github.com/tbohn2/ashley-photo'
        },
        {
            id: 2,
            title: 'Plate Planner',
            description: 'Plate Planner is a web application designed to streamline meal planning and grocery shopping. It integrates the MERN stack (MongoDB, Express, React, Node.js) with GraphQL for flexible data querying and Vite for a fast and efficient development experience.',
            features: [
                'User authentication and authorization',
                'Shopping list management',
                'Recipe search and creation',
                'Responsive design'
            ],
            languages: 'JavaScript, HTML, CSS',
            tech: 'MERN Stack (MongoDB, Express, React, Node.js), Vite, GraphQL, Apollo Client, JWT Decode, React Router DOM, Bootstrap',
            challenges: [
                'Integrating GraphQL with both the front and backend for efficient data querying',
                'Implementing user authentication and authorization using JWT',
                'Ensuring smooth user experience across devices with responsive design',
                'Handling user recipes and transforming them into shopping lists'
            ],
            role: 'Full-stack developer: Developed both frontend and backend using React, Node.js, Express, and MongoDB. Implemented GraphQL for data queries and designed user authentication with JWT.',
            imgURL: platePlannerImage,
            imgURL2: platePlannerImage2,
            siteURL: 'https://tbohn2.github.io/plate-planner/',
            gitURL: 'https://github.com/tbohn2/plate-planner',
            login: 'Username: test, Password: testtest'
        },
        {
            id: 3,
            title: 'Solid Ground AZ',
            description: 'Solid Ground AZ\'s Stretch Scheduler is a full-stack web application designed to manage yoga instructor schedules, clients, and appointments. Built using ASP.NET Core with Razor Pages and MySQL, it offers a responsive and efficient solution for scheduling management.',
            features: [
                'User Authentication with JWT',
                'Schedule Management for yoga instructors',
                'Client Booking system for appointment scheduling',
                'Admin Dashboard for managing schedules and appointments',
                'Dynamic frontend with jQuery for interactive user experiences'
            ],
            languages: 'C#, HTML, JavaScript, SQL',
            tech: 'ASP.NET Core 8.0, Razor Pages, MySQL, Entity Framework Core, Pomelo.EntityFrameworkCore.MySql, jQuery',
            challenges: [
                'Implementing secure authentication with JWT and password hashing using BCrypt',
                'Real-time schedule updates and appointment booking for both instructors and clients',
                'Building a responsive and dynamic frontend with jQuery for smooth user interaction'
            ],
            role: 'Full-stack developer: Developed the backend using ASP.NET Core and MySQL, implemented JWT-based authentication, and created a dynamic frontend with jQuery for schedule and appointment management.',
            imgURL: solidGroundImage,
            imgURL2: solidGroundImage2,
            siteURL: 'https://solidgroundaz.com/',
            gitURL: 'https://github.com/tbohn2/solid-ground-az',
            adminSiteURL: 'https://solidgroundaz.com/admin',
            login: 'Username: test, Password: testtest',
        }
    ];

    return (
        <div className='fade-in mt-5 col-12 d-flex flex-wrap justify-content-evenly'>
            {projects.map(project => (
                <div className='card-container'>
                    <div className='project-card roboto' onClick={() => setDetails(project)}>
                        <img src={project.imgURL} alt={`${project.title} Screenshot`} />
                        <h2>{project.title}</h2>
                    </div>
                </div>
            ))}
            {details && (
                <div className='proj-details fade-in d-flex' ref={el => (detailsRefs.current[details.id] = el)} id={details.id}>
                    <span className='close fs-3' onClick={() => setDetails(null)}>✕</span>
                    <div className='col-4 d-flex flex-column align-items-center'>
                        <img className='col-12 my-2' src={details.imgURL} alt={`${details.title} Screenshot`} />
                        <img className='col-12 my-2' src={details.imgURL2} alt={`${details.title} Screenshot 2`} />
                        <div className='col-12 d-flex justify-content-evenly my-3 fs-5'>
                            <a className='col-5 custom-btn text-decoration-none text-center' href={details.siteURL}>Visit Site</a>
                            <a className='col-5 custom-btn text-decoration-none text-center' href={details.gitURL}>Visit Repository</a>
                        </div>
                        {details.adminSiteURL && (
                            <a className='col-5 custom-btn text-decoration-none text-center my-3 fs-5' href={details.adminSiteURL}>Visit Admin Site</a>
                        )}
                        {details.login && (
                            <div className='d-flex flex-column align-items-center'>
                                <h3>Test Login:</h3>
                                <p>{details.login}</p>
                            </div>
                        )}
                    </div>
                    <div className='col-8 px-3'>
                        <h1 className='col-12 text-center'>{details.title}</h1>
                        <p className='col-12'>{details.description}</p>
                        <h3>Languages:</h3>
                        <p>{details.languages}</p>
                        <h3>Technologies:</h3>
                        <p>{details.tech}</p>
                        <h3>Role:</h3>
                        <p>{details.role}</p>
                        <h3>Features:</h3>
                        <ul>
                            {details.features.map(feature => (
                                <li>{feature}</li>
                            ))}
                        </ul>
                        <h3>Challenges:</h3>
                        <ul>
                            {details.challenges.map(challenge => (
                                <li>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}