import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './contact.css'
import feed from './fed.svg'
function Contact() {
  return (
    <div className='contact'>
        <h1>
        <TypeAnimation
      sequence={[
        'Wanna Hear More About Us?', // Types 'One'
        1000, // Waits 1s
        'Be One Of us ?', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
       
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    
    />
      </h1>
      <div>
      <img src={feed}></img>
      <form>
        <label>Email</label>
        <input placeholder='enter your email'></input>
        <label>Message</label>
        <textarea placeholder='enter your message'></textarea>
        <button className='btn-grad'>Submit</button>
      </form>
      </div>
    </div> 
  )
}

export default Contact
