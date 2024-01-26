import React from "react";
import Bubble from "../../components/Bubble";
import experiencesData from "./data";
import "./experiences.css";

function Experiences() {
  return (
    <section>
      <h2 className="title">EXPERIENCES</h2>
      <div className="container experiences__container">
        {experiencesData.map((item) => (
          <Bubble key={item.id} data={item}></Bubble>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
