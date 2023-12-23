import "./experiences.css";
import data from "./data";

import React from "react";

function Experiences() {
  return (
    <div className="container experiences__container">
      {data.map((item) => {
        console.log(item.date);
      })}
    </div>
  );
}

export default Experiences;
