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

  return (
    <>
      {(currPage === 'home') && <Home/>}
      {(currPage != 'home') && <Navbar/>}
      {(currPage === 'aboutMe') && <AboutMe/>}
      {(currPage === 'portfolio') && <Portfolio/>}
      {(currPage === 'contact') && <Contact/>}
      {(currPage != 'home') && <Footer/>}
    </>
  )
}

export default App
