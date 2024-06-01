import React, { useState, useRef } from 'react';
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r965ye3', 'template_ch6ryzf', form.current, 'RAtWYRy4mLNCuXZIZ')
    .then(
      () => {
        console.log('SUCCESS!');
        setMessage({ text: 'Message sent successfully', type: 'success' });
        e.target.reset();
        setTimeout(() => {
          setMessage(null); 
        }, 2000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        setMessage({ text: 'Failed to send message. Please try again later', type: 'error' });
        e.target.reset();
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      },
    );
  };

  return (
    <section id="contact" className='full-width-background_light'>
      <h5 className='contact_sub_header'> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>sanket.patil609@gmail.com</h5>
            <a href="mailto:sanket.patil609@gmail.com" target="_blank"> Send a message </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Sanket Patil</h5>
            <a href="https://m.me/sanket.patil.10888" target="_blank"> Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          {message && (
            <p style={{textAlign: 'left', color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</p>
          )}
          <button type="submit" className="btn btn-primary submit_message"> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
