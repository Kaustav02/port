import React from 'react'
import './Link.css'
import pg from '../assets/project1.jpg'


const Link = () => {
return (
    <div className='main'>
        
        <div className='mask'>
            <img className='pg' src={pg} alt='pg'/>
        </div>
        <div className='content'>
            <h1>
                MY PROJECTS
                
            </h1>
        </div>

    </div>

)
}

export default Link;