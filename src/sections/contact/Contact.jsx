import "./contact.css";
import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <a
          href="https://www.youtube.com/channel/UCrXvYNZslV1yCXd2Rz7Z9gw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineYoutube />
        </a>

        <a
          href="https://www.linkedin.com/in/isaac-yu-11010522a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>

        <a
          href="https://github.com/IsaacYu15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
