import About from "./sections/about/About";
import Header from "./sections/header/Header";
// import Navbar from "./sections/navbar/Navbar";
import Work from "./sections/work/Work";
import Experiences from "./sections/experiences/Experiences";
import Contact from "./sections/contact/Contact";

const App = () => {

  return (
    <main>
      {/* <Navbar/> */}
      <Header />
      <About/>
      <Experiences />
      <Work/>
      <Contact/>
    </main>
  );
};

export default App;
