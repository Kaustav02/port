import './Mainimage.css'
import React from 'react'
import intro from '../assets/new-img.jpg'
import { Link } from 'react-router-dom'

const Mainimage = () => {
return (
    <div className='main'>

        <div className='mask'>
            <img className='intro' src={intro} alt='intro'/>
        </div>

        <div className='content'>
            <p> I am a web developer and started freelancing </p>
                <h1>
                    Developer And Freelancer
                </h1>
                <div>
                    <Link to='/project' className='btn'>
                        My project
                    
                    </Link>
                    <Link to='/contact' className='btn btn-light'>
                        Contact with Me
                    
                    </Link>
                </div>
            
        </div>
    
    </div>
)

}

export default Mainimage;
