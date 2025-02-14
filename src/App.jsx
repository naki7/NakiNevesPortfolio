import { useState } from 'react'
import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  // window.onpopstate = (event)  => {
  //   switch (event.state){
  //     case 'home':
  //       UpdatePage(event.state, true)
  //       break;
  //     case 'aboutMe':
  //       UpdatePage(event.state, true)
  //       break;
  //     case 'portfolio':
  //       UpdatePage(event.state, true)
  //       break;
  //     case 'contact':
  //       UpdatePage(event.state, true)
  //     break;
  //   }
  // };
  
  
  const [currPage, setCurrPage] = useState('home');

  const UpdatePage = (page, timeline) => {
    if(!page){return}
    setCurrPage(page);
    window.scrollTo(0, 0);
    
    // if(!timeline){
    //   switch (page){
    //     case 'home':
    //       history.pushState('home', null, '?page=home');
    //       console.log(history)
    //       break;
    //     case 'aboutMe':
    //       history.pushState('aboutMe', null, '?page=aboutMe');
    //       console.log(history)
    //       break;
    //     case 'portfolio':
    //       history.pushState('portfolio', null, '?page=portfolio');
    //       console.log(history)
    //       break;
    //     case 'contact':
    //     history.pushState('contact', null, '?page=contact');
    //     console.log(history)
    //     break;
    //   }
    // }
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
