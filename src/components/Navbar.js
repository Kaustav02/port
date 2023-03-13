import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='header'>
        <Link to={"/"}>
            <h3>Portfolio</h3>
        </Link>

        <ul className='nav-menu'>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <Link to="/project">PROJECT</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
        </ul>

        
      
    </div>
  );
};

export default Navbar;
