import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMail, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-ctn">
        <div className="left">
          {/* Section of adress */}
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            kolkata , Barrackpore ,West Bengal
          </div>

          {/* Section of Phone */}

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8481978908
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kaustav.mondal2003@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h2> About me</h2>
          <p>
            Hello and welcome! I am a freelance graphic designer and content writer
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
