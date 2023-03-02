import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import { GoogleAdSense } from "nextjs-google-adsense";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "the-new-css-reset/css/reset.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  // hiding loader screen
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader") as HTMLElement;
      if (loader) {
        setTimeout(() => {
          loader.style.visibility = "hidden";
          loader.style.opacity = "0";
        }, 500);
      }
    }
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ParallaxProvider>
        <GoogleAdSense publisherId={"env.local"} />
        <GoogleAnalytics trackPageViews />

        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
