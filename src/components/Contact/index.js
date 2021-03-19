import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message} = formState;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Nick',
      message_html: message
    };
    

    if (!errorMessage) {
      console.log('Submit Form', formState);
      emailjs.send(
        'service_f6h4r1g',
        'template_t66s8v7',
        templateParams,
        'user_pciNFsQ1kypWVoZtxq4GU'
      )
      alert('Your message has been sent successfully. I will contact you soon.');
      resetForm();
      }
    };

    const resetForm = () =>{
      setFormState({ name: '', email: '', message: ''})
    };

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
      <h2>Contact me</h2>
      <div id="contact-container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" value={message} onChange={handleChange} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
