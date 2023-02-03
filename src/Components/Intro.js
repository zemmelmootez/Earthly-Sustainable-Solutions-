import React from 'react'
import './intro.css'
import logo from './logo.webp'
import Fade from 'react-reveal/Fade';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
  return (
    <div className='main'>
   <Fade>
      <p className='intro-text'>
        <h1>E</h1>
        <img src={logo}></img>
        <h1> rthly
     </h1>
      </p>

      
      <p>for <span>
      <TypeAnimation
      sequence={[
        'better environnement', // Types 'One'
        1000, // Waits 1s
        'better future', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
       
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    
    />
       
        
        </span></p>

      </Fade>
    </div>
  )
}

export default Intro
