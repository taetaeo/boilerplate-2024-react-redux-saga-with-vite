import React from "react";
import { LinkButton } from "../atoms";

const RightSideNavigation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="right-side-navigation-toggle-button top" onClick={toggleNav}>
        ☰
      </button>
      <div className={`right-side-navigation-container  ${isOpen ? "open" : ""}`}>
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
    </>
  );
};

export default RightSideNavigation;
