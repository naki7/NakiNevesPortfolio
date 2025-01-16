import React from 'react'

export default function PersonalStats() {
    const stats = {
        'Past Experience': {
            born: [`Born in 1996`, `Johannesburg, South Africa`],
            highSchool: [`Finished High School in 2014`,`Matriculated from Woodlands International College`],
            degree: [`Completed my degree in 2019`,`Professional Bachelor of Arts in Film, Visual & Performing Arts – Majoring in Game Design, Digital Arts, and Interactive Writing`],
            firstJob: [`Started working for Feedonomics in March 2021`,`FeedAi QA Specialist – The work was focused on looking through data that was either produced by the Ai or finding and creating data to add to the Ai. Overall it focused on improving the Ai’s accuracy while avoiding increasing processing times`],
            graphicDesign: [`Studied Graphic Design from September 2021 to July 2022`,`Completed a short course through University of Cape Town, completed 3 courses on Udemy from March until May, and completed a training program from June until July with Brainnest which I was able to gain a recommendation letter from due to my performance`],
            promotion: [`Promoted to Lead FeedAi QA Specialist in August 2022 and is still my current role at present`,`I maintained the same responsibilities as before, but now I also manage a team of FeedAi QA Specialists. I have had to and also continue to train the specialists, update them on new projects, go through work that they have completed to correct any mistakes, I go through projects looking for trends both in terms of performance of the specialists as well as the projects themselves so I can find ways of improving work flow, finding new ways of training the team, gaining an understanding of situations where the projects themselves can be improved, reporting back issues with either the projects or the Ai, finding ways of improving the Ai database, and running team meetings to boost team connectivity.`],
            moved: [`Moved in January 2023`,`relocated to Porto, Portugal with my citizenship, while continuing with my same work but as a ‘digital nomad’`],
            frontEnd: [`Started studying Front-end Engineering in March 2023 and I am still continuing to pursue further learning in the field`,`From March until September 2023 I studied and completed the Front-end Engineering Professional Course/Certification on Codecademy, I continued to work on minor personal projects until August 2024 when I started learning through SmolJames.com focusing on his roadmap to gain knowledge from a professional in the field, which also included completing his Javascript course on Udemy in September 2024`],
        },
        Skills: {
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
        },
        'Professional Goals': ['Full-time work in Web Development (with a focus on Front-end engineering)','Growing my Front-end engineering skills to know as much as possible','Expanding my knowledge to include both Back-end engineering, and Full-stack engineering'],
        'Personal Goals': {
            fitness: ['Improving fitness','I am currently trying to reach a 10km walk in an hour and a half'],
            strength: ['Gaining physical strength','I have started doing free weight training at home'],
            sewing: ['Learning sewing','My current projects include dungarees (overalls), and jackets'],
            reading: ['Reading more books','I read 10 books in 2024 and I would like to beat that number in 2025'],
            pet: ['Getting a dog','I have always loved dogs, and excluding the time since I moved to Porto, I have always lived with them, so I would like to get one of my own sometime soon'],
        },
        Interests: {
            games: [`Video games`,`Dead by Daylight and Marvel Rivals are my current go to games`],
            art: [`Painting`,`I just finished an acrylic on canvas painting to add to my collection and I’m planning on a digital piece to create soon`],
            gender: [`Playing with gender`,`I love painting my nails with a theme, and I’m learning makeup too`],
            furniture: [`Building Ikea Furniture`,`I built a cupboard, TV stand and a workout/storage bench in a month. And I loved every second of it!`],
            spirituality: [`Spirituality`,`I love learning about mediums, witches and pagan practices. I also have a tarot deck I use from time to time`],
            travel: [`Traveling`,`I recently ticked London, Manchester, and Barcelona off my bucket list within a year. Berlin, Glasgow and Dublin are some of the cities that are still on my bucket list`],
            music: [`Dancing & singing`,`It is mostly to myself while cooking and cleaning but I am trying to organize contemporary dance classes and some beginner voice training exercises to do at home`],
            filmMedia: [`TV shows & movies`,`While the list of both is long, I do tend to enjoy things related to horror, superheroes, the supernatural world, a dash of romance, and animations`],
            otherMedia: [`Other media`,`While I don’t have social media (I deleted all my accounts in January 2022), I do love watching Youtube (especially all 4 Smosh channels, as well as podcasts about mental health/queer topics). I also enjoy watching Twitch (I currently mod for a community that I’ve become good friends with, as they are a loving and accepting group along with being fun to hang with in the evenings)`],
        }
    }

    //create a function to loop over stats objt to create the list of different personal stats

    const StatsProducer = () =>{
        if(!stats){return <p>No Stats To Show :(</p>}
        const initialStats = Object.values(stats);
        console.log(initialStats);
        return(
            <ul>
            {initialStats.map((stat, statIndex)=>{
            console.log('this is stat - ', stat, statIndex)
            const keys = Object.keys(stat);
            <p>{keys[statIndex]}</p>
            {if(Array.isArray(stat)){
                console.log('this is an array stat - ', stat, statIndex)
                return (
                    stat.map((i, iIndex)=>{
                        return(<li key={iIndex}>{i}</li>)
                })
            )
            }else{
            return(
            <ul key={statIndex}>
                {console.log(keys[statIndex])}
                <p>{keys[statIndex]}</p>
                {Object.values(stat).map((entry, entryIndex) =>{
                    if(typeof entry === Array){
                        console.log('this is entry - ', entry, entryIndex)
                        return (
                            entry.map((i, iIndex)=>{
                                <li key={iIndex}>{i[iIndex]}</li>
                        })
                    )
                    }
                    
                })}
            </ul>)
        }}})
    }</ul>
    )
    }

  return (
    
    <StatsProducer />
  )
}
