import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import createEmotionCache from "../utility/createEmotionCache";
import darkThemeOptions from "../styles/theme/lighThemeOptions";
import "../styles/globals.css";
import "../src/component/reuse/styles.css"
import store from "@/src/store/store";
import { Provider } from "react-redux";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
  session: Session;
}

const clientSideEmotionCache = createEmotionCache();

const darkTheme = createTheme(darkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      {/* <SessionProvider session={props.session}> */}
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {/* <Component {...pageProps} /> */}
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
            </Provider>
        </ThemeProvider>
      {/* </SessionProvider> */}
    </CacheProvider>
  );
};

export default MyApp;
