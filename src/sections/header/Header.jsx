import "./header.css";
import { useEffect } from "react";

const Header = () => {
  const scrollToBio = () => {
    const div = document.getElementsByClassName("container bio__container");

    div[0].scrollIntoView({
      block: "center",
      inline: "center",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      var mouseX = (e.clientX / window.innerWidth) * 100;
      var mouseY = (e.clientY / window.innerHeight) * 100;
      var header = document.getElementsByClassName("headerText");
      var pos = (mouseX / 2 + mouseY / 2).toString() + "% ";

      for (var i = 0; i < header.length; i++) {
        header[i].style.backgroundPosition = pos;
      }

      console.log(header[0].style);
    };

    document.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("scroll", () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / window.innerHeight
      );
    });
  }, []);

  return (
    <header id="header">
      <div className="container header__container"></div>
      <div className="textWrapper">
        <h1 className="headerText">ISAAC YU</h1>
        <h1 className="headerText">ISAAC YU</h1>
        <h1 className="headerText">ISAAC YU</h1>
      </div>
    </header>
  );
};

export default Header;
