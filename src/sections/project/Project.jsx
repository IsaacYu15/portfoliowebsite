import Card from "../../components/Card";
import data from "./data";
import "./project.css";

const Project = () => {
  return (
    <div>
      <section id="projects">
        <div className="project_header">
          <h2 className="subheader">Projects</h2>
        </div>

        <div className="project_container">
          {data.map((item, index) => (
            <Card
              key={index}
              props={item}
              wide={item.source.length > 1}
            ></Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
