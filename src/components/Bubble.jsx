import "./bubble.css";
import { useIsLargeMobile} from "../sections/constants";

function Bubble({ data }) {
  const isLargeMobile = useIsLargeMobile();
  return (
    <div className="bubble_container">
      <div className="bubble_content">
        {!isLargeMobile && <img className="image" src={data.source} alt="logo" />}

        <div className="details">
          <h3>{data.company}</h3>
          <p>{data.position}</p>
        </div>
      </div>

      <img className="contentImage" src={data.demo} alt="logo" />
    </div>
  );
}

export default Bubble;
