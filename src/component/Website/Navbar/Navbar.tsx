import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleTogle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="hamburger" onClick={handleTogle}>
        {!isOpen ? <DehazeIcon className="hamburger-icon" /> : <CloseIcon className="hamburger-icon"/>}
      </div>
      <div className={!isOpen ? "container-nav" : ''}>
        <div className="navigation">
          <div className="left-nav">
            <Link href={"product"} className="nav-item">
              Product
            </Link>
            <Link href={"product"} className="nav-item">
              Solution
            </Link>
            <Link href={"product"} className="nav-item">
              Business
            </Link>
          </div>
          <div className="right-nav">
            <Link href={"login"} className="nav-item">
              Log in
            </Link>
            <Link href={"account"} className="nav-item signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
