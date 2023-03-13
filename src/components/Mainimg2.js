import './Mainimg2.css'

import React from 'react'
import coding from '../assets/coding.avif'


const Mainimg2 = () => {
  return (
    <div className='hero-img'>
      <h1 className='head'>My projects</h1>
      
      <div className='heading'>
      <img className='image-container' src={coding} alt='intro'/>
      </div>
      
    </div>

    
  )
}

export default Mainimg2;
