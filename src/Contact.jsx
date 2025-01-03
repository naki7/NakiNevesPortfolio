import React from 'react'

export default function Contact() {

  // add useEffect function that uses an API to send email to me

  return (
    <div>
      <form>
        {/* add on change and value state effects */}
        <input type='text' placeholder='Name...'  />
        <input type='text' placeholder='Your Email...'  />
        <input type='text' placeholder='Message...'  />
        <input type='submit'/>
      </form>
    </div>
  )
}
