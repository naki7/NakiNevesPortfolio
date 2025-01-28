import React from 'react';
import './portfolio.css';
import { Coding, Art } from './portfolioObjects.js';

export default function Portfolio() {

  const PortfolioHandler = () =>{
    let entirePortfolio = [];

    if(Coding){
      let codePortfolio = [];
      const codingKeys = Coding[Object.keys(Coding)[0]];
      // console.log(Object.keys(codingKeys).length);
      for(let i = 0; i < Object.keys(codingKeys).length; i++){
        // console.log(Object.values(codingKeys)[i]);
        let currentValue = Object.values(codingKeys)[i];
        switch(i){
          case 0:
            codePortfolio.push(<h3>{currentValue}</h3>);
            break;
          case 1:
            codePortfolio.push(<img src={currentValue} alt={Object.values(codingKeys)[0]}/>);
            break;
          case 2:
            codePortfolio.push(<p>{currentValue}</p>);
            break;
            case 3:
              codePortfolio.push(<a href={currentValue} target='_blank'><i className="fa-solid fa-up-right-from-square"></i></a>);
              break;
        }
      }
      entirePortfolio.push(<div className='codingDiv'>{codePortfolio}</div>);
    }
    if(Art){
      let artPortfolio = []
      console.log(Object.keys(Art).length)
      for(let i = 0; i < Object.keys(Art).length; i++){
        const artKeys = Art[Object.keys(Art)[i]]
        console.log(artKeys)
        for(let j = 0; j < Object.keys(artKeys).length; j++){
          let currentValue = Object.values(artKeys)[j];
          console.log( i, j, currentValue, Object.keys(artKeys))
          switch(j){
            case 0:
              artPortfolio.push(<h3>{currentValue}</h3>);
              break;
            case 1:
            case 2:
            case 4:
            case 5:
              artPortfolio.push(<img src={currentValue} alt={Object.values(artKeys)[0]}/>);
              break;
            case 3:
              artPortfolio.push(<p>{currentValue}</p>);
              break;
          }
        }
      }
      entirePortfolio.push(<div className='artDiv'>{artPortfolio}</div>);
    }
    return(<div className='Portfolio'>{entirePortfolio}</div>)
  }

  return (
    <PortfolioHandler/>
  )
}
