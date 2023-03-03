import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import type { NextWebVitalsMetric } from "next/app";
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import { GoogleAdSense } from "nextjs-google-adsense";

import "the-new-css-reset/css/reset.css";
import "@/styles/globals.scss";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  event(metric.name, {
    category:
      metric.label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(
      metric.name === "CLS" ? metric.value * 1000 : metric.value
    ),
    label: metric.id,
    nonInteraction: true,
  });
}

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
        <GoogleAnalytics
          gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
          trackPageViews
        />
        <GoogleAdSense
          publisherId={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID as string}
        />

        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}
