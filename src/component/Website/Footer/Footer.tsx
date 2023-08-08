import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div className="left">
          &copy; {new Date().getFullYear()} kinmar-tech, Nig.
        </div>
        <div className="right text">
          <Link href="/">Home</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
        </div>
        <div className="center text">Links</div>
      </div>
    </footer>
  );
};

export default Footer;
