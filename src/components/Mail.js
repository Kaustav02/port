import './Mail.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Mail = () => {
  return (
    <div className='form'>
                <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here'/>
            <Link to='/project' className='btn'>
                        Submit
                    
                    </Link>
        </form>
      
    </div>
  )
}

export default Mail
