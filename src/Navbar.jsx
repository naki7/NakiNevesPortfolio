import React, { useState } from 'react';
import './navbar.css';

export default function Navbar(props) {
  const {currPage, UpdatePage} = props;

  const [opener, setOpener] = useState(true);

  const updateOpeners = () => {
    return setOpener(!opener);
  }

  return (
    <div className= {'navbar ' + (opener ? 'beigeBg' : 'blueBg')}>
      <div className={'otterDiv' + (opener ? ' animateClose' : ' animateOpen')}>
        <img className={'navOtter' + (opener ? ' uturnOtter' : '')} src='/Otters/Otter4.svg' alt='swimmingotter'/>
      </div>
      <div className='navOpeners'>
        {opener && <i className="fa-solid fa-bars fa-2x" onClick={updateOpeners}></i>}
        {!opener && <i className="fa-solid fa-xmark fa-2x" onClick={updateOpeners}></i>}
      </div>
      {!opener && <ul>
        <li className='navItem' onClick={()=>{UpdatePage('home')}}>Home</li>
        {(currPage != 'aboutMe') ?  <li className='navItem' onClick={()=>{UpdatePage('aboutMe')}}>About Me</li> : <li className='navItem' onClick={()=>{UpdatePage('portfolio')}}>Portfolio</li>  }
        {(currPage != 'portfolio' && currPage != 'aboutMe') ?  <li className='navItem' onClick={()=>{UpdatePage('portfolio')}}>Portfolio</li> : <li className='navItem' onClick={()=>{UpdatePage('contact')}}>Contact Me</li> }
      </ul>}
    </div>
  )
}
