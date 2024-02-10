import React from "react";
import "./about.css";
import headshot from "../../assets/headshot3.PNG";

function Experiences() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="contents">
          <h3>
            My name is Isaac and I'm a student studying Systems Design
            Engineering at the University of Waterloo, passionate about building
            cool things :D
          </h3>
          <img id="headshot" src={headshot} alt="logo" />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
