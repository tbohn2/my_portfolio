import React from 'react';
import '../../styles/aboutMe.css'
import pic from '../../assets/IMG_7980.jpg'


export default function AboutMe() {
    return (
        <section className="aboutMeBody col-8 mt-5 d-flex">
            <div className="leftContainer col-6 d-flex flex-column justify-content-center">
                <h1 className="name my-5 text-light text-wrap">Tanner Bohn</h1>
                <p className="text-light text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis neque. Maiores quasi quaerat explicabo saepe nesciunt. Animi suscipit iure nemo. Quae accusamus neque laudantium ab provident aperiam dolor. Dolores.</p>
                <p className="text-light text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis neque. Maiores quasi quaerat explicabo saepe nesciunt. Animi suscipit iure nemo. Quae accusamus neque laudantium ab provident aperiam dolor. Dolores.</p>
            </div>
            <div className='col-6 d-flex justify-content-center center'>
                <div className='pt-5 mt-5 myPortraitBox'>
                    <img src={pic} alt='' className='myImg'></img>
                </div>
            </div>
        </section>
    );
}
