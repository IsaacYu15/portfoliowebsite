import Contact from "./sections/contact/Contact";
import Header from "./sections/header/Header";

import { useEffect } from "react";
import Navbar from "./sections/navbar/Navbar";

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
    <main>
      <Header />
    </main>
  );
};

export default App;
