import React, { useState } from 'react';
import './personalStats.css';

export default function PersonalStats() {

    const [activeKey, setActiveKey] = useState();

    //Set up of multiple variables holding each statistic
    const PastExp = [[`Born in 1996`, `Johannesburg, South Africa`],
    [`Finished High School in 2014`,`Matriculated from Woodlands International College`],
    [`Completed my degree in 2019`,`Professional Bachelor of Arts in Film, Visual & Performing Arts – Majoring in Game Design, Digital Arts, and Interactive Writing`],
    [`Started working for Feedonomics in March 2021`,`FeedAi QA Specialist – The work was focused on looking through data that was either produced by the Ai or finding and creating data to add to the Ai. Overall it focused on improving the Ai’s accuracy while avoiding increasing processing times`],
    [`Studied Graphic Design from September 2021 to July 2022`,`Completed a short course through University of Cape Town, completed 3 courses on Udemy from March until May, and completed a training program from June until July with Brainnest which I was able to gain a recommendation letter from due to my performance`],
    [`Promoted to Lead FeedAi QA Specialist in August 2022 and is still my current role at present`,`I maintained the same responsibilities as before, but now I also manage a team of FeedAi QA Specialists. I have had to and also continue to train the specialists, update them on new projects, go through work that they have completed to correct any mistakes, I go through projects looking for trends both in terms of performance of the specialists as well as the projects themselves so I can find ways of improving work flow, finding new ways of training the team, gaining an understanding of situations where the projects themselves can be improved, reporting back issues with either the projects or the Ai, finding ways of improving the Ai database, and running team meetings to boost team connectivity.`],
    [`Moved in January 2023`,`relocated to Porto, Portugal with my citizenship, while continuing with my same work but as a ‘digital nomad’`],
    [`Started studying Front-end Engineering in March 2023 and I am still continuing to pursue further learning in the field`,`From March until September 2023 I studied and completed the Front-end Engineering Professional Course/Certification on Codecademy, I continued to work on minor personal projects until August 2024 when I started learning through SmolJames.com focusing on his roadmap to gain knowledge from a professional in the field, which also included completing his Javascript course on Udemy in September 2024`]]

    const Skills = {
        Coding: {
            HTML: 5,
            CSS: 4,
            Javascript: 4,
            React: 4,
            GitHub: 3,
            'Web Design': 4,
            'Data Structures': 3,
            Algorithms: 3,
        },
        Design: {
            Photoshop: 4,
            Illustrator: 2,
            Krita: 3,
            Layouts: 5,
            'Product Design': 4,
        },
        Languages:{
            English: 5,
            Portuguese: 2,
        },
        Miscellaneous:{
            'Microsoft Office': 5,
            'Google Suite': 5,
            Unity: 2,
            'C#': 1,
        }
    }

    const ProfGoals = ['- Full-time work in Web Development (with a focus on Front-end engineering)','- Growing my Front-end engineering skills to know as much as possible','- Expanding my knowledge to include both Back-end engineering, and Full-stack engineering']

    const PersGoals = [['Improving fitness','I am currently trying to reach a 10km walk in an hour and a half'],
            ['Gaining physical strength','I have started doing free weight training at home'],
            ['Learning sewing','My current projects include dungarees (overalls), and jackets'],
            ['Reading more books','I read 10 books in 2024 and I would like to beat that number in 2025'],
            ['Getting a dog','I have always loved dogs, and excluding the time since I moved to Porto, I have always lived with them, so I would like to get one of my own sometime soon']]

    const Interests = [
        [`Video games`,`Dead by Daylight and Marvel Rivals are my current go to games`],
        [`Painting`,`I just finished an acrylic on canvas painting to add to my collection and I’m planning on a digital piece to create soon`],
        [`Playing with gender`,`I love painting my nails with a theme, and I’m learning makeup too`],
        [`Building Ikea Furniture`,`I built a cupboard, TV stand and a workout/storage bench in a month. And I loved every second of it!`],
        [`Spirituality`,`I love learning about mediums, witches and pagan practices. I also have a tarot deck I use from time to time`],
        [`Traveling`,`I recently ticked London, Manchester, and Barcelona off my bucket list within a year. Berlin, Glasgow and Dublin are some of the cities that are still on my bucket list`],
        [`Dancing & singing`,`It is mostly to myself while cooking and cleaning but I am trying to organize contemporary dance classes and some beginner voice training exercises to do at home`],
        [`TV shows & movies`,`While the list of both is long, I do tend to enjoy things related to horror, superheroes, the supernatural world, a dash of romance, and animations`],
        [`Other media`,`While I don’t have social media (I deleted all my accounts in January 2022), I do love watching Youtube (especially all 4 Smosh channels, as well as podcasts about mental health/queer topics). I also enjoy watching Twitch (I currently mod for a community that I’ve become good friends with, as they are a loving and accepting group along with being fun to hang with in the evenings)`]]

    

    const handleActiveKey = (val) =>{
        if(!val){return}
        if(val === activeKey){
            setActiveKey('');
        }else{
            setActiveKey(val);
        }
    }

    //create a function to loop over stats objts to create the list of different personal stats

    //array handler function handles all objects that hold arrays
    const ArrayHandler = (arr) =>{
        //guard clause
        if(!arr){return console.log('array is blank')}
        //taking the object down one level/into its 'key' so can access arrays within
        const newArr = arr[Object.keys(arr)[0]];
        //if the next level is already an array with its first child being a string then we want map over the array create elements for those strings
        if(((typeof newArr[Object.keys(newArr)[0]])) === 'string'){
            const profArr = newArr.map((value, index) =>{
                return(
                    <p className='profGoalsPtags' key={index}>{value}</p>
                )
            } )
            //returning a group of paragraphs
            return profArr;
        } else{
            //since the string we need is in an array that is in the current object, we want to get an array of keys to reference later
            const arrKeys = Object.keys(newArr);
            //we want to loop over the objects keys to get each array at that key
            for(let i = arrKeys.length; i > 0; i--){
                //mapping over each individual array within the object and then creating an element for each of the 2 values, each with inidividualized keys
                const profArr = newArr.map((value, index) =>{
                    return(
                        <div key={index} className={'divContainer' + ((activeKey === value[0]) ? ' divClicked' : '')}>
                            <div className='titleDiv' onClick={()=>{handleActiveKey(value[0])}} key={index + 0}>
                                <h3 className='title'>{value[0]}</h3>
                                <i className={"chevron fa-solid fa-chevron-right" + (activeKey === value[0] ? ' clicked' : '')}></i>
                            </div>
                            <p className={(activeKey === value[0] ? 'description clicked' : 'description notClicked')} key={index + 1}>{value[1]}</p>
                        </div>
                    )
                } )
                //returning a group of paragraphs
                return profArr;
            }
        }
    }

    const SkillHandler = (skillSet) =>{
        //accessing the keys that are inside the skill array in order to skip through one level of the object list
        const titleKeys = skillSet[Object.keys(skillSet)[0]];
        //initializing an empty array so that it can have html elements pushed into it
        let fullComponent = []

        //mapping into the first set of keys in order to gain access to the first level keys - 'coding', 'design', 'languages', and 'miscellaneous'
        Object.keys(titleKeys).map((key, index)=>{
            //wrapping the key being mapped over in a h3 element (as it is a title) and then pushing it into the fullComponent stack
            fullComponent.push(<h3>{key}</h3>);

            //gaining access to the entries within the titleKeys array but this time at the specific key that is currently being mapped (this is done in the first mapping to keep children elements stacked under their respective parent)
            Object.entries(titleKeys[key]).map((skill, i)=>{
                //initializing an array so that each individual skill can have its own stack to fill before being pushed into fullComponent
                let skillArray = [];
                //pushing the first value in the array into the skill array as this contains the name of the skill
                skillArray.push(<p>{skill[0]}</p>);
                //initializing an array that can be filled with multiple icons before pushing them on to the skillArray
                let stars = [];
                //getting the size of the value stored in the second value of the array so that it can produce star icon elements for the number associated with each skill
                for(let j = 0; j < skill[1]; j++){
                    //filling the stars array first with icons
                    stars.push(<i className="fa-solid fa-star"></i>)
                }
                //wrapping the stars in their own div and adding a class to style it later, then pushing it into the skillArray to come after the skill's name
                skillArray.push(<div className='stars'>{stars}</div>);
                //wrapping the skillArray in another div with class name of skillArray, thus allowing each individual skill and star pairing to exist in their own div, and then pushing that div into the fullComponent, so that it is stacked under the skill section title
                fullComponent.push(<div className='skillArray'>{skillArray}</div>);
            })
        })

        //once all the keys have been mapped over (including the individual skill entries too), the fullComponent now contains multiple seperate divs in an array, this is then wrapped in another final div and then returned so that it can be rendered once called upon
        return(<div className='skillClass'>{fullComponent}</div>)
    }
    

  return (
    <>
        <h2 className='titleMrgn'>Past Experience</h2>
        <ArrayHandler PastExp={PastExp} />
        <h2 className='skillTitle titleMrgn'>Skills</h2>
        <SkillHandler Skills={Skills} />
        <h2 className='profTitle titleMrgn'>Professional Goals</h2>
        <ArrayHandler ProfGoals={ProfGoals} />
        <h2 className='titleMrgn'>Personal Goals</h2>
        <ArrayHandler PersGoals={PersGoals} />
        {/* the interests elements and title are wrapped in their own div as to allow different styling to be placed just on this section*/}
        <div className='interestsDiv'>
            <h2 className='interestsTitle titleMrgn'>Interests</h2>
            <ArrayHandler Interests={Interests} />
        </div>
    </>
  )
}
