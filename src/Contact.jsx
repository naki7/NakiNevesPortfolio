import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, {publicKey: 'wRsX70yMHFy9JN6_a'}).then(() => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    }
    )
  }
  

  return (
    <div className='contactPage'>
      <div className='contactHero'>
        <h2>Feel free to reach out to join the Romp!</h2>
        <p>Fun fact: a romp is the collective noun for a group of otters. And that is because they play joyfully!</p>
        <img src='/Otters/Otter1.svg' alt='an otter turning around'/>
      </div>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <div className='inputContainer'>
          <label>Name</label>
          <input className='input' type='text' name='user_name' placeholder='Your Name...'  />
        </div>
        <div className='inputContainer'>
          <label>Email</label>
          <input className='input' type='email' name='user_email' placeholder='Your Email...'  />
        </div>
        <label>Message</label>
        <textarea className='input' name='message' placeholder='Message...'  />
        <input className='submit' type='submit'/>
      </form>
    </div>
  )
}