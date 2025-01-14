import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
        <div className='footline'/>
        <div className='footLinks'>
          <a href='https://www.linkedin.com/in/joshua-neves-54baa6196/' target='_blank' title='LinkedIn'><i className="fa-brands fa-linkedin fa-2x"></i></a>
          <a href='https://github.com/naki7' target='_blank' title='GitHub'><i className="fa-brands fa-square-github fa-2x"></i></a>
          <a href='/CVJoshuaNeves2025.pdf' target='_blank' title='CV'><i className="fa-solid fa-file fa-2x"></i></a>
        </div>
        <p className='footText'>Copyright © 2025 Joshua Neves. All rights reserved.</p>
    </div>
  )
}
