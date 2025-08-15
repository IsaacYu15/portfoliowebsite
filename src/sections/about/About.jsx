import "./about.css";
import Experiences from "../experiences/Experiences";

function About() {
  return (
    <section id="about">
      <div className="about_container">
        <h2>nice meeting you!</h2>
        <div className="contents">
          <p>
            I'm Isaac, a 2B student studying Systems Design Engineering at the
            University of Waterloo. <br></br>
            <br></br> I love to build meaningful products in the realms of{" "}
            <span>
              research, game development, and full stack applications.
            </span>{" "}
            Wheter it be in a start up, studio or corporate environment, I love
            to have a <span>high impact</span> on the team and{" "}
            <span>collaborate cross discipline</span>
          </p>
        </div>
      </div>
      <Experiences />
    </section>
  );
}

export default About;
