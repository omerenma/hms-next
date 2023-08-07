"use client";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import { motion, animate } from "framer-motion";
import HeaderImage from "../../../assets/Masimo_Podcast Image-Hospital Automation Image_0.jpg";
import Image from "next/image";
const Header = () => {
  return (
    <motion.div
    whileHover={{
      scale:1.2,
      transition:{duration:1}
    }}
    whileTap={{scale:0.9}}
     className="home-header">
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
     
    </motion.div>
  );
};

export default Header;
