import { useState } from 'react'
import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [currPage, setCurrPage] = useState('home');

  const UpdatePage = (page) => {
    if(!page){return}
    setCurrPage(page)
    // add history functionality using popstate
  }

  return (
    <div className='app'>
      {(currPage === 'home') && <Home UpdatePage={UpdatePage}/>}
      {(currPage != 'home') && <Navbar currPage={currPage} UpdatePage={UpdatePage}/>}
      {(currPage === 'aboutMe') && <AboutMe/>}
      {(currPage === 'portfolio') && <Portfolio/>}
      {(currPage === 'contact') && <Contact/>}
      {(currPage != 'home') && <Footer/>}
    </div>
  )
}

export default App
