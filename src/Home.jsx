import React from 'react';
import './home.css';

export default function Home(props) {
  const {UpdatePage} = props;


  return (
    <div className='Home'>
      <h1>Hi! I'm Joshua Neves, but you can just call me <span>Naki!</span></h1>
      <p>I'm a hardworking individual with a love for <span className='engineertxt'>Front-End Engineering</span>.<br/><span className='otterstxt'>And a tiny obsession with otters!</span></p>
      <img className='Otter3' src='/Otters/Otter3.svg' alt='otter drawing'/>
      <img className='ProfileImg' src='Profile.png' alt='Profile'/>
      {/* add logic for buttons to change state in app and pull in as prop*/}
      <div className='Homebtns'>
        <button onClick={()=>{UpdatePage('aboutMe')}}>About Me</button>
        <button>Portfolio</button>
        <button>Contact Me</button>
      </div>
    </div>
  )
}
