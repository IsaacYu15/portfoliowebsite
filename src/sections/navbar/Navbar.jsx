import "./navbar.css";
import data from "./data";
import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";


const Navbar = () => {
  return (
    //ul is for bullet point list in which order does not matter
    <nav>
        <div className="nav__menu">

          <div className="nav">
            {
              //iterate through all the items in data, setting the link to the name
              data.filter(item => item.id >= 1).map(item => ( 
                <li key={item.id}>
                  <a className="routes" href={item.link}>{item.title}</a>
                  <div className="underline"></div>
                </li>
              ))

              
            }
          </div>

          
          <a className="icon"
            href="https://www.youtube.com/channel/UCrXvYNZslV1yCXd2Rz7Z9gw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineYoutube />
          </a>
          <a className="icon"
            href="https://www.linkedin.com/in/isaac-yu-11010522a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a className="icon"
            href="https://github.com/IsaacYu15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          
        </div>
    </nav>
  );
};

export default Navbar;
