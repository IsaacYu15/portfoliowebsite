import "./header.css";
import Navbar from "../navbar/Navbar.jsx";

const Header = () => {
  return (
    <header id="header">
      <div className="textWrapper">
        <h1 className="headerText">ISAAC YU</h1>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;
