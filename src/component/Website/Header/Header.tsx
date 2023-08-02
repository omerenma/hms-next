"use client";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import { motion } from "framer-motion";
import HeaderImage from "../../../assets/photo-1551076805-e1869033e561.avif";
import Image from "next/image";
const Header = () => {
  return (
    <div className="home-header">
      <div className="home-header-right">
        <HeaderComponent />
      </div>
      <div className="home-header-left">
       
       <Image src={HeaderImage} fill={true} alt="HMS" />
      </div>
    </div>
  );
};

export default Header;
