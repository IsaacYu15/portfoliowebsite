import { useIsLargeMobile, useIsMobile } from "../sections/constants";
import "./card.css";

const Card = ({ props }) => {
  const isLargeMobile = useIsLargeMobile();
  const isMobile = useIsMobile();

  return (
    <a
      className="card_container"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="img_container">
        {isMobile ? (
          <img
            className="portfolioImages"
            src={props.source[0]}
            alt="img"
            style={{
              width: "100%",
            }}
          />
        ) : (
          props.source.map((item, index) => (
            <img
              key={index}
              className="portfolioImages"
              src={item}
              alt="img"
              style={{
                width: isLargeMobile
                  ? "calc(42vw - 48px)"
                  : "calc(min(28vw, 408px) - 48px)",
              }}
            />
          ))
        )}
      </div>
      <div
        className="text_container"
        style={{
          maxWidth: `calc(min(${
            isMobile
              ? 100
              : isLargeMobile
              ? props.source.length > 1
                ? 84
                : 42
              : props.source.length > 1
              ? 56
              : 28
          }vw, 408px) - 48px)`,
        }}
      >
        <h3 className="title">{props.title}</h3>
        <small>{props.desc}</small>
      </div>
    </a>
  );
};

export default Card;
