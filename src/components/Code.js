import './Code.css'
import leetcode from '../assets/leetcode.png'
import codechef from '../assets/codechef.png'
import github2 from '../assets/github2.png'

import React from 'react'
import { Link } from "react-router-dom";
 
const Code = () => {
return (
    <div className='code-profile'>
        
        <h1 className="heading">Coding Profile Links</h1>

        <div className='code'>

        <Link to="https://leetcode.com/kaustav01/">
            <img src={leetcode} alt="leetcode" className="leetcode" />
        </Link>

        <Link to="https://leetcode.com/kaustav01/">
            <img src={codechef} alt="codechef" className="codechef" />
        </Link>


        <Link to="https://leetcode.com/kaustav01/">
            <img src={github2} alt="github" className="github" />
        </Link>

        </div>
     


    </div>
)
}

export default Code
