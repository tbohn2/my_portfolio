import React, { useState, useEffect, useRef } from 'react';
import '../../styles/portfolio.css'
import ashleyPhoto from '../../assets/ashley-photo.png'
import darrow from '../../assets/darrow.svg'

export default function Portfolio() {

    const [detailsId, setDetailsId] = useState(null);

    const detailsRefs = useRef({});

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Extracts the values of the refs and checks if the event target is outside of all of them
            const isClickOutside = Object.values(detailsRefs.current).every(ref => !ref.contains(event.target));
            if (isClickOutside) {
                setDetailsId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const projects = [
        {
            id: 1,
            name: 'Ashley Bohn Photography',
            langAndTech: 'JavaScript, HTML, CSS, Vite, React, Bootstrap, EmailJS',
            imgURL: ashleyPhoto,
            siteURL: 'https://tbohn2.github.io/ashley-photo/',
            gitURL: 'https://github.com/tbohn2/ashley-photo'
        },
        {
            id: 2,
            name: 'Ashley Bohn Photography',
            langAndTech: 'JavaScript, HTML, CSS, Vite, React, Bootstrap, EmailJS',
            imgURL: ashleyPhoto,
            siteURL: 'https://tbohn2.github.io/ashley-photo/',
            gitURL: 'https://github.com/tbohn2/ashley-photo'
        },
    ]

    const toggleDetails = (id) => {
        if (detailsId === id) {
            setDetailsId(null);
        } else {
            setDetailsId(id);
        }
    }

    return (
        <div className='col-12 d-flex flex-wrap justify-content-evenly'>
            {projects.map(project => (
                <div ref={el => (detailsRefs.current[project.id] = el)} id={project.id} className="project-card" style={{ maxHeight: detailsId === project.id ? '1000px' : '350px' }}>
                    <img src={project.imgURL} alt={`${project.name} Screenshot`} />
                    {detailsId === project.id && (
                        <div className='proj-details'>
                            This is a story all about how my life got flipped turned upside down. And I'd like to take a minute, just sit right there,
                            I'll tell you how I became the prince of a town called Bel-Air.
                        </div>
                    )}
                    <button className='d-flex justify-content-center align-items-center' onClick={() => toggleDetails(project.id)}>
                        <svg className={detailsId === project.id && 'flipped'} enable-background="new 0 0 50 50" height="20px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="20" width="20" /><polygon fill='rgb(27, 233, 223)' points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}
