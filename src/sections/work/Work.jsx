import "./work.css";
import data from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="work">
      <div className="container work__container">
        <h2 className="title">FEATURED PROJECTS</h2>

        <div className="about__work">
          {data.map((item) => (
            <div>
              <Card key={item.id} props={item} className="about__card"></Card>
              <h3 className="description">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
