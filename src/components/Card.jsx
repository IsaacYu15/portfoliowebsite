import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import "./card.css";

const card = ({ className, onClick, props }) => {
  return (
    <div className="container image__container">
      <img
        className="portfolioImages"
        src={require("../assets/" + props.source + ".png")}
        alt="logo"
      />
    </div>
  );
};

export default card;
/*

      <div className="right">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <small>{props.lang}</small>

        <div className="links">
          {props.link !== "N/A" && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <AiOutlineLink />
            </a>
          )}
          {props.git !== "N/A" && (
            <a href={props.git} target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </a>
          )}
        </div>
      </div>
      */
