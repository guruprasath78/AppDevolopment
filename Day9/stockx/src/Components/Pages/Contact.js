import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/Contact.css';

function Contact() {
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here if needed

    // Navigate to the 'home' page
    navigate('/home');
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='title'>Get in Touch</h1>
        <p className='subtitle'>We'd love to hear from you!</p>
      </div>
      <div className='container contact-info'>
        {/* ... Rest of your code ... */}
      </div>
      <div className='container contact-form'>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}> {/* Use onSubmit to handle form submission */}
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Your Name' />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='Your Email' />
          </div>
          <div className='form-group'>
            <textarea className='form-control' rows='5' placeholder='Your Message'></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
