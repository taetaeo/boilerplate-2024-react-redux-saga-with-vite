import React from "react";
import { LinkButton } from "../atoms";

const LeftSideNavigation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="toggle-button top" onClick={toggleNav}>
        ☰
      </button>
      {/* 네비게이션 컨테이너 */}
      <div className={`side-navigation-container  ${isOpen ? "open" : ""}`}>
        <nav className={`side-navigation`}>
          <div style={{ width: "100%", height: "60px" }}></div>
          <ul>
            <li>
              <LinkButton href="#home">Home</LinkButton>
            </li>
            <li>
              <LinkButton href="#services">Services</LinkButton>
            </li>
            <li>
              <LinkButton href="#about">About</LinkButton>
            </li>
            <li>
              <LinkButton href="#contact">Contact</LinkButton>
            </li>
          </ul>
        </nav>
      </div>
      {/* 네비게이션 컨테이너 */}
      <button className={`toggle-button bottom ${isOpen ? "open" : ""}`} onClick={toggleNav}>
        {isOpen ? "➡️" : "⬅️"}
      </button>
    </>
  );
};

export default LeftSideNavigation;
