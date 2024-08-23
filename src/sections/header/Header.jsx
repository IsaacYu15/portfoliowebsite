import "./header.css";
import Navbar from "../navbar/Navbar.jsx";
import Contact from "../contact/Contact.jsx";


const Header = () => {
  return (
    <header id="header">
      <div className="textWrapper">
        <h1 className="headerText">ISAAC YU</h1>
        <div className="nav__container">
          <Navbar/>
        </div>
      </div>
    </header>
  );
};

export default Header;
