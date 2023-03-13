import "./Education.css";

import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div>
      <div className="education">
        <div className="edu">
          <div>
            <h3>Class 10</h3>
            <h4>Santinagar High School (2018) || 91%</h4>
          </div>
        </div>

        <div className="edu">
          <div>
            <h3>Class 12</h3>
            <h4>Santinagar High School (2020) || 90%</h4>
          </div>
        </div>

        <div className="edu">
          <div>
            <h3>Pursuing B.Tech 2nd Year Chemical Engineering</h3>
            <Link to="https://www.nita.ac.in/">
              <p>National Institute Of Technology Agartala || 8.3 CGPA</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
