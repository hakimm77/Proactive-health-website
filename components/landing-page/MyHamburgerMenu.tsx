import { useState } from "react";
import { useSpring, animated } from "react-spring";

export const MyHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuAnimation = useSpring({
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
    width: "35px",
    height: "3px",
    background: "black",
    margin: isOpen ? "0px" : "",
    marginBottom: isOpen ? "-1px" : "8px",
    borderRadius: "20px",
    config: { duration: 200 },
  });
  const menuAnimation2 = useSpring({
    opacity: isOpen ? 0 : 1,
    width: isOpen ? "0px" : "35px",
    height: isOpen ? "0px" : "3px",
    background: "black",
    margin: isOpen ? "0px" : "",
    marginBottom: isOpen ? "0px" : "8px",
    borderRadius: "20px",
    config: { duration: 200 },
  });
  const menuAnimation3 = useSpring({
    transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
    width: "35px",
    height: "3px",
    background: "black",
    margin: isOpen ? "0px" : "",
    marginBottom: isOpen ? "0px" : "8px",
    borderRadius: "20px",
    config: { duration: 200 },
  });
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <animated.div style={menuAnimation} className="hamburger-line" />
      <animated.div style={menuAnimation2} className="hamburger-line" />
      <animated.div style={menuAnimation3} className="hamburger-line" />
    </div>
  );
};
