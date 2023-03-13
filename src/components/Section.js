import "./Section.css";
import wifi from '../assets/wifi.jpg'

import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="main">
      <div className="contenet">
        <div className="card">
          <h2>Project--1</h2>
          This is a log in and sign up form interface made with HTML CSS and
          little bit JS
          <span className="bar"></span>
          <p className="btc"></p>
          <Link
            to="https://kaustav02.github.io/login-and-registration-form-interface/"
            className="btn"
          >
            See My Project
          </Link>
        </div>

        <div className="card">
          <h2>Project--2</h2>
          It is UI of a picture captcha where i can select a picture . It is
          made with HTML and CSS only
          <span className="bar"></span>
          <p className="btc"></p>
          <Link
            to="https://kaustav02.github.io/picture-selection-interface/"
            className="btn"
          >
            See My Project
          </Link>
        </div>

        <div className="card">
          <h2>Project--3</h2>
          it is a student grade calculator where a student can see his grade and
          percentage . It is made with HTML , CSS and a little bit of Javascript
          <span className="bar"></span>
          <p className="btc"></p>
          <Link
            to="https://kaustav02.github.io/Student-calculator/"
            className="btn"
          >
            See My Project
          </Link>
        </div>

        

        <div className="c1">
        {/* <img className='wifi' src={wifi} alt='wifi'/> */}
        </div>

        <div className="card">
          <h2>My Designs</h2>
          Here i have made sme of the designs using Figma . Have a look.
          <span className="bar"></span>
          <p className="btc"></p>
          <Link
            to="https://drive.google.com/drive/folders/1b2heA0Cux3YOXQbvsVXlwVGUZWQKE92Q?usp=sharing"
            className="btn"
          >
            See My Project
          </Link>
        </div>

        <div className="c2">
          
        </div>
      </div>
    </div>
  );
};

export default Section;
