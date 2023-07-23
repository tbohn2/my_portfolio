import React from 'react';
import '../../styles/portfolio.css'
import Project from '../project';

export default function AboutMe() {
    const projects = [
        {
            name: 'Country Info and Currency Calulator',
            languages: 'JavaScript, Restful APIs',
            imgURL: 'https://user-images.githubusercontent.com/124842865/231046542-e3912b55-6db1-4bf3-b355-b9475cee8269.png',
            siteURL: 'https://tbohn2.github.io/Country-info-and-exchange-rates/',
            gitURL: 'https://github.com/tbohn2/Country-info-and-exchange-rates'
        },
        {
            name: 'Zookeeper',
            languages: 'JavaScript, Restful APIs, MySQL',
            imgURL: 'https://user-images.githubusercontent.com/124842865/243895540-05c5de1b-1463-46e9-b12f-4c0821867cfe.png',
            siteURL: 'https://pokezoo6000.herokuapp.com/',
            gitURL: 'https://github.com/tbohn2/Zookeeper'
        },
        {
            name: 'Portfolio Example',
            languages: 'JavaScript, Restful APIs',
            imgURL: 'https://user-images.githubusercontent.com/124842865/223294880-014798aa-3db9-4f48-89c1-2e54fea7df5a.png',
            siteURL: 'https://tbohn2.github.io/Portfolio/',
            gitURL: 'https://github.com/tbohn2/Portfolio'
        },
        {
            name: 'Random Password Generator',
            languages: 'JavaScript',
            imgURL: 'https://user-images.githubusercontent.com/124842865/224519246-1645f2a3-17b2-4b88-a1f1-591998b87fb2.png',
            siteURL: 'https://tbohn2.github.io/Password-generator/',
            gitURL: 'https://github.com/tbohn2/Password-generator'
        },
        {
            name: 'Work Day Scheduler',
            languages: 'JavaScript',
            imgURL: 'https://user-images.githubusercontent.com/124842865/228134341-30d6793c-d9a0-4b52-9e0e-2e50511e2dee.png',
            siteURL: 'https://tbohn2.github.io/Work-day-schedule/',
            gitURL: 'https://github.com/tbohn2/Work-day-schedule'
        },
        {
            name: 'Weather Finder',
            languages: 'JavaScript, Restful APIs',
            imgURL: 'https://user-images.githubusercontent.com/124842865/229953591-b5d1716a-0535-45a3-b49d-d2c05bfdb98b.png',
            siteURL: 'https://tbohn2.github.io/Weather-finder/',
            gitURL: 'https://github.com/tbohn2/Weather-finder'
        },
    ]

    return (
        <section className='mt-5 col-10 d-flex flex-wrap justify-content-evenly'>
            {projects.map(project => (
                Project(project)
            ))}
        </section>
    );
}
