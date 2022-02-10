import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import cache from "@utils/emotionCache";
import theme from "@utils/theme/theme";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { Fragment } from "react";
import "@styles/global.css"
import Layout from "@components/layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

nProgress.configure({ showSpinner: false });

const App = (props: any) => {
  const { Component, emotionCache = cache, pageProps } = props;
  const DocLayout = Component?.Layout || Layout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Syed Mahbub&apos;s blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DocLayout>
          <Component {...pageProps} />
        </DocLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
