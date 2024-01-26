import "./header.css";
import headshot from "../../assets/headshot3.PNG";

const Header = () => {
  return (
    <header id="header">
      <div class="bg"></div>
      <div className="container header__container"></div>
      <div className="textWrapper">
        <h1 className="headerText">ISAAC YU</h1>
      </div>
    </header>
  );
};

export default Header;
