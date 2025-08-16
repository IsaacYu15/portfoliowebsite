import "./card.css";
import { HiArrowUpRight } from "react-icons/hi2";

const Card = ({ props }) => {
  return (
    <div className="card_container">
      <div className="img_container">
        {props.source.map((item) => (
          <img className="portfolioImages" src={item} alt="img" />
        ))}
      </div>
      <div className="text_container">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="title"
        >
          {props.title}
          <HiArrowUpRight />
        </a>
        <small>{props.desc}</small>
      </div>
    </div>
  );
};

export default Card;
