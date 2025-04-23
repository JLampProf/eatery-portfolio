import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <Link to="/eatery-portfolio/">Home</Link>
        <BsDot />
        <Link to="/eatery-portfolio/menu">Menu</Link>
        <BsDot />
        <Link to="/eatery-portfolio/app">Download App</Link>
      </ul>
    </div>
  );
};

export default Nav;
