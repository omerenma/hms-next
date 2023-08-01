import React from "react";
import { links } from "../Link";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="container-nav">
    <div className="navigation">
      <div className="left-nav">
        <Link href={"product"} className="nav-item">Product</Link>
        <Link href={"product"} className="nav-item">Solution</Link>
        <Link href={"product"} className="nav-item">Business</Link>
      </div>
      <div className="right-nav">
        <Link href={"login"} className="nav-item">Log in</Link>
        <Link href={"account"} className="nav-item signup">Sign up</Link>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
