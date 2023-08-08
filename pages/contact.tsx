import React from "react";
import Navbar from "@/src/component/Website/Navbar/Navbar";
import Footer from "@/src/component/Website/Footer/Footer";
import Contact from "@/src/component/Website/Header/Contact";
Contact;
const contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default contact;
