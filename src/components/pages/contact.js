import React from 'react';
import '../../styles/contact.css'

export default function AboutMe() {
    return (
        <form className='myForm mt-5 d-flex flex-column col-12 align-items-center'>
            <div class="mb-3">
                <label class="text-light form-label">Name</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="text-light form-label">Email address</label>
                <input type="email" class="form-control"></input>
            </div>
            <div class="mb-3">
                <label class="text-light form-label">Enter message here:</label>
                <textarea type="text" class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}
