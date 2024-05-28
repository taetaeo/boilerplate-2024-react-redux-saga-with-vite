import React from "react";
import { LinkButton } from "@/components/atoms";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <LinkButton href="#">서비스 소개</LinkButton>
          <LinkButton href="#">이용약관</LinkButton>
          <LinkButton href="#">개인정보처리방침</LinkButton>
          <LinkButton href="#">연락방법</LinkButton>
        </nav>
        <p>&copy; 2024 Teao. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
