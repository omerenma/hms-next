import React, { useMemo, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
// import scss from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import Login from "../src/component/Auth/Login"


const Home = () => {
  // const { token } = useAppSeletor((state) => state.loginSlice);
  const { scrollYProgress } = useScroll();

  return (
    // <main className={scss.main}>
      <main >
    <Login />
    </main>
  );
};
export default Home;
