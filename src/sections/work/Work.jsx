import Card from "../../components/Card";
import data from "./data";
import "./work.css";

const Work = () => {
  return (
    <div>
      <section id="work">
        <div className="work_header">
          <h2>here's what've i've been up to</h2>
        </div>

        <div className="work_container">
          {data.map((item) => (
            <Card
              key={item.id}
              props={item}
              wide={item.source.length > 1}
            ></Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
