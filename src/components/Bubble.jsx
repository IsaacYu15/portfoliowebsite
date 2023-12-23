import React from "react";
import "./bubble.css";

function Bubble({ data }) {
  console.log(data.source);
  return (
    <div className="container bubble__container">
      <img
        id="image"
        src={require("../assets/" + data.source + ".png")}
        alt="logo"
      />

      <div id="content">
        <h1>{data.date}</h1>
        <p>{data.company}</p>
        <p>{data.position}</p>
        <p>{data.tools}</p>
      </div>
    </div>
  );
}

export default Bubble;
