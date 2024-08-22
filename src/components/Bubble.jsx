import React from "react";
import "./bubble.css";

function Bubble({ data }) {
  console.log(data.source);
  return (
    <div className="container bubble__container">
      <div id="content">
        <img
          id="image"
          src={require("../assets/" + data.source + ".png")}
          alt="logo"
        />

        <div id="details">
          <h2>{data.company}</h2>
          <p>{data.position}</p>
        </div>
      </div>

      <p id="date">{data.date}</p>
    </div>
  );
}

export default Bubble;
