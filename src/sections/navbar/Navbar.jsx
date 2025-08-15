import "./navbar.css";
import data from "./data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="nav">
          {
            data
              .filter((item) => item.id >= 1)
              .map((item) => (
                <li key={item.id}>
                  <a className="routes" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))
          }
        </div>
        <p>
          fullstack & game developer
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
