import React from 'react'
import './aboutMe.css'
import PersonalStats from './PersonalStats'

export default function AboutMe() {

  const scrollToTop = () =>{
    window.scrollTo(0,0);
  }

  const handleScrollDown = () =>{
    document.getElementById('short-story').scrollIntoView();
  }

  return (
    <div className='AboutMe'>
      <i className="fa-solid fa-arrow-up-long fa-2xl scrollArrow" onClick={()=>{scrollToTop()}}></i>
      <div className='HeroAboutMe'>
        <h2 className='PageTitle'>Most of Everything About Me!</h2>
        <p>The first half of this page is a collection of some <span className='descriptionHighlight'>statistics about me</span> that you can <span className='descriptionHighlight'>click through</span>
          <br/>While the second half is a <span className='descriptionHighlight'>short story about a part of 'Who I Am'</span> as a person</p>
        <div className='otterBtnDiv'>
          <img src='/Otters/Otter5.svg' alt='Otter looking forward'/>
          <button className='SkipStory' onClick={() =>{handleScrollDown()}}>Skip to<br/>Short Story</button>
        </div>
      </div>
      <div className='StatsSection'>
        <PersonalStats/>
      </div>
      <div className='ShortStory' id='short-story'>
        <h2 className='SectionTitle'>Who Am I</h2>
        <p className='storyBasic'>There are many things that make me the person that I am. I sometimes think I could write a whole novel about my life so far, but don’t worry, this will be both as short and as sweet as me. While my life has been lived so far for a relatively short amount of time, it has also been extremely eventful and <span>full of challenges that made me grow</span>. <span>Growth</span>, is the first part of the ‘who’ I am that I would like to show.</p>

        <p className='storyClrChange'>Growing has always been my version of Sisyphus pushing a boulder up a hill. My hubris was thinking growth would happen on its own. I was <span>naïve</span> enough to believe that it would be easy and that it would come naturally like it seemed to for others. Whether it was because of my <span>queerness</span>, <span>gender expression</span>, my <span>autism</span> or <span>ADHD</span>, or even something else; I was and most probably always will be fundamentally different from those around me. But me learning about myself, about the way my <span>mind works</span>, about my <span>passions</span>, and about <span>the way I can be me</span> in a room full of people, that is me pushing that boulder up that hill. Perhaps one day I will have grown enough that once the boulder is up the hill, it will stay there. How I've been getting the boulder up the hill leads me to the second part of what I would like to show, <span>learning</span>.</p>

        <p className='storyBasic'>My whole life I have spent my time learning three main things: what do I <span>want out of life</span>, the <span>skills/knowledge</span> I need to get what I want out of life, and how do <span>people fit into my life</span>. I spent my high school years, my university years, and the years that followed trying to find that path that felt like it was made for me. I spent time thinking I would do something <span>logical</span>, only for my <span>creative</span> side to pull me in another direction. I went from thinking I would be an accountant to being a character designer, to a forensic scientist, to a writer, to so many other options. All of that time was me playing tug of war in my own mind. And then I realized in 2023, <span>I could have both</span> the creative and logical. Things finally settled, and I found the path I wanted. <span>Front-end Engineering</span> is all the logic of code, while having the creativity to push that code to create something beautiful. Web development was finally a goal to achieve, but the question of <span>skill and knowledge</span> was the next path I would have to face.</p>

        <p className='storyClrChange'>After deciding on Front-end engineering, I pursued knowledge through Codecademy. <span>Studying</span> while having a <span>full-time job</span> was often not the easiest task, but I learned how to be <span>flexible</span> and to <span>stick to the dream</span> that I wanted. Over time I realize that I had a lot of guilt around all the paths I had abandoned. The guilt taunted me into thinking Web Development would be another thing I would abandon. But I realized that those old paths didn’t have to be abandoned, but rather it was <span>knowledge and passion</span> that I could bring <span>back to life</span>. I combined it with all the new knowledge I was gaining and started <span>creating something new</span>. But there was one last skill that I needed to work on and it is also the last part of who I am that I want to show.</p>

        <p className='storyBasic'>People always have been the most confusing thing to me. Whether it is small talk with people, asking for help, giving an opinion, or trying to form something deeper, it has always been a struggle. But there is something that motivates me about people, and that is <span>community</span>. A fond moment I often recall is from my final year of high school. I remember in mathematics classes I tended to finish all the practice questions quicker than those around me. I would then sit there with the other students around me and <span>help them figure out</span> how to answer the practice questions by explaining the same concept but through a <span>new perspective</span>. A similar time of life was when I was in university, and me, and my 2 best friends would sit together. Each of us would be working on our own projects, but we would <span>help each other</span> figure out problems as they came up. Those problems might have been a <span>bit of code</span> that kept <span>bugging out</span>, some <span>art</span> we couldn’t quite get to fit the <span>right perspective</span> or trying to figure out the best way to <span>structure</span> our projects. We were always there to help each other out, and spoiler alert, <span>we still help each other out to this day</span>.</p>

        <p className='storyClrChange'>Being around people has informed my work as a <span>team lead</span>. I have learned to look for <span>patterns</span> within the work I do so that I can <span>communicate them clearly</span>, which improves the <span>Ai's accuracy</span>. I’ve learned how to communicate with my manager so that I can <span>fully understand projects</span> that we work on, making sure the <span>turnaround</span> of projects is both <span>accurate and rapid</span>, and asking <span>questions</span> or <span>raising concerns</span> so that problems can be dealt with before they turn into disasters. Lastly, I have grown my skills of being able to look at work others completed, both <span>correcting mistakes</span>, but also <span>investigating</span> why those mistakes happened so that <span>new ways of guiding projects</span> can be formulated, allowing my team the time to <span>ask questions</span> and gain an <span>understanding</span> from their perspective so that we can all <span>grow together</span>.</p>

        <p className='storyEndP'>To live life means to be like Sisyphus, endlessly pushing through a challenge, day after day. Spending time learning what we can, and in learning, we keep growing. And even though we will get to the end of the road not knowing everything, at least we can pass on our knowledge to those around us and help them grow. <span>That is who I am, and who I want to be</span>. I want to be <span>the tree that reaches toward the sky</span>, and in the process, I want to <span>spread my seeds of knowledge</span>, so that one day <span>others can reach for that sky too</span>.
        </p>
      </div>
    </div>
  )
}
