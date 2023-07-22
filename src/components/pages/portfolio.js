import React from 'react';
import '../../styles/portfolio.css'

export default function AboutMe() {
    return (
        <section className='mt-5 col-10 d-flex flex-wrap justify-content-evenly'>
            <div class="card col-3 mx-2 mb-5 bg-secondary">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/231046542-e3912b55-6db1-4bf3-b355-b9475cee8269.png" class="card-img-top" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Country Info and Currency Calulator</h5>
                    <p class="card-text">JavaScript, Restful APIs</p>
                    <a href="https://tbohn2.github.io/Country-info-and-exchange-rates/" class="btn btn-dark ">Lauch App</a>
                    <a href="https://github.com/tbohn2/Country-info-and-exchange-rates" class="btn btn-dark ms-2">GitHub Repo</a>
                </div>
            </div>
            <div class="card col-3 mx-2 mb-5 bg-secondary">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/243895540-05c5de1b-1463-46e9-b12f-4c0821867cfe.png" class="card-img-top" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Zookeeper</h5>
                    <p class="card-text">JavaScript, Restful APIs, MySQL</p>
                    <a href="https://github.com/tbohn2/Zookeeper" class="btn btn-dark ">Lauch App</a>
                    <a href="https://github.com/tbohn2/Zookeeper" class="btn btn-dark ms-2">GitHub Repo</a>
                </div>
            </div>
            <div class="card col-3 mx-2 mb-5 bg-secondary myCard">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/223294880-014798aa-3db9-4f48-89c1-2e54fea7df5a.png" class="card-img-top myImg" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Portfolio Example</h5>
                    <p class="card-text">JavaScript, Restful APIs</p>
                    <a href="https://tbohn2.github.io/Portfolio/" class="btn btn-dark ">Lauch App</a>
                    <a href="https://github.com/tbohn2/Portfolio" class="btn btn-dark ms-2">GitHub Repo</a>
                </div>
            </div>
            <div class="card col-3 mx-2 mb-5 bg-secondary myCard">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/224519246-1645f2a3-17b2-4b88-a1f1-591998b87fb2.png" class="card-img-top myImg" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Random Password Generator</h5>
                    <p class="card-text">JavaScript</p>
                    <a href="https://tbohn2.github.io/Password-generator/" class="btn btn-dark ">Lauch App</a>
                    <a href="https://github.com/tbohn2/Password-generator" class="btn btn-dark ms-2">GitHub Repo</a>
                </div>
            </div>
            <div class="card col-3 mx-2 mb-5 bg-secondary myCard">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/228134341-30d6793c-d9a0-4b52-9e0e-2e50511e2dee.png" class="card-img-top myImg" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Work Day Scheduler</h5>
                    <p class="card-text">JavaScript</p>
                    <a href="https://tbohn2.github.io/Work-day-schedule/" class="btn btn-dark ">Lauch App</a>
                    <a href="https://github.com/tbohn2/Work-day-schedule" class="btn btn-dark ms-2">GitHub Repo</a>
                </div>
            </div>
            <div class="card col-3 mx-2 mb-5 bg-secondary myCard">
                <div className='myImgBox'>
                    <img src="https://user-images.githubusercontent.com/124842865/229953591-b5d1716a-0535-45a3-b49d-d2c05bfdb98b.png" class="card-img-top myImg" alt="..."></img>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Weather Finder</h5>
                    <p class="card-text">JavaScript, Restful APIs</p>
                    <a href="https://tbohn2.github.io/Weather-finder/" class="btn btn-dark">Lauch App</a>
                    <a href="https://github.com/tbohn2/Weather-finder" class="btn btn-dark ms-2" >GitHub Repo</a>
                </div>
            </div>
        </section>
    );
}
