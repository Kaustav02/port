import "./Designs.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png"; 
import twitter from '../assets/twitter.png'

import React from "react";
import { Link } from "react-router-dom";

const Designs = () => {
  return (
    <div className="social-links">
      <div className="h">
        <h1 className="heading"> Social Links</h1>
      </div>
      <div className="links">
        <div className="icon">
          <Link to="https://www.linkedin.com/in/kaustav-mondal-b5a65223b/">
            <img src={linkedin} alt="Linkedin" className="social_1" />
          </Link>

          <Link to="https://www.instagram.com/__k_a_u_s_t_a_v___/">
            <img src={insta} alt="instagram" className="social_2" />
          </Link>

          <Link to="https://www.facebook.com/kaustav.mondal.3701/">
            <img src={fb} alt="Facebook" className="social_3" />
          </Link>

          <Link to="https://twitter.com/Kaustav00472640?s=08">
            <img src={twitter} alt="twitter" className="social_4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Designs;
