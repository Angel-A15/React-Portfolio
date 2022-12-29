import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ 
    name: '', email: 'aasupertwix15@gmail.com', message: '' 
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }
  

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      
      <form class="m-3" id="contact-form" onSubmit={handleSubmit}>
        <h1 class="mb-4 conTitle" data-testid="h1tag">Contact me</h1>
        <div class="mb-3">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="email">Email address:</label>
          <label className='email' type="email" name="email"  onBlur={handleChange}> {email}</label>
        </div>
        <div class="mb-3">
          <label htmlFor="message" class="mb-1">Message:</label>
          <div>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" class="rounded-3">Submit</button>
      </form>
    </section>
  );
}

export default Contact;