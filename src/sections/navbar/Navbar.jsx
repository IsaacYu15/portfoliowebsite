import "./navbar.css";

import data from "./data";

const Navbar = () => {
  return (
    //ul is for bullet point list in which order does not matter
    <nav>
        <ul className="nav__menu">
          {
            //iterate through all the items in data, setting the link to the name
            data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
                <div className="underline"></div>
              </li>
            ))
          }
          
        </ul>
    </nav>
  );
};

export default Navbar;
