import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export default function Contact() {
  const form = useRef();
  let currentEmail = '';

  const [formStatus, setFormStatus] = useState('not sent');
  const [sending, setSending] = useState(false);

  const statusHandler = (status) =>{
    setFormStatus(status);
  }

  const validateEmail = (input) => {
    //sets up a list of valid entries for the email address
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //checks if the email matches the Regex set and returns true (which will allow the code in the sendEmail function to continue running)
    if (input.match(validRegex)) {
      return true;
  
    } else {
      //tells the user that their email isnt valid
      alert("Invalid email address!");
      //returning false when the regex check fails stops the sendEmail function from running, therefore saving resources by preventing junk inputs from going through as an email for the email.js server to then deal with
      return false;
  
    }
  
  }

  const sendEmail = (e) =>{
    //stops the page from reloading when submit is clicked and then change state for the animation to start
    e.preventDefault();
    setSending(true);
    //checking if the email address is valid as we don't want to receive an email from someone with invalid credentials
    if(!validateEmail(currentEmail)){return}

    //using the email.js api to send the inputs placed with names like user_name, user_email and message, so that email.js can process the data apporiately on the server side. this will both send an email to my address and also send an automated response to the person contacting me.
    emailjs.sendForm('contact_service', 'contact_form', form.current, {publicKey: 'wRsX70yMHFy9JN6_a'}).then(() => {
      console.log('SUCCESS!');
      //changes the status state so that the form div can be replaced with a new div saying that the email went through
      statusHandler('sent');
      //switches off the otter animation
      setSending(false);
    },
    (error) => {
      //console error for debugging
      console.log('FAILED...', error.text);
      //alerting the user that the email did not go through
      alert("Email could not send! error: ", error.text);
    }
    )
  }
  

  return (
    <div className='contactPage'>
      <div className='contactHero'>
        <h2>Feel free to reach out to join the Romp!</h2>
        <p>Fun fact: a <span className='descriptionHighlight'>romp</span> is the collective noun for a <span className='descriptionHighlight'>group of otters</span>. And that is because they <span className='descriptionHighlight'>play joyfully</span>!</p>
        <img src='/Otters/Otter1.svg' alt='an otter turning around'/>
      </div>
      {(formStatus === 'not sent') && <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <div className='inputContainer'>
          <label>Name</label>
          <input className='input' type='text' name='user_name' placeholder='Your Name...' required />
        </div>
        <div className='inputContainer'>
          <label>Email</label>
          <input className='input' type='email' name='user_email' placeholder='Your Email...' onChange={(e)=>{currentEmail = e.target.value}} required />
        </div>
        <textarea className='input' name='message' placeholder='Message...' required />
        <div className='submitDiv'>
        <input className='submit' type='submit'/>
        <img className={'emailOtter' + ((sending) ? ' otterSending': ' ')} src='/Otters/Otter7.svg' alt='otter swimming past to take email'/>
        </div>
      </form>}
      {(formStatus === 'sent') && <div className='emailSentDiv'>
        <h2>Thank you for your email!</h2>
        <p>The otters may or may not be juggling a lot at the moment (lots of pebbles and toys)!</p>
        <p>I will get back to you at {currentEmail} as soon as possible.</p>
        <p>Have a great day!</p>
        <button onClick={() => {statusHandler('not sent')}}>Reset Form</button>
        </div>}
    </div>
  )
}