import React from "react";
import '../styles/portfolio.css'

// Returns a card for a project taking in the parameters name, languages, imgURL, siteURL, and gitURL
export default function Project({ name, languages, imgURL, siteURL, gitURL }) {
    return (
        <div class="card col-3 mx-2 mb-5 bg-secondary">
            <div className='myImgBox'>
                <img src={imgURL} class="myProjImg" alt="..."></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{languages}</p>
                <a href={siteURL} class="btn btn-dark ">Lauch App</a>
                <a href={gitURL} class="btn btn-dark ms-2">GitHub Repo</a>
            </div>
        </div>
    )
}