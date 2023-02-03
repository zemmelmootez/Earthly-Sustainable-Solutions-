import React from 'react'
import './news.css'
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade'
function Newsletter() {
  return (
    <div className='News'>
        <Flash>
      <h1>Get Our news</h1>
      </Flash>
      <Fade>
      <p>Join our email list and get access to specials deals exclusive to our subscribers.

</p>
<div>
<input type={"text"}></input>
<button>Join Us</button>
</div>
</Fade>
    </div>
  )
}

export default Newsletter
