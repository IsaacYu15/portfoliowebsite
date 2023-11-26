import "./header.css";
import { useEffect } from "react";

const scrollToBio = () => {
  const div = document.getElementsByClassName("container bio__container");

  div[0].scrollIntoView({
    block: "center",
    inline: "center",
  });
};

const Header = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      var mouseX = (e.clientX / window.innerWidth) * 100;
      var mouseY = (e.clientY / window.innerHeight) * 100;
      var header = document.getElementsByClassName("headerText");
      var pos = (mouseX / 2 + mouseY / 2).toString() + "% ";

      for (var i = 0; i < header.length; i++) {
        header[i].style.backgroundPosition = pos;
      }

      console.log(header[0]);
    };

    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <h1 className="headerText">ISAAC YU</h1>
        <h1 className="headerText">ISAAC YU</h1>
        <h1 className="headerText">ISAAC YU</h1>
      </div>

      <button className="arrow" onClick={scrollToBio}></button>

      <div className="container bio__container  ">
        <p>
          Hey! 👋 My name is Isaac and I'm studying Systems Design Engineering
          at Waterloo. I've been developing games for 5+ years, and have been
          exploring various applications programming in the real world. I'm
          always on the look out to learn new things such as working with
          embeded software in a research lab to learning full stack development!{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
