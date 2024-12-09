import React from "react";
import "./about.css";
import Experiences from "../experiences/Experiences"
import headshot from "../../assets/headshot4.png";
import Contact from "../contact/Contact";
import Nav_Header from "../navbar/Navbar_header"

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <Nav_Header/>
        <img id="headshot" src={headshot} alt="logo" />

        <div className="contents">
          <p>
            My name is Isaac and I'm a student studying Systems Design
            Engineering at the University of Waterloo! I'm passionate about building
            cool things whether it be in the realm of web development, computer graphics or games! 
            When I'm not working I enjoy playing chess and rock climbing :D
          </p>
          <Experiences/>
          <Contact/>
        </div>

      </div>

      
      
    </section>
  );
}

export default About;
