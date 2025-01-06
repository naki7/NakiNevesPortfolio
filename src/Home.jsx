import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='Home'>
      <h1>Hi! I'm Joshua Neves, but you can just call me <span>Naki!</span></h1>
      <p>I'm a hardworking individual with a love for Front-End Engineering.<span>And a tiny obsession with otters!</span></p>
      {/* add otter svgs */}
      <img className='ProfileImg' src='Profile.png' alt='Profile'/>
      {/* add logic for buttons to change state in app and pull in as prop*/}
      <button>About Me</button>
      <button>Portfolio</button>
      <button>Contact Me</button>
    </div>
  )
}
