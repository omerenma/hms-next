import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
const Description = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})
  
  return (
    <div  className="home-description"
   
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Why choose K-HMS?
      </motion.h1>
      <div 
      ref={ref}
      className="home-header-description"
       style={{
        transform:isInView ? "none" : "translateX(400px)",
        opacity:isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
      >
        <motion.div 
        whileHover={{
          scale:1.2,
          transition:{duration:1}
        }}
        whileTap={{scale:0.9}}
        className="home-header-description-card">
          <p className="home-header-description-card-p">Automation</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </motion.div>
        <motion.div
        whileHover={{
          scale:1.2,
          transition:{duration:1}
        }}
        whileTap={{scale:0.9}}
         className="home-header-description-card">
          <p className="home-header-description-card-p">Reliable</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </motion.div>
        <motion.div
        whileHover={{
          scale:1.2,
          transition:{duration:1}
        }}
        whileTap={{scale:0.9}}
         className="home-header-description-card">
          <p className="home-header-description-card-p">Staff record</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </motion.div>
        {/* <div className="home-header-description-card">
          <p className="home-header-description-card-p">Patients record</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </div>
        <div className="home-header-description-card">
          <p className="home-header-description-card-p">Data persistency</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </div>
        <div className="home-header-description-card">
          <p className="home-header-description-card-p">Efeciency</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Description;
