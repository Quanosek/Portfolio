import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Analytics from "@/components/analytics";
import Header from "@/components/header";

import "the-new-css-reset/css/reset.css";
import "@/styles/globals.scss";

import localFont from "next/font/local";
const Nexa = localFont({
  src: [
    {
      path: "../fonts/nexa_light.woff2",
      weight: "200",
    },
    {
      path: "../fonts/nexa_regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/nexa_bold.woff2",
      weight: "800",
    },
  ],

  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moje portfolio / klalo.pl",
  description:
    "Moja strona internetowa, na której prezentuję wszystkie informacje o sobie i swoich różnych projektach.",

  icons: {
    icon: ["/favicons/favicon.ico", "/assets/home/rocket.svg"],
    apple: "/favicons/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      {process.env.NODE_ENV !== "development" && <Analytics />}

      <body className={Nexa.className}>
        <header>
          <Header />
        </header>

        <section>
          <main>{children}</main>
        </section>

        <footer>
          <section>
            <p>
              Jakub Kłało &#169; {new Date().getFullYear()} klalo.pl. Wszelkie
              prawa zastrzeżone.
            </p>
          </section>
        </footer>
      </body>
    </html>
  );
}
