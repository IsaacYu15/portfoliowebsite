import React from "react";
import Bubble from "../../components/Bubble";
import experiencesData from "./data";
import "./experiences.css";

function Experiences() {
  return (
    <div className="container experiences__container">
      {experiencesData.map((item) => (
        <Bubble key={item.id} data={item}></Bubble>
      ))}
    </div>
  );
}

export default Experiences;
