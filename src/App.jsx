import Contact from "./sections/contact/Contact";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Work from "./sections/work/Work";
import Experiences from "./sections/experiences/Experiences";
import About from "./sections/about/About";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      var mouseX = (e.clientX / window.innerWidth) * 100;
      var mouseY = (e.clientY / window.innerHeight) * 100;
      var pos = (mouseX / 2 + mouseY / 2).toString() + "% ";

      document.body.style.setProperty("--mousePos", pos);
    });

    window.addEventListener("scroll", () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / window.innerHeight
      );
    });
  }, []);

  return (
    //import componets

    //TODOS:
    //-EVEN SPACING IN BETWEEN EACH COMPONENT
    //-SCUFFED HEADER AND ABOUT ME
    //-LINK THOSE DEVLOGSSS
    <main>
      <Navbar />
      <Header />
      <About />
      <Experiences />
      <Work />
      <Contact />
    </main>
  );
};

export default App;
