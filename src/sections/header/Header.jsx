import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div class="bg"></div>

      <div className="container header__container"></div>
      <div className="textWrapper">
        <h1 className="headerText">ISAAC YU</h1>
        <p className="container bio__container">
          HI! I'M A STUDENT AT THE UNIVERSITY OF WATERLOO STUDYING SYSTEMS
          DESIGN ENGINEERING, PASSSIONATE ABOUT BUILDING COOL THINGS
        </p>
      </div>
    </header>
  );
};

export default Header;
