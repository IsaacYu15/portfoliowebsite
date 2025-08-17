import "./card.css";
import { HiArrowUpRight } from "react-icons/hi2";

const Card = ({ props }) => {
  return (
    <a
      className="card_container"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="img_container">
        {props.source.map((item) => (
          <img className="portfolioImages" src={item} alt="img" />
        ))}
      </div>
      <div className="text_container">
        <a
          className="title"
        >
          {props.title}
          <HiArrowUpRight />
        </a>
        <small>{props.desc}</small>
      </div>
    </a>
  );
};

export default Card;
