import React from "react";
import { AiOutlineGithub, AiOutlineLink, AiOutlineYoutube } from "react-icons/ai";
import "./card.css";

const card = ({ className, onClick, props }) => {
  return (
    <div className="container image__container">
       <a className="image_link" href={props.git !== "N/A" ? props.git : props.link} target="_blank" rel="noopener noreferrer">
          <img
            className="portfolioImages"
            src={require("../assets/" + props.source + ".png")}
            alt="logo"
          />
        </a>
      <div className="title_line">
        <h1 className="description">{props.title}</h1>
        <div className="links">
          {props.link !== "N/A" && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <AiOutlineLink />
            </a>
          )}
          {props.youtube !== "N/A" && (
            <a href={props.youtube} target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube />
            </a>
          )}
          {props.git !== "N/A" && (
            <a href={props.git} target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub />
            </a>
          )}
      </div>
      </div>

      <small>{props.lang}</small>
      <p>{props.desc}</p>
        


    </div>
  );
};

export default card;
