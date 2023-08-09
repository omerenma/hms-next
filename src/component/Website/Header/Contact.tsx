import React, { useRef, useState, CSSProperties } from "react";
import { motion, useInView, animate } from "framer-motion";
import SimpleMap from "../Map";
// import Address from '../../../assets/undraw_Delivery_address_re_cjca.png'
import Image from "next/image";
import { Address } from "../component/images/icons";
import { addEnquiryAction } from "@/src/state/enquiry/addEnquiry";
import { useAppDispatch, useAppSeletor } from "@/src/store/hooks";
import ClipLoader from "react-spinners/ClipLoader";
import { Snackbar, SnackbarOrigin } from "@material-ui/core";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const dispatch = useAppDispatch();
  const { loading, success, message } = useAppSeletor(
    (state) => state.addEnquiry
  );

  interface State extends SnackbarOrigin {
    open: boolean;
  }
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const { vertical, horizontal } = state;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const datas = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    dispatch(addEnquiryAction(datas)).then((response) => {
      if (response) {
        setOpen(!open);
      }
    });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(400px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      className="home-contact"
    >

      <div className="contact-map">
        <div className="address">
          <Address />
        </div>
        <div className="contact-main">
          <h2>Love to hear from you, Get in touch</h2>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            message={message}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
          />

          <div className="contact-detail">
            <div className="contact-name">
              <label htmlFor="name">Your name</label>
              <input
                title="name"
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="contact-name">
              <label htmlFor="email">Your email</label>
              <input
                title="email"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="textarea">
              <label htmlFor="message">Message</label>
              <textarea
                title="message"
                name="message"
                onChange={(e) => handleChangeTextArea(e)}
              ></textarea>
            </div>
            <div className="contact-submit-btn">
              <button
                className="submit-btn"
                title="button"
                type="button"
                onClick={handleSubmit}
              >
                {loading ? (
                  <ClipLoader
                    color="blue"
                    loading={loading}
                    cssOverride={override}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
