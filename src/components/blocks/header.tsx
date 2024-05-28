import React from "react";
import { LinkButton } from "@/components/atoms";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <LinkButton href="/">Taeo's boilerplate</LinkButton>
      </div>
      <nav className="nav">
        <LinkButton href="#home">Home</LinkButton>
        <LinkButton href="#about">About</LinkButton>
        <LinkButton href="#services">Services</LinkButton>
        <LinkButton href="#contact">Contact</LinkButton>
      </nav>
    </header>
  );
};

export default Header;
