import React, { useState } from 'react';
import '../../styles/contact.css'
// Imports function to compare e-mail imput with regex for e-mail
import { validateEmail } from '../utils/validateEmail';

// Exports function that returns contact page
export default function Contact() {
    // Uses react's useState to define email variable
    const [email, setEmail] = useState('')

    // Function to check if e-mail is valid or not
    function checkEmail(email) {
        // If e-mail is not valid, user is alerted
        if (!validateEmail(email)) {
            alert('Please enter valid e-mail')
        }
    }

    // Function to handle submit of form and check e-mail
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
                {/* Sets e-mail var as value of target using useState hook */}
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control email"></input>
            </div>
            <div class="mb-3">
                <label class="text-light form-label">Enter message here:</label>
                <textarea type="text" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}
