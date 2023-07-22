import React, { useState } from 'react';
import '../../styles/contact.css'
import { validateEmail } from '../utils/validateEmail';



export default function AboutMe() {
    const [email, setEmail] = useState('')

    function checkEmail(email) {
        if (!validateEmail(email)) {
            alert('No no')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        checkEmail(email)
    }

    return (
        <form className='myForm mt-5 d-flex flex-column col-12 align-items-center' onSubmit={handleSubmit}>
            <div class="mb-3">
                <label class="text-light form-label">Name</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="text-light form-label">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control email"></input>
            </div>
            <div class="mb-3">
                <label class="text-light form-label">Enter message here:</label>
                <textarea type="text" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    );
}
