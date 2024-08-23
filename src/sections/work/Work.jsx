import "./work.css";
import data from "./data";
import Card from "../../components/Card";
import Contact from "../contact/Contact";
import Nav_Header from "../navbar/Navbar_header"

const Work = () => {
  return (
    <div>
      <section id="work">
        <div className="container work__container">
          <div className="nav_header">
            <Nav_Header/>
          </div>
          
          <div className="about__work">
            {data.map((item) => (
              <div>
                <Card key={item.id} props={item} className="about__card"></Card>
              </div>
            ))}
          </div>

          <Contact/>
        </div>
      </section>

      
    </div>

  );
};

export default Work;
