import React from "react";

function Bubble({ data }) {
  return (
    <div>
      <h1>{data.date}</h1>
      <h1>{data.company}</h1>
      <h1>{data.position}</h1>
      <h1>{data.desc}</h1>
      <h1>{data.tools}</h1>
    </div>
  );
}

export default Bubble;
