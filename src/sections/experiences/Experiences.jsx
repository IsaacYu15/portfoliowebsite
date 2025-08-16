import Bubble from "../../components/Bubble";
import experiencesData from "./data";
import "./experiences.css";

function Experiences() {
  return (
    <section id="experiences">
      <div className="experiences_container">
        {experiencesData.reverse().map((item) => (
          <Bubble key={item.id} data={item}></Bubble>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
