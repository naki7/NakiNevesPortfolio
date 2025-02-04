import React, { useState } from 'react';
import './portfolio.css';
import { Coding, Art } from './portfolioObjects.js';

export default function Portfolio() {

  const [section, setSection] = useState(null);
  const [project, setProject] = useState(null);

  const sectionHandler = (title) =>{
    if(!title){return}
    setProject(null);
    if(title === 'coding' && section != 'coding'){
      setSection('coding');
    }else if(title === 'art' && section != 'art'){
      window.scrollTo(0, 420);
      setSection('art');
    }else{
      setSection(null);
    }
  }

  const projectHandler = (name) =>{
    console.log(name);
    if(!name){return}
    if(project != name){
      setProject(name);
    } else{
      setProject(null);
    }
    console.log(project);
  }



  const PortfolioSectionCreator = (obj) =>{
    for(let i = 0; i < Object.keys(obj).length; i++){
      const objKeys = obj[Object.keys(obj)[i]];
      const arrValues = Object.values(objKeys);

      if(Object.keys(arrValues[i]).length === 4){
        const codingElement = Object.values(arrValues).map((value, index) =>{
          return(
            <div className='codingDiv' key={index}>
              <div className={'title' + ((project === Object.values(value)[0]) ? ' highlight' : ' ')}>
                <h3 onClick={() =>{projectHandler(Object.values(value)[0])}}>{Object.values(value)[0]}</h3>
                <i className={"chevron fa-solid fa-chevron-right" + ((project === Object.values(value)[0]) ? ' chevronActive' : ' ')}></i>
              </div>
              <div className={(project === Object.values(value)[0]) ? ' projectShow' : ' projectHidden'}>
                <a href={Object.values(value)[3]} target='_blank' title={Object.values(value)[0]}><img src={Object.values(value)[1]} alt={Object.values(value)[0]}/></a>
                <p className='description'>{Object.values(value)[2]}</p>
                <a className='websiteAnchor' href={Object.values(value)[3]} target='_blank' title={Object.values(value)[0]}><div className='websiteLink'><p>Visit Me</p><i className='fa-solid fa-up-right-from-square'></i></div></a>
              </div>
            </div>
          )
        })
      return(codingElement);
      }

      if(Object.keys(arrValues[i]).length === 6){
        const artElement = Object.values(objKeys).map((value, index) =>{
          return(
            <div className='artDiv' key={index}>
              <div className={'title' + ((project === Object.values(value)[0]) ? ' highlight' : ' ')}>
                <h3 onClick={() =>{projectHandler(Object.values(value)[0])}}>{Object.values(value)[0]}</h3>
                <i className={"chevron fa-solid fa-chevron-right" + ((project === Object.values(value)[0]) ? ' chevronActive' : ' ')}></i>
              </div>
              <div className={(project === Object.values(value)[0]) ? ' projectShow' : ' projectHidden'}>
                <div className='imgPair'>
                  <img src={Object.values(value)[1]} alt={Object.values(value)[0]}/>
                  <img src={Object.values(value)[2]} alt={Object.values(value)[0]}/>
                </div>
                <p className='description'>{Object.values(value)[3]}</p>
                <div className='imgPair'>
                  <img src={Object.values(value)[4]} alt={Object.values(value)[0]}/>
                  <img src={Object.values(value)[5]} alt={Object.values(value)[0]}/>
                </div>
              </div>
            </div>
          )
        })
      return(artElement);
      }
    }
  }

  return (
    <div className='Portfolio'>
      <div className='portfolioHero'>
        <h2>Welcome to my Showcase</h2>
        <img src='/Otters/Otter2.svg' alt='Otter swimming to the left'/>
        <p>These are a few selected coding & art projects I've done over the years</p>
      </div>
      <div className='codingComponent'>
        <div className={'header' + ((section === 'coding') ? ' sectionHighlight' : ' ')} onClick={() => {sectionHandler('coding')}}>
          <h2>Coding</h2>
          <i className={"chevron fa-solid fa-chevron-right" + ((section === 'coding') ? ' chevronActive' : ' ')}></i>
        </div>
        <div className={(section === 'coding') ? ' sectionShow' : ' sectionHidden'}>
          <PortfolioSectionCreator Coding={Coding}/>
        </div>
      </div>
      <div className='artComponent'>
        <div className={'header' + ((section === 'art') ? ' sectionHighlight' : ' ')} onClick={() => {sectionHandler('art')}}>
          <h2>Art</h2>
          <i className={"chevron fa-solid fa-chevron-right" + ((section === 'art') ? ' chevronActive' : ' ')}></i>
        </div>
        <div className={(section === 'art') ? ' sectionShow' : ' sectionHidden'}>
          <PortfolioSectionCreator Art={Art}/>
        </div>
      </div>
    </div>
  )
}
