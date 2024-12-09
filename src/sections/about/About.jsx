import React from "react";
import "./about.css";
import Experiences from "../experiences/Experiences"
import headshot from "../../assets/headshot4.png";
import Contact from "../contact/Contact";
import Nav_Header from "../navbar/Navbar_header"



function tryOpen() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var deepLinkQuery = "heyo"; 

  if (userAgent.match(/iPhone|iPad|iPod/i)) {
    window.location = "https://artlink.app/app.html" + deepLinkQuery;
  } else {
    window.location = "unitydl://pocketfriends.com?invite=" + deepLinkQuery;
    setTimeout(function () {
      window.location = "https://play.google.com/store/apps/details?id=com.colorfulcoding.artlink";
    }, 3000);
  }
}


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


        <button onClick={tryOpen}>Deep link testing for campfire</button>
      </div>

      
      
    </section>
  );
}

export default About;
