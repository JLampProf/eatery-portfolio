import { BsDot } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">Home</li>
        <BsDot />
        <li className="nav-list-item">Menu</li>
        <BsDot />
        <li className="nav-list-item">Download App</li>
      </ul>
      <h3 className="nav-header">(Not a real landing page)</h3>
    </div>
  );
};

export default Nav;
