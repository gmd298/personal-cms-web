import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
  
    //   try {
    //     const response = await axios.post('http://localhost:3000/api/contacts', {
    //       name,
    //       email,
    //       message,
    //     });
        
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    console.log(name, email, message);
  }


  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="contact-label">
          Name:
          <input type="text" id="name" className="contact-input" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="email" className="contact-label">
          Email:
          <input type="email" id="email" className="contact-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="message" className="contact-label">
          Message:
          <textarea id="message" className="contact-textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;