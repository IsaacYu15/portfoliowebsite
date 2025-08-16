import "./header.css";
import headshot from "../../assets/headshot4.png";
import { HiArrowUpRight } from "react-icons/hi2";
import Contact from "../contact/Contact";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <header id="header" style={{ opacity: 1 - scrollY / (window.innerHeight /2) }}>
      <h1 className="headerText">ISAAC YU</h1>
      <div className="headerContent">
        <div className="motivation">
          <p>
            Passionate about crafting beautiful experiences and tools that
            enable people to do the same
          </p>
          <a href="mailto:isaachhyu@gmail.com" className="contact" mail="true">
            <span>CONTACT</span>
            <HiArrowUpRight />
          </a>
          <Contact />
        </div>
        <img className="headshot" src={headshot} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
