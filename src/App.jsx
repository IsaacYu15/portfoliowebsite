import About from "./sections/about/About";
import Header from "./sections/header/Header";
// import Navbar from "./sections/navbar/Navbar";
import Project from "./sections/project/Project";
import Experiences from "./sections/experiences/Experiences";
import Contact from "./sections/contact/Contact";

const App = () => {

  return (
    <main>
      {/* <Navbar/> */}
      <Header />
      <About/>
      <Experiences />
      <Project/>
      <Contact/>
    </main>
  );
};

export default App;
