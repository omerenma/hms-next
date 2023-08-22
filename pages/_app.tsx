import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {  CssBaseline, createTheme,useTheme , ThemeProvider, Box, } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import "@/styles/myglobals.css"
import "../src/component/reuse/styles.css";
import store from "@/src/store/store";
import { Provider } from "react-redux";
import darkTheme from "@/styles/theme/darkTheme";
import ligthTheme from "@/styles/theme/lighTheme";
import Dashboardlayout from "./dashboards/DashboardLayout/layout";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
  // session: Session;
}

const clientSideEmotionCache = createEmotionCache();


const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);

  

  return (
     
    <CacheProvider value={emotionCache}>
      {/* <Component {...pageProps} /> */}
      <Provider store={store}>

      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}     
      </Provider>
    </CacheProvider>
  );
};

export default MyApp;

