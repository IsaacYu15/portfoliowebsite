import "./navbar.css";
import data from "./data";

const Navbar = () => {
  return (
    //ul is for bullet point list in which order does not matter
    <nav>
      <div className="container nav__container">
        <ul className="nav__menu">
          {
            //iterate through all the items in data, setting the link to the name
            data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
