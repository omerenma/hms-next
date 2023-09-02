import Head from "next/head";
import React, { useMemo, useEffect } from "react";
import {useRouter} from 'next/router'
import { motion, useScroll } from "framer-motion";
import { Inter, Roboto, Poppins } from "next/font/google";
import Login from "@/src/component/Auth/Login";
import Dashboards from "./dashboards/Dashboards";
import { useAppSeletor } from "@/src/store/hooks";
import scss from "@/styles/Home.module.scss";
import Dashboardlayout from "./dashboards/DashboardLayout/layout";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  // const { token } = useAppSeletor((state) => state.loginSlice);
  const { scrollYProgress } = useScroll();

  return (
    <main className={scss.main}>
    <Login />
    </main>
  );
};
export default Home;
