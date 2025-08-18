import "./navbar.css";
import data from "./data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="nav">
          {
            data
              .map((item, index) => (
                <li key={index}>
                  <a className="routes" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))
          }
        </div>
        <p>
          SYDE at UW
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
