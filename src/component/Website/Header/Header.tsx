"use client";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import { motion, animate } from "framer-motion";
import HeaderImage from "../../../assets/photo-1551076805-e1869033e561.avif";
import Image from "next/image";
const Header = () => {
  return (
    <div className="home-header">
      <motion.div
      className="box"
      animate={{
        scale:[1,2,2,1,1],
        rotate:[0,0,180,0],
        borderRadius:["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
        />
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
