import React, { useState, useEffect, useRef } from 'react';
import '../../styles/portfolio.css'
import ashleyPhoto from '../../assets/ashley-photo.png'
import ashleyPhoto2 from '../../assets/ashley-photo2.png'
import platePlannerImage from '../../assets/plate-planner.png'
import platePlannerImage2 from '../../assets/plate-planner2.png'
import solidGroundImage from '../../assets/solid-g.png'
import solidGroundImage2 from '../../assets/solid-g2.png'
import hentgesDentalImage from '../../assets/hentges-dental.png'
import hentgesDentalImage2 from '../../assets/hentges-dental2.png'
import bohnVoyageImage from '../../assets/bohn-voyage.png'
import bohnVoyageImage2 from '../../assets/bohn-voyage2.png'

export default function Portfolio({ mobile, handleLoadedPage }) {

    const [details, setDetails] = useState(null);
    const [closing, setClosing] = useState(false);
    const [projLoaded, setProjLoaded] = useState([]);

    const detailsRefs = useRef({});
    const imageRefs = useRef([]);
    const loadedImagesRef = useRef(new Set());

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
                handleClose();
            }
        };

        if (details) {
            document.body.style.overflow = 'hidden';

            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [details]);

    useEffect(() => {
        // Reset loaded state when component mounts
        setProjLoaded([]);
        loadedImagesRef.current.clear();

        // Check if images are already loaded (cached) when component mounts
        const checkCachedImages = () => {
            imageRefs.current.forEach((imgRef, index) => {
                if (imgRef && imgRef.complete && imgRef.naturalHeight !== 0) {
                    if (!loadedImagesRef.current.has(index)) {
                        loadedImagesRef.current.add(index);
                        handledLoadedProject(index);
                    }
                }
            });
        };

        // Small delay to ensure refs are set
        const timer = setTimeout(() => {
            checkCachedImages();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (projLoaded.length === projects.length) {
            handleLoadedPage('Portfolio');
        }
    }, [projLoaded]);

    const projects = [
        {
            id: 4,
            title: 'Hentges Dental',
            description: 'Hentges Dental is a modern dental clinic website built with Next.js, designed to provide information, streamline patient appointment requests, and improve online visibility through robust SEO. The platform supports secure authentication and an intuitive admin panel for managing patient requests.',
            features: [
                'Patient appointment request scheduling',
                'Comprehensive service and dentist information',
                'Responsive, accessible design',
                'Admin dashboard for managing appointment requests'
            ],
            languages: ['JavaScript', 'HTML', 'CSS'],
            tech: ['Next.js', 'React', 'JWT Authentication', 'Tailwind CSS', 'SEO Optimization'],
            challenges: [
                'Implementing JWT authentication for secure access to the admin dashboard',
                'Enhancing SEO using Next.js best practices (meta tags, sitemap, clean URLs)',
                'Building a robust, validated patient appointment request form',
                'Balancing dynamic interactivity with static site optimization for speed'
            ],
            role: [
                'Developed the site architecture using Next.js and React',
                'Built secure patient request workflows and authentication with JWT',
                'Implemented SEO techniques for improved search rankings',
                'Designed and styled responsive components with Tailwind CSS'
            ],
            imgURL: hentgesDentalImage,
            imgURL2: hentgesDentalImage2,
            siteURL: 'https://www.hentgesdental.com/',
            gitURL: 'https://github.com/tbohn2/hentges_dental'
        },
        {
            id: 3,
            title: 'Solid Ground AZ',
            description: 'Solid Ground AZ is a full-stack web application designed to manage yoga instructor schedules, clients, and appointments. Built using ASP.NET Core with Razor Pages and MySQL, it offers a responsive and efficient solution for scheduling management.',
            features: [
                'User Authentication with JWT',
                'Schedule Management for yoga instructors',
                'Client Booking system for appointment scheduling',
                'Admin Dashboard for managing schedules and appointments',
                'Dynamic frontend with jQuery for interactive user experiences'
            ],
            languages: ['C#', 'HTML', 'JavaScript', 'SQL'],
            tech: ['ASP.NET Core 8.0', 'Razor Pages', 'MySQL', 'Entity Framework Core', 'jQuery'],
            challenges: [
                'Implementing secure authentication with JWT and password hashing using BCrypt',
                'Encrypting user data to ensure confidentiality and security',
                'Real-time schedule updates and appointment booking for both instructors and clients',
                'Building a responsive and dynamic frontend with jQuery for smooth user interaction'
            ],
            role: ['Developed the backend using ASP.NET Core and MySQL', 'Implemented JWT-based authentication', 'Created a dynamic frontend with jQuery for schedule and appointment management'],
            imgURL: solidGroundImage,
            imgURL2: solidGroundImage2,
            siteURL: 'https://solidgroundaz.site/',
            gitURL: 'https://github.com/tbohn2/solid-ground-az',
            adminSiteURL: 'https://solidgroundaz.site/admin',
            login: ['Username: test', 'Password: testtest']
        },
        {
            id: 1,
            title: 'Ashley Bohn Photography',
            description: 'Ashley Photography is a web application created for photographer Ashley Bohn. It showcases her work, including her biography, pricing, and portfolio. The application allows users to contact her through a form submission using EmailJS, which sends their message directly to her email.',
            features: [
                `View the photographer's biography`,
                'Browse through the photography portfolio.',
                'Check pricing for various services.',
                'Contact form submission via EmailJS.'
            ],
            languages: ['JavaScript', 'HTML', 'CSS'],
            tech: ['Vite', 'React', 'Bootstrap', 'EmailJS'],
            challenges: [
                'Creating a responsive design that looks good on all devices',
                'Implementing form submission to directly email the photographer via EmailJS',
                'Ensuring the gallery loads efficiently while maintaining high-quality image displays'
            ],
            role: ['Designed and developed the frontend using React and Vite', 'Integrated EmailJS for form handling', 'Coordinated with the photographer to meet design needs'],
            imgURL: ashleyPhoto,
            imgURL2: ashleyPhoto2,
            siteURL: 'https://www.ashleybohnphoto.site',
            gitURL: 'https://github.com/tbohn2/ashley-photo'
        },
        {
            id: 5,
            title: 'Bohn Voyage (WIP)',
            description: 'Bohn Voyage is a full-stack river tube booking platform created for Salt River floating adventures in Arizona. The application allows customers to book inflatable platforms for river floating experiences. It features a multi-step booking process with real-time availability checking, email-based authentication via magic links, and secure payment processing through Stripe. The platform includes both a responsive Next.js frontend and a Django REST API backend with PostgreSQL database.',
            features: [
                'Multi-step booking with real-time tube availability',
                'Email authentication via magic link',
                'Stripe-secured payments',
                'JWT-secured customer accounts',
                'Responsive design',
                'Automated email notifications'
            ],
            languages: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
            tech: [
                'Next.js/React',
                'Django/Django REST Framework',
                'PostgreSQL',
                'Tailwind CSS',
                'Stripe',
                'JWT',
                'OpenAI (for NLP features)',
            ],
            challenges: [
                'Building a secure email verification flow with magic links and JWT token management',
                'Creating a multi-step booking wizard with state management and progress tracking',
                'Integrating Stripe payment processing with webhook handling for payment status updates',
                'Managing CORS and cookie-based authentication between frontend and backend',
            ],
            role: [
                'Designed and developed full-stack architecture',
                'Built Next.js frontend (TypeScript, Tailwind CSS)',
                'Created Django REST API backend',
                'Implemented magic link email auth',
                'Integrated Stripe payments',
                'Deployment setup (Vercel, Render)'
            ],
            imgURL: bohnVoyageImage,
            imgURL2: bohnVoyageImage2,
            siteURL: 'https://bohn-voyage.vercel.app/', // TODO: Update to live site URL when deployed
            gitURL: 'https://github.com/tbohn2/bohn_voyage',
            gitURL2: 'https://github.com/tbohn2/bohn_voyage_backend'
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
            languages: ['JavaScript', 'HTML', 'CSS'],
            tech: ['MERN Stack', 'Vite', 'GraphQL', 'Apollo Client', 'JWT Decode', 'React Router DOM', 'Bootstrap'],
            challenges: [
                'Integrating GraphQL with both the front and backend for efficient data querying',
                'Implementing user authentication and authorization using JWT',
                'Ensuring smooth user experience across devices with responsive design',
                'Handling user recipes and transforming them into shopping lists'
            ],
            role: ['Developed both frontend and backend using React, Node.js, Express, and MongoDB', 'Implemented GraphQL for data queries and designed user authentication with JWT'],
            imgURL: platePlannerImage,
            imgURL2: platePlannerImage2,
            siteURL: 'https://plateplanner.site/',
            gitURL: 'https://github.com/tbohn2/plate-planner',
            login: ['Username: test@test.com', 'Password: testtest']
        },
    ];

    const handledLoadedProject = (index) => {
        if (index !== undefined && loadedImagesRef.current.has(index)) {
            return; // Already counted this image
        }
        if (index !== undefined) {
            loadedImagesRef.current.add(index);
        }
        setProjLoaded((prevState) => (
            [...prevState, true]
        ));
    }

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setDetails(null);
            setClosing(false);
        }, 450);
    }

    const leftSide = () =>
        <div className='col-xl-3 col-md-4 col-12 scroll-left d-flex flex-column align-items-center'>
            <div className='d-flex flex-wrap justify-content-evenly col-12'>
                <img className='col-9 col-md-11 col-sm-5 my-2' src={details.imgURL} alt={`${details.title} Screenshot`} />
                <img className='col-9 col-md-11 col-sm-5 my-2' src={details.imgURL2} alt={`${details.title} Screenshot 2`} />
            </div>

            {mobile &&
                <p className='col-12 text-center'>{details.description}</p>
            }
            {details.login && (
                <div className='mb-2 d-flex flex-column align-items-center'>
                    <h3>Test Login:</h3>
                    {details.login.map(login => (
                        <p className='my-0'>{login}</p>
                    ))}
                </div>
            )}
            <div className='col-12 d-flex flex-wrap justify-content-evenly align-items-center fs-5'>
                <a className='col-11 col-sm-4 col-md-11 my-2 custom-btn text-decoration-none text-center' href={details.siteURL}>Visit Site</a>
                <a className='col-11 col-sm-4 col-md-11 my-2 custom-btn text-decoration-none text-center' href={details.gitURL}>Visit Repository</a>
                {details.gitURL2 && (
                    <a className='col-11 col-sm-4 col-md-11 my-2 custom-btn text-decoration-none text-center' href={details.gitURL2}>Visit Repository (Backend)</a>
                )}
                {details.adminSiteURL && (
                    <a className='col-11 col-sm-4 col-md-11 custom-btn text-decoration-none text-center my-2 fs-5' href={details.adminSiteURL}>Visit Admin Site</a>
                )}
            </div>
        </div>


    return (
        <div className='fade-in col-12 d-flex flex-wrap justify-content-evenly'>
            {projects.map((project, index) => (
                <div key={index} className='card-container'>
                    <div className='project-card roboto' onClick={() => setDetails(project)}>
                        <img
                            ref={(el) => imageRefs.current[index] = el}
                            src={project.imgURL}
                            alt={`${project.title} Screenshot`}
                            onLoad={() => handledLoadedProject(index)}
                        />
                        <h2>{project.title}</h2>
                    </div>
                </div>
            ))}
            {details && (
                <div className={`${closing && 'fade-out'} proj-details fs-5 fade-in d-flex flex-wrap`} ref={el => (detailsRefs.current[details.id] = el)} id={details.id}>
                    <span className='close fs-3' onClick={handleClose}>✕</span>
                    <h1 className='col-12 d-flex justify-content-center align-items-center'>{details.title}</h1>
                    {!mobile &&
                        leftSide()
                    }
                    <div className='col-xl-9 col-md-8 col-12 px-1'>
                        <div className='col-12 d-flex flex-wrap scroll-details'>
                            {mobile &&
                                leftSide()
                            }
                            {!mobile &&
                                <p className='col-12 details-text pe-1'>{details.description}</p>
                            }
                            <div className='col-xl-6 col-6'>
                                <h3>Languages:</h3>
                                <ul>
                                    {details.languages.map(language => (
                                        <li className='details-text'>{language}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col-xl-6 col-6'>
                                <h3>Technology:</h3>
                                <ul className='tech-container col-12'>
                                    {details.tech.map(techName => (
                                        <li className='col-12 details-text'>{techName}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col-xl-6 col-12'>
                                <h3>Features:</h3>
                                <ul className='col-12'>
                                    {details.features.map(feature => (
                                        <li className='details-text'>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col-xl-6 col-12'>
                                <h3>Role:</h3>
                                <ul className='col-12'>
                                    {details.role.map(role => (
                                        <li className='details-text'>{role}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col-12'>
                                <h3>Challenges:</h3>
                                <ul className='col-12'>
                                    {details.challenges.map(challenge => (
                                        <li className='details-text'>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}