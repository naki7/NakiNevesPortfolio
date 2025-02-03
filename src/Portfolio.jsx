import React from 'react';
import './portfolio.css';
import { Coding, Art } from './portfolioObjects.js';

export default function Portfolio() {

  const PortfolioSectionCreator = (obj) =>{
    for(let i = 0; i < Object.keys(obj).length; i++){
      const objKeys = obj[Object.keys(obj)[i]];
      const arrValues = Object.values(objKeys);

      if(Object.keys(arrValues[i]).length === 4){
        const codingElement = Object.values(arrValues).map((value, index) =>{
          return(
            <div className='codingDiv' key={index}>
              <h3 className='title'>{Object.values(value)[0]}</h3>
              <a href={Object.values(value)[3]} target='_blank' title={Object.values(value)[0]}><img src={Object.values(value)[1]} alt={Object.values(value)[0]}/></a>
              <p className='description'>{Object.values(value)[2]}</p>
              <a href={Object.values(value)[3]} target='_blank' title={Object.values(value)[0]}><div className='websiteLink'><p>Visit Me</p><i className='fa-solid fa-up-right-from-square'></i></div></a>
            </div>
          )
        })
      return(codingElement);
      }

      if(Object.keys(arrValues[i]).length === 6){
        const artElement = Object.values(objKeys).map((value, index) =>{
          return(
            <div className='artDiv' key={index}>
              <h3 className='title'>{Object.values(value)[0]}</h3>
              <img src={Object.values(value)[1]} alt={Object.values(value)[0]}/>
              <img src={Object.values(value)[2]} alt={Object.values(value)[0]}/>
              <p className='description'>{Object.values(value)[3]}</p>
              <img src={Object.values(value)[4]} alt={Object.values(value)[0]}/>
              <img src={Object.values(value)[5]} alt={Object.values(value)[0]}/>
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
        <h2>Coding</h2>
        <PortfolioSectionCreator Coding={Coding}/>
      </div>
      <div className='artComponent'>
        <h2>Art</h2>
        <PortfolioSectionCreator Art={Art}/>
      </div>
    </div>
  )
}
