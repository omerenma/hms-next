import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
const Description = () => {
  const container = useRef(null);
  const ref = useRef(null);
  //    const isInView = useInView({ root: container})

  //    useEffect(() => {
  //     console.log('Element is in view: ', isInView)
  //    }, [isInView])
  return (
    <div ref={container} className="home-description">
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
      <div className="home-header-description">
        <div className="home-header-description-card">
          <p className="home-header-description-card-p">Automation</p>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home-header-description-card">
          <p className="home-header-description-card-p">Reliable</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home-header-description-card">
          <p className="home-header-description-card-p">Staff record</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home-header-description-card">
        <p className="home-header-description-card-p">Patients record</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home-header-description-card">
        <p className="home-header-description-card-p">Data persistency</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="home-header-description-card">
        <p className="home-header-description-card-p">Efeciency</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
