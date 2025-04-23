import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <Link to="/">Home</Link>
        <BsDot />
        <Link to="/menu">Menu</Link>
        <BsDot />
        <Link to="app">Download App</Link>
      </ul>
    </div>
  );
};

export default Nav;
