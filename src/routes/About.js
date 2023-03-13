import React from "react";
import Abouts from "../components/Abouts";
import Code from "../components/Code";
import Designs from "../components/Designs";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Education from "./Education";

const About = () => {
  return (
    <div>
      <Navbar />
      <Abouts />
      <Details/>
      <Code/>
      
      {/* <Education /> */}

      <Footer/>
    </div>
  );
};
 
export default About;
