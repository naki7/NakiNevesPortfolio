# Project Goal
Create a website that serves as a means of displaying the devs portfolio. This must include:
- inticing home page
- about me page that details both personal and professional history, present, and perceived future
- portfolio page that includes selected coding projects, and selected art projects, to show case skills
- contact page to be able to interact with media links (github, linkedin, etc.), as well as send a direct email. (colud make this as a modal instead of individual page)

# Anticipated struggles
- making email functional has I haven't performed it before
- managing assets and possibly having to recreate them as they might not function/fit as initially perceived (primarily decoration assets).

# First Steps
Organizing and importing all assets that will be used. Current plan includes:
- picture of dev (edited from jpg to png)
- multiple 'decoration' assets (otters to match preferred aestethic)
- colours to be used
- removing vite+react base stylings
- using css family creation to create standards around how colour

# Processes learnt inbetween 1st and 2nd steps
- Krita funcionality
    - Learnt how to get rid of background for the Profile img
    - Learnt how to use vectors in this app specifically to make all 7 otter svgs
        - chose svgs for otter imgs as it resolved the above anticipated struggle of imgs being pixelated on different screen sizes
- Usefullness of using objects to contain large amounts of text with hierarchies which will allow me to later loop over the object to create components, thus making for cleaner code and less retyping of the same web elements

# Second Steps
Begin organizing stylings so that the website is more accessible in future steps
- Finding fonts and adding them to root as variables
- resizing elements on home page to refine visual standards
    - profile img sizing
    - adding in otter imgs
    - changing h1 styling
    - changing p styling
    - changing button styling
- look at possibly placing footer on home page too, and then sorting out visuals
    - add linkedin logo and link
    - add github logo and link
    - add cv logo and temporary link (CV will be redone soon and then replaced)
    - edit copyright styling

# Step 2 Progression and Results
- Styling for site went well, all fonts, colours, etc. are functional
- No major issues caused during styling of home page
    - added usestate to handle which page was currently active and linked them to the buttons on the home page
    - improved on fitting elements on a screen with the use of flex and absolute positioning to give all elements an appropriate amount of spacing
    - learnt more about text shadows which created some nice eye ctaching visuals for the home page
- Decided to exclude the Footer from the home page as it felt like it would've been more information than needed on the home page

# Third Steps
Focus on Navbar and Footer Sections
- Navbar was created easily with ul and li elements that had styling used to make them appear like buttons
    - The function that changed which page was currently selected was passed down as a prop from the main app component, it was spreaded, and then it was added to the lis with onclick and the appropriate state it should change to
    - the Navbar also renders conditionally so that whichever page is currently in use, wont show up as an option on the Navbar
    - as this first build is mobile design first a plus icon as well as a hamburger menu icon were added so that when clicked, the hamburger menu icon dissapears and opens the navabar, and then the cross appear, when the cross is clicked it is hidden, then navbar closes, and the hamburger menu is set to visible again
    - difficulty was encountered here with the animation that was added to the navbar, as an otter moving across the screen with a blue background was added to create visual insteractivity. The difficulty will be discussed further below.

- Footer was simple to implement
    - icons for linkedin, github, and the CV were added, along with anchor tags that linked to the appropriate sites, or in the case of the CV it opens the pdf on a blank page.
    - a copyright statement was added to the bottom
    - a line was added to the top of the footer to later add some differentiation to the rest of the page above the line
    - some minor struggle has been encountered with the footer as it was placed to always be at the absolute bottom of the root page, which will be discussed below.

# Struggles Encountered in Step 3
- the footer issue is primarily related to the content that is on other pages being hidden behind the footer, as the footer does not know to leave some space before it
    - the current resolution to this is to as styling is added to the pages to add a padding at the bottom of the page as to give space for the footer

- the issue encountered with the navbar animation was in the way that the animation was spawning as it kept covering up more space than was available on the screen and would therefore create a scroll bar to move along the x axis
    - this was resolved by changing the div that held both the background and the otter img to a fixed position instead of an absolute as this error was only being caused in an absolute position
    - the background was then easier to animate as well as the div could simply be set to a width percentage that would cover 40% extra of the total 100% which then allowed space for the otter to be covered in blue while also covering the full navabar once the otter was so far to the right that it was off the screen
    - another issue was the otter on animating back to the starting postion (off screen to the left) would look like it was swimming backwards as its face was still pointed to the right of the screen.
        - this was resolved by adding a transform with rotation to the otter image alone during each animation cycle so that it would know to flip completely when closing and flipping again to open

    - a minor issue currently still exists at this point where on loading of the navbar the otter close animation plays (while this is being left for now as it isnt a serious issue, it might be looked to be resolved later)

# Fourth Steps
This step focuses on the About Me page, both the code used, its content, and the styling
- The primary focus of this page is broken down into 3 main sections. The hero section, The statistics section, and the 'Who I Am' short story section.
- the hero section was mostly simple to implement, the text used might be changed later as it is perhaps a little too long for a hero section description
    - the 'skip to short story' button functioned easily, but did remind me to change the root divs scroll behavior to smooth as it was jolting to suddenly have the whole screen change
- The short story section was also mostly simple to implement, mostly the issue came from using line break tags inside one large p tag. When styling was later implemented this caused issues as trying to use span tag to change backgrounds for each paragraph did not function as I had hoped.
    - I changed the single p tag instead into p tags for each paragraph which worked great as i could then add classnames to each p tag, and reusing classnames where needed so i could apply the same styles to multiple p tags where needed
    - this also then allowed me to later use the span tag better as i could then freely use it to highlight specific words/phrases in the p tags and could even target specific ones within certain classes as to give each section unique but reusable styling
- The statistics section was the main struggle for this step and therefore will all be discussed in the struggles section

# Struggles Encountered in Step 4
The challenge for Step for was to instead of making individual elements for each statistic like 'div class skill' 'h3' 'p html' 'star icons'X5, I wanted to have the text for the statistics stored within objects/arrays and then use a function that would loop over the objects and produce those elements for me with the appropriate classnames, onclick functions, etc.
- the first problem I encountered was that I had too much variation within the one stats object which was both making it more complicated to code, both for me and for the react component to comprehend.
    - So I broke down the stats object into its main parts, one for my past experiences, one for my skills, one for the professional goals, one for the personal goals, and one for my interests
- i then created a functional component that would take one of these arrays as an argument and then produce the elements
    - this took me a bit of time to figure out perfectly but the best way of doing it was to take the argument array and firstly break it down further by going into that array an making that array a new array as it kept being seen by react as an object and thus not letting certain methods be run on it
    - then I did an if check to see if the first child of the new array was an array or if it was an object (of which the new array was also seen as an object). if it was an array then the .map method was used on the child of the new array at each object key of the new array to create a p element (this primarily created the professional goals elements)
    - if the first child was an object, then the function creates a second array out of the object keys of the original new array. A for loop is then used to loop for the length of the second array, but as it loops over the length of the second array it then goes through the original new array by mapping over it, and for each instance it then returns a div that contains a div with the value at the 0th index of the new array (eg 'born in 1996') in a h3 tag and a chevron icon to indicate that the h3 is clickable, and then outside of the second div a p tag that contains the value at the 1st index of the array (eg 'Johannesburg, South Africa').
        - each of these elements had classes added to them (some that were conditionally added so that the p tag could be hidden and made visible along with styling and animation changes onclick)
        - hiding the p tags at first was a struggle but i figured out that i could make it so that when the div with the h3 and icon were clicked that then it would set a usestate value to the value of that h3, mean while the p tag conditionally had a class added to it as along as the usestate value was set to the value of the h3 that the p tag was created with. that class then would set the p tag to visible if the class was set to clicked and hidden when the class was set to its automatic class of unclicked
        - this created the past experiences, personal goals, and interests sections
- the next challenge was making the skills object render through a functional component as it would not function with the same functional component as was used for the rest. This is due to the fact that the skills object contained multiple objects that each had their own objects with paired up content, and the inner objects had varying lengths to their total key length
    - after trial and error i figured the best way to produce what i wanted was to create an empty array (called fullcomponent) that would have html elements pushed into it and it the end return that whole array within a div of its own, instead of mapping of each individual object key and returning an element immediately
    - the first step was to create a new array out of the original object keys.
        - This let me map over the object keys in that new array and immediately pushing each key that it mapped over as an h3 to the fullcomponent array, this allowed me to get the titles/'keys' for each section in the skills object (eg 'coding').
            - While still in that mapping method the function then maps over each object entry in the same new array allowing me access to each individual entry that is held within the above key (eg while key is 'coding' the first entry to map over is 'html':'5').
            - I then created another empty array, an individual skill array, that the function then pushed into a p tag with the entries value at the 0th index.
            - I created another empty array, a stars array, which the function would then loop for the length of how big the entries value at the 1st index, and for each loop the function pushes in a star icon into the stars array.
            - Once that is done the stars array is then placed in a div with a class of stars and pushed into the individual skills array, which the individual skills array is then placed inside a div with a skillarray class and pushed into the fullcomponent array.
            - So at this point after 1 time that the first mapping takes places the fullcomponent array would contain ('h3''coding''/h3','p''html''/p','icon star''/i','icon star''/i','icon star''/i','icon star''/i','icon star''/i').
            - The mapping would then continue until it mapped the whole of the skills object.
        - Lastly, once the whole object has been mapped the fullcomponent array is placed in a div with a class of skillclass, and that div is then returned, which completes and ends the functional component by having a div containing all the skills that is renderable when called.
- these two functional components were then used to call individual statistic objects and paired with h2 tags above them for each individual statistic object. these elements were all placed under one div and returned so that the personalStats component could then be rendered within the About Me component, between the hero section and the about me short story.
- multiple styles were added to the elements depending on the classes that were given to them within the functional component as they were created


These struggles taught me a lot about the way that react handles functional components and especially how it behaves with arrays and objects. Since javascript can see arrays as objects it is sometimes difficult to tell when methods will function on an array due to it actually viewing it as an object even though it was initalized as an array. It is often best to first run code to see how the array is perceived and then either mapping over the array immediately, or using a for loop with object keys/entries to then be able to map over the array/s within.

# Fifth Steps
This next step will focus on the creation of the Portfolio page and has 3 main elements to it. Another hero section (something short to introduce the page), a coding section containing portfolio projects related to coding, and lastly a art section containing portfolio pieces either related to graphic design or to personal art projects.
- the first step is to create an object with coding portfolio pieces, each key should then contain an object witha title (h3 tag with the name of the site), an img value (a string containing a url to the location in the public folder which will be a screenshot of a website), a description value (a string that describes the website), a url value (the link to the website)
- the second step is similar to the first except that it will be an object with art portfolio pieces, the description value will be string that describes the piece of art instead, and there will be no url value though. The img vale will be the exact same, while the title will be the name of the art piece.

- then a functional component will be created that will take one of the objects in as an argument.
    - an empty portfolio array will be made
    - for the length of the object keys the function will then loop over each key value, get the entries and then loop over each of those values
    - if the entries values contains a url link then it will create h3 tag containing the title, an img tag with a source of the img value which will be wrapped in an anchor tag containing the url link, a p tag containing a description and then placing an icon in another anchor tag containing the url link
        - the tags above will then be pushed into the portfolio array
        - the portfolio array will be returned inside a single div with a class of codingPortfolio
    - if the entries dont contain a url link then it will run the same process as above except it wont wrap the image in an anchor tag nor produce an icon & anchor tag pairing
        - the tags will also be pushed individually into the portfolio array
        - the portfolio array will be returned in a single div but this time with a class of artPortfolio

- The Portfolio component will return/render the hero section directly, followed by the functional component above called twice but with each object as a seperate argument

The Portfolio component is being called in this way as it allows for the objects to include more portfolio pieces as they are completed in the future and the component will automatically render them as if they were always there.

# Struggles Encountered in Step 5
Some issues arose with creating the component that would loop over the objects to create the portfolio sections
- originally i used one component call and dircetly used the objects that were imported, and then i checked if the main key of those objects was either 'coding' or 'art'. however while this functioned it had 2 main issues:
    - The code lacked the ease of adding classnames and divs around elements as using an array and pushing single elements into them, prevented useful situatuion where a div needed to wrap around some elements but not others in that same for loop
    - The code also looked messy and complicated (more so than it need to/should be) the new resolution was a lot cleaner
- I resolved this struggle by creating a unction component that did take an argument which was passed into it directly when it was called for rendering.
    - I then rather used a for loop to break down the object into its individual objects as both objects required that.
    - Then the new object was checked to see if it had 4 objects in it (which would make it the coding object), or if it had 6 objects (making it the art object)
    - those objects where then mapped over based on their values, in which then they were appropriately extracted using value[ index ] which created a situation where i had access to all 4/6 values and thus could setup divs and classname appropriately for a better structure


# Sixth Steps
The main issue with the contact me page is that I have never implemented an email address contact form before and therefore had to do some research on how to achieve what was required
- The first thing I learnt is that React and Email.js (an email server api) run well together and are greatly tested and optimized so this is what I decided to go with
- Following these Email.js steps was easy to implement but I did have troubles with actually insalling email.js into my project ()
- The rest of the contact me page was quite simple to implement as it used knowledge i already had
    - This included creating an html form
    - using conditionals to only render the form when it wasn't filled in and sent but refreshing it once it was needed again through a div that was conditionally rendered when the email had been sent
    - animating an otter swimming when the button was clicked and other general styling
    - and lastly also the creation of a hero section just to make the page homogenous with the rest of the site
- The only other step I needed to create which I wasn't sure about was email validation

# Sturggles Encountered in Step 6

- The struggle I had with installing the email.js api was a mixture of my node.js being slightly out of date and the terminal command i was using to install it had actually depricated which kept throwing errors I had to learn to resolve. by using //npm install emailjs instead of npm install --save emailjs/browser, I was able to get the api installed
- Email validation was a struggle as I had never done it before, however i found a simple guide that took me through the basics of setting up a regex and running the inputted email value against that regex, and then simply returning true if it matched and false if it didnt
    - I then added that to the sendEmail function so that it would prevent emails from being sent when the email that came through was invalid
    - I also added required to all the input fields to make sure that people would not send black emails which would then waste the monthly email.js tokens

# Seventh Step
This step will be mostly simple as it is just going through each page component and adding in media queries so that the site will function and look appropriate on all different screen sizes
- I have already setup and taken note of where I have used flex and where I have used grids as when it comes to those sections, I will simply need to change the values related to those two to make them scale responsively
- I have also set up some styling in the index.css that impacts the full site, which means adding media queries to that file will make it quicker to make changes site wide in terms of responsivity

# No Struggles Encountered in Step 7 so far