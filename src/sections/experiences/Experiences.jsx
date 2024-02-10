import React from "react";
import Bubble from "../../components/Bubble";
import experiencesData from "./data";
import "./experiences.css";

function Experiences() {
  return (
    <section>
      <div className="container experiences__container">
        <h2 className="title">EXPERIENCES</h2>
        {experiencesData.map((item) => (
          <div>
            <Bubble key={item.id} data={item}></Bubble>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
