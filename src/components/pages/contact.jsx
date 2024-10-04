import React, { useState } from 'react';
import '../../styles/contact.css'

export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [formState, setFormState] = useState(
        {
            FirstName: '',
            LastName: '',
            EmailAddress: '',
            Message: ''
        }
    )

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://solidgroundaz.com/api/devEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            const data = await response.json();
            console.log('Success:', data);
            setMessage('Message Sent Successfully')
            setTimeout(() => {
                setMessage('');
            }, 5000);
            setLoading(false);
        }
        catch (error) {
            console.error('Error:', error);
            setError('Message failed to send')
            setLoading(false);
        }
    }

    const formArray = [
        { 'label': 'First Name', 'name': 'FirstName', 'type': 'text' },
        { 'label': 'Last Name', 'name': 'LastName', 'type': 'text' },
        { 'label': 'Email Address', 'name': 'EmailAddress', 'type': 'email' },
        { 'label': 'Message', 'name': 'Message', 'type': 'text' }
    ]

    return (
        <div className='fade-in d-flex flex-column align-items-center'>
            <h1 className='text-light work-sans mb-3 text-center'>Send a message with any inquiries!</h1>
            {message && <div className="alert alert-success text-center fade-in" role="alert">{message}</div>}
            {error && <div className="alert alert-danger text-center fade-in" role="alert">{error}</div>}
            <form className='myForm roboto d-flex flex-column col-md-6 col-10 align-items-center' onSubmit={handleSubmit}>
                {formArray.map((input, index) => {
                    return (
                        <div className="mb-3 col-12" key={index}>
                            <label className="text-light form-label">{input.label}</label>
                            {input.label === 'Message' ?
                                <textarea name="Message" value={formState.Message} onChange={(e) => handleInputChange(e)} type="text" className="form-control" rows={4} required></textarea>
                                :
                                <input name={input.name} value={formState[input.name]} onChange={(e) => handleInputChange(e)} type={input.type} className="form-control" required></input>
                            }
                        </div>
                    )
                })}
                {loading ?
                    <div className="spinner-border text-light" role="status"></div>
                    :
                    <button type="submit" className="custom-btn col-lg-6 col-12 my-3">Submit</button>
                }
            </form>
        </div>

    );
}
