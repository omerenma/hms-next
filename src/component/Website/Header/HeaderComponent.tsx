import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const HeaderComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="header-component">
      <motion.h1
      ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Get automated!
      </motion.h1>
      <h2>maximise your daily hospital routine experience with K-HMS</h2>
      <p>
        Your all-in-one hospital management automation solution streamlined
        towards maximising business growth.
      </p>
    </div>
  );
};

export default HeaderComponent;
