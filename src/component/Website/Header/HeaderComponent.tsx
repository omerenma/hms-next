import React from "react";
import {motion} from 'framer-motion'
const HeaderComponent = () => {
  return (
    <motion.div className="header-component"
        variants={{
          hidden:{opacity:0, y:75},
          visible:{opacity:1, y:0}
        }}
        transition={{ease:"easeOut", duration:2}}
        initial="hidden"
        animate="visible"
    >
      <h1
      >Automate it. Build it. Grow it.</h1>
      <p>Automate your entire daily hospital routing just with few clicks</p>
    </motion.div>
  );
};

export default HeaderComponent;
