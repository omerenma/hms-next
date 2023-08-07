import React, {useRef} from "react";
import { motion, useInView, animate } from "framer-motion";


const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
  return (
    <div
    ref={ref}
    style={{
        transform:isInView ? "none" : "translateX(400px)",
        opacity:isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
     className="home-contact">
      <div className="contact-header">
        <motion.h2
        >Love to hear from you, Get in touch</motion.h2>
      </div>
      <div className="contact-main">
        <div className="contact-detail">
          <div className="contact-name">
            <label htmlFor="name">Your name</label>
            <input title="name" type="text" name="" id="" />
          </div>
          <div className="contact-name">
            <label htmlFor="email">Your email</label>
            <input title="email" type="email" name="email" id="" />
          </div>
        <div className="textarea">
            <label htmlFor="message">Message</label>
          <textarea title="message" name="message"></textarea>
        </div>
        <div className="contact-submit-btn">
            <input className="submit-btn" title="button" type="button" value="Just send"  />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
