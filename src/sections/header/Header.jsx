import "./header.css";
import { useIsLaptop } from "../constants";
import headshot from "../../assets/headshot4.png";
import { HiArrowDown } from "react-icons/hi2";
import Contact from "../contact/Contact";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const isLaptop = useIsLaptop();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      style={{ opacity: 1 - scrollY / (window.innerHeight / 2) }}
    >
      <div className="headerContent">
        <div className="motivation" style ={{width: isLaptop ? "fit-content": "100%"}}>
          <h1 className="headerText">ISAAC YU</h1>
          <p>
            I like to solve complex problems <br></br> and build tools that
            enable people to create!
          </p>
          <a href={`#work`} className="projects">
            <span>View Projects</span>
            <HiArrowDown />
          </a>
          <Contact />
        </div>
        {isLaptop && <img className="headshot" src={headshot} alt="logo" />}
      </div>
    </header>
  );
};

export default Header;
