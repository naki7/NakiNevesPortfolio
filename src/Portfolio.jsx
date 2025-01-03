import React from 'react'

export default function Portfolio() {

  // create a function that loops over an array of titles that will pair them with an image and a description to create individual protfolio project cards

  return (
    <div className='Portfolio'>
      <div className='DevProjects'>
        <h3>Dev Projects</h3>
        {/* add webdevelopment projects here */}
      </div>
      <div className='ArtProjects'>
      <h3>Art Projects</h3>
        {/* add art projects here */}
      </div>
    </div>
  )
}
