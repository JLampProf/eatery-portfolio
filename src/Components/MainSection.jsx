import { useState } from "react";
import Images from "./Images";
import AnimatedLines from "./AnimatedLines";

const MainSection = () => {
  const [image, setImage] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [reset, setReset] = useState("");

  const handleMouseEnter = (e) => {
    setImage(Number(e.target.id));
    setIsHovered(true);
    setReset("");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImage(null);
    setReset("reset");
  };

  return (
    <section className="main-section">
      <div className="background-image">
        <img src="./dining_area.jpg" alt="dining area" />
      </div>
      <ul className="main-section-list">
        <li
          id="0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="main-section-list-item"
        >
          Book A Reservation
        </li>
        <li
          id="1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="main-section-list-item"
        >
          View Our Menu
        </li>
        <li
          id="2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="main-section-list-item"
        >
          Download Our App
        </li>
        <li
          id="3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="main-section-list-item"
        >
          Order Out
        </li>
      </ul>
      <div className="images-component">
        <Images image={image} isHovered={isHovered} reset={reset} />
      </div>
      <AnimatedLines image={image} isHovered={isHovered} />
    </section>
  );
};

export default MainSection;
