const AnimatedLines = ({ image, isHovered }) => {
  return (
    <div className={`lines`}>
      <div className={`${isHovered ? "lines-right" : ""}`}></div>
      <div className={`${isHovered ? "lines-down" : ""}`}></div>
      <div className={`${isHovered ? "lines-right-bottom" : ""}`}></div>
      <div
        className={`${isHovered && image === 0 ? "lines-first-0" : ""} ${
          isHovered && image === 1 ? "lines-first-1" : ""
        } ${isHovered && image === 2 ? "lines-first-2" : ""} ${
          isHovered && image === 3 ? "lines-first-3" : ""
        }`}
      ></div>
    </div>
  );
};

export default AnimatedLines;
