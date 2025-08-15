import Bubble from "../../components/Bubble";
import experiencesData from "./data";
import "./experiences.css";

function Experiences() {
  return (
    <section id="experiences">
      <div className="experiences_container">
        <div className="data">
          {experiencesData.reverse().map((item) => (
            <div>
              <Bubble key={item.id} data={item}></Bubble>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
